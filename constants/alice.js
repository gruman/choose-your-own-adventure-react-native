const darkAlice = {
  title: "Scary Wonderland",
  original: "Alice in Wonderland",
  chapters: [
    {
      id: 0,
      text: "You find yourself in a mysterious, dark version of Wonderland. A Cheshire Cat with blood-red eyes grins at you. Choose your next move.",
      buttons: [
        {
          text: "Follow the Cheshire Cat",
          room: 1
        },
        {
          text: "Ignore the Cat and explore on your own",
          room: 2
        }
      ]
    },
    {
      id: 1,
      answer: "cat",
      text: "The Cheshire Cat leads you to a sinister tea party. Mad Hatter and March Hare, with twisted smiles, invite you to join. Do you sit at the table? First the Cheshire Cat asks \"what animal am I?\"",
      buttons: [
        {
          text: "Sit at the table",
          room: 3
        },
        {
          text: "Refuse and leave",
          room: 4
        }
      ]
    },
    {
      id: 2,
      text: "Ignoring the Cheshire Cat, you wander into a dark forest. Strange shadows dance around you. Suddenly, you face a fork in the path.",
      buttons: [
        {
          text: "Take the left path",
          room: 5
        },
        {
          text: "Take the right path",
          room: 6
        }
      ]
    },
    {
      id: 3,
      text: "As you sit, the tea turns into a vile potion. The Mad Hatter cackles as the room distorts. Escaping the madness, you find a door. Where does it lead?",
      buttons: [
        {
          text: "Open the door and enter",
          room: 7
        },
        {
          text: "Find another way out",
          room: 8
        }
      ]
    },
    {
      id: 4,
      text: "Leaving the tea party, you encounter the Queen of Hearts. She demands you play croquet with her. Do you join the game?",
      buttons: [
        {
          text: "Join the croquet game",
          room: 9
        },
        {
          text: "Politely decline and walk away",
          room: 10
        }
      ]
    },
    {
      id: 5,
      text: "The left path leads to a field of ominous mushrooms. A Caterpillar with glowing eyes appears on a giant mushroom. He asks you a riddle.",
      buttons: [
        {
          text: "Attempt to solve the riddle",
          room: 11
        },
        {
          text: "Ignore the Caterpillar and continue",
          room: 12
        }
      ]
    },
    {
      id: 6,
      text: "The right path leads to a haunted garden. The flowers speak in haunting melodies. A Rose offers you a choice: a thorny path or a dark labyrinth. Which do you choose?",
      buttons: [
        {
          text: "Take the thorny path",
          room: 13
        },
        {
          text: "Enter the dark labyrinth",
          room: 14
        }
      ]
    },
    {
      id: 7,
      text: "You enter a room filled with mirrors. Each reflection shows a distorted version of yourself. A voice echoes, 'Find the true reflection to proceed.' Which mirror do you choose?",
      buttons: [
        {
          text: "Choose the left mirror",
          room: 15
        },
        {
          text: "Choose the right mirror",
          room: 16
        }
      ]
    },
    {
      id: 8,
      text: "You find a hidden passage behind a bookshelf. It leads to a dark library with floating books. A ghostly figure appears, offering a choice: read a cursed book or leave the library. What will you do?",
      buttons: [
        {
          text: "Read the cursed book",
          room: 17
        },
        {
          text: "Leave the library",
          room: 18
        }
      ]
    },
    {
      id: 9,
      text: "The croquet game turns chaotic as the Queen of Hearts accuses you of cheating. The card soldiers surround you. How will you defend yourself?",
      buttons: [
        {
          text: "Use a flamingo as a weapon",
          room: 19
        },
        {
          text: "Try to reason with the Queen",
          room: 20
        }
      ]
    },
    {
      id: 10,
      text: "Politely declining, you walk away from the Queen of Hearts. A mysterious door appears. Do you open it?",
      buttons: [
        {
          text: "Open the door",
          room: 21
        },
        {
          text: "Ignore the door and explore further",
          room: 22
        }
      ]
    },
    {
      id: 11,
      text: "Solving the Caterpillar's riddle, he transforms into a helpful guide. He offers two paths: a psychedelic tunnel or a haunted garden. Which do you choose?",
      buttons: [
        {
          text: "Enter the psychedelic tunnel",
          room: 23
        },
        {
          text: "Explore the haunted garden",
          room: 24
        }
      ]
    },
    {
      id: 12,
      text: "Ignoring the Caterpillar, you continue your journey. Suddenly, a mysterious portal appears. Do you enter the portal?",
      buttons: [
        {
          text: "Enter the portal",
          room: 25
        },
        {
          text: "Avoid the portal and keep walking",
          room: 26
        }
      ]
    },
    {
      id: 13,
      text: "The thorny path leads to a garden of carnivorous plants. A mysterious figure offers a choice: sacrifice something valuable or face the plants. What will you do?",
      buttons: [
        {
          text: "Sacrifice something valuable",
          room: 27
        },
        {
          text: "Face the carnivorous plants",
          room: 28
        }
      ]
    },
    {
      id: 14,
      text: "Entering the dark labyrinth, you encounter the Jabberwocky. It challenges you to a riddle duel. Will you accept the challenge?",
      buttons: [
        {
          text: "Accept the riddle duel",
          room: 29
        },
        {
          text: "Try to sneak past the Jabberwocky",
          room: 30
        }
      ]
    },
    {
      id: 15,
      text: "The left mirror reveals your true reflection. A secret passage opens. As you enter, you find the White Rabbit. He offers a pocket watch with strange powers. Do you accept the watch?",
      buttons: [
        {
          text: "Accept the pocket watch",
          room: 31
        },
        {
          text: "Decline the pocket watch",
          room: 32
        }
      ]
    },
    {
      id: 16,
      text: "The right mirror distorts your reflection, revealing a hidden door. As you open it, a mysterious voice warns you of a dangerous path ahead. Do you proceed?",
      buttons: [
        {
          text: "Proceed with caution",
          room: 33
        },
        {
          text: "Find an alternative route",
          room: 34
        }
      ]
    },
    {
      id: 17,
      text: "Reading the cursed book, you gain forbidden knowledge. The ghostly figure transforms into a guide, offering a choice: confront the Queen of Hearts or explore a forbidden realm. What will you do?",
      buttons: [
        {
          text: "Confront the Queen of Hearts",
          room: 35
        },
        {
          text: "Explore the forbidden realm",
          room: 36
        }
      ]
    },
    {
      id: 18,
      text: "Leaving the library, you find yourself in a twisted maze. The walls shift as you navigate. A mysterious voice challenges you to find the way out. Can you solve the maze?",
      buttons: [
        {
          text: "Navigate the maze",
          room: 37
        },
        {
          text: "Search for a shortcut",
          room: 38
        }
      ]
    },
    {
      id: 19,
      text: "Using the flamingo as a weapon, you fend off the card soldiers. The Queen of Hearts is impressed and offers you a reward. What do you ask for?",
      buttons: [
        {
          text: "Ask for a way out of Wonderland",
          room: 39
        },
        {
          text: "Ask for a powerful ally",
          room: 40
        }
      ]
    },
    {
      id: 20,
      text: "Trying to reason with the Queen of Hearts, she accuses you of treason. The executioner approaches with a menacing axe. How will you escape?",
      buttons: [
        {
          text: "Use a magical escape item",
          room: 41
        },
        {
          text: "Attempt to evade the executioner",
          room: 42
        }
      ]
    },
    {
      id: 21,
      text: "Opening the mysterious door, you find yourself in a twisted version of reality. The laws of physics are distorted. A voice challenges you to defy gravity or accept the consequences. What will you do?",
      buttons: [
        {
          text: "Defy gravity and explore",
          room: 43
        },
        {
          text: "Accept the consequences and exit the door",
          room: 44
        }
      ]
    },
    {
      id: 22,
      text: "Ignoring the mysterious door, you continue your journey. Suddenly, you encounter a riddle-obsessed creature. Solve its riddles to proceed.",
      buttons: [
        {
          text: "Attempt to solve the riddles",
          room: 45
        },
        {
          text: "Avoid the creature and find another path",
          room: 46
        }
      ]
    },
    {
      id: 23,
      text: "Entering the psychedelic tunnel, you experience hallucinations. The tunnel splits into multiple paths. A voice guides you to the correct one. Will you trust the voice?",
      buttons: [
        {
          text: "Trust the voice and follow the path",
          room: 47
        },
        {
          text: "Choose a path on your own",
          room: 48
        }
      ]
    },
    {
      id: 24,
      text: "Exploring the haunted garden, you encounter ghostly figures. They offer a chance to communicate with the spirit world or face the consequences of disturbing the garden. What will you choose?",
      buttons: [
        {
          text: "Communicate with the spirit world",
          room: 49
        },
        {
          text: "Face the consequences and proceed",
          room: 50
        }
      ]
    },
  ]
};

export default darkAlice;
