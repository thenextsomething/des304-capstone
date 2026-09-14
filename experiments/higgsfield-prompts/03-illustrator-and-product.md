# Higgsfield prompts 03: the illustrator, and the product

> **Read this first, added 14 September after a consistency pass across all three files.**
>
> **The interface colour is now pinned in `concept-notes/compass-product-definition.md` and that file wins over anything below.** Warm white is the base, and the signal blue is reserved for whatever Compass is actively offering in that moment (the keys lighting ahead, the guide while the pencil moves, the frame that just appeared). Everything else on the lens stays warm white. The reference layer is the exception and stays full colour. Where a prompt below says warm white for an active element, add the blue to that element only.
>
> **The light reading sits top right, underneath the shot checklist**, matching the interface anatomy diagram on the Miro board. An earlier draft of file 02 put it lower left, which was a reasonable call made without sight of the board, and it is wrong.
>
> **The posters are two A1 portrait, not A3.** The A3 in "A3. Final posters" is the assignment number rather than the paper size. The A3 that does matter is the CMYK test print you run before committing to the A1s.



Written 14 September 2026. Ten paste-ready prompts covering the third character (the illustrator, pencil and sketchbook at a desk by a window) and the Compass object itself.

**What these are for, and the hard rule.** These generate **concept and ideation material only**. They exist so people can see the vision before the shoot: pitch cuts, a previs reel, a look at whether a beat holds, something to put in front of a tutor or a collaborator. They are not the film. The film is real footage of real people in real Auckland rooms, with the Compass interface composited on in After Effects, exactly as the compositing plan in `film-script-v1.md` sets out. Nothing generated from this file gets cut into the final piece, and nothing generated from this file goes anywhere near the A1 posters. See the logging note at the bottom, which is not optional.

Source of truth for every visual decision here: `concept-notes/compass-product-definition.md`, `concept-notes/film-script-v1.md`, `concept-notes/world-building.md`. Shot numbers in brackets refer to the script.

---

## Which model, and how these are structured

Checked against Higgsfield's current roster, September 2026. The roster moves, so run `models_explore` before a big batch and reassign if something has shifted.

| Model | Use it for | Why |
|---|---|---|
| **Kling 3.0** | Every shot with a face or hands in it. Prompts 2, 4, 6, 9, 10. | 4K capable, built for character consistency across cuts, cheap enough to iterate. The other models soften human close-ups. |
| **Veo 3.1** | The room wides and anything where the window light is the subject. Prompts 1, 3. | Best global illumination and depth of field of the set, holds a daylight interior honestly. It is the one that gets the Auckland window right. Weaker on tight faces, so do not use it for prompt 2. |
| **WAN 2.7** | The product beauty shots. Prompts 7, 8. | Strongest on product realism, gravity and material behaviour. It is reference-driven rather than text-driven, so feed it a still. |
| **Soul 2.0** | Generating the stills that feed WAN and Kling, and any frame you only need as an image. | Photoreal, high aesthetic, and far cheaper to iterate. This is how you fix chunky glasses: kill them at the still stage, not after a video render. |
| **Seedance 2.0** | Only if you need a multi-beat sequence in one generation. | Physics-aware and good, but 720p baseline and expensive. Not worth it for single locked-off beats, which is most of this file. |

**Work still-first on everything.** Generate the frame in Soul 2.0, look at it properly, reject it if the glasses are wrong or the drawing is wrong, and only then push the approved still into Kling or WAN as image-to-video. The models charge you for video whether or not the frame was right. This also solves most of the consistency problems in the avoid list below.

**When you run image-to-video, describe only the motion.** Do not re-describe the still. The still is already the still. Every prompt below is written for text-to-video, so when you use one as an image-to-video prompt, keep the paragraph that describes what happens and drop the paragraphs that describe the room and the object.

**Generate short.** Five to eight seconds. All of these models will run to fifteen, and all of them start reorganising hands and graphite marks somewhere after eight.

---

## House look

Every prompt below inherits this. If you write a new one, paste this in.

