# Higgsfield prompts: the musician

> **Read this first, added 14 September after a consistency pass across all three files.**
>
> **The interface colour is now pinned in `concept-notes/compass-product-definition.md` and that file wins over anything below.** Warm white is the base, and the signal blue is reserved for whatever Compass is actively offering in that moment (the keys lighting ahead, the guide while the pencil moves, the frame that just appeared). Everything else on the lens stays warm white. The reference layer is the exception and stays full colour. Where a prompt below says warm white for an active element, add the blue to that element only.
>
> **The light reading sits top right, underneath the shot checklist**, matching the interface anatomy diagram on the Miro board. An earlier draft of file 02 put it lower left, which was a reasonable call made without sight of the board, and it is wrong.
>
> **The posters are two A1 portrait, not A3.** The A3 in "A3. Final posters" is the assignment number rather than the paper size. The A3 that does matter is the CMYK test print you run before committing to the A1s.



**Written 14 September 2026. For the Compass launch film, Create Labs, Aotearoa 2028.**

Eight paste-ready prompts covering the musician thread: a beginner learning a piece at a digital
piano in an Auckland bedroom. Built from `concept-notes/compass-product-definition.md`,
`concept-notes/film-script-v1.md` and `concept-notes/world-building.md`, so every detail below is
already a decision the project has made rather than something invented at the prompt.

## The hard rule about what these are

**These generate concept and ideation material only. Nothing generated from this file is a shot in
the film.**

The finished film is real footage of real people, with the Compass interface composited on in After
Effects. These prompts exist to do three things and nothing else:

1. Show people the vision before the shoot: producers, the stream coordinator, anyone who needs to
   see it rather than read it.
2. Look-development. Find out how warm the warm white wants to be, how much glow is too much, how
   far ahead of the hand the guide can sit before the device starts to look like it is playing.
3. Pre-visualisation for the shoot. Working out the lens, the height and the light in a room you can
   generate before you stand in one.

They are pitch and thinking material. Treat every output as a sketch.

---

## House look

Every prompt below already carries the relevant parts of this in its own words, because Higgsfield
does not inherit context between generations and a prompt that depends on an earlier one will drift.
This block is here so the eight stay consistent with each other and so any new prompt written later
matches the set.

**Location.** A bedroom in a 1930s Auckland weatherboard bungalow. Off-white painted gib walls, a
timber picture rail set below a plain scotia, flat oatmeal wool carpet slightly worn along the
doorway. A double-hung timber sash window with a brass latch, painted white, half open. Through it, a
wet green hedge and the grey corrugated iron roof of the next house, a little rusted at the ridge.

**Set dressing.** A slim matte black 88-key digital piano on a black X-frame stand, empty music rest.
A plain wooden stool. An oil column heater switched off against the skirting. A New Zealand angled
three-pin wall socket with its own rocker switch, one cable in it. A mug going cold on the
windowsill. A folded merino jumper on the end of a bed at the edge of frame. Nothing in the room
dates it forward. 2028 is carried entirely by the glasses, which is the world rule: the environment
stays real and recognisable and the interface is the only speculative layer.

**Her.** A woman in her early twenties, Filipino New Zealander, dark hair loosely tied back with a
few strands out, no visible makeup, small gold stud earrings. Plain worn oatmeal marle long-sleeve
tee, mid-grey trackpants, bare feet. Nothing branded, nothing costume-y. She is specified this
precisely so eight generations produce the same person, not because casting is settled. The real
film casts friends and family.

**The glasses.** Thin matte black titanium, small softly rounded rectangular lenses, clear and
untinted, arms about 3mm thick. No visible electronics, no camera, no indicator light, no logo, no
coloured accent, no strap. They read as ordinary prescription eyewear at a glance, which is the
whole industrial design argument. Closest real reference is the Even Realities G2 at 36 grams.

**Light.** Mid-morning, overcast Auckland. One big soft low-contrast source through the window on
camera left, cool daylight bouncing back warm off the carpet. No lamps on, no sunbeams, no god rays,
no atmospheric haze.

