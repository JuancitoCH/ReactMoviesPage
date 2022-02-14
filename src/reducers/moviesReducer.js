const movies = {
    movies:[{
        id:'1',
        title:"Spiderman : No Way Home",
        año: 2021,
        duracion: "2h 28m",
        descripcion:"Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio",
        poster:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/12/spider-man-no-way-home-poster-2551731.jpg?itok=xe1AtQWW",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, omnis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, tempore?",
        director: "James Wan",
        actores: "Peter Parker, Meriyein, Doc Octopus",
        trailer: "https://www.youtube.com/embed/6QkTCmhOzuA",
    },{
        id:'2',
        title:"The Batman",
        año: 2022,
        duracion: "2h 28m",
        descripcion:"Batman regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y el Fiscal del Distrito Harvey Dent, Batman tiene como objetivo destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra ser eficaz, pero pronto termina siendo presa del caos desencadenado por una nueva mente criminal que los aterrados ciudadanos conocen como Joker.",
        poster:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/09/poster-batman-2021-2064381.jpg?itok=SEuYP8hx",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, omnis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, tempore?",
        director: "Steven Spielberg",
        actores: "El de crepúsculo, Alfredo, Gatúbela nueva",
        trailer:"https://www.youtube.com/embed/fWQrd6cwJ0A"
        
    },{
        id:'3',
        title:"Matrix Resurrection",
        año:2021,
        duracion: "2h 28m",
        descripcion: "Cuarta entrega de la franquicia “Matrix”, que estará dirigida en solitario por Lana Wachowski. La producción del film arrancará en 2020, con Keanu Reeves y Carrie-Anne Moss interpretando de nuevo a sus personajes Neo y Trinity, respectivamente.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, omnis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, tempore?",
        poster:"https://sm.ign.com/ign_es/screenshot/default/fez59x6vqayjd9m_3n5p.jpg",
        trailer:"https://www.youtube.com/embed/qjnvX44LoQw"
    }
]
}
const reducerMovies=(state,action)=>{
    switch(action.type){
        case "addMovie":
            break



        default:
            // console.log([...action.payloads.Movies])
            return {movies:[...action.payloads.Movies]}
        }
    return {...state}
}
export  {reducerMovies,movies}