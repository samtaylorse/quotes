import React, { useState, useLayoutEffect } from 'react';

export default function(props) {
    const [loaded, setLoaded] = useState(false);
    useLayoutEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);

    const quoteClass = !loaded
        ? ''
        : props.pos === 0
        ? 'showing'
        : props.pos === 1
        ? 'hiding'
        : 'hidden';

    return (
        <div className={`Quote ${quoteClass}`}>
            <p className="quote-content">{props.content}</p>
            <p className="quote-author">{props.author}</p>
        </div>
    );
}