**Camera and grade.** Photographed like a product film, not a music video. Full-frame digital,
cinema primes, shallow but not extreme. Natural skin, slightly desaturated greens, gentle highlight
roll-off, fine film grain. No teal and orange, no bloom filter, no anamorphic flares.

**The interface language.** Warm white only, the colour of a 2900K filament bulb. One weight. No
borders, no panels, no icons, no containers, no text of any kind anywhere in this thread. It fades
rather than switches. The centre of vision is always empty. The key guide peaks around 40 per cent
opacity, the session hairline sits at about 20 per cent. It is deliberately defined against Even
Realities: **no green, no dot matrix, no pixel grid, no bordered readout, nothing machine-like.**

---

## Which prompt is which

| # | What it is | Script shot | Polo's list |
|---|---|---|---|
| 01 | The empty lens, third person wide | 2 and 3 | 1 |
| 02 | POV, plays a phrase and stops, no interface | 8, first half | 2 |
| 03 | POV, the keys light a beat ahead | 8, second half | 3 |
| 04 | Macro on the temple, the pulse she feels | new | mine |
| 05 | POV, deeper in, the guide keeping pace | 12 | 4 |
| 06 | Side on, proving the glow is on the lens | new | mine |
| 07 | Close on her face, hero candidate | 15 | 5 |
| 08 | She finishes and takes them off | 18 | 6 |

---

## Model notes

Checked against Higgsfield's own 2026 model comparisons on 14 September 2026.

- **Veo 3.1.** Reads long prompts properly and handles global illumination, depth of field and
  physics better than anything else on the platform, which is what a soft overcast room needs. Its
  known weakness is tight close-ups on human faces, so it gets the wides and the mid shots here, not
  the hero.
- **Seedance 2.0.** The most literal prompt follower on the platform and it takes up to nine
  reference inputs. That combination is why it gets the interface shots: when the brief is "40 per
  cent opacity on exactly three keys and nowhere else", literal is the only quality that matters.
  Capped at about 15 seconds at 720p and it is the expensive one.
- **Kling 3.0.** Up to 4K, cheap per generation, rewards a prompt that states shot size, perspective
  and movement explicitly, and it is stronger on composed frames and faces. It gets the hero and the
  macro. Soul ID will keep her face consistent across the set if you feed it 20 or so stills.
- **WAN 2.7.** Video-reference style transfer, and it is weak from text alone. Useless now, very
  useful the day after the shoot, because it can carry the interface treatment onto a real plate.
  Noted as the post-shoot option on the POV prompts.
- **Cinema Studio** is worth using where it is offered. It lets you pick a camera body, a lens and a
  focal length before generating, and lock depth of field, which removes most of the guessing.
- Higgsfield's own comparison blog says the Sora API is being retired on 24 September 2026, so do
  not build a workflow on Sora 2 this month.

**Settings for all eight.** 16:9. Six to eight seconds, not fifteen, because hands on keys fall apart
the longer a clip runs. Highest resolution the model offers. Discard any generated audio, all of it
will be wrong. Generate four to six takes per prompt and expect one usable, and expect to use only
the first two or three seconds of that one.

---

## 01. The empty lens

**Proving:** the film's opening move, that putting Compass on does nothing at all, and that the
audience is allowed to sit in that for a beat before they know it is the point.

**Aimed at:** Veo 3.1. Wide, no interface to render, and the whole shot is carried by soft light in a
real room, which is exactly what it is best at. Kling 3.0 as a cheap second pass.

**Duration:** 8 seconds.

