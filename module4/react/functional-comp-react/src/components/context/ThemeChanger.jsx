import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
export let ThemeContext = React.createContext("");

function App() {
  let [theme, setTheme] = useState("light");

  const themeHandle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={themeHandle}>Change Theme</button>
      <NavBar></NavBar>
      <Footer></Footer>
    </ThemeContext.Provider>
  );
}

export default App;
