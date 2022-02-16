import React from 'react';
import '../../css/BarraPeli.css'
import { Link } from "react-router-dom";
export default function BarraPeli(params) {
  return <div className='Peli-Cont' style={{ backgroundImage: `url(${params.img})` }}>
       {/* Este componente debe ser clickeable y que redireccione a detalles de la peli */}
      <Link className='LinkBarraPeli' to={'/movie/' + params.id}>
        <h3 className='Peli-Title'>{params.titulo}</h3>
      </Link>
      <span className='Peli-Description'>
          {params.description}
      </span>
  </div>;
}
