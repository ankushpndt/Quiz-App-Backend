const { v4 } = require('uuid');
const { Quiz } = require('./models/quiz.model')
const Questions = [
  {
    id: v4(),
    category: 'Marvel',

    question: 'What does MCU stand for?',
    options: [
      {
        id: v4(),
        option: 'Marvel Cinematic Universe',
        isRight: true,
      },
      {
        id: v4(),
        option: 'Marvel cinema universe',
        isRight: false,
      },
      { id: v4(), option: 'Marvel cinematic unified', isRight: false },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: 'What is the real name of Captain America?',
    options: [
      { id: v4(), option: 'Steve Harpers', isRight: false },
      { id: v4(), option: 'Steven Universe', isRight: false },
      { id: v4(), option: 'Steve Rogers', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: 'Which hero does Bruce Banner turns into?',
    options: [
      { id: v4(), option: 'Iron Man', isRight: false },
      { id: v4(), option: 'Falcon', isRight: false },
      { id: v4(), option: 'Hulk', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: "Captain america's Shield Is made of?",
    options: [
      { id: v4(), option: 'Mithril', isRight: false },
      { id: v4(), option: 'Adamantium', isRight: false },
      { id: v4(), option: 'Vibranium', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: "What is the name of Thor's new weapon?",
    options: [
      { id: v4(), option: 'Mjolnir', isRight: false },
      { id: v4(), option: 'Hammer', isRight: false },
      { id: v4(), option: 'Stormbreaker', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question: "What is Superman's original name, the one he was born with?",
    options: [
      { id: v4(), option: "Bu'alle", isRight: false },
      { id: v4(), option: 'Clark Kent', isRight: false },
      { id: v4(), option: "Kal'el", isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'Three DC comics superheroes are part of the Holy Trinity. Name the three.',
    options: [
      { id: v4(), option: 'Batman, Flash, Cyborg', isRight: false },
      { id: v4(), option: 'Batman, Superman, Wonder Woman', isRight: true },
      { id: v4(), option: 'Superman, Wonder Woman, Flash', isRight: false },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'Wonder Woman carries around a whip that she uses to compel anyone caught in its grip to be honest. What is it called?',
    options: [
      { id: v4(), option: 'Gauntlet of Growth', isRight: false },
      { id: v4(), option: 'Pearl of Existence', isRight: false },
      { id: v4(), option: 'Lasso of Truth', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'In the 1987 graphic novel, "Batman: Son of the Demon," we learn that Batman has a son with Talia al Ghul. What is his name?',
    options: [
      { id: v4(), option: 'William', isRight: false },
      { id: v4(), option: 'Barry', isRight: false },
      { id: v4(), option: 'Damian', isRight: true },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'The Flash (Barry Allen) gets married to a beautiful woman who is also a secret leader of Team Flash. What is her name?',
    options: [
      { id: v4(), option: 'Caitlin Snow', isRight: false },
      { id: v4(), option: 'Sansa Horton', isRight: false },
      { id: v4(), option: 'Iris West', isRight: true },
    ],
  },
];
const addingDataToDb = async (req, res) => {
  try {
    await Quiz.insertMany(Questions)
    res.status(200).json({ success: true, message: "Data added to database" })
  }
  catch (error) {
    res.status(404).json({ success: false, message: "Could not add data to database", errMessage: error.message })
  }
}
module.exports = { addingDataToDb }