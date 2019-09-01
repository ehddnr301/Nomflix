import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { korApi } from "../../api";

const TVContainer = () => {
  const [popular, setPopular] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    try {
      const {
        data: { Data: popular }
      } = await korApi.popular();
      const {
        data: { Data: nowPlaying }
      } = await korApi.nowPlaying();
      setPopular(popular[0].Result);
      setNowPlaying(nowPlaying[0].Result);
      console.log(popular[0].Result);
    } catch {
      setError("Can't Find Any Show");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <TVPresenter
      popular={popular}
      nowPlaying={nowPlaying}
      error={error}
      loading={loading}
    />
  );
};

export default TVContainer;
