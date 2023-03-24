const nameArr = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Jones",
  "Coollastname",
  "enter_name_here",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const messages = [
  `There are more possible iterations of a game of chess than there are atoms in the known universe.`,
  `A group of flamingos is called a flamboyance.`,
  `The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 minutes.`,
  `The world's largest snowflake on record was 15 inches wide and 8 inches thick.`,
  `The longest word in the English language with one vowel is "strengths."`,
  `The sound of a whip cracking is actually a small sonic boom.`,
  `The tallest mountain in the solar system is Olympus Mons on Mars, which stands at 22 km high.`,
  `The Mona Lisa has no eyebrows or eyelashes.`,
  `The longest recorded flight of a chicken is 13 seconds.`,
  `The sentence "the quick brown fox jumps over the lazy dog" contains every letter of the alphabet.`,
  `Only two letters in the English alphabet don't appear in any U.S. state name: Q and X.`,
  `In Japan, there is a train station that has no entrance or exit - it was built solely so that a man with a view of the train tracks could commute to work.`,
  `The oldest piece of chewing gum in the world is over 9,000 years old.`,
  `If you shuffle a deck of cards properly, chances are that exact order has never been seen before in the history of the universe.`,
  `Butterflies taste with their feet.`,
  `The world's smallest mammal is the bumblebee bat, which weighs less than a penny.`,
  `The Great Wall of China is not visible from space without aid, despite popular belief.`,
  `The first novel ever written on a typewriter was "Tom Sawyer."`,
  `Armadillos always have identical quadruplets.`,
  `The average person will spend six months of their life waiting for red lights to turn green.`,
];

const reactions = [
  "👍",
  "👎",
  "❤️",
  "😂",
  "😢",
  "😡",
  "🤔",
  "🎉",
  "🙌",
  "🤷",
  "💩",
];

// Gets a random username
const getRandomUniqueName = () => {
  let tmpNames = nameArr;
  return (
    tmpNames.pop(Math.floor(Math.random() * tmpNames.length)) +
    tmpNames.pop(Math.floor(Math.random() * tmpNames.length))
  );
};

// Gets array of messages
const getMessages = () => {
  return messages;
};

// Gets a random reaction
const getReaction = () => {
  return reactions[Math.floor(Math.random() * reactions.length)];
};

// Export the functions for use in seed.js
module.exports = { getRandomUniqueName, getMessages, getReaction };
