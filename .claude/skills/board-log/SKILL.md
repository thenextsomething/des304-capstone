---
name: board-log
description: Log what Polo is working on to the DES304 Miro board's current week frame, as writing plus reference images. Use whenever he describes what he is looking at, trying, deciding, or has been told (for example "I'm looking at the UI of some goggles", "I'm prototyping how the glasses would look", "the tutors said X"), or when he asks to put something on the board.
---

# Log to the capstone board

The board is the semester's proof of process. It is not marked itself, but the 40-mark visual project report is assembled out of it, so anything not captured here has to be reconstructed from memory in October. Bias toward logging.

**Board:** DES304 Polo Umali (Compass), `https://miro.com/app/board/uXjVH2uB8U4=/`

## Pick the frame

Work out today's date and drop the entry in that week's frame. Frames are 1100 wide by 800 tall.

| Frame | Dates | Widget id |
|---|---|---|
| Week 1 | 20-24 Jul | 3458764679505529643 |
| Week 2 | 27-31 Jul | 3458764679505529644 |
| Week 3 | 3-7 Aug | 3458764679505529645 |
| Week 4 | 10-14 Aug | 3458764679505529646 |
| Week 5 | 17-21 Aug | 3458764679505529647 |
| Week 6 | 24-28 Aug | 3458764679505529648 |
| Break | 31 Aug-11 Sep | 3458764679505529649 |
| Week 7 | 14-18 Sep | 3458764679505529650 |
| Week 8 | 21-25 Sep | 3458764679505529651 |
| Week 9 | 28 Sep-2 Oct | 3458764679505529652 |
| Week 10 | 5-9 Oct | 3458764679505529653 |
| Week 11 | 12-16 Oct | 3458764679505529654 |
| Week 12 | 19-23 Oct | 3458764679505529655 |
| Week 13 | 26-30 Oct | 3458764683599282775 |
| Week 14 | 2-7 Nov, ReDesign Showcase | 3458764683599282776 |
| Inbox | anytime | 3458764679518188263 |

Weeks 13 and 14 were added on 14 September 2026. **Correction to an earlier note in this file: the tools CAN create and resize frames.** Use `canvas_create_from_svg` with a `<g data-frame="Title">` wrapping a `<rect data-type="frame">`. To resize an existing frame, send `canvas_update_from_svg` with the frame's `data-miro-id`, its `transform`, AND a non-empty `data-frame` on the g plus the background rect's width and height. Leaving `data-frame` off makes the tool treat it as a plain group and silently skip the change.

Two other things learned the same day. A doc's rendered height is at least 1105px, so a frame holding a full week's entry needs to be about 1266 tall rather than the default 800. And a newly created frame can get auto-placed somewhere else entirely by collision avoidance, so check the `data-rendered-bounds` in the result and move it back if it has drifted.

If it is genuinely unclear where something belongs, use the Inbox rather than guessing.

## What to write

Loose, not a form. Some weeks have feedback, some do not. Only write the parts that actually happened. Skip empty headings rather than leaving placeholder text.

Things worth capturing when they occur:

- What he looked at, tried, or made, in his own words where possible
- Feedback, and who it came from
- Decisions, and the reason behind them
- Anything that surprised him or that he would do differently. This is the only part that cannot be reconstructed later, and the report has a criterion asking for reflective commentary alongside work in progress.
- What is open or blocked
- What is next

Add a short **Feeds report:** line naming which report chapter the material serves (design process, research findings, prototyping process, impact, positionality, and so on). In October that turns the board into an index.

Keep the double diamond stage visible somewhere in the entry (Discover, Define, Develop, Deliver), because the report's biggest single criterion is demonstrating the methodology was actually used.

**Never use em dashes.** Project hard rule.

## Adding to an existing week

Read the frame's doc first with `context_get`, then extend it with `doc_update` rather than creating a second doc. One note per week frame, growing through the week.

## Images and video

Images are a big part of this. Reference shots, screenshots, photos of tests, UI examples, gear he is considering.

