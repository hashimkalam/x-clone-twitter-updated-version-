import React, { useState } from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Trends from "./Trends";

function Widgets() {
  const [inputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <div
          className={`widgets__input ${
            inputActive ? "widgets__inputActive" : ""
          }`}
        >
          <SearchIcon className="widgets__searchIcon" />
          <input
            className={`widgets__inputText ${
              inputActive ? "widgets__inputTextActive" : ""
            }`}
            placeholder="Search"
            type="text"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </div>

      <div className="widgets__subscribe">
        <h2>Subscribe to Premium</h2>
        <h4>
          Subscribe to unlock new features and if eligibale, recieve a share of
          ads revenue.
        </h4>
        <Button variant="outlined" className="widgets__subscribeBtn">
          Subscribe
        </Button>
      </div>

      <div className="widgets__trends">
        <h2>Trends for you </h2>
        <Trends
          topText="Trends in Sri Lanka"
          middleText="Japan"
          bottomText="551K posts"
          Icon={MoreHorizIcon}
        />
        <Trends
          topText="Entertainment Trending"
          middleText="#bbrightvc"
          bottomText="88.3K posts"
          Icon={MoreHorizIcon}
        />
        <Trends
          topText="Trends in Sri Lanka"
          middleText="Thailand"
          bottomText="121K posts"
          Icon={MoreHorizIcon}
        />
        <Trends
          topText="Politics Trending"
          middleText="America"
          bottomText="568K posts"
          Icon={MoreHorizIcon}
        />
        <Trends
          topText="Trends in Sri Lanka"
          middleText="#MeetOnZee"
          bottomText=""
          Icon={MoreHorizIcon}
        />
        <Trends
          topText="Trends in Sri Lanka"
          middleText="Srilanka"
          bottomText="5,023 posts"
          Icon={MoreHorizIcon}
        />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What is happening</h2>

        <TwitterTweetEmbed
          className="widgets__contents"
          tweetId={"1694676333874532833"}
        />

        <TwitterTimelineEmbed
          className="widgets__contents"
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          className="widgets__contents"
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverprogrammer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
