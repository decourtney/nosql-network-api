const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the uers array
  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = `${username}@gmail.com`;
    const thoughts = Math.floor(Math.random() * 20);
    const friends = Math.floor(Math.random() * 20);

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  };

  // Need to finish making the seed data

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
