import { useState } from "react"
import PrintList from "./PrintList"

export default function Fruit(){
    var [fruit,setFruit] = useState([])
    return  <>
                <input type="text" onBlur={(e)=>{setFruit([...fruit,e.target.value])}}/>
                    <PrintList list = {fruit} />
            </>
}