> Wide static shot, third person, a bedroom in a 1930s Auckland weatherboard bungalow on an overcast
> mid-morning. The camera is locked off on a tripod at seated chest height, about three metres back,
> framing a slim matte black 88-key digital piano on a black X-frame stand against an off-white gib
> wall, with a half-open double-hung timber sash window on camera left. 35mm lens on a full-frame
> camera at T2.8, deep enough that the whole room reads, soft enough that the far wall falls away
> gently. No camera movement whatsoever: no push in, no drift, no handheld float, no zoom, no rack
> focus, the frame is completely still for the entire clip. Lighting is soft overcast daylight from
> the window on camera left, one large low-contrast source, cool daylight bouncing back warm off flat
> oatmeal wool carpet, no lamps switched on, no sunbeams, no haze, no rim light. A woman in her early
> twenties, Filipino New Zealander, dark hair loosely tied back with a few strands out, wearing a
> plain worn oatmeal marle long-sleeve tee and mid-grey trackpants, barefoot, walks in from frame
> right and sits down on a plain wooden stool at the piano. Without looking, she reaches to her right
> and picks up a pair of thin matte black titanium glasses with small softly rounded rectangular
> clear lenses and slim 3mm arms, no visible electronics, no camera, no indicator light, no logo, and
> puts them on with one hand. Then she does nothing. She settles, rests her hands in her lap, and
> looks down at the keys. The lenses stay completely clear and empty, reflecting only the grey window,
> and absolutely nothing appears on them: no glow, no graphic, no text, no colour, no light of any
> kind coming from the glasses. Set dressing stays ordinary and present day: a timber picture rail
> below a plain scotia, an oil column heater switched off against the skirting, a New Zealand angled
> three-pin wall socket with its own rocker switch, a mug on the windowsill, a folded merino jumper on
> the end of a bed at the edge of frame, a wet green hedge and a grey corrugated iron roof through the
> window. Nothing in the room is futuristic. Naturalistic product-film photography, natural skin
> tones, slightly desaturated greens, gentle highlight roll-off, fine film grain, no teal and orange
> grade, no lens flare, no bloom, no volumetric light.

---

## 02. Her point of view, before anything happens

**Proving:** that the point of view works as a frame at all, and that the empty lens is genuinely
empty even while she is at the instrument with her hands on it.

**Aimed at:** Veo 3.1, for the hand physics and for how it handles a low-contrast window-lit room.
Seedance 2.0 as the fallback if the hands come back wrong, since it follows a hands instruction more
literally.

**Duration:** 6 seconds.

> First person point of view shot, the camera is the wearer's own eyes looking down at a piano. The
> frame sits at natural eye height above a slim matte black 88-key digital piano, angled down at
> roughly 40 degrees, so the keyboard runs across the lower two thirds of frame and the top third
> shows the empty music rest, a section of off-white gib wall and the soft grey rectangle of a
> half-open timber sash window on the left. 28mm lens on a full-frame camera at T2.8, keys in sharp
> focus, the wall and window falling gently soft. The camera holds almost completely still, with only
> a very small amount of natural head settle in the first half second and then nothing: no roaming,
> no scanning the room, no bobbing, no push in, no handheld wander. Lighting is soft overcast
> mid-morning daylight from the window on camera left, one big low-contrast source raking across the
> white keys so they read cream rather than white, cool daylight bouncing back warm off oatmeal wool
> carpet, no lamps on, no rim light, no haze. Two hands enter the bottom of frame, a woman's hands,
> early twenties, short unpainted nails, the cuffs of a worn oatmeal marle long-sleeve tee pushed up
> the forearms, no rings, no watch. She sets her fingers on the keys, plays a short slow phrase of
> four or five notes with obvious beginner care, the keys visibly depressing under each finger, then
> stops and lifts her fingers a centimetre off the keys and holds. Absolutely nothing appears on the
> lens at any point: no glow on any key, no graphic, no line, no panel, no text, no numbers, no note
> names, no light anywhere in frame that is not daylight from the window. The keyboard is lit only by
> the room. Naturalistic product-film photography, natural skin tones, gentle highlight roll-off, fine
> film grain, no teal and orange grade, no lens flare, no bloom, no vignette.

---

## 03. The moment it wakes

**Proving:** the single shot the film turns on. Help arrives after she starts, never before, and it
sits one beat ahead of the hand rather than in front of it.

