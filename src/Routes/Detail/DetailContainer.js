import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi } from "../../api";

const DetailContainer = props => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    location: { pathname }
  } = props;
  const {
    history: { push },
    match: {
      params: { id }
    }
  } = props;
  const isMovie = pathname.includes("/movie/");

  const didMount = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let results = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        console.log("hi");
      }
    } catch {
      setError("Can't Find anything");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    didMount();
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
