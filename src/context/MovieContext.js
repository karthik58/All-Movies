import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";
export const Context = createContext();

const apiKey = "cc9ee4b9b0cc89b77eb6a06159c9db7e";
function MovieContext({ children }) {
  const [state, setstate] = useState({
    loading: true,
    TopRated: "",
    popular: "",
    upcoming: "",
    search: "",
  });
  const [dataSearch, setdataSearch] = useState({
    loading: true,
    searchData: "",
  });
  const handleSubmit = async () => {
    if (!state.search) {
      alert("this field is required");
      return 0;
    }
    const fetchSearch = async () => {
      const search = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cc9ee4b9b0cc89b77eb6a06159c9db7e&query=${state.search}`
      );

      setdataSearch({
        ...dataSearch,
        searchData: search.data.results,
        loading: false,
      });
    };
    fetchSearch();
  };

  useEffect(() => {
    const fetch = async () => {
      const top = await Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const popular = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      const upcoming = await Axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      );
      setstate({
        ...state,
        loading: false,
        topRated: top.data.results,
        popular: popular.data.results,
        upcoming: upcoming.data.results,
      });
    };
    fetch();
  }, []);

  const handleChange = (e) => {
    setstate({
      ...state,
      search: e.target.value,
    });
  };
  return (
    <Context.Provider value={{ state, handleChange, handleSubmit, dataSearch }}>
      {children}
    </Context.Provider>
  );
}

export default MovieContext;