**Aimed at:** Seedance 2.0. This is the prompt where literal obedience is worth more than beauty, and
it takes reference inputs, so feed it a still frame of the warm white treatment once you have one.
Kling 3.0 for a cheap first look at how bright the glow wants to be.

**Duration:** 6 seconds.

> First person point of view shot, the camera is the wearer's own eyes looking down at a piano. The
> frame sits at natural eye height above a slim matte black 88-key digital piano, angled down at
> roughly 40 degrees, so the keyboard runs across the lower two thirds of frame and the top third
> shows an empty music rest, off-white gib wall and the soft grey rectangle of a half-open timber
> sash window on the left. 28mm lens on a full-frame camera at T2.8, the keys sharp and the wall
> falling gently soft. The camera is locked still for the whole clip: no head movement, no drift, no
> push in, no zoom. Lighting is soft overcast mid-morning daylight from the window on camera left,
> one large low-contrast source raking across the white keys, no lamps on, no rim light, no haze. Two
> hands, a woman in her early twenties, short unpainted nails, the cuffs of a worn oatmeal marle
> long-sleeve tee pushed up her forearms, no rings, no watch. She begins playing a slow simple phrase
> with beginner care, her right hand moving steadily up the keyboard, keys visibly depressing under
> each finger. Only after her hands are already moving, a soft warm white glow appears on the top
> surface of the three white keys immediately ahead of where her right hand is travelling. The glow
> is warm white, the colour of a 2900K filament bulb, never blue, never cyan, never green. It has no
> outline, no border, no panel, no icon, no letter, no number and no text of any kind. It is a soft
> bloom sitting on the key surface itself, brightest in the middle of each key and falling off to
> nothing at the edges, peaking at about 40 per cent opacity. It appears roughly half a second ahead
> of her fingers and never further ahead than that, and it fades out over about a third of a second
> as each finger lands. Never more than three keys are lit at once. The glow never runs away down the
> keyboard, never lights the whole keyboard, never ripples, never blinks, never falls like notes in a
> music game, and it never appears before her hands are already moving. It never spills onto her
> fingers, onto the black keys, onto the piano body or onto the wall, because it exists on the lens
> and not in the room. At the right edge of frame, about sixty per cent of the way down, a single
> vertical hairline stroke of the same warm white, about one twelfth of the frame height, at 20 per
> cent opacity, perfectly still, with no tick marks, no numbers, no container and no border. The
> centre of the frame stays completely empty at all times. There is no head-up display, no reticle,
> no corner bracket, no bounding box, no dot matrix, no pixel grid and nothing green anywhere.
> Naturalistic product-film photography, natural skin tones, gentle highlight roll-off, fine film
> grain, no teal and orange grade, no lens flare, no bloom.

---

## 04. The pulse she feels

**Proving:** the timing channel is felt through the temple, not watched, and the device carries no
status light at all. One frame that argues the whole anti-heads-up-display position.

**Aimed at:** Kling 3.0. Cheap, 4K, and strongest on a still composed frame. Veo 3.1 as a second
option if the skin texture comes back plastic.

**Duration:** 6 seconds.

> Extreme close-up, third person, profile from camera right, on the right temple of a woman in her
> early twenties, Filipino New Zealander, dark hair loosely tied back with a few strands loose across
> her cheek. The frame holds the slim arm of a pair of thin matte black titanium glasses where it
> crosses her temple and passes over the top of her ear, filling the left two thirds of frame, with
> her ear and a strand of hair falling into soft focus on the right. 100mm macro lens on a full-frame
> camera at T2.8, focus precisely on the temple arm where it meets skin, everything more than two
> centimetres behind it dissolving completely. The camera is locked off with no movement at all: no
> drift, no breathing float, no push in. Lighting is soft overcast mid-morning daylight from a window
> behind camera left, one broad low-contrast source skimming across the skin so the fine hair on her
> temple catches, warm bounce off carpet filling the underside of her jaw, no lamps, no rim light, no
> hard specular hit, no haze. She is playing, so her head makes tiny rhythmic movements in time, a
> small settle on each beat, barely a millimetre of motion, the kind of thing you only notice once
> you have seen it. Her eyes are out of frame. The temple arm is completely inert: no indicator
> light, no LED, no glow, no pulse of light, no seam, no button, no port, no logo, no coloured
> accent, no visible electronics of any kind, just matte black titanium about 3mm thick with a
> slightly softened edge. Out of focus far behind her, the soft grey rectangle of a half-open sash
> window and the flat off-white of a gib wall. Nothing in frame is futuristic. Naturalistic
> product-film photography with real skin texture and visible pores, natural skin tones, gentle
> highlight roll-off, fine film grain, no teal and orange grade, no beauty smoothing, no lens flare,
> no bloom.

