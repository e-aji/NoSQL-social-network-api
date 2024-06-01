const firstName =  [
    'Alex',
    'Beth',
    'Caroline',
    'Dave',
    'Eleanor',
    'Freddie',
    'Gail',
    'Hank',
    'Iris',
    'Jasmine',
    'Kate',
    'Liz',
    'Megan',
    'Nancy',
    'Olivia',
    'Penny',
    'Quinn',
    'Rory',
    'Sally',
    'Tara',
    'Ursula',
    'Vivian',
    'Wendy',
    'Xena',
    'Yvonne',
    'Zoe',
    'Abby',
    'Cindy',
    'Danny',
    'Ethan',
    'Fay',
    'Gemma',
    'Harry',
    'Ivy',
    'Jill',
    'Katie',
    'Lily',
    'Maggie',
    'Nellie',
    'Jody',
    'Oliver',
    'John',
    'Peter',
    'Quentin',
    'Ralph',
    'Sam',
    'Terry',
    'Ulysses',
    'Vernon',
    'Walter',
    'Xavier',
    'Yolanda',
    'Zachary',
];

const lastName = [
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'Hernandez',
    'King',
    'Wright',
    'Lopez',
    'Hill',
    'Scott',
    'Green',
    'Adams',
    'Baker',
    'Gonzalez',
    'Nelson',
    'Carter',
    'Mitchell',
    'Perez',
    'Roberts',
    'Turner',
    'Phillips',
    'Campbell',
    'Parker',
    'Evans',
    'Edwards',
    'Collins',
    'Stewart',
    'Sanchez',
    'Morris',
    'Rogers',
    'Reed',
    'Cook',
    'Morgan',
    'Bell',
    'Murphy',
    'Bailey',
    'Rivera',
    'Cooper',
    'Richardson',
]

const possibleThoughts = [
    'Had a great day with my friends after such a long time!',
    'Nothing beats a sunny day at the beach! 🏖️',
    'Just tried the best coffee in town! ☕️ #CoffeeLove',
    'Feeling grateful for the little things in life. 🌸',
    'Workout complete! Feeling strong and energised! 💪 #FitnessJourney',
    'Caught up on my favorite show tonight! 📺 #BingeWatch',
    'Sunday brunch with the besties is the perfect way to end the week! 🥂',
    'Exploring new hiking trails today! Nature is so refreshing. 🌲',
    'Cycling in the morning is so much fun! 🚴‍♀️ #CyclingJourney',
    'New book, cozy blanket, and a cup of tea. Perfect evening. 📚🍵',
    'Just had a great night out! 🍻 #NightLife',
    'Hiking in the mountains is so much fun! 🏔️ #HikerLife',
    'Surprised a friend today and it made my week! 🎉',
    'A day full of laughter and good vibes. Can\'t ask for more! 😊',
    'Finally tried that new restaurant and it was amazing! 🍽️ #Foodie',
    'Spontaneous road trip adventures are the best! 🚗💨',
    'Feeling the love and positivity today. Spread kindness! 💖',
    'Got my hands dirty with some gardening today. So rewarding! 🌱',
    'Captured a beautiful sunset this evening 🌅',
    'Had a blast at the concert last night! Music is life. 🎶',
    'Just tried some new recipes and they were delicious! 🍽️ #CookingJourney',
    'Just watched a movie and it was absolutely fantastic! 🎥',
    'Just tried the best wine in town! 🍷 #WineTasting',
    'Weekend getaway to the mountains was just what I needed. 🏞️',
    'DIY project complete! So proud of the result. 🛠️ #Crafting',
    'Morning yoga session to start the day right 🧘‍♀️',
    'Discovered a new hobby today. Excited for this journey! 🎨',
]

const possibleReactions = [
    'Those are the best kind of days!',
    'Moments like these are priceless!',
    'This is amazing! Thanks for sharing!',
    'I love this!',
    'Absolutely love this!',
    'This made my day!',
    'Love the vibes here!',
    'This is exactly what I needed to see today!',
    'Incredible! Keep it up!',
    'Beautifully captured!',
    'Really resonates with me.',
    'Simply brilliant!',
    'Thanks for the positivity!',
    'Always a pleasure to see your posts.',
    'You\'re amazing! Keep shining!',
    'Love to see you enjoying yourself!',
    'This is so beautiful!',
    'This is pure gold!',
    'Always looking forward to seeing your posts!',
    'Nice!',
    'Amazing!',
    'Great!',
    'Cool!',
    'Awesome!',
    'Wow!',
    '👍👍👍👍👍',
    '👍🏾👍🏾👍🏾👍🏾👍🏾',
    '👌👌👌👌👌',
    '👌🏾👌🏾👌🏾👌🏾👌🏾',
    '👏👏👏👏👏',
    '👏🏾👏🏾👏🏾👏🏾👏🏾',
    'So true! Love this.',
    'You nailed it!',
    'This is everything!',
    'Perfectly said!',
    'So glad you shared this!',
    'You always know how to brighten my day!',
    'Keep these coming!',
    'This is why I follow you!',
    'I love your posts!',
    'Love this so much!',
    'Amazing content!',
    'Such a great share!',
    'This is brilliant!',
    'You never disappoint!',
    'Absolutely perfect!',
    'This made me smile!',
    'You always know what to say!',
    'This is pure inspiration!',
    'Just wow!'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () => {

  const firstName = getRandomArrItem(firstName);
  const lastName = getRandomArrItem(lastName);
  
  return `${firstName} ${lastName}`;
};

// Function to generate random thoughts that we can add to the database. 
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      thoughtText: getRandomArrItem(possibleThoughts),
      reaction: [...getThoughtReactions(3)],
      username: getRandomName(),
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };

