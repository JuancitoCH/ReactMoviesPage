import React from 'react';
import '../../css/trailer.css'

export default function Trailer ({Trailer}) {
    return (
        <div>
            <h2 className='Title-H2'>Trailer</h2>
            <iframe className='trailer'
                src={Trailer}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
}