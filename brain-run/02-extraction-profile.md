# Extraction profile - Compass (Create Labs) launch film

_Stage 1 · Step 2 of the TNS pipeline, run against schema v1.0
(`~/tns-systems/stage-1-story/2-extraction/profile-template.md`). Run
2026-09-16 as a blind pass: the existing film script was deliberately not
read, so nothing below is derived from it._

## What was adapted, and why

The step assumes a paying client and a discovery-call transcript. Neither
exists. Four adaptations, named rather than skipped:

1. **Documents stand in for calls.** The step's grounding rule 1 (cite or
   flag) is unchanged. Sources are enumerated as `d1..d6` and board frames as
   `b1..b5`, cited the way `(c1)` would be.
2. **Client and director are the same person.** Grounding rule 3 (separate
   the voices) cannot run on speaker labels, so it runs on decision status
   instead. A thing the record marks **Decided** or **pinned** is treated as
   client truth. A thing the record marks open, proposed, "still to resolve"
   or "my reading rather than a ruling" goes to 9d as a director steer and
   never grounds a field above.
3. **The product is fictional, so the status tags change meaning.** They are
   redefined in block 4 and in step 3's file. `[shipped]` means ruled and
   pinned in the product definition; it does not mean anything exists.
4. **There are two viewers: one inside the world, one in the room.** Block 1
   names one primary per VG-CORE-01 and records the second as a lens, not a
   second primary. That call needs Polo's confirmation at step 4 (see 9c).

---

## 0. Provenance

| Field | Entry |
|---|---|
| Client | Compass, by Create Labs (fictional, Auckland, launching NZ 2028). Real-world project: Polo Umali's DES304 capstone, University of Auckland, Emerging Technologies stream |
| Sources | d1: `concept-notes/compass-product-definition.md` (written 12 Sep 2026, interface and layout rewritten 16 Sep). d2: `concept-notes/world-building.md`. d3: `research/references.md` (link provenance checked 15 Sep). d4: `deliverables/README.md` + the four A3 briefs. d5: `concept-notes/COMPASS_CONCEPT_AND_STATUS.md` (DES303 transfer, July 2026). d6: `concept-notes/DES304-JOURNAL.md` |
| Board frames read | b1 "Who this is for, and who it lands on". b2 "One conversation, and the four things it changed". b3 "Why this matters in Aotearoa". b4 "Precedent analysis". b5 "The hardware landscape, and what Compass is defined against" + "Where I'm standing, and how the film bridges it" (b6) + "Three people, three interfaces, and why" (b7). Board: `https://miro.com/app/board/uXjVH2uB8U4=/` |
| Deliberately not read | `concept-notes/film-script-v1.md`, `experiments/higgsfield-prompts/`, and the board frame "Film structure · 82 seconds, three wearers, intercut". The 40-second draft structure inside d5 (lines 75-82) was also skipped |
| Extracted by / date | Claude, Stage 1 Step 2, 2026-09-16 |
| Schema version | v1.0 |

