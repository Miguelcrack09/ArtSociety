import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import ResultGenero from "../components/Search/ResultGenero";


const SearchResults = () => {
  var user = JSON.parse(localStorage.getItem("data"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  const genero = localStorage.getItem('Genero');
  return (
        <>
        <Container>
        <h1>El Genero que seleccionaste es: {genero}</h1>
        </Container>
        <ResultGenero/>
        </>
  );
};

export default SearchResults;