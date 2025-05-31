export default function Hello(){
    return <div>
        <h1>
            Bhumur
        </h1>
    </div>
}
export function A(){
    return(
        <div>
            This is A component
        </div>
    )
}

export function B(){
    return(
        <div>
            This is B component
            <A/>
        </div>
    )
}

