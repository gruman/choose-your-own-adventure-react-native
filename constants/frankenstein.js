const frankensteinAdventure = {
  title: "Spooky Laboratory",
  original: "Frankenstein",
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
      text: `After a long hike, you find yourself at the entrance of a dark laboratory. An eerie silence surrounds you.\n
In the dim light, you notice a figure hunched over a table, working on a mysterious experiment.\n
The figure turns around, revealing a stitched face and glowing eyes. It's a creature that seems both alive and not. It speaks, "I am creation. What is my name?"`,
      success: 2,
      failure: 0
    },
    {
      id: 2,
      text: `Good, good. You have passed the first test.\n
As you enter the laboratory, you see two doors. One has a sign that reads "Secret Experiments," and the other says "Forbidden Chamber."\n
Which door do you choose?`,
      buttons: [
        {
          text: "Secret Experiments",
          room: 3
        },
        {
          text: "Forbidden Chamber",
          room: 4
        }
      ]
    },
    {
      id: 3,
      text: "The room is filled with strange experiments gone wrong. One of them starts to stir and lurches towards you!",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 4,
      text: `The air in the Forbidden Chamber is thick with tension. You see a mysterious figure in the shadows.\n
They offer you a choice: reveal your deepest fear or face a terrifying creature.\n
What will you do?`,
      buttons: [
        {
          text: "Reveal your deepest fear",
          room: 5
        },
        {
          text: "Face the creature",
          room: 6
        }
      ]
    },
    {
      id: 5,
      text: "As you reveal your deepest fear, the room transforms into a nightmarish version of it. You are paralyzed with terror.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 6,
      text: `You bravely face the creature, and it turns out to be a friendly, misunderstood monster.\n
They offer you guidance and point towards two paths leading deeper into the laboratory.\n
One is dimly lit, and the other is pitch black. Which path will you choose?`,
      buttons: [
        {
          text: "Dimly lit path",
          room: 7
        },
        {
          text: "Pitch black path",
          room: 8
        },
      ]
    },
    {
      id: 7,
      answer: "fire",
      text: "As you walk down the dimly lit path, you encounter a room with a mysterious flame. To proceed, answer the riddle: What can burn without fire?",
      success: 9,
      failure: 10
    },
    {
      id: 8,
      text: "The darkness becomes suffocating, and you hear unsettling whispers. Suddenly, you stumble and fall into an endless abyss.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 9,
      text: "Correct! The flames flicker, revealing a hidden passage. You continue your journey.",
      buttons: [
        {
          text: "Continue",
          room: 10
        },
      ]
    },
    {
      id: 10,
      text: "The path leads to a mysterious laboratory chamber with two potions. One grants you immense power, and the other curses you forever.\nChoose wisely.",
      buttons: [
        {
          text: "Powerful Potion",
          room: 11
        },
        {
          text: "Cursed Potion",
          room: 12
        }
      ]
    },
    {
      id: 11,
      text: "You drink the powerful potion and feel a surge of strength. The laboratory transforms into daylight, and you find yourself outside. You made it out!",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
    {
      id: 12,
      text: "As you drink the cursed potion, the laboratory distorts into a nightmarish realm. You become part of the laboratory's experiments, forever trapped.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
  ]
};

export default frankensteinAdventure;
