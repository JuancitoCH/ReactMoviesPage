import React,{useState,createContext} from 'react';
export const contextTema = createContext()

export default function TemasContext({children}) {
    const [tema,setTema]= useState('dark')
  
  return <contextTema.Provider value={{tema,setTema}}>
      {children}
  </contextTema.Provider>;
}
