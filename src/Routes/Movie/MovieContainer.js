import React, { useState, useEffect } from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "../../api";

const MovieContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      setNowPlaying(nowPlaying);
      setUpcoming(upcoming);
      setPopular(popular);
    } catch {
      setError("Can't Find Movie Information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <MoviePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default MovieContainer;
