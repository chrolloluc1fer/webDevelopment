import React from "react";
import Skin1 from './skins/skin1'
import Skin2 from './skins/skin2'
import Skin5 from './skins/skin5'
import "./preview.css"
import { useSelector } from "react-redux";
function Preview() {  
  let state = useSelector((state) => state);
  let document = state.documentReducer;
  let skinCode = document.skinCd;
  return (
    <div className="preview">
     {skinCode == "skin1" && <Skin1></Skin1>}
     {skinCode == "skin2" && <Skin2></Skin2>}
     {skinCode == "skin5" && <Skin5></Skin5>}

     

    </div>
  );
}

export default Preview;
