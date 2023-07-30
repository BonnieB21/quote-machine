import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const quoteData = [
  { text: "You wanna know what scares people? Success. When you don't make moves and you don't climb up the ladder, everybody loves you because you're not competition.", author: "Nicki Minaj" },
  { text: "I stand up for what I believe in, and a lot of the time that can be against people's opinions.", author: "Rihanna" },
  { text: "I believe everybody's an individual. You can't judge someone based on someone else's actions.", author: "Rihanna" },
  { text: "The most important thing is to be true to yourself and be authentic.", author: "Beyonce" },
  { text: "I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.", author: "Beyonce" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
  { text: "I work really hard, and I think that a lot of people don't realize that or they don't care or they just think that I'm the underdog because I'm from a reality show.", author: "Nicki Minaj" },
  { text: "I'm learning all the time. I'm evolving all the time as a human being, as a woman, as an artist, as a person.", author: "Lauryn Hill" }
];

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id="author">{quote.author}</h2>
      <div className="actions">
        <button
          id="new-quote"
          className="button"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${quote.text} - ${quote.author}`
          )}`}
          id="tweet-quote"
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

const getRandomIndex = () =>
  Math.floor(Math.random() * quoteData.length);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div className="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
