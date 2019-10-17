import React, { useState, useEffect } from 'react';
import Quote from './Quote';

export default function(props) {
    const [quotes, setQuotes] = useState([]);

    // Executed every time props.quoteCount is updated by clicking the 'Next Quote' button
    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.quotable.io/random');
            const quote = await response.json();
            setQuotes(oldQuotes => [quote, ...oldQuotes]);
        })();
    }, [props.quoteCount]);

    const quoteElements = quotes.map((quote, index) => {
        return <Quote
            index={index}
            key={quotes.length - index - 1}
            id={quote._id}
            content={quote.content}
            author={quote.author}
            />
    });

    return (
        <div className="Quote-List">
            {quoteElements}
        </div>
    );
}
