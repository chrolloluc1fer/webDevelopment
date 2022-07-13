import React from "react";
import Children from "./Children"

function Parent() {
    console.log("Rendered Parent");
    return (
      <>
        <div>I am a Parent</div>
        <Children></Children>
      </>
    );
  }

  export default React.memo(Parent)