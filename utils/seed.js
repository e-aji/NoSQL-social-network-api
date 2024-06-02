const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomEmail, getThoughtReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

      // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];
    const thoughts = getRandomThoughts(19);

    for (let i = 0; i < 20; i++) {

        users.push({
        username: getRandomName(),
        email: getRandomEmail(),
        });
    }

    for (let i = 0; i < 10; i++) {

        thoughts.push({
        thoughtText: getRandomThoughts(1),
        username: getRandomName(),
        reactions: getThoughtReactions(3),
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);

});