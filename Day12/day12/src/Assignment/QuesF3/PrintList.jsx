export default function PrintList({list}){
    return (
        list.map((item,index)=>{return <li key={index}>{item}</li>})
    )
}