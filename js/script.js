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
   url: 'https://www.cnn.com/2021/01/16/opinions/martin-luther-king-legacy-with-capitol-violence-trump-impeachment-joseph/index.html'
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
  {quoteText: `The animals of the world exist for their own reasons. They were not made for humans 
              any more than black people were made for white, or women created for men.`,
    source: 'Alice Walker',
    url: 'https://www.gale.com/open-access/alice-walker' 
  },
  {quoteText: `I feel that if we don't take seriously the ways in which racism is embedded in structures 
               of institutions, if we assume that there must be an identifiable racist who is the perpetrator, 
               then we won't ever succeed in eradicating racism.`,
    source: 'Angela Y. Davis',
    citation: 'Freedom is a Constant Struggle',
    year: '2016',
    url: 'https://www.glbthistory.org/angela-davis'
  },
  {quoteText: `Nobody in the world, nobody in history, has ever gotten their freedom by 
              appealing to the moral sense of the people who were oppressing them.`,
    source: 'Assata Shakur',
    citation: 'Assata: An Autobiography',
    year: '2001'
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
   return chosenQuote
}
 
//Change background color function
const randomValue= () => Math.floor(Math.random() * 256);

function randomBackground(value) {
    color =`rgb${value()}, rgb${value()}, rgb${value()}`;
    return color
       }
   
//document.getElementById("load-quote").style.backgroundColor = `${randomBackground(randomValue)}`;


  

/***
 * `printQuote` function
***/
function printQuote () {
  randomQuote = getRandomQuote();
  let html =  `<p class="quote">${randomQuote.quoteText}</p>
              <p class="source">${randomQuote.source}`;
  
    if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
    if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span></p>`;
  }
    if (randomQuote.url) {
      html += `<p class="url"> 
      <a href="${randomQuote.url}">Click here to learn more.</a>
    </p>`;
    }
      return document.getElementById('quote-box').innerHTML = html;
  }

  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
style.backgroundColor = `${randomBackground(randomValue)}`;