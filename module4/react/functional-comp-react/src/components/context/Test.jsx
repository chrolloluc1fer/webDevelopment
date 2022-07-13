
import React, { useState } from 'react'
import { useContext } from 'react';
let context = React.createContext(null);


function Test() {
    const [firstName, setFirstName] = useState("Shubham");
    const [lastName, setLastName] = useState("Gupta");
  return (
    <div>
        <context.Provider value = {{firstName,lastName}}>
            <h1>This is parent Component</h1>
            <ChildA/>
        </context.Provider>      
    </div>
    )
}


function ChildA(){
    return(
        <>
        <h1>This is ChildA Component</h1>
        <ChildB/>
        </>
        )
}

function ChildB(){
    return(
        <>
        <h1>This is ChildB Component</h1>
        <ChildC/>
        </>
    )
}

function ChildC(){
    const {firstName, lastName} =  useContext(context);
    return(
        <>
        <h1>This is ChildC Component</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </>
    )
}
export default Test