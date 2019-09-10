import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  padding-bottom: 200px;
`;

export default () => (
  <Container>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);
