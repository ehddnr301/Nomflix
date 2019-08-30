import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { korApi } from "../../api";

const DetailContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const didMount = async () => {
    const {
      data: { Data }
    } = await korApi.movieList();
    console.log(Data[0].Result);
    try {
      //   const {
      //     data: { results: topRated }
      //   } = await tvApi.topRated();
      //   const {
      //     data: { results: popular }
      //   } = await tvApi.popular();
      //   const {
      //     data: { results: airingToday }
      //   } = await tvApi.airingToday();
      //   setAiringToday(airingToday);
      //   setPopular(popular);
      //   setTopRated(topRated);
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
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      error={error}
      loading={loading}
    />
  );
};

export default DetailContainer;
