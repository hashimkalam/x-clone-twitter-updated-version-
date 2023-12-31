import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { ChatBubbleOutline, FavoriteBorder } from "@mui/icons-material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import RepeatIcon from "@mui/icons-material/Repeat";
import IosShareIcon from "@mui/icons-material/IosShare";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline className="post__replyIcon" fontSize="small" />
            <RepeatIcon className="post__replyRepost" fontSize="small" />
            <FavoriteBorder className="post__replyLike" fontSize="small" />
            <AnalyticsIcon className="post__replyView" fontSize="small" />
            <IosShareIcon className="post__replyShare" fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
