import React, { useState, useLayoutEffect } from 'react';

export default function(props) {
    const [loaded, setLoaded] = useState(false);
    useLayoutEffect(() => {
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);
    
    const showingIndex = loaded ? 0 : 1;
    const hidingIndex = loaded ? 1 : 2;
    const quoteClass = props.index === showingIndex
        ? 'showing'
        : props.index === hidingIndex
        ? 'hiding'
        : ''; // hidden

    return (
        <div className={`Quote ${quoteClass}`}>
            {loaded ?
                <>
                    <p className="quote-content">{props.content}</p>
                    <p className="quote-author">{props.author}</p>
                </> :
                <p>Loading...</p> 
            }
        </div>
    );
}
