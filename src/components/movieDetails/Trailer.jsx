import React from 'react';

export default function Trailer ({movie}) {
    return (
        <iframe
            width="560" 
            height="315" 
            src={movie.trailer}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    );
}