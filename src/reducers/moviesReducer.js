
const reducerMovies=(state,action)=>{
    switch(action.type){
        case "armarMovie":
            
           return {movies:action.payloads.movies}
            
        default:
            return {...state}
        }
}
export  {reducerMovies}