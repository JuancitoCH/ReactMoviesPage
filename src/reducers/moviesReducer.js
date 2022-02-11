

export const moviesInitialState = {
    movies: mockup
}

export default function moviesReducer (state, action) {
    let newState;
    switch (action.type) {
        case 'addStars':
            const {movie, stars} = action;
            movie.stars = movie.stars + parseInt(stars);
            movie.numberOfReviews++;
            //Creo un nuevo objeto arreglo
            newState = {movies:[...state.movies]};
            break;
    }
    
    return newState

}
 
//TAREA: Hacer lo del rating con un useReducer
