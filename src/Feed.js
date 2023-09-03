import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc") // Assuming you want to order posts by timestamp
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <div className="feed__headerTop">
          <h3> Home </h3>
        </div>

        <div className="feed__headerBottom">
          <p id="feed__headerActive">For you</p>
          <p>Following</p>
        </div>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            timestamp={post.timestamp}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
