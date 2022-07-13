import GrandChild from "./GrandChild"

function Children() {
    console.log("Rendered Children");
    return (
      <>
        <div>I am a children</div>
        <GrandChild></GrandChild>
      </>
    );
  }

  export default Children