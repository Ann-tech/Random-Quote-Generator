window.addEventListener('DOMContentLoaded', function(e) {
    let listQuotes = [
        [`"Never do tomorrow what you can do today. Procrastination is the thief of time."`, "Charles Dickens"],
        [`"Perfection is boring. Getting better is where all the fun is."`, "Dragos Roua"],
        [`"The only person you should try to be better than, is the person you were yesterday."`, "Matty Mullens"],
        [`"All progress takes place outside the comfort zone.`, "Michael John Bobak"],
        [`"The starting point of all achievement is desire."`, "Napoleon Hill"],
        [`"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."`, "Thomas Edison"]
    ];

    let quote = document.querySelector('h1');

    let quoteAuthor = document.querySelector('p');

    let btn = document.querySelector('#generator');

    btn.addEventListener('click', function(e) {
        displayRandomQuote(generateRandomQuote());
    });

    function generateRandomQuote() {
        let randomNumber = Math.floor(Math.random() * listQuotes.length);
        let randomQuoteAndAuthor = listQuotes[randomNumber];
        let randomQuote = randomQuoteAndAuthor[0];
        let author = randomQuoteAndAuthor[1];
        return {randomQuote, author};
    }

    function displayRandomQuote(value) {
        quote.innerText = value.randomQuote;
        quoteAuthor.innerText = value.author;
    }

    
});