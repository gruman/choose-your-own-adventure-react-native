const jekyllHydeAdventure = {
  title: "Mysterious Transformation",
  original: "Dr. Jekyl and Mr. Hyde",
  chapters: [
    {
      id: 0,
      text: "You made the wrong choice.",
      buttons: [
        {
          text: "Turn around",
          room: 1
        }
      ]
    },
    {
      id: 1,
      text: `After wandering through a dense fog, you stumble upon a peculiar laboratory.\n
A man with a kind face and gentle demeanor approaches you. "Greetings, traveler. My name is Dr. Jekyll. I invite you to witness my groundbreaking experiment."\n
Do you accept his invitation?`,
      buttons: [
        {
          text: "Accept",
          room: 2
        },
        {
          text: "Decline",
          room: 3
        }
      ]
    },
    {
      id: 2,
      text: `You enter the laboratory and see Dr. Jekyll preparing a potion. He offers you a sip, claiming it's harmless. Do you drink the potion?`,
      buttons: [
        {
          text: "Drink the potion",
          room: 4
        },
        {
          text: "Refuse the potion",
          room: 5
        }
      ]
    },
    {
      id: 3,
      text: "As you turn to leave, the fog thickens, and you find yourself lost in a mysterious part of the city. The streets seem unfamiliar, and shadows play tricks on your eyes.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 4,
      text: `The potion transforms you into a different person. Your surroundings change, and you become Mr. Hyde.\n
You feel a surge of malevolence. Dr. Jekyll pleads for your help to find an antidote. Do you assist him or embrace the dark side?`,
      buttons: [
        {
          text: "Help Dr. Jekyll",
          room: 6
        },
        {
          text: "Embrace the dark side",
          room: 7
        }
      ]
    },
    {
      id: 5,
      text: "Dr. Jekyll seems disappointed but understanding. As you leave the laboratory, you hear strange sounds echoing through the foggy streets.",
      buttons: [
        {
          text: "Continue",
          room: 8
        },
      ]
    },
    {
      id: 6,
      text: "Together with Dr. Jekyll, you embark on a perilous journey to find the antidote. The path ahead is shrouded in darkness. Suddenly, you encounter a fork in the road.",
      buttons: [
        {
          text: "Left path",
          room: 9
        },
        {
          text: "Right path",
          room: 10
        },
      ]
    },
    {
      id: 7,
      text: "You revel in the dark side, causing chaos and fear in the city. The transformation becomes irreversible, and you lose touch with your humanity.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 8,
      text: "The fog thickens, and strange figures lurk in the shadows. You sense a presence following you but can't quite make out what it is.",
      buttons: [
        {
          text: "Continue",
          room: 11
        },
      ]
    },
    {
      id: 9,
      text: "The left path leads to a mysterious laboratory where you discover a potential antidote. However, a shadowy figure guards the entrance. Do you confront the figure or look for an alternate route?",
      buttons: [
        {
          text: "Confront the figure",
          room: 12
        },
        {
          text: "Look for an alternate route",
          room: 13
        },
      ]
    },
    {
      id: 10,
      answer: "truth",
      text: "The right path is filled with illusions and deceptions. To progress, you must answer a riddle: What is stronger than fear, more powerful than hope, and more cunning than knowledge?",
      success: 14,
      failure: 15
    },
    {
      id: 11,
      text: "The presence becomes more tangible, and you catch glimpses of a sinister figure. It's Mr. Hyde, and he seems to be following you.",
      buttons: [
        {
          text: "Continue cautiously",
          room: 16
        },
        {
          text: "Confront Mr. Hyde",
          room: 17
        },
      ]
    },
    {
      id: 12,
      text: "The shadowy figure reveals itself as another transformed individual seeking the antidote. Together, you face challenges to reach the potential cure.",
      buttons: [
        {
          text: "Continue",
          room: 18
        },
      ]
    },
    {
      id: 13,
      text: "While searching for an alternate route, you encounter eerie sounds and unsettling visions. The path becomes increasingly treacherous.",
      buttons: [
        {
          text: "Continue cautiously",
          room: 19
        },
      ]
    },
    {
      id: 14,
      text: "Correct! The illusions dissipate, revealing a clear path. You proceed cautiously.",
      buttons: [
        {
          text: "Continue",
          room: 20
        },
      ]
    },
    {
      id: 15,
      text: "Wrong answer! The illusions intensify, distorting reality. You find yourself lost in a maze of deception.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 16,
      text: "As you continue cautiously, Mr. Hyde confronts you. A tense standoff ensues, and you must decide whether to trust him or escape.",
      buttons: [
        {
          text: "Trust Mr. Hyde",
          room: 21
        },
        {
          text: "Escape",
          room: 22
        },
      ]
    },
    {
      id: 17,
      text: "You confront Mr. Hyde, and a fierce battle ensues. The outcome is uncertain, and the fog thickens, obscuring your surroundings.",
      buttons: [
        {
          text: "Continue",
          room: 23
        },
      ]
    },
    {
      id: 18,
      text: "Working together, you and the other transformed individual overcome challenges and reach the laboratory with the potential antidote.",
      buttons: [
        {
          text: "Administer the antidote",
          room: 24
        },
      ]
    },
    {
      id: 19,
      text: "The alternate route leads to a mysterious chamber with a haunting atmosphere. You sense an ominous presence watching you.",
      buttons: [
        {
          text: "Investigate",
          room: 25
        },
        {
          text: "Avoid and continue",
          room: 26
        },
      ]
    },
    {
      id: 20,
      text: "The clear path leads you to a room with two potions. One may lead to Dr. Jekyll's cure, and the other may trap you in a perpetual transformation.\nChoose wisely.",
      buttons: [
        {
          text: "Green potion",
          room: 27
        },
        {
          text: "Purple potion",
          room: 28
        },
      ]
    },
    {
      id: 21,
      text: "Trusting Mr. Hyde proves to be the right decision. He reveals crucial information about the antidote and helps you navigate the labyrinthine laboratory.",
      buttons: [
        {
          text: "Continue",
          room: 29
        },
      ]
    },
    {
      id: 22,
      text: "You escape from Mr. Hyde, but the fog thickens, making it difficult to find your way. The mysterious presence lingers.",
      buttons: [
        {
          text: "Continue cautiously",
          room: 30
        },
      ]
    },
    {
      id: 23,
      text: "The fog lifts, revealing the transformed city. Mr. Hyde is nowhere to be seen, and the fate of Dr. Jekyll remains uncertain.",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
    {
      id: 24,
      text: "You administer the antidote, and the transformation gradually reverses. Dr. Jekyll expresses gratitude, and you find yourself back at the laboratory entrance.",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
    {
      id: 25,
      text: "Investigating the chamber reveals a hidden passage. You discover an ancient diary detailing the history of Dr. Jekyll's experiments.",
      buttons: [
        {
          text: "Continue",
          room: 31
        },
      ]
    },
    {
      id: 26,
      text: "You avoid the ominous presence and continue through the alternate route. The path becomes increasingly surreal, and you question the reality around you.",
      buttons: [
        {
          text: "Continue cautiously",
          room: 32
        },
      ]
    },
    {
      id: 27,
      text: "You drink the green potion and feel a surge of energy. The laboratory transforms, and you find yourself back at the entrance. You made it out!",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
    {
      id: 28,
      text: "As you drink the purple potion, the laboratory morphs into a nightmarish realm. You become trapped in a perpetual cycle of transformation.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 29,
      text: "With Mr. Hyde's guidance, you navigate through the labyrinthine laboratory and reach the chamber containing the potential antidote.",
      buttons: [
        {
          text: "Administer the antidote",
          room: 24
        },
      ]
    },
    {
      id: 30,
      text: "The fog clears, and you find yourself back at the entrance of the laboratory. The mysterious presence has vanished.",
      buttons: [
        {
          text: "Continue",
          room: 33
        },
      ]
    },
    {
      id: 31,
      text: "The diary reveals the tragic story of Dr. Jekyll's experiments and the struggle between his two personas. It adds a layer of understanding to the mysterious events.",
      buttons: [
        {
          text: "Continue",
          room: 33
        },
      ]
    },
    {
      id: 32,
      text: "The alternate route leads to a surreal dimension where reality bends. You question whether you can trust your senses.",
      buttons: [
        {
          text: "Continue",
          room: 33
        },
      ]
    },
    {
      id: 33,
      text: "As you continue, the laboratory's secrets and mysteries unfold. The journey takes unexpected turns, leaving you questioning the boundary between science and the supernatural.",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
  ]
};

export default jekyllHydeAdventure;
