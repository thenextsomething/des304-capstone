'use strict';

// ── State ────────────────────────────────────────────────────────────────────
let gameState  = 'title';
let leanScore  = 0;
let currentDay = null;

let activeChoices = null;
let choiceResolve = null;

// ── Story maps ────────────────────────────────────────────────────────────────

const dayMap = {
  concept: 'day1', concept_a: 'day1', concept_b: 'day1',
  location: 'day1', location_a: 'day1', location_b: 'day1',
  shot: 'day2', shot_a: 'day2', shot_b: 'day2',
  unplanned: 'day2', unplanned_a: 'day2', unplanned_b: 'day2',
  ending_choice: 'day3'
};

const dayLabels = {
  day1: 'Day 1',
  day2: 'Day 2 — On Set',
  day3: 'Day 3 — The Edit'
};

const sceneMap = {};
['day1', 'day2', 'day3'].forEach(dayKey => {
  storyData[dayKey].scenes.forEach(scene => { sceneMap[scene.id] = scene; });
});

// ── Corruption ────────────────────────────────────────────────────────────────

const corruptionLevels = [
  { bg: '#0a0a0a', bubble: '#1a1a1a', border: 'transparent', scan: 0,    vig: 0   },
  { bg: '#09090e', bubble: '#191924', border: 'transparent', scan: 0,    vig: 0   },
  { bg: '#08081a', bubble: '#16162e', border: '#1a1a3a',     scan: 0.02, vig: 0   },
  { bg: '#070710', bubble: '#131328', border: '#2a1a3a',     scan: 0.04, vig: 0.2 },
  { bg: '#060612', bubble: '#100f26', border: '#3a1a4a',     scan: 0.06, vig: 0.4 },
  { bg: '#050510', bubble: '#0e0d24', border: '#4a1a5a',     scan: 0.08, vig: 0.6 },
];

const barColors = ['#1a4a4a', '#24404a', '#2e364a', '#372d4a', '#41234a', '#4a1a4a'];

function updateCorruption(score) {
  const lvl = corruptionLevels[Math.min(score, 5)];
  const s = document.documentElement.style;
  s.setProperty('--bg',                 lvl.bg);
  s.setProperty('--muse-bubble',        lvl.bubble);
  s.setProperty('--muse-bubble-border', lvl.border);
  s.setProperty('--scanlines-opacity',  lvl.scan);
  s.setProperty('--vignette-opacity',   lvl.vig);
  corruptionFill.style.width      = (score / 5 * 100) + '%';
  corruptionFill.style.background = barColors[Math.min(score, 5)];
}

// ── DOM refs (assigned in DOMContentLoaded) ───────────────────────────────────
let chatWindow, chatInput, inputArea, choicesContainer, corruptionFill;

// ── Helpers ───────────────────────────────────────────────────────────────────

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function scrollToBottom() { chatWindow.scrollTop = chatWindow.scrollHeight; }


// ── Messages ──────────────────────────────────────────────────────────────────

function addDayDivider(label) {
  const el = document.createElement('div');
  el.className = 'day-divider';
  el.innerHTML = `<span>${label}</span>`;
  chatWindow.appendChild(el);
  scrollToBottom();
}

function showTypingIndicator() {
  const el = document.createElement('div');
  el.className = 'message-wrapper muse-wrapper';
  el.id = 'typing-indicator';
  el.innerHTML = `
    <div class="message-label">MUSE</div>
    <div class="message-bubble muse-bubble typing-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>`;
  chatWindow.appendChild(el);
  scrollToBottom();
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function addMuseMessage(text) {
  showTypingIndicator();
  await sleep(2000);
  removeTypingIndicator();
  const el = document.createElement('div');
  el.className = 'message-wrapper muse-wrapper';
  el.innerHTML = `
    <div class="message-label">MUSE</div>
    <div class="message-bubble muse-bubble">${text}</div>`;
  chatWindow.appendChild(el);
  scrollToBottom();
}

async function addPlayerMessage(text) {
  await sleep(400);
  const el = document.createElement('div');
  el.className = 'message-wrapper player-wrapper';
  el.innerHTML = `<div class="message-bubble player-bubble">${text}</div>`;
  chatWindow.appendChild(el);
  scrollToBottom();
}

async function processMessages(messages) {
  for (let i = 0; i < messages.length; i++) {
    const msg  = messages[i];
    const next = messages[i + 1];
    if (msg.speaker === 'muse') {
      await addMuseMessage(msg.text);
    } else {
      await addPlayerMessage(msg.text);
    }
    if (next) {
      if (next.speaker === 'muse' && msg.speaker === 'muse') {
        await sleep(800);   // MUSE → MUSE gap
      } else if (next.speaker === 'muse' && msg.speaker === 'player') {
        await sleep(1000);  // player → MUSE gap
      }
    }
  }
}

// ── Choices ───────────────────────────────────────────────────────────────────

function onChoiceKey(e) {
  if (e.key === '1') { e.preventDefault(); submitChoice(0); }
  else if (e.key === '2' && activeChoices && activeChoices.length >= 2) {
    e.preventDefault();
    submitChoice(1);
  }
}

function showChoiceButtons(choices) {
  choicesContainer.innerHTML = '';
  choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.text;
    btn.addEventListener('click', () => submitChoice(i));
    choicesContainer.appendChild(btn);
  });
  document.addEventListener('keydown', onChoiceKey);
}

