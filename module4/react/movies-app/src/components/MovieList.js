import { Component } from "react";
import {movies} from "../movieData"

let url = "https://image.tmdb.org/t/p/original/"
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
                         <img src={`${url}${movieEle.backdrop_path}`} className="card-img-top" alt="..."/>
                         <div className="card-body">
                         <h5 className="card-title">{movieEle.original_title}</h5>
                         <p className="card-text">{movieEle.overview}</p>
                         <div className="fav-btn" ><a href="#" className="btn btn-primary">Add to favourite</a></div>
                         </div>
                    </div>
                    
                  
                ))}


          </div>
          <div class="footer">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a class="page-link" href="#">1</a></li>
                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                    <li className="page-item"><a class="page-link" href="#">3</a></li>
                    <li className="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
                </nav>
          </div>
            </>
        )
    }
}

export default MovieList 