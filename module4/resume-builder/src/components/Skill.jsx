import React from "react";
import Preview from "./Preview";
import "./skill.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addSkillCreator } from "../redux/action";


function Skill() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let skill = state.skillReducer;

    const onChange = (event) => {
        let key = event.target.id;
        let value = event.target.value;
        let newSkill = {...skill,[key]:value};
        dispatch(addSkillCreator(newSkill));
    }

    const getFieldData = (key) => {
        if(skill[key]){
            return skill[key];
        }else{
            return "";
        }
    }

  return (
    <div className="skills">
      <div className="skill-form">
        
        <div className="ski-heading">
            <h1 className="skill-heading">Skills</h1>
        </div>
        <div className="skill-group">
        <div className="input-group">
            <label htmlFor="">Skill 1</label>
            <input type="text" id="skill1" value={getFieldData("skill1")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Skill 2</label>
            <input type="text" id="skill2" value={getFieldData("skill2")} onChange={onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="">Skill 3</label>
            <input type="text" id="skill3" value={getFieldData("skill3")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Skill 4</label>
            <input type="text" id="skill4" value={getFieldData("skill4")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Skill 5</label>
            <input type="text" id="skill5"value={getFieldData("skill5")} onChange={onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="">Skill 6</label>
            <input type="text" id="skill6" value={getFieldData("skill6")} onChange={onChange} />
          </div>
          <div className="input-group ">
            <label htmlFor="">Skill 7</label>
            <input type="text" id="skill7" value={getFieldData("skill7")} onChange={onChange}/>
          </div>
          <div className="next">
        <Link to="/final"><button>Next</button></Link>    
          </div>
          <Link to="/education">
            <div className="previous">
              <button>Previous</button>
            </div>
          </Link>
        </div>
     
      </div>
      <div className="preview-form">
        <Preview/>
      </div>
    </div>
  );
}

export default Skill;
