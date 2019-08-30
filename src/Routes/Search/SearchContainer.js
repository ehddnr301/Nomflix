import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, korApi } from "../../api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { Data: tvResults }
      } = await korApi.searchKor(searchTerm);
      setMovieResults(movieResults);
      //
      setTvResults(tvResults[0].Result);
      //
    } catch {
      setError("Can't Find anything");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = event => {
    if (searchTerm !== null) {
      searchByTerm();
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
