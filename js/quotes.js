const quotes = [
  {
    quote:
      "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R.R. Martin",
  },
  {
    quote:
      "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
    author: "Anna Quindlen",
  },
  {
    quote: "A house without books is like a room without windows.",
    author: "Heinrich Mann",
  },
  {
    quote: "Books are a uniqiely portable magic.",
    author: "Stephen King",
  },
  {
    quote: "We read to know we are not alone.",
    author: "C.S. Lewis",
  },
  {
    quote: "Children are made readers on the laps of their parents.",
    author: "Emilie Buchwald",
  },
  {
    quote:
      "When you learn to read you will be born again, and you will never be quite so alone again.",
    author: "Rumer Godden",
  },
  {
    quote: "Reading is departure and arrival.",
    author: "Terri Guillemets",
  },
  {
    quote: "I have always imagined that paradise will be a kind of library.",
    author: "Jorge Luis Borges",
  },
  {
    quote: "Once you learn to read, you will be forever free.",
    author: "Frederick Douglass",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuotes.quote;
author.innerHTML = todaysQuotes.author;
