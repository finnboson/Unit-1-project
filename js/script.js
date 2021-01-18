/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * Below is my "quotes" array where I've stored all of the possible quotes that can display. Each quote is 
 * an object with at minimum the properties "quoteText" and "source". Some objects also include the properties
 * "citation", "year" and "url". * 
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
 * Below is my getRandomQuote function. This function is going to return a random index value. Since
 * I don't want the value to be larger than the number of objects in my quotes array, I
 * first declared the variable "upper" and set it equal to the length of my "quotes" array. I also declared
 * the chosenQuote variable and set it equal to an empty string. 
 
***/
const upper = quotes.length;
let chosenQuote = '';

/*The first part of the getRandomQuote function is another function called getRandomNumber. 
 * The getRandomNumber function uses the Math.random function and multiplies it by the upper variable 
   I declared to return a floating point number between 0 and the number of quote objects in my array, 
   which in this case 7. Then the Math.floor function turns that number into a whole number. This is 
   the random index value that is used in the second part of the getRandomQuote function. */
function getRandomQuote () {
  function getRandomNumber (upper) { 
    return Math.floor(Math.random() * upper);
  }
  /*In the second part of the getRandomQuote function, I set the chosenQuote variable equal to a 
  * random quotes array by calling the getRandomNumber function and passing the upper variable to it. 
  * I then return the chosenQuote, which will display as a string. */
   chosenQuote = quotes[getRandomNumber(upper)];
   return chosenQuote
}
 
/*These two functions work together to create random RGB values. These will be used to create a random
background color every time a new quote appears. The first function, which is declared
as the variable "randomValue", uses the same Math.floor and Math.random functions that I used above to 
call a random quotes array. This time I multiple Math.random() by 256, because 256 is the highest 
possible RGB value. 
*/
const randomValue= () => Math.floor(Math.random() * 256);

/*The second function passes a "value" paramater into it, to return a string with
rgb(value, value, value). Passing randomValue as an arguement into the randomBackground function returns
a random RGB code. These functions are used in the printQuote function below. */
function randomBackground(value) {
    color =`rgb(${value()}, ${value()}, ${value()})`;
    return color
       }

  

/***
 * Below is the printQuote function, which displays a random quote, changes the background color 
 * everytime a new quote is generated, and automatically generates a new quote every 9 seconds.
 *   
***/

function printQuote () {

/* The first line identifies the body of the html file and updates the background color which is 
defined in the CSS file for that element. Do this I first added an id to the body tag in index.html. 
I then make the background color style property equal to a random color using the randomBackground function 
and passing it the randomValue function.*/
  document.getElementById("body").style.backgroundColor=`${randomBackground(randomValue)}`;
  
/*Here I declare the randomQuote variable and assign it the value of the getRandomQuote function 
I created above to return one of the quote objects from the quotes array.*/
  randomQuote = getRandomQuote();

/*Then I declare a variable and assign it a string value. Inside the string is the text that will 
display on the screen. Within the html file the quoteText is inside <p> tags 
and assigned to the class "quote". Therefore, I put the randomQuote inside <p> tags with the class "quote"
and used dot notation to retrieve the "quoteText" property of the randomQuote object. I followed the 
same steps to insert the "source" property into the html string. Every quote inside my array has at
minimum these two properties, so this is my baseline string. */
  let html = `<p class="quote">${randomQuote.quoteText}</p>
              <p class="source">${randomQuote.source}`;

/* Next are three conditional statements. Each one checks to see if the randomQuote chosen by the 
getRandomQuote function has additional properties. If the randomQuote has a citation property, then 
the citation property is added to the html string and assigned the "citation" class. The next two 
statements do the same thing for the "year" and "url" properties. For the "url" property I added an
anchor tag to create a hyperlink for the text "Click here to learn more". Within the .css file I
added some additional formatting to change how the link appears when hovered over, when clicked, and 
after visited. */
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
/*This function automatically calls the printQuote function every 9000 milliseconds, or 9 seconds.
*/
    setTimeout(printQuote, 9000);

/*Finally, the printQuote function returns the appropriate html string inside the 'quote-box' class using the 
document.getElementById function. */
      return document.getElementById('quote-box').innerHTML = html;
  }

  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
**
This line of code initiates the printQuote function when the "Show another quote" button is clicked.
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);


