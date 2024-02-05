const story = {
  title: "Castle Dracula",
  original: "Dracula",
  chapters: [
  { 
    id: 1, 
    text: "Outside Castle Dracula, facing ominous gates. The journey is shrouded in mystery.", 
    buttons: [
      { 
        text: "Enter the castle", 
        room: 2 
      }
    ] 
  },
  { 
    id: 2, 
    text: "Encounter a spectral figure warning of dark forces. Choices must be made to navigate the perilous path.", 
    buttons: [
      { 
        text: "Continue", 
        room: 3 
      }
    ] 
  },
  { 
    id: 3, 
    text: "Grand hall with diverging paths. Whispers guide. Follow cryptic guidance or forge your own destiny?", 
    buttons: [
      { 
        text: "Follow guidance", 
        room: 4 
      },
      { 
        text: "Forge your path", 
        room: 5 
      }
    ] 
  },
  { 
    id: 4, 
    text: "Reading a dark tome offers knowledge but at a cost. Dark power unveils a hidden passage to confront Count Dracula.", 
    buttons: [
      { 
        text: "Choose restraint", 
        room: 5 
      }
    ] 
  },
  { 
    id: 5, 
    text: "Choosing restraint opens an alternate passage. The mirror reflects your past and futures, offering a glimpse into the consequences of your choices.", 
    buttons: [
      { 
        text: "Confront the mirror", 
        room: 6 
      },
      { 
        text: "Continue exploring", 
        room: 7 
      }
    ] 
  },
  { 
    id: 6, 
    text: "The final confrontation with Count Dracula unfolds. Your choices and the darkness within you will determine the fate of Castle Dracula and its curse.", 
    buttons: [
      { 
        text: "Explore the realm between worlds", 
        room: 8 
      },
      { 
        text: "Stay in the realm", 
        room: 9 
      }
    ] 
  },
  { 
    id: 7, 
    text: "Exploring the realm between worlds, ethereal beings and surreal landscapes beckon. Portals lead to diverse realities—choices echo across the multiverse.", 
    buttons: [
      { 
        text: "Staying in the realm", 
        room: 9 
      },
      { 
        text: "Continue exploring", 
        room: 10 
      }
    ] 
  },
  { 
    id: 8, 
    text: "Staying in the realm between worlds, become a guardian of portals or explore new realities. Each choice shapes your existence beyond the confines of Castle Dracula.", 
    buttons: [
      { 
        text: "Watch over the portals", 
        room: 11 
      },
      { 
        text: "Explore new realities", 
        room: 12 
      }
    ] 
  },
  { 
    id: 9, 
    text: "Confront mirrored reflections or find a way back through the mirror. Distorted mirrors reveal pivotal moments, reflecting the consequences of your actions.", 
    buttons: [
      { 
        text: "Explore uncharted realities", 
        room: 13 
      },
      { 
        text: "Reflect on your journey", 
        room: 14 
      }
    ] 
  },
  { 
    id: 10, 
    text: "Explore uncharted realities, witnessing the aftermath of your choices. Reflect on your journey or continue exploring the diverse facets of your personality.", 
    buttons: [
      { 
        text: "Confront the reflections", 
        room: 15 
      },
      { 
        text: "Embrace the complexity of your choices", 
        room: 16 
      }
    ] 
  },
  { 
    id: 11, 
    text: "The journey continues, embracing infinite possibilities. Confronting the mirrored selves reveals an eerie revelation or finding a way back through the mirror leads to distorted reflections.", 
    buttons: [
      { 
        text: "Navigate the grand hall with twists and turns", 
        room: 17 
      },
      { 
        text: "Approach the final confrontation", 
        room: 18 
      }
    ] 
  },
  { 
    id: 12, 
    text: "Navigate the grand hall with twists and turns. The haunting melody guides you to hidden passages, revealing the secrets of Castle Dracula.", 
    buttons: [
      { 
        text: "Confront Count Dracula in the final battle", 
        room: 19 
      },
      { 
        text: "Proceeding to the heart of the castle", 
        room: 20 
      }
    ] 
  },
  { 
    id: 13, 
    text: "Confront Count Dracula in the final battle. The fate of the castle rests on your choices, and the darkness within you.", 
    buttons: [
      { 
        text: "Entering the hidden passage", 
        room: 21 
      },
      { 
        text: "Embracing the symbol's power", 
        room: 22 
      }
    ] 
  },
  { 
    id: 14, 
    text: "Proceeding to the heart of the castle, you feel a powerful force guiding you. The castle's mysteries become clearer, and the final confrontation awaits.", 
    buttons: [
      { 
        text: "Entering the hidden passage", 
        room: 23 
      },
      { 
        text: "Embracing the symbol's power", 
        room: 24 
      }
    ] 
  },
  { 
    id: 15, 
    text: "Entering the hidden passage, the mystical energy protects you from the castle's malevolence. The passage leads to the heart of Castle Dracula.", 
    buttons: [
      { 
        text: "Embracing the symbol's power", 
        room: 25 
      },
      { 
        text: "Following the cryptic guidance", 
        room: 26 
      }
    ] 
  },
  { 
    id: 16, 
    text: "Embracing the symbol's power, a connection to ancient forces guides you through the castle, revealing hidden secrets.", 
    buttons: [
      { 
        text: "Following the cryptic guidance", 
        room: 27 
      },
      { 
        text: "Approach the final confrontation", 
        room: 28 
      }
    ] 
  },
  { 
    id: 17, 
    text: "Following the cryptic guidance, you navigate the grand hall with twists and turns. The whispers lead you closer to the final confrontation with Count Dracula.", 
    buttons: [
      { 
        text: "Approach the final confrontation", 
        room: 29 
      },
      { 
        text: "Continue", 
        room: 30 
      }
    ] 
  },
  { 
    id: 18, 
    text: "Revealing the truth exposes the vampiric council's dark motives. The fate of the castle and its curse hangs in the balance.", 
    buttons: [
      { 
        text: "Face the consequences", 
        room: 31 
      },
      { 
        text: "Continue", 
        room: 32 
      }
    ] 
  },
  { 
    id: 19, 
    text: "The final battle with Count Dracula reaches its climax. Your choices and the darkness within you determine the fate of Castle Dracula and its lingering curse.", 
    buttons: [
      { 
        text: "Continue", 
        room: 33 
      },
      { 
        text: "Continue cautiously", 
        room: 34 
      }
    ] 
  },
  { 
    id: 20, 
    text: "Proceeding to the heart of the castle, you feel a powerful force guiding you. The castle's mysteries become clearer, and the final confrontation awaits.", 
    buttons: [
      { 
        text: "Continue", 
        room: 35 
      },
      { 
        text: "Navigate the twisted paths", 
        room: 36 
      }
    ] 
  },
  { 
    id: 21, 
    text: "Entering the hidden passage, the mystical energy protects you from the castle's malevolence. The passage leads to the heart of Castle Dracula.", 
    buttons: [
      { 
        text: "Continue", 
        room: 37 
      },
      { 
        text: "Continue cautiously", 
        room: 38 
      }
    ] 
  },
  { 
    id: 22, 
    text: "Embracing the symbol's power, you feel a connection to ancient forces. The symbols guide you through the castle, revealing hidden secrets.", 
    buttons: [
      { 
        text: "Continue", 
        room: 39 
      },
      { 
        text: "Continue cautiously", 
        room: 40 
      }
    ] 
  },
  { 
    id: 23, 
    text: "Entering the hidden passage, the mystical energy protects you from the castle's malevolence. The passage leads to the heart of Castle Dracula.", 
    buttons: [
      { 
        text: "Continue", 
        room: 41 
      },
      { 
        text: "Continue cautiously", 
        room: 42 
      }
    ] 
  },
  { 
    id: 24, 
    text: "Embracing the symbol's power, you feel a connection to ancient forces. The symbols guide you through the castle, revealing hidden secrets.", 
    buttons: [
      { 
        text: "Continue", 
        room: 43 
      },
      { 
        text: "Continue cautiously", 
        room: 44 
      }
    ] 
  },
  { 
    id: 25, 
    text: "Entering the hidden passage, the mystical energy protects you from the castle's malevolence. The passage leads to the heart of Castle Dracula.", 
    buttons: [
      { 
        text: "Continue", 
        room: 45 
      },
      { 
        text: "Continue cautiously", 
        room: 46 
      }
    ] 
  },
  { 
    id: 26, 
    text: "Following the cryptic guidance, you navigate the grand hall with twists and turns. The whispers lead you closer to the final confrontation with Count Dracula.", 
    buttons: [
      { 
        text: "Approach the final confrontation", 
        room: 47 
      },
      { 
        text: "Continue", 
        room: 48 
      }
    ] 
  },
  { 
    id: 27, 
    text: "Revealing the truth exposes the vampiric council's dark motives. The fate of the castle and its curse hangs in the balance.", 
    buttons: [
      { 
        text: "Face the consequences", 
        room: 49 
      },
      { 
        text: "Continue", 
        room: 50 
      }
    ] 
  }
]
};

export default story;
