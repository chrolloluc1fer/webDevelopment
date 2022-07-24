import React from "react";
import { useState, useEffect } from "react";
import "./videocard.css";
import { db } from "../Firebase";
import { getDoc, setDoc, updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function VideoCard(props) {
  let user = useContext(AuthContext);
  let [playing, setPlaying] = useState(true);
  let [currUserComment, setCurrUserComment] = useState("");
  let [comments, setComments] = useState([]);
 
    useEffect(async () => {
      let commentsIdArr = props.data.comments;
      let arr = [];
      for (let i = 0; i < commentsIdArr.length; i++) {
          const commentRef = doc(db, "comments", commentsIdArr[i]);
          const commentSnap = await getDoc(commentRef);
          arr.push(commentSnap.data())
      }
      console.log("Array ", arr)
      setComments(arr);
  }, [props]);
  return (
    <div className="video-card">
      <div className="left">
        <p className="video-card-username">Shubham</p>
        <span className="video-card-music">
          <p behavior="" direction="">
            Song name
          </p>
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
            src={props.data.url}
          ></video>
        </div>

        <div className="comment">
          <h3>Comments</h3>
          <div className="video-card-comment-box">
            
          {comments.map((comment) => {
                        return (
                            <div className="actual-comments">
                                <h5>{comment.email}</h5>
                                <p>{comment.comment}</p>
                            </div>
                        )
                    })}
              <div className="actual-comments">
                        <h5>User name</h5>
                        <p>This is actual comment</p>
                    </div>

            <div className="comment-form">
              <div className="post-user-comment">
                <input type="text" value={currUserComment} onChange={(e) => setCurrUserComment(e.currentTarget.value)}/>
                <button
                  className="postButton"
                  onClick={async () => {
                    let commentId = user.uid + "$" + Date.now();
                    await setDoc(doc(db, "comments", commentId), {
                      email: user.email,
                      comment: currUserComment,
                    });
                    setCurrUserComment("");
                    let postCommentsArr = props.data.comments;
                    postCommentsArr.push(commentId);
                    const postsRef = doc(db, "posts", props.data.id);
                    await updateDoc(postsRef, {
                      comments: postCommentsArr,
                    });
                  } 
                }
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
