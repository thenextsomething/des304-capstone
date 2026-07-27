# DES304 Capstone: Compass

This repo holds everything for Polo Umali's DES304 capstone project at the University of Auckland. It exists so any Claude session (claude.ai via GitHub integration, or Claude Code) can read it cold and have full project context. Start here, then read `concept-notes/COMPASS_CONCEPT_AND_STATUS.md` for the definitive concept reference.

## Who, course, brief, lens

- **Polo Umali**, final-year Bachelor of Design student, University of Auckland. Also runs The Next Something (TNS), a cinematic media studio for startup founders and venture-backed companies. The capstone direction is a deepening of that professional filmmaking practice, not a stretch away from it.
- **Course**: DES304, the capstone project course, Semester 2 2026. Preceded by DES303 (Design Research Practice, Semester 1 2026), where the concept was developed and confirmed.
- **Brief**: Emerging Technologies stream. The brief asks how emerging technologies might transform making practices and understandings of creativity in Aotearoa.
- **Lens**: **Create**. The response is speculative design work, made artefacts rather than analysis.

## Current status of the concept directions

**Primary direction (confirmed through two DES303 crits and the final presentation):** a speculative product launch film for **Compass**, a fictional wearable AI device built for creatives, set in a near-future Aotearoa. The film is the deliverable; the product is fictional. Tone: Apple Watch ad. Cinematic, minimal, emotional. The core distinction at the heart of the project: **Compass does not create, it only assists.**

Settled: concept, product name, tone and reference language, UI design language (piano scenario is the clearest expression), industrial design direction (closest to Brilliant Labs Frame), the prompt intermediary workflow for AI generation, and the narrative positioning (amplify the maker, never replace them).

**Central unsolved problem: compositing.** Making the Compass display look convincing on camera has been the technical wall since Week 7. Full AI generation failed, AI compositing failed, a Python/OpenCV script got partway. After Effects is installed and is the most likely path forward; learning it properly is a DES304 goal.

**Secondary direction:** the **MUSE interactive game**, a browser-based narrative game (Emily is Away style) set in a fake chat interface in Auckland 2035, built in Claude Code. V2 exists with three days of scenes, a leanScore system, five endings and a UI corruption mechanic. It stays in development as the interactive counterpart to the film.

**Open for DES304:** world-building (year, state of Aotearoa, why Compass exists), script and final film structure, whether to build a physical prop, the "bad camera test" experiment, sound direction (Suno failed, still open), and a third alternative direction for the Week 2 capstone presentation (the film and the game are two; a third is not yet identified). Planned early move: coffee or call with Leo Baldwin, who heads the Emerging Technologies stream.

## Key constraint

**No VR/AR tools are required.** The wearable exists only inside the film's fiction. The project is made with filmmaking, compositing and AI generation tools, never with actual VR/AR hardware or software. Related and foundational: never confuse the AI technology depicted inside the work (Compass) with the AI tools used to make the work (Claude, Claude Code, Higgsfield, Kling, Gemini, After Effects).

## Key language in use

- **Speculative design** (Dunne & Raby, 2013): the work does not predict or sell a future, it opens a space where the audience can ask whether they want it.
- **Diegetic prototype** (Kirby, 2010): an artefact that looks and feels like it genuinely came from a future world. The launch film is one.
- **HMW question**: "How might we use speculative design to help everyday creators in Aotearoa feel what it means to work alongside AI, rather than be replaced by it?"
- Citations in APA 7th edition. Reflective structure is the Integrated Reflective Cycle (IRC).

Hard rules for any work on this project (including: never use em dashes in any writing) live in `concept-notes/COMPASS_CONCEPT_AND_STATUS.md`, Section 12. Follow them.

## Repo index

| Folder | Contents |
|---|---|
| `brief/` | Official course PDFs: the Emerging Technologies stream brief, the DES300 Capstone Introduction, the first lecture (2026.DES304.1L), all A1/A2/A3 assignment and workshop briefs, and the Ideation Planning guide |
| `blog/` | The full DES303 reflective blog archive scraped from poloumali.com (weeks 1 to 10 plus one extra post), the Week 10 PDF export with images, and the Design Research Journey review |
| `research/` | References and exemplars: Livi Lee blog examples, and `sprout-exemplar/` (Selena Wu's complete Sprout capstone deliverable set, a worked example of what a finished capstone looks like) |
| `concept-notes/` | The thinking. `COMPASS_CONCEPT_AND_STATUS.md` (definitive concept reference), `DES303_FULL_COURSE_JOURNEY.md` (how it got here), `DES304-JOURNAL.md` (living semester log, append as you go), `world-building.md` (open world decisions for the film), `third-direction-candidates.md` (scratchpad for the Week 2 third direction) |
| `muse-game/` | Source of the MUSE interactive game V2 (secondary artefact): index.html, style.css, story.js, game.js |
| `assets/` | Supporting images and screenshots (empty so far) |
| `submissions/` | Submitted work: the DES303 final presentation (pptx and PDF export) and its script/speaker notes |

_Updated 2026-07-27_
