//export const reviewsInitialState () {

//}

export default function moviesReducer (state, action) {
    let newState;
    switch (action.type) {
        case 'addReview':
            const {idMovie, comment} = action;
            newState = [...state, {id:state.revies.length.idMovie}];
            break;
    }
    
    return newState

}