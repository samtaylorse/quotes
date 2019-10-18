import React from 'react';
import Quote from './Quote';

export default function(props) {
    const quotes = props.quotes;
    const quoteElements = quotes.map((quote, index) => {
        return <Quote
            pos={quotes.length - index - 1} // reversed-order position
            key={index}
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
