import React, { useState } from 'react';
import './App.css';
import QuoteList from './Quote-List';

function App() {
  const [quoteCount, setQuoteCount] = useState(0);
  
  return (
    <div className="App">
      <QuoteList quoteCount={quoteCount} />
      <button className="next-quote-button" onClick={() => { setQuoteCount(quoteCount + 1) }}>
          Next Quote
      </button>
    </div>
  );
}

export default App;
