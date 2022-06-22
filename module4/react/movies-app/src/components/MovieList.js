import { Component } from "react";
import {movies} from "../movieData"

class MovieList extends Component{
    render(){
        let moviesArr = movies.results
        return(
            <>   
            <div>
                <h2 className="text-center trending">
                    <strong>Trending</strong>
                </h2>
            </div>
                <div className="movie-list">
                {moviesArr.map((movieEle)=>(     
                 
                    <div className="card movie-card">
                         <img src="https://static.toiimg.com/thumb/msid-91984351,width-1280,height-720,resizemode-4/.jpg" className="card-img-top" alt="..."/>
                         <div className="card-body">
                         <h5 className="card-title">{movieEle.original_title}</h5>
                          <p className="card-text">{movieEle.overview}</p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                         </div>
                    </div>
                    
                  
                ))}
          </div>
            </>
        )
    }
}

export default MovieList 