> Shot on an ARRI Alexa 35 with Cooke S4 spherical primes. 24 frames per second throughout, no slow motion, no ramping, no speed effects. Native 16:9, composed with headroom so it survives a 2:1 crop. Late summer, mid-morning, Auckland, New Zealand, 2028. Natural light only: one window as the key, no film lights in shot, no practical lamps switched on, no bounce except an off-white wall. The daylight is high, clear and slightly blue, the way New Zealand light is, with a hard-edged rectangle of sun landing somewhere in frame. Grade is warm-neutral and low contrast, blacks slightly open, a little bloom where the window highlight clips, fine 35mm grain. No teal and orange, no lens flare, no vignette, no colour cast. The interior is a real Auckland villa from the 1920s: timber sash window with painted glazing bars, scrim-lined walls in aged off-white, native timber floorboards, a corrugated iron roofline and a hedge visible through the glass. Everything in the room is ordinary and present-day. Nothing glows, nothing hovers, no screen is switched on, and the only thing in the world that is not from today is the pair of glasses.

### The glasses, described the same way every time

Paste this verbatim wherever the glasses appear. Consistency across ten generations comes from using identical wording, not from similar wording.

> A pair of plain black glasses. Very thin matte black titanium. The rim is a fine wire-gauge line barely thicker than the edge of the lens. The temples are straight and slim, about three millimetres deep, running flat back to the ear with no taper and no curve. A quiet unbranded hinge. Small clear lenses in a soft rounded-rectangle optical silhouette. They weigh almost nothing, 38 grams, and they sit lightly. They read as an expensive optical frame from a good optometrist, not as a headset or a wearable: no camera, no lens bezel, no indicator light, no visible electronics anywhere in the arm, no coloured accent, no logo, no external seams, no thick acetate, no wraparound, no visor. Nothing about them reads as technology.

### The interface, described the same way every time

> When anything appears on the lens it is warm white, one light type weight, sparse and small. No panels, no boxes, no borders, no outlines, no drop shadows, no grid, no scan lines, no chrome, no coloured accents, no glow spilling onto the face or the page. It never occupies the centre of the frame, which stays completely empty at all times. It arrives and leaves by fading only, never by sliding, snapping, blinking, flickering or animating in.

### The negative block

Append to every prompt.

> No camera movement of any kind unless specified. No slow motion. No lens flare, no light leaks, no bokeh balls, no dust motes, no floating particles. No holograms, no projections, no beams of light, no glowing surfaces, no blue interface light, no HUD reflections in the lenses. No science fiction. No text, no letters, no numbers, no words, no logos, no signage anywhere in frame. No extra fingers, no extra hands, no morphing hands. No American interior details: no drywall, no double-hung windows, no beige carpet, no wall outlet plates. No studio lighting, no ring light, no softbox in shot. No stock-photograph styling, no over-smooth skin, no plastic sheen.

---

# Part one: the illustrator

She is a beginner, which matters. The drawing on the page is a half-finished amateur pencil sketch, not a masterpiece and not a photorealistic rendering. Everything the interface does has to read as helping a person who is already drawing.

---

## Prompt 1 - the desk by the window [shot 6]

**Proving:** the room, the light and the world rule in one frame. She puts Compass on and nothing happens, and the audience does not yet know that is the point.
**Model:** Veo 3.1. **Length:** 6 seconds.

> A locked-off wide shot. The camera sits on sticks at seated eye height, roughly two and a half metres back and slightly off her left shoulder, so the window falls across the frame and the desk sits in the lower third. 32mm spherical prime at T2.8: the room reads clearly and the far wall softens. The camera does not move at all. No push in, no drift, no handheld float, no rack focus, no reframe.
>
> Late summer, mid-morning, Auckland, New Zealand. The only light is daylight through a timber sash window directly in front of the desk, high and clear and slightly blue, throwing a hard-edged rectangle of sun across the open sketchbook and onto the floorboards. A hedge and a corrugated iron roofline sit just outside the glass, slightly blown out. No lamps on. The only fill is bounce off an off-white wall to camera left, so her far side falls into soft shadow.
>
> A woman in her late twenties sits at a plain rimu desk pushed up under the window. She wears a heavy oversized marle grey cotton sweatshirt with no logo, dark straight-leg jeans, thick wool socks and no shoes. Hair tied up and out of the way. On the desk: an A4 sketchbook open flat on a half-finished pencil sketch, a jar of pencils, a kneadable eraser, a chipped ceramic mug, a very thin closed laptop pushed to the back edge with a single cable running off it, a phone lying face down. A leggy houseplant on the floor beside the desk. The room is an ordinary Auckland villa bedroom used as a work space: scrim-lined walls in aged off-white, native timber floorboards, a half-height bookshelf at the edge of frame, one unframed print taped to the wall. Lived in, a little untidy, not styled.
>
> She reaches to the side without looking, picks up a pair of plain black glasses and puts them on with one hand, then settles her shoulders and looks down at the page. [GLASSES BLOCK] Nothing happens. The lenses stay completely clear. There is no light on her face from the glasses, no reflection in the lenses, no interface, no glow, no indicator, nothing switching on. The room stays exactly as it was. She just sits there looking at her drawing.
>
> [NEGATIVE BLOCK]

