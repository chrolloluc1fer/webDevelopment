import React from "react";
import { useState } from "react";
import './videocard.css'

function VideoCard(props) {
  let [playing, setPlaying] = useState(true);
  let [commentBoxOpen, setCommentBox] = useState(false);

  return (
    <div className="video-card">
      <div className="left">
        <p className="video-card-username">Shubham</p>
        <span className="video-card-music">
         <p behavior="" direction="">Song name</p>
        </span>
      </div>
      
    
      <div className="right">
        <div className="videoContainer">
          <video
            onClick={(e) => {
              if (playing) {
                e.currentTarget.pause();
                setPlaying(false);
              } else {
                e.currentTarget.play();
                setPlaying(true);
              }
            }}
            src= {props.data.url}          ></video>
        </div>
        
        <div className="comment">
         <h3>Comments</h3> 
          <div className="video-card-comment-box">
              <div className="actual-comment">
             <h4>User</h4>:
              <p>This is actual an Comment</p>
              </div>
        
            <div className="comment-form">
              <div className="post-user-comment">
              <input type="text" />
              <button className="postButton">Post</button>
              </div>
        
            </div>
          </div>
         
          </div>
      </div>

    </div>
  );
}

export default VideoCard;
