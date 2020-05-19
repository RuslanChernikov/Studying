let quotesData = [{
        author: "Shekspir",
        quote: "to be or not to be"
    },
    {
        author: "Lermontov",
        quote: "tell me uncle"
    },
    {
        author: "Pushkin",
        quote: "Where is my cup?"
    },
    {
        author: "Putin",
        quote: "Mochit' kozlov v sortire!"
    },
    {
        author: "Klichko",
        quote: "ne vse mogut smotret' v zavtrashni den'"
    },
    {
        author: "Medvedev",
        quote: "deneg net, no vi derjites"
    },
    {
        author: "Putin",
        quote: "Polovci, pechenegi!"
    },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let qouteBtn = document.getElementById('new-quote');

qouteBtn.addEventListener('click', function () {
    let randomQuote = quotesData[getRandomInt(quotesData.length)];
    let quoteText = document.getElementById('text'),
        quoteAuthor = document.getElementById('author');

    quoteAuthor.textContent = randomQuote.author;
    quoteText.textContent = randomQuote.quote;
});