---

## Prompt 2 - nothing [shot 7]

**Proving:** at close range the frames read as eyewear rather than hardware, and the empty state holds for long enough to be felt.
**Model:** Kling 3.0, 4K. **Length:** 5 seconds. Veo will soften her face at this size, so do not use it here.

> A static close-up, chest up, camera at her eye height and slightly to camera right so we get three quarters of her face. 85mm at T2.0. Very shallow: her eyes and the near rim of the glasses are sharp, her far ear and the window behind her fall right off. The camera is locked and does not move, breathe, drift or refocus.
>
> Mid-morning Auckland daylight from a timber sash window just off camera right, three quarters front, clear and slightly blue, modelling one side of her face and leaving the other in open shadow. A soft blown-out rectangle of window sits far behind her, well out of focus. No fill card, no rim light, no practical lamps.
>
> She is wearing a pair of plain black glasses. [GLASSES BLOCK] She is looking down and slightly off camera at a page we cannot see. She blinks once, breathes out, and her eyes move very slightly as she reads her own drawing. Then her hand comes up into the bottom of frame and she picks up a pencil. That is the entire action.
>
> The lenses are completely clear the whole time. No interface, no glow, no light on her face from the glasses, no coloured reflection, no shimmer, no faint pattern in the glass. The lenses behave exactly like ordinary prescription lenses and show only the soft reflection of the window.
>
> [NEGATIVE BLOCK]

---

## Prompt 3 - the guides wake [shot 11]

**Proving:** the interface responds to the work, not to the person. The lens is empty until the pencil is actually moving.
**Model:** Veo 3.1 for variant A, Kling 3.0 for B and C. **Length:** 5 to 6 seconds.
**Note:** this is an anchored-tracking shot in the compositing plan, so the camera is locked in the real shoot too. Generate variant A first. It is the one that is actually useful.

**Variant A, clean plate. This is the one you will use most.**

> A first-person point of view looking down at a sketchbook on a desk, camera at head height, angled about 45 degrees down, the page filling the middle two thirds of frame and the desk edge and her knees just visible at the bottom. 35mm at T4, so the whole page holds focus and the room behind goes soft. The camera is completely locked. No head sway, no handheld float, no drift, no zoom, no reframe. It is a mounted point of view, not a body-worn one.
>
> Late summer mid-morning Auckland daylight from a timber sash window directly ahead and slightly above, raking across the page from the top of frame so the paper is bright at the top and falls off toward the bottom. The pencil throws a real hard-edged shadow across the paper. No other light.
>
> Her right hand enters from the bottom right of frame holding a graphite pencil in a loose ordinary grip, most of the hand below the frame line, wrist resting on the page. On the paper is a half-finished pencil sketch of a seated figure, loose amateur construction lines, a few areas worked up and most of it still blank. She draws one continuous unhurried stroke down the side of the figure, lifts, and draws a second shorter one. Her left hand stays flat on the opposite page holding it down. A jar of pencils and a chipped ceramic mug sit out of focus at the top edge.
>
> The lens is completely empty. Nothing is overlaid on the page, nothing appears in the air above it, no light falls on the paper except daylight.
>
> [NEGATIVE BLOCK]

**Variant B, with the guides attempted.** Same prompt, with this paragraph inserted before the negative block. Expect the model to get the behaviour roughly right and the line quality wrong, which is fine for a pitch cut.

> As the pencil begins to move, three or four very faint warm white lines fade up over the drawing: a soft vertical, a soft horizontal and one long diagonal running to a point off the page, like the thinnest possible pencil construction lines drawn in light rather than graphite. They are barely there, one hairline weight, no arrowheads, no ticks, no measurements, no labels, no numbers, no boxes, no borders. They sit flat on the paper and stay locked to it. They fade up over about half a second as the pencil starts moving and hold steady while it keeps moving. They never cover the centre of the page, and they are so quiet you could miss them.

