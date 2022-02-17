import React from 'react';

export default function Trailer ({Trailer}) {
    return (
        <div className='Trailer'>
            <h2 className='Trailer-Title'>Trailer</h2>
            <iframe
                width="100%" 
                height="80%" 
                src={Trailer}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
}