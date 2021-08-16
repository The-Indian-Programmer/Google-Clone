import React, { useState } from "react";
import "./SearchTop.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm } from "../../../action/index";
import ImageIcon from "@material-ui/icons/Image";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import "./SearchTop.css";
const SearchTop = () => {
  const term = useSelector((state) => state.searchState);
  const [input, setInput] = useState(term);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(input));
    console.log(term);
  };
  return (
    <div className="search_top">
      <div className="top_bar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe0EOUDWFtoYX5EcfFuaTM7ai92DdfT1TZA&usqp=CAU"
          alt=""
          className="search_top_google_image"
        />
        <form className="search_box" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleChange}
            type="text"
            name="search"
            id="search"
            className="input_search"
          />
          <button type="submit" className="search_icon">
            <SearchIcon className="" />
          </button>
        </form>
      </div>
      {/* bottombar  */}
      <div className="bottom_bar">
        <div className="bottom_left">
          <div className="bottom_left_component bottom_all">
            <SearchIcon className="icon bottom_search_icon" />
            <span className="text">All</span>
          </div>
          <div className="bottom_left_component bottom_news">
            <InsertDriveFileIcon className="icon bottom_news_icon" />
            <span className="text">News</span>
          </div>
          <div className="bottom_left_component bottom_images">
            <ImageIcon className="icon bottom_images_icon" />
            <span className="text">Images</span>
          </div>
          <div className="bottom_left_component bottom_shopping">
            <CreateIcon className="icon bottom_shopping_icon" />
            <span className="text">Shopping</span>
          </div>
          <div className="bottom_left_component bottom_maps">
            <RoomIcon className="icon bottom_maps_icon" />
            <span className="text">Maps</span>
          </div>
          <div className="bottom_left_component bottom_more">
            <MoreVertIcon className="icon bottom_more_icon" />
            <span className="text">More</span>
          </div>
        </div>
        <div className="bottom_right">
          <p className="setting">Setting</p>
          <p className="tools">Tools</p>
        </div>
      </div>
    </div>
  );
};

export default SearchTop;