---

## 05. Deeper in, the guide keeping pace

**Proving:** the guide holds its distance as she speeds up. It follows her tempo rather than setting
it, which is the difference between assisting and driving.

**Aimed at:** Seedance 2.0 for the interface discipline. After the shoot, this is the one to run
through WAN 2.7 with a real point-of-view plate as the reference, because it does video-reference
style transfer and would carry the treatment onto real hands.

**Duration:** 7 seconds.

> First person point of view shot, the camera is the wearer's own eyes looking down at a piano, sat
> at natural eye height above a slim matte black 88-key digital piano and angled down at roughly 40
> degrees, the keyboard running across the lower two thirds of frame, the top third showing an empty
> music rest, off-white gib wall and the soft grey rectangle of a half-open timber sash window on the
> left. 28mm lens on a full-frame camera at T2.8, keys sharp, the wall soft. The camera stays locked
> and still throughout, with no drift, no push in, no zoom and no head movement other than an almost
> imperceptible settle in time with the playing. Lighting is soft overcast mid-morning daylight from
> the window on camera left, one large low-contrast source, warm bounce off oatmeal wool carpet, no
> lamps on, no haze. Two hands, a woman in her early twenties, short unpainted nails, the cuffs of a
> worn oatmeal marle long-sleeve tee pushed up her forearms. She is well into the piece now and
> confident: both hands playing, the left hand steady in the lower register and the right hand moving
> faster than before, keys visibly depressing, her wrists loose. A soft warm white glow, the colour
> of a 2900K filament bulb, sits on the top surface of two or three white keys just ahead of each
> hand and travels with them, always about half a second ahead and never further, keeping the same
> distance even as she speeds up. The glow has no outline, no border, no panel, no icon, no letter,
> no number and no text of any kind. It is a soft bloom on the key surface, brightest at the centre
> of each key and falling to nothing at the edges, peaking at about 40 per cent opacity, fading out
> over about a third of a second as each finger lands. Never more than three keys lit per hand. It
> never runs away down the keyboard, never lights the whole keyboard, never ripples, never blinks,
> never falls like notes in a music game, and it never spills onto her fingers, the black keys, the
> piano body or the wall, because it lives on the lens and not in the room. At the right edge of
> frame, about sixty per cent of the way down, a single vertical hairline stroke of the same warm
> white, roughly one twelfth of the frame height, at 20 per cent opacity, perfectly still, with no
> tick marks, no numbers, no container and no border. The centre of the frame stays completely empty.
> No head-up display, no reticle, no corner brackets, no bounding boxes, no dot matrix, no pixel
> grid, nothing green. Naturalistic product-film photography, natural skin tones, gentle highlight
> roll-off, fine film grain, no teal and orange grade, no lens flare, no bloom.

---

## 06. The glow is on the lens, not on the piano

**Proving:** the interface is private and lives on the wearer's lens. Everyone who sees the point of
view shots will quietly wonder whether the piano is lighting up, and this answers it without a word.
It is also the shot that keeps Compass from reading as a projector.

**Aimed at:** Veo 3.1. The whole shot is a lighting argument, and light behaviour is what it does
best.

**Duration:** 7 seconds.

