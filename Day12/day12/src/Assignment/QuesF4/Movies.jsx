import { useState } from "react"

export default function Movies(){
    var [movieName, setMovieName] = useState("")
    var [actor, setActor] = useState("")
    var [release, setRelease] = useState("")
    var [movieType, setMovieType] = useState([])
    var [state, setState] = useState("")
    var [movie, setMovie] = useState([])
    function addMovie(){
        let x = {
            movieName : movieName,
            actor : actor,
            release : release,
            movieType : movieType,
            state : state
        }
        setMovie([...movie,x])
    }
    function movietype(e){
        if(e.target.checked){
            
        }
    }
    return (
        <div>
            <input type="text" placeholder="Movie Name" onChange={(e)=>{setMovieName(e.target.value)}} />
            <input type="text" placeholder="Actor Name" onChange={(e)=>{setActor(e.target.value)}} />
            <input type="date" onChange={(e)=>{setRelease(e.target.value)}} />
            <input type="checkbox" value="" onChange={(e)=>{setMovieType(e.target.value)}} />
            <input type="checkbox" value="" onChange={(e)=>{setMovieType(e.target.value)}} />
            <input type="checkbox" value="" onChange={(e)=>{setMovieType(e.target.value)}} />
            <input type="text" onChange={(e)=>{setState(e.target.value)}} />
        </div>
        
    )
}