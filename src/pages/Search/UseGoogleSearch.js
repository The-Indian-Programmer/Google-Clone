import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm, setLoading } from "../../action/index";
import { GOOGLE_API_KEY, CONTEXT_KEY } from "../../Key";
const UseGoogleSearch = () => {
  const [data, setData] = useState();
  const term = useSelector((state) => state.searchState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          dispatch(setLoading(false));
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default UseGoogleSearch;
// AIzaSyDjQqEYphv3HkfQyuiHd7OuOCmR9D8rQlg
// 208be8b936769d472
