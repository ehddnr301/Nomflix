import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

const Form = styled.form`
  margin-top: 30px;
  margin-left: 33vw;
  width: 450px;
  height: 40px;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  color: black;
  border: 2px solid #2ecc71;
  outline: none;
`;

const Btn = styled.button`
  padding: 20px;
  border: none;
  background-color: #2ecc71;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={updateTerm}
        vlaue={searchTerm}
        placeholder={"검색어를 입력하세요"}
      ></Input>
      <Btn></Btn>
    </Form>
    {loading ? (
      <Loader></Loader>
    ) : (
      <>
        {movieResults && (
          <Section title="Movie Result">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && (
          <Section title="영화 결과">
            {tvResults.map(t => (
              <Poster
                key={parseInt(t.movieSeq)}
                id={parseInt(t.movieSeq)}
                imageUrl={t.posters}
                title={t.title}
                rating={10}
                year={t.modDate.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