> Medium wide static shot, third person, side on from camera left at keyboard height, so the woman is
> in profile and both her hands and the full length of the keyboard are visible in the same frame.
> 50mm lens on a full-frame camera at T2.0, focus on her hands, her face slightly soft in profile,
> the wall behind her falling away. The camera is locked off on a tripod with absolutely no movement:
> no drift, no push in, no handheld float, no zoom. Lighting is soft overcast mid-morning daylight
> from a half-open timber sash window just behind camera, one big low-contrast source, cool daylight
> bouncing back warm off flat oatmeal wool carpet, no lamps switched on, no rim light, no practical
> lights anywhere in frame, no haze. A woman in her early twenties, Filipino New Zealander, dark hair
> loosely tied back with a few strands out, wearing a plain worn oatmeal marle long-sleeve tee and
> mid-grey trackpants, sitting on a plain wooden stool, playing a slow phrase on a slim matte black
> 88-key digital piano with obvious beginner concentration, her head tipped slightly forward and her
> eyes down on her hands. She wears thin matte black titanium glasses with small softly rounded
> rectangular clear lenses and slim 3mm arms. Seen from outside like this, the glasses are completely
> dark and inert: no glow on the lens, no graphic visible from this angle, no light leaking from the
> frame or the temple arm, no indicator, no logo. Nothing on the piano is lit. The white keys are lit
> only by the window and no key glows, no light falls on her hands from above or in front, there is
> no projected light, no beam, no cast glow from the glasses onto the keyboard, her face, her clothes
> or the wall. The room reads completely ordinary and present day: off-white gib wall with a timber
> picture rail below a plain scotia, flat oatmeal wool carpet, an oil column heater switched off
> against the skirting, a folded merino jumper on a bed at the edge of frame. Naturalistic
> product-film photography, natural skin tones, slightly desaturated greens, gentle highlight
> roll-off, fine film grain, no teal and orange grade, no lens flare, no bloom, no volumetric light.

---

## 07. Close on her face

**Proving:** the poster hero candidate. A person using the product, in context, with the interface
reading as warmth on the glass rather than as a screen.

**Aimed at:** Kling 3.0. It goes to 4K, it holds composed frames, and Veo 3.1 is the platform's
documented weak spot on tight faces. Feed Soul ID twenty stills of the same face first if you want
this to match the other seven.

**Duration:** 8 seconds.

> Close-up, third person, three-quarter front from camera left and very slightly below her eyeline,
> framing from the top of her shoulders to just above her hairline, her face filling most of frame
> and turned about twenty degrees away from lens with her eyes down on the keys below. 85mm lens on a
> full-frame camera at T1.4, focus precisely on the front rim of the glasses and her near eye, the
> far side of her face falling soft and the room behind her completely dissolved into a soft grey and
> off-white field. An extremely slow push in of no more than a few centimetres across the whole clip,
> so slow it is barely readable as movement, and nothing else: no handheld, no drift, no rack focus,
> no tilt. Lighting is soft overcast mid-morning daylight from a large window just off camera left,
> one broad low-contrast source wrapping around her cheekbone and leaving the far side of her face in
> gentle fall-off, warm bounce off oatmeal wool carpet lifting the underside of her jaw, no lamps, no
> rim light, no kicker, no haze, no hard specular hit on the lenses. A woman in her early twenties,
> Filipino New Zealander, dark hair loosely tied back with a few strands across her temple, small
> gold stud earrings, no visible makeup, real skin texture with visible pores and a few freckles,
> wearing a plain worn oatmeal marle long-sleeve tee. She is playing and concentrating: her eyes are
> down and steady, her lips slightly parted, one small breath across the clip, no smile, no reaction,
> nothing performed. She wears thin matte black titanium glasses with small softly rounded
> rectangular clear lenses and slim 3mm arms, no visible electronics, no camera, no indicator light,
> no logo, no coloured accent. On the inner surface of the near lens, a very faint warm white bloom,
> the colour of a 2900K filament bulb, completely unresolved and out of focus, as if a small warm
> light were sitting on the inside of the glass. It reads as a soft smudge of warm light across the
> lower third of that lens only, at about 15 per cent opacity, with no legible detail, no text, no
> numbers, no icon, no border, no visible pixels, no dot matrix and nothing green. The centre of the
> lens, directly in front of her pupil, stays completely clear, and her eye is fully visible through
> it. The glow does not spill onto her cheek or her lashes. Naturalistic portrait photography in a
> product-film register, natural skin tones, gentle highlight roll-off, fine film grain, no teal and
> orange grade, no beauty smoothing, no lens flare, no bloom, no vignette.

