import { useState, createContext, useContext } from "react";

let context = createContext("Hello");

function ContextNormal() {
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

function Parent() {
  console.log("Rendered Parent");
  return (
    <>
      <div>I am a Parent</div>
      <Children></Children>
    </>
  );
}

function Children() {
  console.log("Rendered Children");
  return (
    <>
      <div>I am a children</div>
      <GrandChild></GrandChild>
    </>
  );
}

function GrandChild() {
  const message = useContext(context);
  console.log("Rendered GrandParent");
  return (
    <>
      <div>I am grandChild</div>
      <div>God sent this message{message}</div>
    </>
  );
}

export default ContextNormal;
