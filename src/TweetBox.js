import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Hashim Kalam",
      username: "hashiimkalam",
      verified: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://e1.pxfuel.com/desktop-wallpaper/487/792/desktop-wallpaper-blue-exorcist-iphone-sad-profile-pics-anime-1334560-1080x1920-for-your-mobile-tablet-black-anime-iphone-thumbnail.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <div className="tweetBox__top">
        <form>
          <div className="tweetBox__topInput">
            <Avatar src="https://e1.pxfuel.com/desktop-wallpaper/487/792/desktop-wallpaper-blue-exorcist-iphone-sad-profile-pics-anime-1334560-1080x1920-for-your-mobile-tablet-black-anime-iphone-thumbnail.jpg" />
            <input
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What is happening?!"
              type="text"
            />
          </div>
          <div className="tweetBox__topContents">
            <input
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox__topImageInput"
              placeholder="Optional: Enter image URL"
              type="text"
            />
            <Button
              onClick={sendTweet}
              type="submit"
              className="tweetBox__topButton"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
      <div className="tweetBox__Bottom">
        <p>Show 525 Tweets</p>
      </div>
    </div>
  );
}

export default TweetBox;
