import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DetailPresenter = ({ result, error, loading }) => "Detail";

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
