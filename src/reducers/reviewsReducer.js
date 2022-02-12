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
    switch(action.type){
        case "addReview":
            break



        default:
            break
        }
    return {...state}
}
export  {reducerReviews,reviews}