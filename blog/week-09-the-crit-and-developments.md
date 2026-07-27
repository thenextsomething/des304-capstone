<!-- Scraped from https://www.poloumali.com/all-posts/week-9-the-crit-and-developments on 2026-07-27 -->

# Week 9: The Crit and Developments

Published

May 25, 2026

Topic

DES303

The crit this week did something I did not expect. I went in with three ideas and came out knowing I really had two, and honestly probably one and a half. That is not a bad outcome. That is what a crit is supposed to do.

The Experience

I presented all three concepts to the group: the Muse game, the launch film direction for the wearable, and the speculative news publication. I also walked them through some of the storyboarding and image generation work I had been doing between sessions. The conversation that followed was one of the more useful ones I have had in this course so far.

The video direction landed hardest. When I explained what I was imagining, a launch film for a fictional wearable built specifically for creatives, set in a future Aotearoa, the room got it immediately. The reference point that kept coming up was the Apple Watch ad. Not a product explainer. Not a tech demo. Something cinematic, minimal, emotional. Something that makes you feel what it would be like to use the device rather than understand how it works. That framing clicked for me. It is closer to what I am actually trying to make than anything I had articulated before.

The Muse game was received well too, but I think the feedback was tempered by the fact that V1 was still limited. There was not enough depth to the branching for people to feel the full weight of what the experience was going for. They found the concept genuinely interesting, but the fidelity was not high enough to leave a strong impression. That became my clearest experiment brief for the week.

The news publication did not survive the crit, and I was not surprised. The questions I could not answer were the ones that mattered: where does this go? What skill are you building here? Is this something you actually care about long term? Someone asked me directly how passionate I was about it and I had nothing. The feedback from the group also echoed something Jed had said earlier in the semester, that the work should be connected to something I genuinely want to get better at, something I can see a future with. Journalism as a format is conceptually interesting to me but I have no real investment in it as a practice. I am letting it go.

Reflection

What the crit clarified is that the two directions worth pursuing are the ones where I already have skin in the game. I make films professionally. Pushing that into more experimental, speculative territory is not a stretch, it is a deepening. The Muse game sits in different territory but still connects back to something real, building something interactive that puts people inside a question rather than explaining it at them is a mode of working I want to understand better.

The honest thing I also need to sit with is that the video is still a long way from what I want it to be technically. The concept is clear. The execution is not. A compositing problem I flagged in Week 8 is still unsolved. Getting a headset display to look convincing on camera is the thing that could make or break the film's credibility, and right now I do not have a clean method for doing that. The group actually pushed me on this directly: before committing to a specific production approach, think about the physical product itself first. What does it actually look like? How would it feel to wear? Even if I am never making a functioning device, the design of the object has to be real enough that the film is believable.

That was a useful reframe. I had been thinking about the film as a filming and compositing problem. The crit pushed me to think about it as a product design and then a filming problem.

Theory

The reference point of the Apple commercial is worth unpacking a bit. What makes those ads work is not the technology they are showing, it is the emotional truth they are selling. When Apple launched the Apple Watch, the campaign was not about features. It was about identity, about the kind of person who wears this and why it matters to their life. That is the approach I want to bring to MUSE. The device is almost beside the point. What the film needs to communicate is the feeling of having something that works with you rather than for you or instead of you.

This connects back to what Dunne and Raby describe as the role of speculative design: not to predict or sell a future, but to open up a space where the audience can ask whether they want it (Dunne & Raby, 2013). The launch film format is doing exactly that. It is presenting something as real enough to be desirable while leaving the question of whether you should want it genuinely open.

The Experiments

After the crit I had two clear directions to push. I worked on both.

For Muse, the feedback that V1 was too short gave me a clean brief for the rebuild. I decided to start a completely new Claude Code instance rather than iterate on top of the existing file. The architecture also needed to change. I moved from a single HTML file to a four-file structure: index.html, style.css, story.js, and game.js. The main reason for separating story.js was so I could edit all the dialogue and branching without touching any code, which matters a lot when the thing I am most likely to keep refining is the writing itself.

