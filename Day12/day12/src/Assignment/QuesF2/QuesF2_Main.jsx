import { useState } from "react";
import Addition from "./Addition";
import Substraction from "./Substraction";
import Multiplication from "./Multiplication";
import Division from "./Division";

export default function QuesF2_Main(){
    var [num1, setNum1] = useState(0);
    var [num2, setNum2] = useState(0);
    var [type, setType] = useState()

    function symbole(sign){
        if(sign=="+"){
            setType(<Addition nums={[num1,num2]}/>)
        }else if(sign=="-"){
            setType(<Substraction nums={[num1,num2]}/>)
        }else if(sign=="*"){
            setType(<Multiplication nums={[num1,num2]}/>)
        }else{
            setType(<Division nums={[num1,num2]}/>)
        }
    }
    return (
        <div>
                {/* <form action=""> */}
                    <input type="text" placeholder="Number 1" onBlur={(e)=>setNum1(Number(e.target.value))}/>
                    <input type="text" placeholder="Number 2" onBlur={(e)=>setNum2(Number(e.target.value))}/>
                    <button onClick={()=>{setType("+"); symbole("+")}}>+</button>
                    <button onClick={()=>{setType("-"); symbole("-")}}>-</button>
                    <button onClick={()=>{setType("*"); symbole("*")}}>*</button>
                    <button onClick={()=>{setType("/"); symbole("/")}}>/</button>
                {/* </form> */}
                
                
                {type}
                {/* { type=="+" && <Addition nums={[num1,num2]}/>}
                { type=="-" && <Substraction nums={[num1,num2]}/>}
                { type=="*" && <Multiplication nums={[num1,num2]}/>}
                { type=="/" && <Division nums={[num1,num2]}/>} */}
        </div>
    )
}
