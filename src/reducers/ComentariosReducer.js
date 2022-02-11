const mokup = [{
    id:'1',
    title:"Spiderman : No Way Home",
    poster:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/12/spider-man-no-way-home-poster-2551731.jpg?itok=xe1AtQWW",
    comentarios:["Mejor Peli del Año","Quiero ser Spiderman"]
    
},{
    id:'2',
    title:"The Batman",
    poster:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/09/poster-batman-2021-2064381.jpg?itok=SEuYP8hx",
    comentarios:["No veo la hora de que se estrene","Im Batman"]
    
},{
    id:'3',
    title:"Matrix Resurrection",
    comentarios:[],
    poster:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/09/poster-batman-2021-2064381.jpg?itok=SEuYP8hx",
}]


const ComentariosReducer =(state,action)=>{
    switch(action.type){
        case 'addComentario':
            const {payloads} = action
            state.map(movie=>{
                if(payloads.idMovie === movie.id){
                   
                    movie.comentarios.push(payloads.comentario) 
                    console.log(movie)
                }
                return movie
            })
            // console.log(state)
            // return [...state]
            break
            default:
                return state
            }
            
        console.log(state)
     return [...state]
}
export {ComentariosReducer,mokup}