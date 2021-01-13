/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {quoteText: 'When someone shows you who they are, believe them the first time.',
   author: 'Maya Angelou',
     },
  {quoteText: 'Seeing is not always believing.',
   author: 'Martin Luther King, Jr.',
    },
  {quoteText: 'No person is your friend who demands your silence, or denies your right to grow.',
   author: 'Alice Walker',
     },
  {quoteText: 'Your silence will not proctect you.',
   author: 'Audre Lorde',
     },
  {quoteText: 'Grab the broom of anger and drive off the beast of fear.',
   author: 'Zora Neale Hurston',
  }
];


/***
 * `getRandomQuote` function
***/
const upper = quotes.length;
let chosenQuote = '';



function getRandomQuote () {
  function getRandomNumber (upper) { 
    return Math.floor(Math.random() * upper);
  }
   chosenQuote = quotes[getRandomNumber(upper)];
   return `${chosenQuote['quoteText']} ${chosenQuote['author']}`
  }
  

console.log(getRandomQuote());


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);