**Variant C, the visual weight nudge.** Same as variant A, with this paragraph instead. This is the third illustrator feature in the product definition and it does not have its own shot in the script, so this is where you test it.

> As the pencil moves, a single short line of very small warm white text fades up in the top left corner of frame, well away from the drawing and well away from the centre. It floats on its own with no panel behind it, no box, no border, no underline, no icon and no background. One line only, one light weight, unobtrusive. It fades up slowly and sits still.

---

## Prompt 4 - the pencil stops, and everything goes [shot 16]

**This is the second most important beat in the film.** The whole product argument gets restated here without anyone saying a word: the help was never hers to keep, it belonged to the work, and the moment the work pauses the lens is empty again. It has to feel like the room got quieter.

**Proving:** the rule, from the other direction. Shot 11 shows the interface arriving because she started. This shows it leaving because she stopped.
**Model:** Kling 3.0. **Length:** 7 seconds, and let it hold. The hold after the fade is the beat.

**The direction, so the generation is judged against the right thing.** The fade happens in about 300 milliseconds, which is roughly seven frames. Fast enough that it is clearly a response and not a timer, slow enough that it is a fade and never a cut. Everything leaves at once. There is no last element hanging on, no sequence, no staggered exit, no acknowledgement, no confirmation. And then the shot keeps running on paper and graphite alone for a good two seconds longer than feels comfortable, because the emptiness is the point and the audience needs time to notice it.

No video model will land seven frames on cue. Generate this to sell the feeling in a pitch. Shoot it for real and do the fade in After Effects, where you can actually feel the timing on the timeline.

**Variant A, the version that gets used. Clean plate, for compositing.**

> A first-person point of view looking down at a sketchbook on a desk, camera at head height, angled about 45 degrees down, the page filling the middle two thirds of frame. 35mm at T4, the whole page in focus, the room behind soft. The camera is completely locked and does not move, drift, sway, zoom or reframe at any point.
>
> Late summer mid-morning Auckland daylight from a timber sash window directly ahead and above, raking down the page from the top of frame, bright at the top and falling away toward the bottom. The pencil casts a hard-edged shadow on the paper.
>
> Her right hand is already in frame at the bottom right, holding a graphite pencil, wrist resting on the page, mid-stroke on a half-finished pencil sketch of a seated figure: loose amateur construction lines, some areas worked up, plenty of the page still blank. She finishes the stroke she is on. The pencil slows, comes to rest, and she lifts it two or three centimetres clear of the paper and holds it there, still, thinking. Her hand does not leave frame. Her wrist stays down. Nothing else in the room moves.
>
> The shot holds on the paper and the drawing and the resting pencil for a long beat. Just paper, graphite, daylight, and a hand not moving.
>
> [NEGATIVE BLOCK]

**Variant B, with the fade attempted.** Same prompt, with this inserted after the paragraph about the stroke.

> While the pencil is moving, a few very faint warm white hairlines lie over the drawing: a soft vertical, a soft horizontal and one long diagonal, flat on the paper, locked to it, no arrowheads, no labels, no numbers, no boxes. The instant the pencil comes to rest, all of them fade out together, quickly and completely and at the same moment. Nothing stays behind. Nothing flashes, blinks, pulses, contracts, slides away or animates off. There is no confirmation, no icon, no final element, no trace. They are simply gone, and the page is only paper and pencil marks.

**Variant C, the wider one, in case the beat plays better from outside her.** Worth generating once for comparison.

> A static medium shot from the side, camera at desk height about a metre and a half away, profile on. 50mm at T2.0, her hands and the page sharp, her face soft in the background, the window blown out behind her. The camera is locked and does not move.
>
> She finishes a stroke, lifts the pencil clear of the paper and stops, holding still. The very faint warm white lines on the page fade out completely the moment she stops. Her expression does not change. She does not look up, nod, smile or react. She just sits with the pencil up, looking at what she has drawn, and the shot holds.

---

## Prompt 5 - the reference card [shot 13]

**Proving:** the one full-colour element in the whole interface language, and the one that shows Compass handing her someone else's work as a reference rather than as an answer.
**Model:** Kling 3.0. **Length:** 6 seconds.
**Note:** this is a fixed-to-view element in the compositing plan, so it needs no tracking. That means the real shoot can be handheld and alive here, and it also means the AI version only ever has to suggest it. **The artist name and year will come out as gibberish. Do not fight it.** Leave the text out of the prompt entirely, generate the card as a full-colour image sliding in, and put the real name and year on in After Effects.