Before writing a single line of code I mapped out the full structure. A few key decisions made in the design phase: no new characters, strictly one-on-one between the player and MUSE. I expanded from one session to three days with distinct scenes. Day 1 covers concept development and location scouting. Day 2 is on set, specifically a moment where a planned shot is not working and an unplanned one might be better. Day 3 is the edit, where the player has to make the final call on the defining shot of the film.

I also expanded from two endings to five, each one mapping to a leanScore running from 0 to 5. The five endings are: The Purist (score 0-1), The Collaborator, The Negotiator, The Passenger, and The Ghost at score 5. These are not just tone variations. Each one represents a fundamentally different relationship to authorship, and what creative work actually means when something else is doing more and more of it.

After the initial V2 build I went through several rounds of iteration, each one responding to something that was not working.

The opening needed fixing. Originally the game required the player to type "Hey." to start, which felt completely wrong for the experience I was trying to create. I changed it so the game starts automatically, and rewrote the opening message to read: "I'm working on a short film and I'm kind of stuck. Can you help me develop the concept?" That is how someone actually opens ChatGPT. That specificity matters.

The choice mechanic was broken in the first build. Fixed so choices render as two clickable buttons with full keyboard support, press 1 or 2. The keydown listener activates when choices are on screen and clears when they are not.

Timing was off throughout. Everything was moving too fast to read comfortably. I brought the typing indicator before MUSE messages up to 2000ms, the gap between consecutive messages to 800ms, the pause before choices appear to 1200ms, and the auto-next delay to 2500ms. These feel like small details but they make a significant difference to the experience of actually playing it.

<game demo above>

The most significant addition was what I ended up thinking of as UI corruption. As the leanScore climbs, CSS custom properties update after every choice and the visual environment shifts with them. At a low score: clean, warm, minimal. At a high score: the background shifts to a cold blue-black, MUSE's chat bubbles develop a purple-tinted border, scanlines appear, a vignette creeps in from the edges. A MUSE influence bar in the header fills progressively. The idea is that the interface itself reflects how much of the creative work has shifted to MUSE. The player feels it without being told.

<As Muse influence goes up, UI changes>

On the video side, the work this week was more exploratory. I installed After Effects and started watching tutorials, orienting myself around what is possible rather than executing anything specific yet. The compositing challenge is still the central unsolved problem. I also started thinking through the logistics of actually shooting something that reads as a commercial rather than a demo, writing down rough ideas for scenes, thinking about lighting, thinking about what the device looks like on camera at different distances.

Part of this research was looking at existing AR and wearable products to understand the design space. The references I kept coming back to were Meta's Ray-Ban smart glasses for how a consumer wearable can disappear into something people actually want to wear, Brilliant Labs Frame for how minimal and design-forward an AI-integrated device can be, Xreal for the more immersive end of the spectrum, and Snap Spectacles for how a creative-first product gets positioned visually. None of these are exactly what MUSE would look like, but mapping where they sit in the landscape helped me start forming a clearer picture. The direction I am gravitating toward is something closer to Frame than to Vision Pro: lighter, less imposing, something that signals collaboration rather than dominance.

kinda ugly haha!

One other thing I worked on this week was storyboarding, and this one connected back to my actual practice at The Next Something in a way I did not expect. I drafted storyboards both for the speculative film and for some personal project ideas I have been sitting on. The workflow I developed was: describe what I am after in natural language, pass it to Claude to generate a more refined and detailed prompt, then send that through to an image generation tool. Using Claude as a prompt intermediary rather than prompting directly produced noticeably better results. It is a small workflow shift but it made a real difference to the output quality, and it is something I will keep using.

Preparation

Going into next week I have two active directions: Muse and the launch film. The question I need to answer is whether they stay as parallel experiments or whether one becomes primary. My instinct is that the film is the stronger capstone direction, but Muse is the more complete prototype right now. I want to keep building on both while I work that out.

For the film, the next decision is about the production approach. Commit to learning the compositing properly in After Effects, or rethink how the headset display gets shown on screen altogether. Both are still on the table. The product design research this week was a useful step, but I need to get to a point where I have a clearer picture of what the physical object actually looks like before I can figure out how to film it convincingly.
