import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DHeader from "./DHeader";

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  a {
    background-color: #f1c40f;
    color: black;
    padding: 1px 2px;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const MovieData = ({ result }) => {
  const [mode, setMode] = useState("youtube");

  return (
    <Data>
      <Title>{result.original_title}</Title>
      <ItemContainer>
        <Item>{result.release_date.substring(0, 4)}</Item>
        <Divider>•</Divider>
        <Item>{result.runtime} min</Item>
        <Divider>•</Divider>
        <Item>
          {result.genres &&
            result.genres.map((genre, index) =>
              index === result.genres.length - 1
                ? genre.name
                : `${genre.name} / `
            )}
        </Item>
        <Divider>•</Divider>
        <Item>
          <a href={`https://www.imdb.com/title/${result.imdb_id}`}>IMDB</a>
        </Item>
      </ItemContainer>
      <Overview>{result.overview}</Overview>
      <DHeader mode={mode} setMode={setMode} result={result} />
    </Data>
  );
};

MovieData.propTypes = {
  result: PropTypes.object
};

export default MovieData;
