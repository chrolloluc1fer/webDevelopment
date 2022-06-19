import { Component } from "react";

class Todo extends  Component{
    constructor(){
        super();
        this.state ={
            task:["Learn js","Learn DOM","learn React","Learn Node"]
        }
    }
    render(){
        return(
            <div>
            <input></input>
            <button>Add Task</button>
            <ul>
               {this.state.task.map((element)=>(
                    <li>
                        <p>{element}</p>
                    </li>
               ))}
            </ul>
            </div>
         
        )
    }
}

export default Todo