> A first-person point of view at a desk, camera at head height, angled down about 40 degrees. The sketchbook sits in the lower right of frame, so the left side of the view is open: the desk edge, a jar of pencils, the base of the window and a slice of the room. 35mm at T2.8, the page sharp, the room behind soft. Very slight natural head movement is allowed here, a few degrees of drift only. No zoom, no push, no whip.
>
> Late summer mid-morning Auckland daylight from a timber sash window ahead and above, raking down across the desk. Hard-edged shadows. No other light.
>
> Her right hand rests at the bottom of frame holding a pencil, not moving. On the page is a half-finished amateur pencil sketch of a seated figure. From the far left edge of frame, a small rectangular card fades and eases in toward the left third of the view and stops. The card holds a single full-colour image: an old figure drawing in red and brown chalk on toned paper, clearly someone else's finished work from another century. It is the only colour in the interface and it is warm and a little faded. It sits flat, small, about a sixth of the frame width, with a plain edge and no frame, no border, no panel, no shadow, no caption, no text of any kind. The centre of the frame stays completely empty.
>
> She glances left at the card for a moment, then looks back down at her own page and starts drawing again. The card stays where it is, quietly, off to the side.
>
> [NEGATIVE BLOCK]

---

## Prompt 6 - the profile, poster hero candidate

**Proving:** a person using the product in context, which is exactly what the poster brief asks a hero shot to do. Not in the script, but the illustrator's equivalent of the musician value shot.
**Model:** Kling 3.0 at 4K, and generate the still in Soul 2.0 first. **Length:** 5 seconds.
**Use:** previs and the landing page only. Not the posters. See the logging note.

> A static medium close-up in profile, camera at desk height about a metre and a half to her left, looking across at her against the window. 50mm at T2.0. She is sharp, the window behind her is blown out and completely soft. The camera is locked and does not move at all.
>
> Late summer mid-morning Auckland daylight coming through a timber sash window directly behind her and slightly off, so she is backlit and rimmed along the edge of her face, her cheek and jaw lifted by bounce off an off-white wall behind the camera. The light is clear and slightly blue. The window frame reads as a soft bright rectangle. No fill, no lamps, no rim light other than the window.
>
> She is sitting at the desk in a heavy oversized marle grey sweatshirt with no logo, hair tied up, leaning slightly forward over a sketchbook, drawing. We see the side of her face, her glasses in clean profile, and the top edge of the page. [GLASSES BLOCK] Because we are looking at her from the side, the very thin temple runs in a clean straight line from the rim back past her eye to her ear, with nothing on it: no housing, no bump, no port, no light, no seam. The lens is clear and catches a soft daylight reflection.
>
> She draws, pauses, tilts her head a few degrees, and keeps going. Small, real, unperformed. She does not look at the camera and she does not smile.
>
> [NEGATIVE BLOCK]

---

# Part two: the product

Four beauty shots. These feed the end card, the landing page, the press kit key visuals and a poster hero. They need to be genuinely beautiful, so run them still-first through Soul 2.0 and be ruthless at that stage. The single biggest risk in this whole file is that the glasses come out thick. Every model's idea of smart glasses is a chunky acetate frame with a camera in the corner, because that is what it has seen.

**The counter-reference, for your own eye rather than the prompt.** The target is Even Realities G2: 36 grams, magnesium and titanium, and it reads as eyewear. The thing to reject on sight is Brilliant Labs Halo, which is not actually thin and leaves electronics visible through the arm. If a generation looks closer to Halo than to G2, bin it and go again. Do not put brand names in the prompt itself, describe the object instead.

**Surface.** The default below is a matte warm-grey seamless. If you want the product shot to be quietly from here, swap it for a slab of dark unpolished Auckland basalt, which is a real local material and gives the hard light something with texture to bite into. Generate both, decide on the edit.

---

## Prompt 7 - the hero, one hard light [shot 21]

**Proving:** the end card, and the best-looking single image in the whole project.
**Model:** WAN 2.7, fed an approved Soul 2.0 still. **Length:** 5 seconds.

