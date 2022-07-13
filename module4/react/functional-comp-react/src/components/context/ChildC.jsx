import React from "react";

function ChildC({ fName, lName }) {
  return (
    <div>
      <h1>This is Child C</h1>
      <h1>{fName}</h1>
      <h1>{lName}</h1>
    </div>
  );
}

export default ChildC;
