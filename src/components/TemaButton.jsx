import React,{useContext} from 'react';
import {contextTema} from '../context/Temas'

export default function TemaButton() {
    const {tema,setTema} = useContext(contextTema)
    const cambiarTema=()=>{
        if (tema==='light') return setTema('dark')
        return setTema('light')
    }
    return <>
      <button onClick={cambiarTema} className={'BotonPerron'}>{tema}</button>
  </>;
}

