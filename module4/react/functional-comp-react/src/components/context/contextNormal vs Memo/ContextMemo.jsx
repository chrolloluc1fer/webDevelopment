import { useState, createContext, useContext } from "react";
import Parent from "./Parent"
export let context = createContext("Hello");



function ContextMemo() {
    const [message, setMessage] = useState("Fake message");
    const changeMessage = () => {
      setMessage("Message Update");
    };
  
    console.log("rendered context Normal");
    return (
      <div className="">
        <div>ContextNormal</div>
        <button onClick={changeMessage}>CLick Button</button>
        <context.Provider value={message}>
          <Parent></Parent>
        </context.Provider>
      </div>
    );
  }

  export default ContextMemo