function clearChoiceButtons() {
  choicesContainer.innerHTML = '';
  document.removeEventListener('keydown', onChoiceKey);
  activeChoices = null;
  choiceResolve = null;
}

function submitChoice(idx) {
  if (!activeChoices || !choiceResolve) return;
  if (idx >= activeChoices.length) return;
  const choice  = activeChoices[idx];
  const resolve = choiceResolve;
  clearChoiceButtons();
  gameState = 'scene';
  resolve(choice);
}

function waitForChoice(choices) {
  return new Promise(resolve => {
    activeChoices = choices;
    choiceResolve = resolve;
    gameState = 'choices';
    showChoiceButtons(choices);
  });
}

// ── Ending ────────────────────────────────────────────────────────────────────

function getEnding() {
  for (const key of Object.keys(storyData.endings)) {
    const e = storyData.endings[key];
    if (leanScore >= e.score_range[0] && leanScore <= e.score_range[1]) return e;
  }
  return null;
}

async function runEnding() {
  gameState = 'done';
  const ending = getEnding();
  if (!ending) return;
  await processMessages(ending.pre_messages);
  await sleep(900);
  document.getElementById('end-title').textContent   = ending.title;
  document.getElementById('end-message').textContent = ending.end_card;
  document.getElementById('end-score').textContent   =
    `You trusted MUSE ${leanScore} out of 5 times.`;
  document.getElementById('end-card').classList.remove('hidden');
}

// ── Scene runner ──────────────────────────────────────────────────────────────

async function handleChoice(choice) {
  if (choice.lean) {
    leanScore++;
    updateCorruption(leanScore);
  }
  if (choice.response) {
    await addPlayerMessage(choice.response.text);
    await sleep(1000);  // player → MUSE gap after choice echo
  }
  if (choice.next === 'endings') {
    await runEnding();
  } else {
    await runScene(choice.next);
  }
}

async function runScene(sceneId) {
  const sceneDay = dayMap[sceneId];
  if (sceneDay && sceneDay !== currentDay) {
    addDayDivider(dayLabels[sceneDay]);
    currentDay = sceneDay;
  }
  const scene = sceneMap[sceneId];
  if (!scene) return;
  gameState = 'scene';
  await processMessages(scene.messages);
  if (scene.choices) {
    await sleep(1200);  // gap before choices appear
    const choice = await waitForChoice(scene.choices);
    await handleChoice(choice);
  } else if (scene.auto_next) {
    await sleep(2500);
    await runScene(scene.auto_next);
  }
}

// ── Opening sequence ──────────────────────────────────────────────────────────

async function startOpening() {
  gameState = 'scene';
  inputArea.style.display = 'none';
  await addPlayerMessage("I'm working on a short film and I'm kind of stuck. Can you help me develop the concept?");
  await sleep(1000);
  await runScene('concept');
}

// ── Title screen ──────────────────────────────────────────────────────────────

function initTitleScreen() {
  const titleScreen = document.getElementById('title-screen');
  let dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    document.removeEventListener('keydown', dismiss);
    titleScreen.removeEventListener('click', dismiss);
    gameState = 'transitioning';
    titleScreen.classList.add('fade-out');
    setTimeout(() => {
      titleScreen.style.display = 'none';
      startOpening();
    }, 700);
  }

  document.addEventListener('keydown', dismiss);
  titleScreen.addEventListener('click', dismiss);
}

// ── Boot ──────────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  chatWindow       = document.getElementById('chat-window');
  chatInput        = document.getElementById('chat-input');
  inputArea        = document.getElementById('input-area');
  choicesContainer = document.getElementById('choices-container');
  corruptionFill   = document.getElementById('corruption-fill');
  initTitleScreen();
});
