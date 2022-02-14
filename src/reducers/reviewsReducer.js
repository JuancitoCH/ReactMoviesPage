const reviews = {
    reviews:[{
        idMovie:'1',
        comentarios:["Mejor Peli del Año","Quiero ser Spiderman"],
    },
    {
        idMovie:'2',
        comentarios:["No veo la hora de que se estrene","Im Batman"],
    },
    {
        idMovie:'3',
        comentarios:[],
    }
]
}
const reducerReviews=(state,action)=>{
    //mi useReducer debe ser puro y no mutar los valores como es el caso de esta verga
    
    switch(action.type){
        case "addReview":
            const {newState} = action
            return {...newState}

        case "addReviewReducer":
            const {newReview,idMovie} = action.payloads
            state.reviews.map(eachReview=>{
                if(eachReview.idMovie === idMovie) {
                    eachReview.comentarios.push(newReview)
                }
                return eachReview            
            })
            return {...state}

        default:
            return {...state}
        }
}
export  {reducerReviews,reviews}




// const reducerReviews=(state,action)=>{
//     //mi useReducer debe ser puro y no mutar los valores como es el caso de esta verga
//     switch(action.type){
//         case "addReview":
//             const {newReview,idMovie} = action.payloads
//             state.reviews.map(eachReview=>{
//                 if(eachReview.idMovie === idMovie) {
//                     eachReview.comentarios.push(newReview)
//                     console.log(eachReview.comentarios)
//                 }
//                 return eachReview            
//             })
//             break;



//         default:
//             break
//         }
//     return {...state}
// }
// export  {reducerReviews,reviews}

