import React from "react";
import SearchTop from "./SearchTop/SearchTop";
import SearchBody from "./SearchBody/SearchBody";
const SearchPage = ({ responseData }) => {
  return (
    <div className="search_page">
      <SearchTop responseData={responseData} />
      <SearchBody responseData={responseData} />
    </div>
  );
};

export default SearchPage;