---

## 08. She takes them off

**Proving:** the third act in one gesture. The work is finished and the device just stops being
there, with no shutdown, no farewell animation and nothing to dismiss.

**Aimed at:** Veo 3.1. A mid shot with a clean two-handed gesture, which is the motion physics it
handles best. Seedance 2.0 if the take-off gesture comes back clumsy, since it follows an explicit
action sequence more literally.

**Duration:** 8 seconds.

> Medium static shot, third person, three-quarter front from camera left at seated chest height,
> framing her from mid-thigh to just above her head with the slim matte black 88-key digital piano
> running across the bottom of frame. 50mm lens on a full-frame camera at T2.0, focus on her face and
> hands, the off-white gib wall behind her soft. The camera is locked off on a tripod with no
> movement at all: no push in, no drift, no handheld float, no zoom. Lighting is soft overcast
> mid-morning daylight from a half-open timber sash window on camera left, one broad low-contrast
> source, warm bounce off flat oatmeal wool carpet, no lamps on, no rim light, no haze. A woman in
> her early twenties, Filipino New Zealander, dark hair loosely tied back with a few strands out,
> wearing a plain worn oatmeal marle long-sleeve tee and mid-grey trackpants, barefoot, sitting on a
> plain wooden stool. She plays the last few notes of a phrase, slows, and her hands come to rest on
> the keys. She holds still for a beat, breathes out, then lifts both hands, takes the thin matte
> black titanium glasses off with both hands by the arms, and sets them down on the closed lid of the
> piano to her right. She looks at the keys, not at the glasses, and rests her hands in her lap. Her
> expression stays quiet and unresolved: no smile, no satisfied nod, no look to camera, nothing
> performed. Throughout the entire clip the lenses stay completely clear and empty with nothing on
> them at any point: no glow fading out, no graphic dismissing, no shutdown animation, no indicator
> going dark, no light of any kind. No key on the piano glows. The room is just a room: off-white gib
> wall with a timber picture rail below a plain scotia, an oil column heater switched off against the
> skirting, a mug on the windowsill, a wet green hedge and a grey corrugated iron roof through the
> window, nothing futuristic anywhere in frame. Naturalistic product-film photography, natural skin
> tones, slightly desaturated greens, gentle highlight roll-off, fine film grain, no teal and orange
> grade, no lens flare, no bloom.

---

## Things to avoid

The failure modes that actually turn up, and what to do about each one.

**Hands on a keyboard.** This is the hardest thing in the whole set and every model still gets it
wrong some of the time: six fingers, two fingers fusing, a thumb bending backwards, hands floating a
centimetre above keys that never depress, a hand that slides across the keyboard without the fingers
moving. Mitigations that work: keep the clip to six or seven seconds, keep the playing slow and the
phrase short, let the hands sit a little smaller in frame rather than filling it, keep them off the
exact focal plane so the fingers are not the sharpest object, generate four to six takes, and be
willing to cut on the first two seconds. If a take is right for one second only, that is still a
usable one second in a concept edit.

**Text rendering.** Every model produces garbage letterforms. There is no text anywhere in the
musician thread and that is a product decision, not a workaround, but it also means any take that
invents note names, a key signature, a bar counter, a clock, numbers on the progress hairline or a
logo on the frame is a reject. Do not try to fix it with a better prompt. Discard the take.

**The game head-up display.** The default thing a model reaches for when it hears "interface" is a
science fiction overlay. Reject on sight: reticles, crosshairs, corner brackets, bounding boxes,
scanning lines, targeting frames, glassmorphic panels with rounded borders, drop shadows, a filling
progress bar, percentage readouts, cyan, teal, electric blue, green, purple, and the whole Even
Realities dot matrix and pixel grid look. Compass is warm white, one weight, no borders, and it fades
rather than switching.

