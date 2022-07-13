import { useContext } from "react";
import { context } from "./ContextMemo";
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

export default GrandChild;
