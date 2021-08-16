import React, { useState } from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm } from "../../action/index";
const Home = () => {
  console.log(process.env.GOOGLE_API_KEY);
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const term = useSelector((state) => state.searchState);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(input));
    history.push("/search");
  };
  return (
    <div className="home">
      {/* header  */}
      <div className="header">
        <div className="header_left">
          <Link className="about_text">About</Link>
          <Link className="store_text">Store</Link>
        </div>
        <div className="header_right">
          <Link className="gmail_text">Gmail</Link>
          <Link className="images_text">Images</Link>
          <AppsIcon className="app_icon" />
          <Avatar className="avatar" />
        </div>
      </div>
      {/* home body  */}
      <form className="home_body" onSubmit={handleSubmit}>
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe0EOUDWFtoYX5EcfFuaTM7ai92DdfT1TZA&usqp=CAU"
            alt=""
            className="google_image"
          />
        </div>
        <div className="search_box">
          <input
            value={input}
            onChange={handleChange}
            type="text"
            name="search"
            id="search"
            className="input_search"
          />
          <SearchIcon className="search_icon" />
          <MicIcon className="mic_icon" />
        </div>
        <div className="buttons">
          <button type="submit" className="btn_google_search">
            Google Search
          </button>
          <button className="btn_lucky">I am feeling lucky</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
// AIzaSyDjQqEYphv3HkfQyuiHd7OuOCmR9D8rQlg
// 208be8b936769d472
