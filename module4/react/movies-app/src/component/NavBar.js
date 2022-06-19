import { Component } from "react";


class NavBar extends Component{
    constructor(){
        super()
    }
    render(){
      return(
            <div style={{display:"flex",padding:"1rem"}}>
                <h1>Movies App</h1>
                <h2 style={{marginLeft:"2rem",marginTop:"2rem"}}>Favourites</h2>
            </div>

            
      )  
      
    }
}

export default NavBar