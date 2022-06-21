import { Component } from "react";

class Todo extends  Component{
    constructor(){
        super();
        this.state ={
            tasks:[],
            currentTask:""
        }
      
    }
    handleChange = (e)=>{
        this.setState({
            currentTask:e.target.value
        })
    }

    addTask = ()=>{
        if(this.state.currentTask === "")
        return;
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length + 1}],
            currentTask:""
        })
      
       
    }

    removeTask = (id)=>{
        let newArr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id != id;

        })
        this.setState({
            tasks:[...newArr]
        })
    }
    render(){
        return(
            <div>
            <input type="text" value={this.state.currentTask} onChange={this.handleChange}/>
            <button onClick={this.addTask}>Add Task</button>
          
            <ul>
               {this.state.tasks.map((taskObj)=>(
                    <li key={taskObj.id}>   
                        <p>{taskObj.task}</p>
                        <button onClick={() => this.removeTask(taskObj.id)}>DELETE</button>
                    </li>
               ))}
            </ul>
    

            </div>
         
        )
    }
}

export default Todo