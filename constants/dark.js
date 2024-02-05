const dark = {
  title: "Scary Tunnel",
  original: "ChatGPT",
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
      answer: "Theodore",
      text: `After a long hike, you find yourself at the entrance of a tunnel. An old woman is glaring at you.\n
She has two arms, two legs, and three pairs of lips. She's wearing ragged clothing so shade of brown, and her hair is black and stringy. She also has one more eye and she's wearing a blue polo shirt with a tear on the bottom left.\n
My name is Theodore, and I guard the entrance to this cave. You must answer a riddle to pass.\n
What is my name?`,
      success: 2,
      failure: 0
    },
    {
      id: 2,
      text: `Good good. You can enter.\n
As soon as you enter the cave, you see two paths. Turning around to ask Theodore which one to take, you see that she's gone.\n
The left path is straight, and so long you can't see the end. The right path is windy and you can barely see what's there.\n
Which path do you take?`,
      buttons: [
        {
          text: "Left",
          room: 3
        },
        {
          text: "Right",
          room: 4
        }
      ]
    },
    {
      id: 3,
      text: "There's a pitfall! You break your leg, and no one comes to save you.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 4,
      text: `The more you walk, the darker and windier it gets.\n
Pretty soon, you walk directly into a rock wall. Turning around, you walk into another wall.\n\nPanicking, you reach out all around you and find only rock.\n
Theodore's voice calls out. To escape the rocks, tell me the number of eyes I have times the number of legs minus the number of lips. In letters.`,
      answer: "one",
      success: 5,
      failure: 6
    },
    {
      id: 5,
      text: `Correct! You may continue.\n
At first you though Theodore was quirky, but now you straight up dislike her. Continue? Where?\n
You grope around in the dark and find a door. You put your ear against it and can hear someone inside.\n
You peek through the keyhole and see a clean young man with three eyes, four legs, 2 ears, two legs, and I made a mistake he has one less leg.\n
You have two options: knock politely or barge down the door.`,
      buttons: [
        {
          text: "Knock politely",
          room: 7
        },

        {
          text: "Barge down the door",
          room: 8
        },
      ]
    },
    {
      id: 6,
      text: "Wrong answer! The rocks close in on you. The last thing you hear is Theodore's eerie laughter.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 7,
      answer: "Theodore",
      text: "You knock. There's no answer and the noise inside stops. You knock again.",
      success: 8,
      failure: 9
    },
    {
      id: 8,
      text: "You barge through the door and uh oh! the clean young man is a ninja and defeats you in battle!",
      buttons: [
        {
          text: "Restart",
          room: 1
        },
      ]
    },
    {
      id: 9,
      text: "Incorrect! Darkness surrounds you, and strange whispers fill the air.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
    {
      id: 10,
      text: "The path leads to a vast cavern with a mysterious glowing pool. A shadowy figure appears on the other side.\n\nYou can't make out their face, but they offer you two potions. One will lead you home, and the other will trap you in the cave forever.\n\nChoose wisely.",
      buttons: [
        {
          text: "Blue potion",
          room: 11
        },
        {
          text: "Red potion",
          room: 12
        }
      ]
    },
    {
      id: 11,
      text: "You drink the blue potion and feel a sudden rush. The cave disappears, and you find yourself back at the entrance. You made it out!",
      buttons: [
        {
          text: "The end",
          room: 1
        },
      ]
    },
    {
      id: 12,
      text: "As you drink the red potion, the cave transforms around you. You become part of the cave's mysterious magic, forever lost in its depths.",
      buttons: [
        {
          text: "Try again",
          room: 1
        },
      ]
    },
  ]
};

export default dark;
