import React from "react";

import { ThemeContext } from "./ThemeChanger";
import './theme.css'
import { useContext } from "react";

function Footer() {
  return(
    <>
        <FooterText></FooterText>
        <FooterText></FooterText>
        <FooterText></FooterText>
        <FooterText></FooterText>
    
    </>
  )
}

function FooterText(){
    let ctheme = useContext(ThemeContext)
    
    return(
        <div class={ctheme === "light" ? "light" : "dark"}>
            Footer
        </div>
    )
}

export default Footer;
