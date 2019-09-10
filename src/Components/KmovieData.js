import React, { useState } from "react";
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
  margin-bottom: 20px;
`;

const Img = styled.div`
  background-image: url(${props => props.bgUrl});
  width: 500px;
  height: 300px;
  background-size: contain;
  border-radius: 4px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const KmovieData = ({ result }) => {
  const [mode, setMode] = useState("youtube");

  return (
    <Data>
      <Title>{result.title}</Title>
      <ItemContainer>
        <Item>{result.prodYear}</Item>
        <Divider>•</Divider>
        <Item>
          {result.runtime ? result.runtime : result.episode_run_time[0]} min
        </Item>
        <Divider>•</Divider>
        <Item>{result.genre}</Item>
        <Divider>•</Divider>
        <Item>
          <a href={"#"}>KMDB</a>
        </Item>
      </ItemContainer>
      <Overview>{result.plot}</Overview>
      <p>
        KMDB is not woring, I want to use KMDB but not working Fx...ㅠㅠ{" "}
        <br></br> I can get only this image by KMDB
      </p>
      <Img bgUrl={require("../assets/Error.png")}></Img>
    </Data>
  );
};

KmovieData.propTypes = {
  result: PropTypes.object
};

export default KmovieData;