**Anything that makes the device look like it is playing.** This is the one that kills the film's
argument rather than just its look. Reject anything where the guide appears before her hands are
moving, lights more than three or four keys, runs ahead down the keyboard, shows a full melody line,
falls down the frame like a rhythm game, animates a phantom hand or finger, ripples across the whole
keyboard, or where she looks like she is following it rather than it following her. The guide is half
a second ahead. Not two bars ahead.

**The projector problem.** The glow must never cast light into the room. No light falling on her
fingers, no spill onto the piano body, no beam from the glasses, no glow on the wall, no reflection
of the interface in the window. The interface is on the lens. If a take shows the piano itself
lighting up, the audience will read Compass as a light rather than as glasses and the whole privacy
and on-device argument goes with it.

**The glasses drifting.** Models morph thin frames into chunky acetate hipster glasses, sunglasses,
safety goggles, a visor or a full headset within a couple of seconds. Restate thin matte black
titanium, small clear untinted lenses, slim arms, no electronics, no camera, no logo, no strap, in
every prompt, and reject anything with a visible lens housing, a camera bump, a coloured temple
accent or a tint.

**Generic American interiors.** The default bedroom a model builds is a US one: louvred wardrobe
doors, drywall with two-slot outlets and no switch, skirting heaters, forced-air vents, a college
pennant, a ceiling fan. Everything in this set names the New Zealand alternative instead, and it is
worth restating: gib walls, a timber picture rail and scotia, a double-hung timber sash window with a
brass latch, an angled three-pin socket with its own rocker switch, an oil column heater, wool
carpet, corrugated iron through the window. It matters to this project specifically, because the
whole Aotearoa argument lives inside the world rather than in the framing.

**The tech-ad lighting reflex.** Blue rim light, LED strips, neon, purple practicals, volumetric
haze, wet reflective surfaces, a hard kicker on the frame of the glasses. All of it makes the film
look like every other AI product video. Overcast Auckland morning, one window, no lamps.

**Camera drift.** Models add a slow push or a handheld float to almost everything unless told not to,
and on the keyboard shots that motion will make the composite look impossible later. Every prompt
above states the absence of movement explicitly. Keep that language when you write new ones.

**Generated audio.** Veo 3.1 and Seedance 2.0 produce native audio in the same pass and the piano it
invents will not match the hand positions. Mute everything and treat these as silent.

**Continuity across the eight.** The same face will not come back on its own. Use Soul ID on Kling
3.0 or Seedance 2.0's reference inputs, or generate a single still you like first and use it as the
start frame for everything else.

---

## Logging and the poster ban

**Every generation gets logged.** Tool, model, the exact prompt text, the date, and what the output
was used for. That is the course's AI acknowledgement requirement and it is cheaper to log as you go
than to reconstruct it in October. Keep the log in this folder beside the prompts, one row per
generation, including the takes that failed, because the failures are the more interesting evidence
of the process.

Suggested columns: date, prompt number, tool, model, exact prompt text or a reference to the version
here, number of takes, outcome, where it was used.

**Nothing generated from this file goes anywhere near the posters.** The poster brief bans
AI-generated images outright, and that ban is absolute regardless of how much the image was cleaned
up afterwards. Prompt 07 is described above as a hero candidate, and that means it is a candidate for
working out how the real hero shot should be lit and framed, not a candidate for the printed sheet.
The real hero image is a still from the real shoot on a real stills camera.

Two live flags on this, both of which are already on the list for Leo's session on 15 September:

1. Whether a frame of real footage with an interface composited on top counts as an AI-generated
   image is genuinely unresolved, and it decides the whole build order to 15 October. Until there is
   a ruling, the safe assumption is the strict one: no output from this file on any printed
   deliverable, full stop.
2. The posters are called A1 in `concept-notes/world-building.md` and A3 in the instruction that
   produced this file. Worth confirming which before anything is set up for print.
