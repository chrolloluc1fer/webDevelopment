import { useEffect, useState } from "react";


function UseEffect1(){
    const [count,setCount] = useState(0);
    
    useEffect(() =>{
        document.title = `This is my title ${count}`
    })
    
    return(
        <div>
            <h1>This is counter {count}</h1>
            <button type="" onClick={() => setCount(count + 1)}>+</button>
            <button type="" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )

}

export default UseEffect1