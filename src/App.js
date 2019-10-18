import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteList from './QuoteList';

function App() {
  const [quotes, setQuotes] = useState([]);

  async function handleGetNextQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    setQuotes(oldQuotes => [...oldQuotes, quote]);
  }

  useEffect(() => {
    handleGetNextQuote();
  }, []);

  return (
    <div className="App">
      <QuoteList quotes={quotes} />
      <button className="next-quote-button" onClick={handleGetNextQuote}>
          Next Quote
      </button>
    </div>
  );
}

export default App;
