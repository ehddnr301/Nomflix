import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import MovieData from "../../Components/MovieData";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  box-shadow: 0 0 5px black;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const DetailPresenter = ({ result, loading, error, isMovie }) =>
  loading ? (
    (console.log(result), <Loader />)
  ) : (
    <Container>
      <Backdrop
        bgImage={
          isMovie && result
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : result.posters.includes("|")
            ? result.posters.substring(0, result.posters.indexOf("|"))
            : result.posters
        }
      />
      <Content>
        <Cover
          bgImage={
            isMovie
              ? result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
              : result.posters.includes("|")
              ? result.posters.substring(0, result.posters.indexOf("|"))
              : result.posters
          }
        />
        <MovieData result={result}></MovieData>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
