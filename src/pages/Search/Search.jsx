import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm, setLoading } from "../../action/index";
import responseData from "../../component/FadeData/FakeData";
import Loader from "../../component/Loader/Loader";
import UseGoogleSearch from "./UseGoogleSearch";
import SearchPage from "../../component/SearchPage/SearchPage";
const Search = () => {
  const loading = useSelector((state) => state.LoadingState);

  const value = UseGoogleSearch();
  return (
    <div className="searchpage">
      {loading ? <Loader /> : ""}
      {value.data === undefined ? "" : <SearchPage responseData={value.data} />}
    </div>
  );
};

export default Search;