> A static product shot. The camera looks down at about 25 degrees onto a flat matte warm-grey surface in an otherwise black room. 50mm at T5.6, the near rim and the hinge sharp, the far temple falling gently out of focus. The camera holds absolutely still for the first second, then executes one very slow, very small push in toward the hinge, moving perhaps eight centimetres over four seconds. Nothing else. No orbit, no tilt, no rotation of the object, no handheld, no zoom snap.
>
> One hard directional light only, a small source high and 45 degrees behind to camera right, throwing a long hard-edged shadow of the frame forward and to camera left across the surface. Deep negative fill on the opposite side, so the shadowed half of the object goes almost black. A single bright specular line runs along the top edge of the temple and one small highlight sits on the hinge. No softbox, no fill card, no rim light, no reflector, no second source, no ambient lift, no gradient backdrop, no haze.
>
> Sitting on the surface is a pair of plain black glasses, folded, temples closed, resting on their rim and arms at a slight three-quarter angle to camera so we can read the profile of the rim and the full run of one temple. [GLASSES BLOCK] The matte titanium drinks the light except along that one specular edge. The surface is clean and there is nothing else in frame: no case, no cloth, no props, no reflections of anything, no text, no branding, no packaging.
>
> [NEGATIVE BLOCK]

---

## Prompt 8 - macro, the temple and the hinge

**Proving:** the two things the whole industrial design argument rests on. It is genuinely thin, and there is nothing in the arm.
**Model:** WAN 2.7 from a Soul 2.0 still. **Length:** 5 seconds. Generate two, one per subject.

**8A, the temple.**

> An extreme macro. The camera sits at surface level, almost flat on, looking straight down the length of one temple arm from the hinge end toward the ear tip, which recedes away out of focus. 100mm macro at T4. The depth of field is about fifteen millimetres deep: the hinge and the first centimetre of the arm are razor sharp, everything beyond dissolves. The camera makes one slow lateral slider move of about four centimetres, left to right, parallel to the surface. Nothing else moves. No rack focus, no zoom, no rotation, no push.
>
> One hard directional light only, a small source raking almost parallel to the surface from camera right, so it catches the top edge of the arm as a single clean specular line and leaves the side of it in near black. Deep shadow everywhere else. No fill, no bounce, no second source.
>
> The subject is the temple arm of a pair of plain black matte titanium glasses lying on a matte warm-grey surface. [GLASSES BLOCK] At this magnification the arm is revealed as a flat thin strip, about three millimetres deep and a couple of millimetres wide, with a fine brushed grain in the titanium and a barely visible radius on its edges. It is solid metal the whole way along. There are no seams, no joins, no panel lines, no ports, no contacts, no screws, no mesh, no vents, no indicator lights, no coloured inlay, no visible circuitry, no translucent section, no thickening toward the ear. It is empty and it is beautiful because it is empty.
>
> [NEGATIVE BLOCK]

**8B, the hinge.**

> An extreme macro, three quarter view, camera just above surface level, looking into the hinge where the temple meets the rim. 100mm macro at T5.6, focus on the hinge knuckle, the rim and the arm both falling away softly to either side. The camera is completely locked, no movement at all. Instead, the object turns: the glasses rotate extremely slowly on the surface, perhaps eight degrees over five seconds, so the specular highlight travels across the hinge and reveals its form. Slow enough that you almost do not notice it is moving.
>
> One hard directional light, small source, high and to camera left, so the top of the hinge catches a hot clean highlight and the underside goes black. Deep negative fill opposite. No fill, no rim light, no second source, no reflected card.
>
> The subject is the hinge of a pair of plain black matte titanium glasses. [GLASSES BLOCK] The hinge is a small, quiet, precisely machined detail: two or three interleaved knuckles in the same matte black titanium as the rest of the frame, no contrasting metal, no exposed screw head, no branding, no logo, no serial number, no engraved text, no plastic. The engineering is understated to the point of being almost invisible, and the transition from rim to arm is one continuous thin line.
>
> [NEGATIVE BLOCK]

---

## Prompt 9 - hands lifting them

**Proving:** 38 grams. The way a hand moves when it picks up something that weighs nothing is the whole spec, and it cannot be written on a fact sheet.
**Model:** Kling 3.0, from an approved still. **Length:** 5 seconds.

