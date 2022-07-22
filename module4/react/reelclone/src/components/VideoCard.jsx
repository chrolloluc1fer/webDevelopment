import React from "react";
import { useState } from "react";
import './videocard.css'

function VideoCard() {
  let [playing, setPlaying] = useState(true);
  let [commentBoxOpen, setCommentBox] = useState(false);

  return (
    <div className="video-card">
      <p className="video-card-username">Fake User</p>
      <span className="video-card-music">
        <span>music note</span>
        <marquee behavior="" direction="">Song name</marquee>
      </span>
      
      <span
        onClick={(e) => {
          if (commentBoxOpen) {
            setCommentBox(false);
          } else {
            setCommentBox(true);
          }
        }}
      >
        Chat
      </span>

      {commentBoxOpen ? (
        <div className="video-card-comment-box">
            <div className="actual-comment">
            <h5>User Name</h5>
          <p>This is actual Comment</p>
            </div>
         
          <div className="comment-form">
            <div className="post-user-comment">
            <input type="text" />
            <button>Post</button>
            </div>
           
          </div>
        </div>
      ) : ("")}

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
        src="https://firebasestorage.googleapis.com/v0/b/class-demo-620a8.appspot.com/o/production%20ID_4434242.mp4?alt=media&token=3616c4ef-e3e0-428d-9274-32bdb6d4020a"
      ></video>
    </div>
  );
}

export default VideoCard;
