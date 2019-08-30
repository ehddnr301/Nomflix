import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MoviePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  "Movie";

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