**One contamination to declare.** Frame b2 cites script shot numbers in its
own text ("Shot 10 in the script", "Shot 9, and it's the first interface beat
in the whole film", "Shot 14", and b7 adds "shot 16 is the second most
important beat"). So this run knows that the existing script has at least 16
shots and roughly where four interface beats fall. It does not know what any
of them say or look like. Nothing below is built on that.

---

## 1. Company and video profile

- **What it is, in their words**
  > "Compass is a pair of AI glasses built for the moment you are making something." (d1)
  > "Compass does not create. It only assists." (d1, the one rule)
  > "Compass does not create. You do." (d1, the landing-page line)

- **The before / status quo** - a creator in Aotearoa in 2028 works faster
  than they did two years ago and cannot tell whether that is good news. They
  already reach for these tools every week and still expect them to take the
  work. Full evidence in block 3.
  > "they're already using them and still don't really know which way it's going to go. That contradiction is what the film is built on." (b3)

- **Stage and traction** - two readings, both true and both needed.
  - *In world:* Create Labs is pre-launch. Aotearoa is the deliberate first
    market before the United States, 2028 (d1, d2).
  - *In the room:* the project is at week 8 of 12. The world, the product,
    the three wearers and the film's own rules are all decided and pinned
    (d1, d2, 12 Sep). The interface language was rewritten 16 Sep. The
    compositing method is still unproven on a real shot (d6, 12 Sep) and has
    been "the central unsolved problem" since week 7 of the previous course
    (d5).

- **The viewer** - one named person, per VG-CORE-01.
  > **Primary: a beginner creator in Aotearoa who already uses AI weekly and is quietly afraid of it.** Named in the record three times over as the musician, the photographer and the illustrator: "People who make things regularly without it being all of their income" (b1).

  The card selector (VG-CORE-03) has no card for this person. The taxonomy
  industry slug nearest to Compass is `other`, and `other` x `launch` routes
  to "nearest card + watchlist flag". The nearest is the watchlist candidate
  `consumer-prosumer`, which has never been earned. So this profile runs
  without a viewer card and says so - see 9c.

- **Second audience and the dual-audience call** - the marker, the tutors and
  the exhibition visitor. They are a **lens, not a second primary**
  (VG-CORE-01's WHEN NOT). The board already puts them outside the rings on
  purpose:
  > "The people who meet it in the room (off the rings on purpose) ... Markers, tutors, other students and whoever wanders through the exhibition, who get about ninety seconds and a table. They'd engage because they're the only stakeholders who actually encounter the project rather than the product." (b1)

  The weighting maps cleanly onto CP-LAUNCH-03: one film, two reads, the
  in-world creator weighted first, the marker served by the argument being
  legible rather than by a segment aimed at them. **This weighting is a
  director call and needs Polo's yes** (9c, fork 1).

- **Awareness** - `problem-aware`, and quoted rather than defaulted
  (VG-AWARE-02).
  > "65% of New Zealand creators who use digital tools have used generative AI in their creative process" and "59% of entertainment workers expect AI to eliminate more jobs like theirs than it creates" (b3)

  The viewer feels the problem and does not know a solution exists, which is
  the ladder's definition of `problem-aware` exactly. The launch default
  agrees, but the evidence is doing the work here, not the default.

  Second axis, VG-AWARE-04 (category positioning): **the slot exists and is
  crowded.** AI glasses are a real 2026 category with real products in the
  viewer's feed. So the bare claim is not available and the open has to
  differentiate (Doubt 2). This matters: it rules out "here is a new pair of
  AI glasses" as an opening move.

- **The skeptic's eye-rolls (top 3), each with the real answer**

  1. **"This is a music game with a face on."** Notes falling toward keys is
     the Guitar Hero mechanic, and a viewer will say so out loud.
     *Real answer, already on the record:*
     > "what keeps it assistance is that she presses every key herself and none of it starts until she is already playing" (b7)

  2. **"You said calm and quiet, and that lens is full of panels."** The
     16 September change is a real exposure, and the record admits it:
     > "it is worth being honest that the change moves Compass toward the kind of dense panelled readout the old argument was defined against rather than away from it" (d1)
     *Real answer, and it is not written yet:* the argument has to move from
     how little Compass draws to **when it appears and what it refuses to
     do.** d1 says so and says there is no replacement argument yet. This is
     the single biggest unanswered objection in the project.

  3. **"Every launch film shows a device that never fails."** The project's
     own precedent analysis found this and named it:
     > "Nothing fails inside the film. Every sell film here is shot first person and nothing in it ever fails, which is the form Apple set in 1987" (b4)
     *Real answer:* the form is kept on purpose, because breaking it turns
     the diegetic prototype into an essay:
     > "if the film read as an obvious critique from the first frame it would stop being a diegetic prototype and start being an essay" (b4)

- **The moment** - the film is the graded capstone deliverable and the
  centrepiece of a curated public exhibition. The one action it should cause,
  in the room, is that a visitor walks from the screen to the table and opens
  the live landing page on their own phone. Hard dates (d4): posters 15 Oct
  (needs finished hero frames, so the film's visual material cannot wait),
  oral presentation 21 Oct, visual project report 22 Oct 9am, prototype
  29 Oct, exhibition week 14 (2 to 7 Nov). Shoot week is planned for 21 to
  25 Sep (board week 8 frame).

- **Archetype hypothesis** - `skit` is the closest slug in
  `~/tns-creative-brain/video-archetypes.md`: a shoot with cast, nobody looks
  at camera, the product is woven in and never explained. Routed on: three
  actors in built scenes, no one to camera, no founder, dialogue about their
  day rather than about the product (d2). **It is a poor fit in one specific
  way and that is a finding, not a detail:** `skit` means "a short film,
  characters and a story", and this film has been ruled to have no struggle
  and no failure beat, so it has no story in the archetype's sense. The
  register Polo actually named is the Apple ad, which is the `openai-apple`
  archetype's territory, but `openai-apple` never shows a UI and this film is
  almost entirely UI. See 9c, fork 4. Hypothesis only; the archetype is
  chosen at step 4.

## 2. Story core

- **Origin, verbatim** - the position the project is arguing from came out of
  San Francisco and the record is unusually honest about it:
  > "I make films for a living and I spend most of my time around founders and builders who are genuinely excited about AI, and San Francisco pushed that further because the people I met there were either building the tools or quietly worried about them and often both. That isn't where the average working creative in New Zealand sits" (b6)
  > "The awkward part isn't that I'm optimistic, it's that I sit closest to the group the brief isn't asking about and furthest from the people it is." (b6)

  And the moment that actually broke it open, which is the same document's
  hardest sentence:
  > "my optimism isn't neutral either, because the same tools have already made my studio faster to run. I make my money from creative work and I pay editors who do too, so the thing I'm hopeful about is also the thing that could take their hours, and I haven't got that resolved." (b6)

- **The villain** - FP-14 wants root, relatable, singular and real.

  **The replacement default: the assumption, built into the products actually
  being shipped, that the useful thing for a machine to do is make the thing
  for you.**

  - *Root, not symptom:* the fear in block 3 is the rash. The design
    decision inside the products is the bacteria.
  - *Relatable:* every creator has opened a tool that offered to finish the
    work.
  - *Singular:* one enemy, one sentence.
  - *Real, not manufactured:* the precedent set is full of it, and the board
    names the people who hold it.
    > "The technologists deciding how these tools land here ... most of them working to an overseas default because that's where adoption starts ... they're the only group here with the power to change what gets built." (b1)
    > "Soul Machines ... its whole pitch is a face that behaves like a person, which is the end of the plot Compass argues against." (b4)

  **The problem with it, stated now rather than at step 6:** the film has been
  ruled to contain no struggle and no failure beat (d2). So the villain never
  appears on screen. FP-14 says the villain is the spine and not a seasoning,
  and FP-21 says the viewer must feel the imbalance before the resolution
  means anything. A film with a villain that is never shown is running
  against both. This is the central creative tension of the project and it
  goes to step 4 as a fork, not to step 2 as a verdict (FP-01: extraction
  records, it does not judge).

- **The turn / why now** - 2028 is close enough to be credible and early
  enough to still be decidable.
  > "2028 wins because it reads as the start of the thing rather than the aftermath." (d2)
  > "Nothing is fully automated ... What has changed is speed ... none of that is necessarily *better*, because the story still matters and the human part of the creative process always will. It is just being done a lot faster." (d2)

- **The stakes** - what winning unlocks is that a person keeps the part of
  the work that was theirs. What staying in the before costs is that the
  record of how they make things stops being theirs.
  > "the thing worth protecting here is the record of how somebody makes their work, because that record is more personal than the finished piece is ... Create Labs never sees how you work." (b6)
  > "the fear is fully here. People are potentially losing jobs to it, but it is not major yet" (d2)

- **The one feeling** - candidates from the record: relief; ownership; being
  accompanied; being unhurried. The pick, and it is a compound of two lines
  already written:
  > "not by replacing the maker, but by changing what it feels like to make" (d5)
  > "you never have to be alone in the process if you do not want to be" (d5)

  **The one feeling: "I made that, and I wasn't on my own."** Ownership
  without loneliness. Every other candidate is a part of this one.

## 3. Painpoints, ranked

1. **Already using it, still not knowing which way it goes.** The
   contradiction, not the fear.
   > "The fear and the use aren't separate camps of people, because the same APRA AMCOS survey that found 82 per cent concerned about losing their living also found 38 per cent already using AI in their work, and here 65 per cent of creators who use digital tools have reached for it too." (b3)
   *Rank evidence, quoted directly:* "That contradiction is what the film is
   built on." (b3) The record ranks it first itself.

2. **The bottom rung is being taken away.** Not the whole job, the way in.
   > "a Massey pilot study reckons AI is quietly absorbing the entry-level jobs people use to get started" (b3)
   *Rank evidence:* it is the one pain with a named New Zealand source behind
   it, and all three wearers are beginners (b7), which is the film choosing
   this pain without saying so.

3. **Being stuck, alone, in the middle of making something.**
   > "The device notices when you are stuck and offers something when it might help. It prompts, it does not perform." (d5)
   *Rank evidence:* third because it is the pain Compass actually solves
   on screen, but it is the smallest of the three and the record never argues
   it is urgent.

- **The anti-painpoint (the hill Polo will NOT die on): the argument about
  whether AI replaces creative workers.** The film refuses to litigate it.
  > "the film still isn't arguing a position on AI, because it's trying to create an experience and leave the question open, which would hopefully still work for someone who doesn't share my optimism" (b6)
  > "speculative design does not predict or sell a future, it opens a space where the audience can ask whether they want it" (d5, Dunne and Raby)

  **Guardrail for steps 4 to 7:** never write a beat that wins the replacement
  argument. The film may state the product's position; it may not defeat the
  opposing one.

## 4. Features / hero moments, ranked

_Status tags redefined for a fictional product. `[shipped]` = ruled and
pinned in `compass-product-definition.md`, so the film may show it working.
`[in-production]` = decided in principle, detail unresolved. `[roadmap]` =
floated, never ruled. `[unclear]` = the record contradicts itself. Ranked by
video-worthiness, not by product importance._

| # | Moment | Status as heard | Shootable / compositable? | The "oh" evidence |
|---|---|---|---|---|
| 1 | **The empty lens.** Glasses on, nothing there. No home screen, no clock, no notification | `[shipped]` | yes, and it is the cheapest shot in the film - it is a shot of nothing | "The empty middle state is the feature, not the absence of one. Every other product in this category fills your vision the moment you put it on. Compass waits for you." (d1) |
| 2 | **The guide lines that go the moment the pencil stops** (illustrator, signal blue) | `[shipped]` | yes, hardest to time, easiest to composite (flat page, static camera) | "her interface is still defined by when it leaves ... which is the one rule stated from the other direction" (b7) |
| 3 | **The falling-note lane and the key face lighting at the moment to press** (musician, signal blue) | `[shipped]` | **the hardest shot in the film** - "The lane and the keys sit on a real object, which nothing else in the film does" (b7) | "this is still the hardest shot to composite and the one that proves Compass is reading the work rather than the person" (b7) |
| 4 | **Four panels around an empty centre** (photographer: reference and moodboard top left, shot checklist top right, last shot right with a signal blue edge, settings left) | `[shipped]` as of 16 Sep | yes | "It's the proof that a busy lens can still leave the centre of vision completely empty, and if the argument survives four elements at once it survives anything." (b7) |
| 5 | **Everything on the device, nothing kept.** Create Labs never sees how you work | `[shipped]` | **no.** It is a claim, not an image. It has no shot and needs one or needs to live in the press kit | "That rule came out of the principle rather than being written afterwards to suit it." (b6) - it carries the Te Tiriti section of the report |
| 6 | **The reference layer in full colour**, the one exception to warm white | `[shipped]` | yes | "a reference photograph is no use in the wrong colours" (d1) |
| 7 | **Compass never speaks** | `[shipped]` as a rule | invisible by definition | the never-do list (d1); note the audible-metronome question in 9a |
| 8 | **The light reading and its small directional diagram** | `[unclear]` - displaced by the settings panel on 16 Sep, fate undecided | yes if it survives | "the one thing it asked for that the script has no shot for" (b2) - it is the only one of Navia's four requests without a home |
| 9 | **The timing pulse felt through the temple** | **retired 16 Sep** | n/a | "the timing pulse felt through the temple is gone as of 16 September, which leaves the argument against a heads-up display without the single feature that used to carry it" (b7) |

Every status tag here also lands in 9a.

## 5. Proof and specifics

- **The killer numbers** `[hard]`, each with its real base:
  - 65% of New Zealand creators who use digital tools have used generative
    AI in their creative process. Verian for Manatū Taonga, n = 2,000 New
    Zealand adults, Sept to Oct 2025. The 65% is a subgroup of that sample,
    not 65% of 2,000 (b3, d3).
  - 59% of entertainment workers expect AI to eliminate more jobs like theirs
    than it creates, against 36% in all other industries. **Los Angeles
    County, not the United States.** USC Dornsife LABarometer, n = 1,280,
    Feb to May 2026 (b3, d3).
  - 40 of 53 Māori music creators surveyed said AI could lead to cultural
    appropriation or misuse of cultural properties including taonga puoro.
    APRA AMCOS and Goldmedia, Aug 2024, via Taiuru and Associates (b3, d3).
  - 82% of APRA AMCOS members concerned that AI use in music could lead to
    creators no longer being able to make a living from their work; 38%
    already using AI. Sample is Australia, New Zealand and members living
    overseas (d3).
  - Median income from creative work alone: **$19,500**. Creative New Zealand
    and NZ On Air, 2023 (d3).
  - AI Forum, Aug 2025, n = 166 New Zealand business decision-makers: AI
    created new roles in 55% of organisations, 14% attributed job losses to
    it, and that second figure had doubled in six months (b3).

- **A real moment** `[soft]` - the Navia conversation, 28 July 2026. A
  photographer said what she would actually want on the lens, and all four
  things she asked for became real Compass features.
  > "This is the only real user input the project has, and it's one conversation with someone I know ... So it's doing a lot of work for its size, and the honest reading is that three more of these would be worth more than anything else I could spend a week on." (b2)

- **Founder proof** `[founder]` - Polo runs The Next Something, makes
  cinematic launch films for venture-backed companies professionally, and the
  launch-film form is his own trade rather than a genre he is borrowing (d5).
  This is the single strongest proof the project holds and it is currently
  used only as positionality, never as authority.

- **The one "oh" shot** `[hard]` - **the guide lines vanishing the instant
  the pencil stops.** It is the only moment in the film where the product's
  whole argument happens in under a second and no one has to say anything.

## 6. Verbatim gold (the bank)

- **Villain lines** - "the end of the plot Compass argues against" (b4) ·
  "most of them working to an overseas default because that's where adoption
  starts" (b1) · "A readout would be arguing that making something is a
  process to be monitored, and that is not the argument here." (b5)
- **Pain lines** - "they're already using them and still don't really know
  which way it's going to go" (b3) · "the threat feels immediate rather than
  speculative" (b6) · "the entry-level jobs people use to get started" (b3)
- **Objection lines** - "the change moves Compass toward the kind of dense
  panelled readout the old argument was defined against" (d1) · "Nothing
  fails inside the film" (b4)
- **Product lines** - "Compass does not create. It only assists." (d1) ·
  "Put Compass on and the lens is empty." (d1) · "It wakes, because you
  started." (d1) · "The empty middle state is the feature, not the absence of
  one." (d1) · "It's like using an agent without the human. It literally just
  won't work." (d2) · "Create Labs never sees how you work." (d1) · "Nothing
  in the centre of your vision. Ever." (d1)
- **Vision lines** - "not by replacing the maker, but by changing what it
  feels like to make" (d5) · "you never have to be alone in the process if
  you do not want to be" (d5) · "the first film in this lineage to use the
  launch form to argue for a machine that does less" (b4) · "It also happens
  to be exactly what a New Zealand company would build and what a San
  Francisco one probably would not." (d1)
- **Brand phrases** `[in-world]` - "Compass does not create. You do." ·
  "New Zealand first, 2028. Other markets to follow." · "Announced at
  launch." · "Your reference library only." (all d1)

## 7. Production reality

- **On camera** - three actors, cast to vary age, gender and background so
  the trio does not read as three versions of the same person. They will be
  real creatives but the film does not depend on it; they consent to
  appearing; nobody is quoted by name in the report (d2).
- **Shootable** - three static desk-and-hands setups, chosen for exactly this
  reason. The illustrator slot was picked partly because it "is the same
  static desk-and-hands setup as the piano, which is the easiest case for
  compositing" (b7). Against that: the film is 60 to 70 per cent point of
  view, and the journal's own caveat is that "point-of-view is the hardest
  case to track, not the easiest, so the compositing method still has to be
  proven on a real shot" (d6).
- **Assets held** - one pair of plain black mock glasses, one copy only.
  A digital piano, a camera, a sketchbook and a half-finished pencil sketch
  (cheap at any stage of progress, which is why the illustrator won the
  slot). After Effects, learned over the break. Higgsfield, Kling and Gemini
  for previs only. Licensed music from a library such as Envato.
  **Assets deliberately not held:** no fabricated form model, no resin print,
  no AR goggles build, no working prototype, no presence dial (all reversed
  12 Sep, d2, d6).
- **Budget** - roughly NZD 1,000 to 1,500 for the whole semester, with a
  stated preference for staying lean (d6).
- **Timeline** - shoot week 21 to 25 Sep. Posters 15 Oct and they need
  finished hero frames, so the visual material cannot wait for the film's own
  deadline. Presentation 21 Oct, report 22 Oct, prototype 29 Oct, exhibition
  2 to 7 Nov (d4, d6).
- **Scope line as heard** - 70 to 90 seconds, three wearers intercut, 60 to
  70 per cent point of view, opening scenes third person, actors speak about
  their day and not much of it, works muted with captions, no struggle beat,
  no price, licensed music, a small statistics passage, shot count decided at
  storyboard (d2). **Two things are explicitly unresolved and both were
  routed forward by the record itself: the ending and the hero frame.**
  A board frame asserts 82 seconds in its own title, which is inside the
  ruled band but is not the same as a locked number - see 9a.

## 8. Taste and guardrails

- **The dial**
  > "Quiet and understated. A creator in a normal session with the device on, the collaboration playing out naturally, letting that speak for itself rather than over-explaining what you are watching." (d5)
  > "Tone: everything works beautifully. No struggle, no failure beat. It is a product launch, not a drama." (d2)
  > "The register is an Apple-style ad." (d2)

- **The hill it will die on** - the one rule, and it is stated more firmly
  than anything else in the project:
  > "Not as a policy the company chose, and not as a safety setting that could be switched off. It is what the thing is." (d1)
  Second: the empty centre. "Nothing in the centre of your vision. Ever." (d1)

- **The anti-brief** - three things, all on the record:
  1. A film that reads as a critique from frame one. "it would stop being a
     diegetic prototype and start being an essay" (b4).
  2. A machine reporting to you. "A readout would be arguing that making
     something is a process to be monitored" (b5).
  3. A feature tour. The whole DES303 framing is that the device is "almost
     beside the point" (d5).

- **References loved** - the Apple Watch ad (the unlocking reference, week 9
  crit, d5) · the Astra GPT-6 launch video (named by Polo, d2) · Even
  Realities G2 as the closest existing object (b5) · Knowledge Navigator,
  1987, as the form's origin (b4) · Cluely as the lesson about presenting
  something as though it already exists (b4).
  **References hated / defined against** - Even Realities' interface register
  (b5) · Xreal One Pro as the boundary, "If Compass ever starts filling your
  vision it has drifted into this and stopped being the thing it says it is"
  (b5) · Brilliant Labs Halo, which "wants you to know it is a device.
  Compass wants the opposite" (b5) · Friend's launch film, "a film viewers
  called a horror movie" (b4).

- **Hard nos** - no AI-generated images in the posters, full stop, and hero
  shots must be real footage or captioned royalty-free stock (d4). No price
  on screen. No finished output on the lens. Compass never speaks. Nothing in
  the centre. No live fake social accounts, mockups only, because a live
  company page for a company that does not exist breaks the platform terms
  (d2). No formal interviews or public testing: informal chats with friends
  and family only, per the course research rules (b2).

- **Sign-off** - Polo decides. Leo Baldwin heads the stream and the tutors
  mark it. One conversation is still outstanding and is the most
  time-critical open item in the project: whether the film, the object or
  both count as the compulsory physical prototype, which the brief lists as
  "TBC with your stream coordinator" and which carries 15 marks with 7.5 of
  them for fabrication and craftsmanship (d4, d6).

- **Positioning stability** - **unstable in one specific place, and it was
  self-flagged.** The argument that Compass is defined against Even Realities'
  green monochrome dot-matrix readout was built entirely on the superseded
  sparse look. It does not survive the 16 September change, it has to be
  rewritten from scratch rather than tidied, there is no replacement yet, and
  it currently appears in three places: the product definition, the hardware
  frame on the board, and the report (d1). Everything else is settled.

## 9. Handoff - drafts for Step 3

### 9a. Product-truth draft (as heard)

_For a fictional product this is an internal-consistency draft, not a
shipped-versus-unbuilt draft. Step 3 carries it forward and explains the
change of job in full._

| Claim / element | Status as heard | Evidence | Risk if wrong |
|---|---|---|---|
| Compass does not create, cannot create even in principle | `[shipped]` | d1, d2, stated three ways | none - it is the spine |
| The lens is empty until you start | `[shipped]` | d1 three-states table | none |
| Nothing in the centre of vision, ever | `[shipped]` | d1 | the illustrator's guides sit over her page: is the page the centre when she looks down? See step 3 |
| The reference layer sits **top left** | `[shipped]` 16 Sep | d1, b7 | **b2 and b5 both still say bottom edge, and b5's convention-breaking argument depends on it** |
| Warm white #FAF4EA base | `[shipped]` | d1 | none |
| Signal blue #6E8FC7 for the one active thing | `[in-production]` - the value is "a proposal made on 16 September ... treat it as proposed rather than ruled" | d1 | previs and posters will bake in an unruled colour |
| Translucent glass panels, soft blur, thin light edges | `[shipped]` 16 Sep | d1, b7 | the "calm and quiet" argument has not been rewritten to match |
| Everything processed on device, nothing kept by default | `[shipped]` | d1, b6 | it has no shot in the film |
| Compass never speaks | `[shipped]` | d1 never-do list | the musician's metronome: visible only, or audible? |
| The light reading and directional diagram | `[unclear]` | d1 "treat it as open rather than cut" | Navia's fourth request has no home |
| The temple timing pulse | **retired 16 Sep** | b7 | it was the only feature carrying the not-a-heads-up-display argument |
| Display: "binocular waveguide, monochrome, full colour on the reference layer" | `[unclear]` | d1 spec table | a monochrome display cannot show full colour; the fact sheet is printed for the exhibition |
| 38 grams | `[shipped]` | d1 spec table | Even Realities G2 is 36 grams in 2025, so the 2028 product is heavier than the real one it is positioned against |
| One recognisable interface language across three intercut scenes vs the customisable-per-wearer rule | `[unclear]` | d2, "still to resolve" | unresolved since 12 Sep |
| Runtime 70 to 90 seconds | `[shipped]` | d2 | a board frame title asserts 82; the lock needs one number |

### 9b. Verified-facts draft (to confirm)

| Item | As held | Best reading | Needs a ruling? |
|---|---|---|---|
| Product and company | Compass, by Create Labs, Auckland | as written, and the resolving line "Compass does not create. You do." must actually appear somewhere a reader meets | yes - where the line lives |
| The 65% base | b3 says "Verian for Manatū Taonga, n = 2,000 NZ adults"; d3 cites only Manatū Taonga (2026) | the 65% is of creators who use digital tools, a subgroup, not of 2,000 adults; d3 does not name Verian | yes |
| The 59% geography | already corrected on b3 and d3 | Los Angeles County entertainment workers | already done, keep it |
| The APRA AMCOS wording | already corrected on b3 and d3 | "are concerned that the use of AI in music could lead to music creators no longer being able to make a living from their work" | already done, keep it |
| Creative NZ median | already corrected on b3 and d3 | $19,500 from creative work alone; $15,000 is Deaf and disabled artists, $16,500 is female creative professionals | already done, keep it |
| The 76% Māori music creators figure | attributed on b3 to APRA AMCOS and Goldmedia via Taiuru; d3 lists both as separate references | one source of record needed | yes |
| AI Forum n=166 | business decision-makers across all industries | not creative-industry data; must be described as such | yes |
| Humane "shut down inside fourteen months" | b4 | announced 9 Nov 2023, assets sold 18 Feb 2025 is ~15 months; from the April 2024 ship it is ~10 | yes |
| "Six weeks and US$60k" for Knowledge Navigator | b4 states it as fact | no source for it anywhere in d3 | yes |
| "the demo failed twice in front of the room" (Meta) | b4 | rests on Quartz, which d3 marks NEEDS BYLINE and has no official clip | yes |
| "New Yorkers wrote over Friend's subway posters within days" | b4 | rests on Fast Company, NEEDS BYLINE; "within days" is unsourced precision | yes |
| "Soul Machines came out of the University of Auckland in 2016" | b4 | d3 dates BabyX 2014 and does not date the company | yes |
| Seven citations marked NEEDS BYLINE | d3: The Spinoff plus six trade-press items | all taken from secondary reporting, none currently standable | yes |
| One citation marked NEEDS CHECK | d3: Apple Vision Pro newsroom date | confirm off the live page | yes |
| Spellings that will be printed or captioned | Aotearoa · Manatū Taonga · Te Tiriti · kaitiakitanga · whaanau · mahi tahi · hanga · huri hanga · taonga puoro · Tāmaki Makaurau · Even Realities · Brilliant Labs · Wētā Workshop · Keiichi Matsuda · Mark Sagar · APRA AMCOS · LABarometer · Dunne and Raby · Schon | macrons must survive the trip into Canva, After Effects and the print PDF | yes - check at export, not at draft |
| Colour values | #FAF4EA warm white, #6E8FC7 signal blue | blue is proposed, not ruled; both need a CMYK proof before 15 Oct | yes |

### 9c. Gaps and open questions

Routed forward rather than filled:

1. **Which viewer the film is concepted for** - the in-world creator or the
   marker in the room. Recommendation in block 1; needs Polo's yes at step 4.
2. **The villain never appears.** FP-14 and FP-21 both want the negative
   made real. The no-struggle ruling forbids it. Step 4 fork.
3. **The ending.** Recorded as unresolved, "a call to action for the product
   is the current guess" (d2).
4. **The hero frame.** Recorded as unresolved, "a point-of-view frame is the
   leading candidate" (d2). The posters need it by 15 Oct.
5. **The archetype.** `skit` is the closest slug and does not fit well; the
   named register belongs to `openai-apple`, which forbids showing the UI.
   There is no tone slug for the Apple-launch register: the brain names only
   `palantir` as a tone.
6. **No viewer card exists** for a beginner creator. `consumer-prosumer` is
   on the viewer guide's watchlist and has never been earned.
7. **The replacement argument for the Even Realities contrast** does not
   exist yet, and it is the answer to the second eye-roll.
8. **The physical prototype ruling** from the stream coordinator.
9. **Whether the running AI-use log (tool, prompt, date) actually exists.**
   The course requires it; the repo does not show it.
10. **The light reading** - Navia's only request with no home.

### 9d. Director's live steers `[director]`

Polo's own proposals, held separate from client truth because the record
marks them open rather than ruled. Useful input for step 4, never grounding a
field above:

- The ending as "a call to action for the product", current guess only (d2).
- The hero frame as a point-of-view frame, leading candidate only (d2).
- The signal blue value #6E8FC7, "a proposal made on 16 September when the
  previs prompts needed a number ... treat it as proposed rather than ruled"
  (d1).
- That the replacement argument for the Even Realities contrast "probably has
  to rest on when Compass appears and what it refuses to do rather than on how
  little it draws" (d1). This is a strong steer and step 4 takes it.
- The musician's beginner status: "the reasoning for it was never written
  down, so the line above is my reading of it rather than a ruling" (b7).
- Running a small survey of 30 to 60 New Zealand creators, "a call rather than
  a plan" (b3).

### 9e. DES303 hypotheses: confirmed / broken / untested

| Hypothesis carried in from DES303 (d5) | Verdict | Evidence |
|---|---|---|
| The film is a diegetic prototype in the Apple launch register | confirmed | d2, b4 |
| The UI is "persistent, never disappears" | **broken** | superseded by the empty idle state, 12 Sep (d2) |
| The UI is sparse warm-white marks, no panels, no borders | **broken** | superseded 16 Sep by translucent glass panels (d1) |
| Piano keys are "soft blue/white" | **broken** | superseded by the one-signal-blue rule (d1) |
| Compass is closest to Brilliant Labs Frame | **half-broken** | Even Realities G2 replaced Frame as the closest object; Halo is now the counter-example (b5) |
| Compass is defined against Even Realities' readout | **broken, and not yet replaced** | d1 flags it and says it needs rewriting from scratch |
| A physical appearance model has to be built | **broken** | reversed 12 Sep; one pair of plain black mock glasses instead, with a fake product stack replacing the object (d2, d6) |
| MUSE is the secondary artifact | **broken** | cut from the capstone entirely, 31 Jul (d6) |
| Compositing is the central unsolved problem | confirmed, still open | d6: the method "still has to be proven on a real shot" |
| Suggestions are "whispers, not instructions" | **untested against the current lens** | the illustrator now gets "corrections" called out on her drawing (d1) |

## 10. Story-triage verdict

- **Thin story, and thin on purpose.** FP-15's opening test is that conflict
  changes life: if nothing changes for anyone, it is not a story. In this film
  nothing changes for anyone, by ruling. There is no struggle, no failure and
  no obstacle. What the film has instead is an **argument** carried by a world.
  That is a real and legitimate route, and the brain has a name for it:
  CP-CONFLICT-03 routes a confirmed-thin story to the messaging spine or lets
  context carry the product, and FP-15's own qualification is that "a thin
  story told honestly with strong context still works".

- **It is confirmed thin, not assumed thin.** FP-15 refuses a thin verdict
  drawn from one pass. This one is drawn from the ruling that produced it
  ("everything works beautifully. No struggle, no failure beat. It is a
  product launch, not a drama", d2), so the mining step FP-15 demands has
  already happened and came back with a deliberate no.

- **The one truth that carries it (FP-23):** **Compass only wakes once you are
  already making something.** Every segment has to prove it, sharpen it or pay
  it off, and a segment that only decorates it gets cut. This is the test step
  4's big-idea lock has to survive.

- **Archetype route** - `skit` by elimination, with the caveats in block 1 and
  9c. The register is `openai-apple`'s and the brain has no slug for wearing
  it as a tone.

- **The one-line why, said to the director:** three people start making
  something and a machine finally has a reason to exist, so the film never has
  to argue about replacement because it simply shows a thing that cannot
  replace anyone.
