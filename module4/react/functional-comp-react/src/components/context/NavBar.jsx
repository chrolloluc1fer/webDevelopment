import React, { useContext } from "react";

import { ThemeContext } from "./ThemeChanger";
import "./theme.css";

function NavBar() {
  return (
    <>
      <div>NavBar</div>
      <Options></Options>
      <Options></Options>
      <Options></Options>
      <div>-------------------------------------</div>
    </>
  );
}

function Options() {
  let CTheme = useContext(ThemeContext);
  return <div className={CTheme === "light" ? "light" : "dark"}>Options</div>;
}

export default NavBar;
