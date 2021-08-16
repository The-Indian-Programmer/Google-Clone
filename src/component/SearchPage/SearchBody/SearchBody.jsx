import React from "react";
import "./SearchBody.css";
// import responseData from "../../../component/FadeData/FakeData";
import { useSelector } from "react-redux";

const SearchBody = ({ responseData }) => {
  const term = useSelector((state) => state.searchState);

  return (
    <div className="search_body">
      <div className="result_count">
        About {responseData.searchInformation.formattedTotalResults}results (
        {responseData.searchInformation.formattedSearchTime} seconds) for {term}
      </div>
      <div className="results">
        {responseData.items.map((item) => {
          return (
            <div className="result">
              <p className="link_domain">
                {/* <img
                  src={item.pagemap?.cse_image[0].src}
                  alt=""
                  className="link_domain_image"
                /> */}
                <span className="link_domain_text">{item.displayLink}</span>
              </p>
              <p className="link_display">{item.title}</p>
              <p className="description">{item.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBody;