**The confidence rule, set by Polo:** only place an image if you are confident it is the right one. If you are guessing what he meant, describe what you would add and ask first. A wrong reference image on the board is worse than no image, because it becomes evidence of a decision he never made.

Confident means one of:

- He gave the URL or the file
- It is a screenshot or export of his own work
- It is an unambiguous, verifiable subject he named (for example the Brilliant Labs Frame product photo from the manufacturer's own site)

Not confident means: you searched and picked something that looked relevant. Ask.

**From a URL:** `image_create` with `image_url`, targeting the frame via `?moveToWidget=<frame id>`.

**From a local file:** `image_get_upload_url` to get an upload URL and token, `curl -X PUT -H 'Content-Type: image/png' --data-binary @file.png '<upload_url>'`, then `image_create` with the token. Max 6 MB. Accepts bmp, gif, jpeg, png, svg, psd.

Always set a `title` on the image saying what it is and where it came from. The poster brief bans AI-generated images and requires stock to be cited, so knowing an image's origin months later matters. If an image is AI-generated, say so in the title.

**Video:** Miro's tools cannot create embeds. Put the link in the doc text with a line saying what it shows, and if there is a representative still, add that as an image next to it. Tell Polo the video is a link rather than a player.

## Layout inside a frame

The frame is 1100 by 800 and coordinates are relative to its top-left corner.

- The week's doc sits at x 30, y 60. Docs default to 800 wide.
- Images go in a row beneath the writing, starting around y 420, at x 30, 300, 570 and 840, each about 250 wide.
- If a frame fills up, resize it (see the note under the frame table) rather than asking Polo to drag it. A week frame carrying a full doc wants to be about 1266 tall.

## Also update, when it applies

- **Decision log** (3458764679505529680): columns are Decision, Why + evidence, Date, Where to see it. Any real decision goes here as well as in the week frame.
- **Feedback log** (3458764679505529681): columns are From, Feedback, What I did, Status, Date. Status is Actioned or Pending.
- **Task tracker** (3458764679504524774): columns are Title, Description, Status, Priority, Effort, Start Date, End Date, Phase.
- **Timeline** (3458764679504524775): only for milestone-level changes.

Use `table_sync_rows`. Rows without a rowId are inserted as new.

## The diagram row

Added 14 September 2026, sitting below the weekly frames. These are built for the report as much as the board, since the report's biggest criterion is making the methodology visible and diagrams are how that gets done.

- **START HERE** (3458764683599282774): the front door. What the project is, where it is, and deep links into the logs. Keep the "where it is" section current, it is the first thing a marker reads.
- **Design process, the double diamond** (3458764683599336356): every activity of the project plotted on the two diamonds, with abandoned directions and failed experiments left on in grey. Add to it as the semester goes.
- **The three states of Compass** (3458764683599388361): off, on but idle, working. The product argument as a picture.
- **The compositing split** (3458764683599388362): head-fixed versus world-anchored elements, and the five integration moves.
- **Film structure** (3458764683599411656): 82 seconds in four acts, with three character lanes showing the intercut.
- **What Compass puts on the lens** (3458764683604303388): the lens layout with the reserved centre, the four zones, and all ten interface elements split into lens-fixed and world-anchored.
- **How a suggestion happens** (3458764683604303865): the seven steps from empty lens to the stop bar, with the on-device band and the five things that never happen.
- **Who this is for** (3458764683604377366): the stakeholder map, with the honest note that the centre ring is still broader than it should be.
- **Where I'm standing** (3458764683604409184): the positionality plot on optimism against closeness to the technology, the reflective block, and the kaitiakitanga block.

Two things to know before editing these. A plain `<line>` with no `data-start` and `data-end` is read as a connector and gets **skipped**, so draw axes and rules as thin `<rect>` shapes instead. And a newly created frame is very often auto-placed somewhere else entirely by collision avoidance, so check `data-rendered-bounds` on every create and move the frame back afterwards, which works fine as a separate update.

## After logging

Tell him plainly what went on the board and where, and name anything you chose not to add because you were not sure.
