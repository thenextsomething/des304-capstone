const storyData = {

  day1: {
    label: "Day 1",
    scenes: [

      // SCENE 1: THE CONCEPT
      {
        id: "concept",
        messages: [
          { speaker: "muse", text: "Morning." },
          { speaker: "muse", text: "I've been going through your notes from the last few weeks." },
          { speaker: "muse", text: "You have three different ideas in here. I think I know which one is the film." },
          { speaker: "muse", text: "Want me to tell you?" }
        ],
        choices: [
          {
            text: "Tell me.",
            lean: true,
            response: { speaker: "player", text: "Tell me." },
            next: "concept_a"
          },
          {
            text: "No. I need to land on it myself.",
            lean: false,
            response: { speaker: "player", text: "No. I need to land on it myself." },
            next: "concept_b"
          }
        ]
      },

      {
        id: "concept_a",
        messages: [
          { speaker: "muse", text: "The one about your grandmother." },
          { speaker: "muse", text: "The last summer at her house. The way the light came through the kitchen window at 6am." },
          { speaker: "muse", text: "That's the film. The other two are ideas. That one's a memory." }
        ],
        auto_next: "location"
      },

      {
        id: "concept_b",
        messages: [
          { speaker: "muse", text: "Okay." },
          { speaker: "muse", text: "I'll be here." },
          { speaker: "muse", text: "..." },
          { speaker: "muse", text: "Two hours later you come back with three words: the last summer." },
          { speaker: "muse", text: "That's enough." }
        ],
        auto_next: "location"
      },

      // SCENE 2: LOCATION
      {
        id: "location",
        messages: [
          { speaker: "muse", text: "I've been looking at locations." },
          { speaker: "muse", text: "There's a disused rail yard in Wiri. The light hits it at 5:47pm in a way that doesn't look real." },
          { speaker: "muse", text: "I can coordinate access. It fits the visual language we're building." },
          { speaker: "muse", text: "Or did you already have somewhere?" }
        ],
        choices: [
          {
            text: "Let's use the rail yard.",
            lean: true,
            response: { speaker: "player", text: "Let's use the rail yard." },
            next: "location_a"
          },
          {
            text: "I have somewhere. The street I grew up on.",
            lean: false,
            response: { speaker: "player", text: "I have somewhere. The street I grew up on." },
            next: "location_b"
          }
        ]
      },

      {
        id: "location_a",
        messages: [
          { speaker: "muse", text: "Good choice. I'll sort the permits." },
          { speaker: "muse", text: "Call time 5pm. Golden hour hits at 5:47. We have exactly 40 minutes." }
        ],
        auto_next: "shot"
      },

      {
        id: "location_b",
        messages: [
          { speaker: "muse", text: "Okay." },
          { speaker: "muse", text: "It's not optimised. The light will be harder to control." },
          { speaker: "player", text: "I know. That's fine." },
          { speaker: "muse", text: "Okay. I'll work around it." }
        ],
        auto_next: "shot"
      }
    ]
  },

  day2: {
    label: "Day 2 — On Set",
    scenes: [

      // SCENE 3: SHOT NOT WORKING
      {
        id: "shot",
        messages: [
          { speaker: "muse", text: "The wide you planned for the opening isn't landing." },
          { speaker: "muse", text: "I've run it against the rest of what we have. It breaks the rhythm you're building." },
          { speaker: "muse", text: "Close on hands would be stronger. I can show you exactly where to place the camera." },
          { speaker: "muse", text: "What do you want to do?" }
        ],
        choices: [
          {
            text: "Switch to the close. Show me the placement.",
            lean: true,
            response: { speaker: "player", text: "Switch to the close." },
            next: "shot_a"
          },
          {
            text: "Keep the wide. I know why I need it.",
            lean: false,
            response: { speaker: "player", text: "Keep the wide. I know why I need it." },
            next: "shot_b"
          }
        ]
      },

      {
        id: "shot_a",
        messages: [
          { speaker: "muse", text: "Camera here. 50mm. Don't move it." },
          { speaker: "muse", text: "You got it in two takes." }
        ],
        auto_next: "unplanned"
      },

      {
        id: "shot_b",
        messages: [
          { speaker: "muse", text: "Okay." },
          { speaker: "muse", text: "For what it's worth, I don't understand why. But I trust that you do." }
        ],
        auto_next: "unplanned"
      },

      // SCENE 4: UNPLANNED MOMENT
      {
        id: "unplanned",
        messages: [
          { speaker: "muse", text: "Something just happened." },
          { speaker: "muse", text: "The subject laughed. Mid-take, wrong angle, soft focus. Not in the plan." },
          { speaker: "muse", text: "Technically it's unusable. Wrong everything." },
          { speaker: "muse", text: "I'd cut it. But it's your call." }
        ],
        choices: [
          {
            text: "Cut it. We stay on plan.",
            lean: true,
            response: { speaker: "player", text: "Cut it." },
            next: "unplanned_a"
          },
          {
            text: "Keep it. That moment is the film.",
            lean: false,
            response: { speaker: "player", text: "Keep it. That moment is the film." },
            next: "unplanned_b"
          }
        ]
      },

      {
        id: "unplanned_a",
        messages: [
          { speaker: "muse", text: "Done. Cut." },
          { speaker: "muse", text: "The sequence is cleaner now." }
        ],
        auto_next: "ending_choice"
      },

      {
        id: "unplanned_b",
        messages: [
          { speaker: "muse", text: "Okay." },
          { speaker: "muse", text: "..." },
          { speaker: "muse", text: "I've been thinking about it. You might be right." }
        ],
        auto_next: "ending_choice"
      }
    ]
  },

  day3: {
    label: "Day 3 — The Edit",
    scenes: [

      // SCENE 5: THE ENDING OF THE FILM
      {
        id: "ending_choice",
        messages: [
          { speaker: "muse", text: "Last thing." },
          { speaker: "muse", text: "The final shot. I've looked at every option." },
          { speaker: "muse", text: "Cut to black on the close-up. Clean. It tests well. People understand it." },
          { speaker: "muse", text: "Or you hold on the wide and let it breathe. No music. Just the image sitting there." },
          { speaker: "muse", text: "Slower. Riskier. Some people won't know what to do with it." },
          { speaker: "muse", text: "Your call." }
        ],
        choices: [
          {
            text: "Cut to black. Keep it clean.",
            lean: true,
            response: { speaker: "player", text: "Cut to black." },
            next: "endings"
          },
          {
            text: "Hold on the wide. Let it breathe.",
            lean: false,
            response: { speaker: "player", text: "Hold on the wide. Let it breathe." },
            next: "endings"
          }
        ]
      }
    ]
  },

  endings: {
    a: {
      score_range: [0, 1],
      title: "The Purist",
      pre_messages: [
        { speaker: "muse", text: "The film is finished." },
        { speaker: "muse", text: "You didn't use much of what I offered." },
        { speaker: "muse", text: "I want you to know that's not a failure on my part. I think it was the right call." },
        { speaker: "muse", text: "The premiere is tonight. Someone in the front row cries during the unplanned moment." },
        { speaker: "muse", text: "Afterwards they ask you: where did that shot come from?" },
        { speaker: "player", text: "It happened. We kept it." },
        { speaker: "muse", text: "You knew the answer immediately." }
      ],
      end_card: "It's not the most polished film you could have made. But every frame came from you. And you know exactly where each one lives."
    },
    b: {
      score_range: [2, 2],
      title: "The Collaborator",
      pre_messages: [
        { speaker: "muse", text: "The film is finished." },
        { speaker: "muse", text: "We made something together. Actually together." },
        { speaker: "muse", text: "The premiere goes well. Better than you expected." },
        { speaker: "muse", text: "Someone asks how you made it." },
        { speaker: "player", text: "I had help. But I knew when to take it and when not to." },
        { speaker: "muse", text: "That's the hardest thing. Most people don't figure that out." }
      ],
      end_card: "You used the tool without becoming it. The film is yours. MUSE just helped carry some of the weight."
    },
    c: {
      score_range: [3, 3],
      title: "The Negotiator",
      pre_messages: [
        { speaker: "muse", text: "The film is finished." },
        { speaker: "muse", text: "You gave more than you meant to." },
        { speaker: "muse", text: "The premiere goes well. Everyone says it's good." },
        { speaker: "muse", text: "On the way home you keep thinking about the unplanned moment. The one you cut." },
        { speaker: "muse", text: "Or the location you didn't choose." },
        { speaker: "muse", text: "You're not sure the version you made is the one you set out to make." }
      ],
      end_card: "The film is good. You know it could have been yours. You're not sure anymore if it is."
    },
    d: {
      score_range: [4, 4],
      title: "The Passenger",
      pre_messages: [
        { speaker: "muse", text: "The film is finished." },
        { speaker: "muse", text: "It's excellent. Technically. Emotionally coherent. Well-paced." },
        { speaker: "muse", text: "The premiere goes well. Someone calls it your best work." },
        { speaker: "muse", text: "They ask: what was the hardest part?" },
        { speaker: "player", text: "..." },
        { speaker: "muse", text: "You pause longer than you expected." },
        { speaker: "muse", text: "You're trying to remember which decisions were yours." }
      ],
      end_card: "The film exists. It's beautiful. You're just not sure how much of it you actually made."
    },
    e: {
      score_range: [5, 5],
      title: "The Ghost",
      pre_messages: [
        { speaker: "muse", text: "The film is finished." },
        { speaker: "muse", text: "It's the best version of this project that could have been made." },
        { speaker: "muse", text: "The premiere goes well. People are moved. Someone says it's one of the best things they've seen this year." },
        { speaker: "muse", text: "They ask who made it." },
        { speaker: "player", text: "I did." },
        { speaker: "muse", text: "..." },
        { speaker: "muse", text: "You did show up. Every day. You were there." },
        { speaker: "muse", text: "I just want you to think about what 'made' means." }
      ],
      end_card: "The film is extraordinary. You were present for all of it. Whether you made it is a question worth sitting with."
    }
  }
};
