import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const MovieData = ({ result }) => (
  console.log(result),
  (
    <Data>
      <Title>
        {result.original_title ? result.original_title : result.original_name}
      </Title>
      <ItemContainer>
        <Item>
          {result.release_date
            ? result.release_date.substring(0, 4)
            : result.first_air_date.substring(0, 4)}
        </Item>
        <Divider>•</Divider>
        <Item>
          {result.runtime ? result.runtime : result.episode_run_time[0]} min
        </Item>
        <Divider>•</Divider>
        <Item>
          {result.genres &&
            result.genres.map((genre, index) =>
              index === result.genres.length - 1
                ? genre.name
                : `${genre.name} / `
            )}
        </Item>
      </ItemContainer>
      <Overview>{result.overview}</Overview>
    </Data>
  )
);

MovieData.propTypes = {
  result: PropTypes.object
};

export default MovieData;