> A static medium close-up, camera at surface height, level with the object, looking slightly down at about 15 degrees. 85mm at T2.8, the glasses and the fingertips sharp, the background completely soft and dark. The camera is locked and does not move, drift or follow.
>
> One hard directional light, a small source high and behind to camera right, cutting across the surface and rimming the top edge of the frame and the knuckles. Deep negative fill to camera left so the hand is modelled hard, half lit and half in shadow. The background is unlit and falls to near black. No fill, no soft key, no second source.
>
> A pair of plain black glasses lies folded on a matte warm-grey surface. [GLASSES BLOCK] A single adult hand comes in from the right side of frame, unhurried, and picks them up by the bridge and one rim between thumb and two fingers, lifting them clear of the surface about ten centimetres and turning them very slightly so the light runs down the temple. The lift is light and easy and slightly too quick for the size of the object, the way a hand moves when whatever it has picked up weighs less than it looks. The hand is ordinary and unmanicured with short clean nails. The action is one continuous move: reach, take, lift, hold. Nothing is set down, nothing is fumbled, nothing is passed between hands.
>
> The hand has five fingers and one thumb throughout and stays intact for the entire movement. The glasses keep exactly the same proportions before, during and after the lift, and do not bend, stretch, thicken or change.
>
> [NEGATIVE BLOCK]

---

## Prompt 10 - putting them on

**Proving:** the gesture the film repeats three times in the first twenty seconds, isolated and clean. It is also the shot that has to convince a stranger these are just glasses.
**Model:** Kling 3.0 at 4K. **Length:** 5 seconds.

> A static close-up, chest up, camera at eye height and square on, a little wide of centre. 85mm at T2.0. The near eye is sharp, the far ear soft, the background dissolved. The camera is completely locked. No push, no drift, no reframe, no follow.
>
> Late summer mid-morning Auckland daylight from a window off camera right, three quarters front, clear and slightly blue, modelling one side of the face and leaving the other in open shadow. A soft blown-out window sits far behind, out of focus. No fill card, no lamps, no rim light.
>
> A woman in her late twenties, in a heavy oversized marle grey sweatshirt with no logo, hair tied up, lifts a pair of plain black glasses into frame from below with one hand and puts them on: temple to the side of the head, a small settle with the fingers on the bridge, hand away. Then she looks down and slightly off camera, at a page we cannot see. [GLASSES BLOCK]
>
> The gesture is completely ordinary, the way anyone puts on reading glasses, with no ceremony, no pause for effect, no look to camera and no smile. The moment they are on, nothing happens. The lenses stay clear. There is no light on her face from the glasses, no reflection, no glow, no startup, no indicator, no shimmer, no faint pattern in the glass, no sound cue implied by her expression. She simply has glasses on now, and she goes back to looking at her work.
>
> [NEGATIVE BLOCK]

---

# Things to avoid

The failures that recur in AI video for exactly this kind of work, and what to do about each. Read this before you spend credits, not after.

**Hands holding pencils.** The single worst case in this file. Fingers merge, a sixth digit appears halfway through, the pencil changes length, the grip reverses, or the pencil passes through the paper. Mitigations: frame so most of the hand sits below the bottom edge and only the fingertips and the pencil tip are in shot; keep the grip slightly soft rather than tack sharp; generate five seconds not fifteen; and work image-to-video from a still where you have already checked the hand. If a generation is going to fail, it usually fails after second six, so cut before then.

**Drawings that change between frames.** Graphite marks quietly reorganise themselves, and by the end of an eight second clip she has drawn something she never drew. Mitigations: keep the drawing small in frame or slightly defocused; never let a take run longer than you need; reuse the same approved still as the image input for every variant so the sketch stays identical across generations; and for any frame where the audience actually reads the drawing, use the real shoot. This is also why the half-finished sketch is described the same way in every prompt above.

**The model drawing a masterpiece.** Ask for a pencil sketch and you get a gallery-quality photorealistic portrait. She is a beginner. The words that hold it back are "half-finished", "loose amateur construction lines", "plenty of the page still blank". Keep them in.

**Text rendering.** Every model in the set produces gibberish letterforms, and Compass's interface language is built on type. The artist name and year on the reference card, the visual weight nudge, the end card: none of them survive generation. Do not ask for legible words anywhere. Generate the plate clean and comp the type. Where a prompt above does mention text, it deliberately does not say what the text says, because the point is the placement and the weight, not the words.

**Glasses that come out chunky.** The default mental model of smart glasses is thick acetate with a camera in the corner, and you will get it repeatedly. Kill it at the still stage in Soul 2.0, which is cheap, rather than after a video render, which is not. The words that do the work: thin, wire-gauge, titanium, three millimetres deep, optical frame, optometrist. The words that must be absent: smart, AR, wearable, headset, tech, futuristic, device.

