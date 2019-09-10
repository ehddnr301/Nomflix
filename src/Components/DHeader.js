import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Item = styled.div`
  width: 100px;
  text-align: center;
  padding: 10px 20px;
  background-color: ${props => (props.isSelected ? "#00b894" : "white")};
  color: ${props => (props.isSelected ? "white" : "black")};
  font-weight: ${props => props.isSelected && "600"};
  &:hover {
    cursor: pointer;
  }
`;

const IFrame = styled.iframe`
  width: 200px;
  height: 200px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 15px;
`;
const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 250px;
  background-size: contain;
  border-radius: 4px;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.1s linear;
`;

const DHeader = ({ mode, setMode, result }) => {
  return (
    <Container>
      <Header>
        <Item
          onClick={() => setMode("youtube")}
          isSelected={mode === "youtube"}
        >
          Video
        </Item>
        <Item
          onClick={() => setMode("production")}
          isSelected={mode === "production"}
        >
          Production
        </Item>
      </Header>
      {
        <Grid>
          {mode === "youtube"
            ? result.videos.results.map(m => (
                <IFrame src={`https://www.youtube.com/embed/${m.key}`}></IFrame>
              ))
            : result.production_companies.map(m => (
                <Image
                  bgUrl={`https://image.tmdb.org/t/p/w500/${m.logo_path}`}
                ></Image>
              ))}
        </Grid>
      }
    </Container>
  );
};

export default DHeader;
