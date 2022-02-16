import React from 'react';

export default function Trailer ({Trailer}) {
    return (
        <div className='Block_Trailer'>
        <p>Ver Trailer</p>
        <iframe
            width="560" 
            height="315" 
            src={Trailer}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
        </div>
    );
}