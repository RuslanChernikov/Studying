function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let quotes = [{
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
];

function updateQuote() {
  let randomQuote = quotes[getRandomInt(quotes.length)];
  let authorEl = document.getElementById("author");
  let textEl = document.getElementById("text");
  textEl.textContent = randomQuote.quote;
  authorEl.textContent = randomQuote.author;
}

updateQuote();

let button = document.getElementById("new-quote");
button.addEventListener("click", updateQuote);