**Glasses that come out sci-fi.** Blue glow, a visor, a wraparound band, a coloured accent on the temple, a glowing seam, a light in the hinge. Every one of these is in the negative block for a reason. If any of them survive into a generation, it is not a fixable clip, it is a reject.

**Visible electronics.** This is the Halo failure and it is a design argument as much as a look. Nothing in the arm. No ports, no contacts, no mesh, no translucent section, no circuitry, no thickening toward the ear.

**Anything that makes the device look like it is doing the drawing.** The most important item on this list, because it breaks the one rule the entire project stands on. No line appearing on the paper by itself. No beam or projection onto the page. No image forming, resolving, materialising or completing. No preview of a finished version. No glow emanating from the glasses onto the work. Nothing arrives before her hand moves, ever. If a generation shows the interface waiting for her, or shows the page changing without the pencil, it is wrong even if it is pretty, and it is exactly the frame that would get quoted back at you.

**The drifting push-in.** Every model adds a slow zoom you did not ask for. Saying "static" once is not enough, which is why the prompts above say it three different ways and the negative block says it again.

**Slow motion.** The default for anything that looks like an ad. It is wrong for this film. The register is ordinary and present, a real hand at real speed, and a ramp would make it a perfume commercial. 24 frames per second everywhere, stated in the house look and worth restating if you write a new prompt.

**Generic American interiors.** Drywall, double-hung sash-free windows, beige carpet, wall outlet plates, a ceiling fan, recessed downlights. The specific New Zealand alternatives are in the house look: timber sash window with glazing bars, scrim-lined walls, native timber floorboards, corrugated iron, a hedge. Also worth protecting: shoes off indoors, and light that is clear and slightly blue rather than golden. American AI video is relentlessly golden-hour and Auckland mostly is not.

**Over-styled sets and over-styled people.** A perfectly tidy desk, a matching stationery set, a model in her early twenties with immaculate skin. The room is lived in and a bit untidy, the mug is chipped, and the casting note in the world-building file is explicit that the three characters should not read as three versions of the same person.

**The AI sheen.** Waxy skin, a plastic specular on everything, over-sharpened edges, a faint fisheye on wides. Fine grain and low contrast in the grade help. If a clip still looks synthetic, it is usually the skin, and the fix is a different model rather than a different prompt.

---

# Logging, acknowledgement, and the poster ban

**Log everything, every time.** One row per generation, in this folder, at the moment you generate it and not from memory afterwards: date, tool (Higgsfield), the exact model and version (Kling 3.0, Veo 3.1, WAN 2.7, Soul 2.0), the full prompt text as pasted including any variant paragraphs, the job id, whether it was text-to-video or image-to-video and what the input image was, and what the output was used for or why it was rejected. The course requires AI use to be acknowledged appropriately and points at the University of Auckland QuickCite guidance for referencing generative AI tools. A log written as you go is an acknowledgement section you can produce in ten minutes. A log reconstructed at the end is a guess.

**Nothing from this file goes on the posters. This is a hard ban, not a preference.** The A3 poster assignment is explicit twice: "You are not allowed to use AI-generated images in the poster", and "Posters have to be readable from a 1.5m distance and not contain any images generated by AI." Two A1 portrait posters, 300 dpi, CMYK, due 15 October. Ten of the twenty available marks sit on visual communication and hero shots, so a breach here is not a technicality, it is the graded part.

**Which means the real product shots have to be photographs.** The on-camera prop is one pair of plain black mock glasses, one copy only. Photograph those actual frames on a stills camera, under the same single hard directional light described in prompts 7 and 8, on the same day as the shoot while the setup is still standing. Everything in part two of this file is a lighting and framing rehearsal for that stills session, and that is genuinely its most valuable use: walk in knowing the angle, the light position and the surface, instead of working it out with the camera already on the tripod.

**The poster hero shots follow the same rule.** They come from stills taken on the shoot, of real people in real rooms, or from royalty-free stock captioned and cited on the poster itself with the full citation in the visual project report. The illustrator prompts, including prompt 6, are previs and pitch material. They can go in a pitch deck, a previs reel, the landing page mockup process or the report as documented process work with the tool named. They cannot go on an A1.
