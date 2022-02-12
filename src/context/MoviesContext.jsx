import React,{createContext} from 'react'
const moviesContext = createContext()

export default function MoviesContext({children}){
  return (
      <moviesContext.Provider value={1}>
          {children}
      </moviesContext.Provider>
  )
}
