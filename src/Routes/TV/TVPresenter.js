import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TVPresenter = ({ popular, nowPlaying, error, loading }) => "TV";

TVPresenter.propTypes = {
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
