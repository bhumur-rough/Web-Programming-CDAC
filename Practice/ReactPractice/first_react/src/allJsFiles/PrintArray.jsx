export default function PrintArray(){
    let User = [
        {name : "Bhumur", age : 24},
        {name : "Himanshu", age : 24},
        {name : "Aman", age : 24},
        {name : "Mukul", age : 24},
        {name : "Divyanshu", age : 24},
        {name : "Ayush", age : 24},
        {name : "Archit", age : 24},
    ]

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        User.map((item,index)=>{
                            return <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.age}</th>
                            </tr> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}