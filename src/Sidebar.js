import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SidebarOption from "./SidebarOption";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://c.ndtvimg.com/2023-07/9kac2es_twitter-x-650_650x400_24_July_23.jpg?im=Resize=(1200,900)"
        alt=""
      />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Expore" />
      <SidebarOption Icon={NotificationsActiveIcon} text="Notification" />
      <SidebarOption Icon={EmailIcon} text="Messages" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={PeopleIcon} text="Communities" />
      <SidebarOption Icon={CloseIcon} text="Verified" />
      <SidebarOption Icon={PersonIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__post" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
