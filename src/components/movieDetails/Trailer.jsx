import React from 'react';
import '../../css/trailer.css'

export default function Trailer ({Trailer}) {
    return (
        <iframe className='trailer'
            src={Trailer}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    );
}