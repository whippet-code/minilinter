let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// create new array for improved version after Culler - betterWords
let betterWords = [];

//create array from string - storyWords
const storyWords = story.split(' ');


//Function to cull out the unnecessary Words in array. For each word in the storyWord array, see if the unnecessaryWords array 'includes' it. If true don't do anything, if false push the word to the betterWords array.

function wordCuller(story, unnec) {
  for (let i = 0; i < story.length; i++) {
    if (unnec.includes(story[i])) {
    } else {
      betterWords.push(story[i]);
    }
  }
}; 
//running the function with the two arrays.
wordCuller(storyWords, unnecessaryWords);

///Setting up the word usage counter for overusedWords.
let realCount = 0;
let veryCount = 0;
let basicCount = 0;

for (word of betterWords) {
  if (word === 'really') {
    realCount += 1;
  } else if (word === 'very') {
    veryCount += 1;
  } else if (word === 'basically') {
    basicCount += 1;
  }
};

// Count sentences (look for '.' or '!' as last character of each word) for each instance add 1 to a counter variable.
// This looks like the correct method - 
//String.prototype.endsWith(searchString [, length])
//Determines whether a string ends with the characters of the string searchString.

let sentenceCount = 0;

for (word of betterWords) {
  if (word.endsWith('.')) {
    sentenceCount += 1;
  } else if (word.endsWith('!')) {
    sentenceCount += 1;
  }
};

//log word count, sentence count & values of over used word counts.

console.log(`Total word count ${betterWords.length}
Total sentence count ${sentenceCount}
Instances of overused words;
Really - ${realCount}
Very - ${veryCount}
Basically - ${basicCount}`); 

console.log(`Improved text;
${betterWords.join(' ')}`);
