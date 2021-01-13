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
   source: 'Maya Angelou',
     },
  {quoteText: 'Seeing is not always believing.',
   source: 'Martin Luther King, Jr.',
    },
  {quoteText: 'No person is your friend who demands your silence, or denies your right to grow.',
   source: 'Alice Walker',
     },
  {quoteText: 'Your silence will not proctect you.',
   source: 'Audre Lorde',
     },
  {quoteText: 'Grab the broom of anger and drive off the beast of fear.',
   source: 'Zora Neale Hurston',
  },
  {quoteText: `I feel that if we don't take seriously the ways in which racism is embedded in structures 
               of institutions, if we assume that there must be an identifiable racist who is the perpetrator, 
               then we won't ever succeed in eradicating racism.`,
  source: 'Angela Y. Davis',
  citation: 'Freedom is a Constant Struggle'
  },
  {quoteText: `I feel that if we don't take seriously the ways in which racism is embedded in structures 
  of institutions, if we assume that there must be an identifiable racist who is the perpetrator, 
  then we won't ever succeed in eradicating racism.`,
source: 'Angela Y. Davis',
citation: 'Freedom is a Constant Struggle'
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
   return `${chosenQuote['quoteText']} ${chosenQuote['source']} ${chosenQuote['citation']}`
  }
  

console.log(getRandomQuote());


/***
 * `printQuote` function
***/
function printQuote () {
  getRandomQuote();
  let html = `<p class="quote">${chosenQuote['quoteText']}</p>
              <p class="source">${chosenQuote['source']}</p> 
              <span class="citation">${chosenQuote['citation']}</span>`;
  return document.querySelector('div').innerHTML = html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);