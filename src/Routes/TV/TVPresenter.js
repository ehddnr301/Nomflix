import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 15px;
`;

const TVPresenter = ({ popular, nowPlaying, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="NowPlaying">
          {nowPlaying.map(t => (
            <Poster
              key={parseInt(t.movieSeq)}
              id={parseInt(t.movieSeq)}
              imageUrl={t.movieSeq}
              title={t.title}
              rating={10}
              year={t.modDate.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(t => (
            <Poster
              key={parseInt(t.movieSeq)}
              id={parseInt(t.movieSeq)}
              imageUrl={t.movieSeq}
              title={t.title}
              rating={10}
              year={t.modDate.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
