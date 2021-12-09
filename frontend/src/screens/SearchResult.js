import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import ResultGenero from "../components/Search/ResultGenero";
import { Containerstyled } from "../css/Styledcomp";


const SearchResults = () => {
  var user = JSON.parse(localStorage.getItem("data"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  const genero = localStorage.getItem('Genero');
  return (
        <>
        <Containerstyled>
          <Container>
        <h1>El Genero que seleccionaste es: {genero}</h1>        
        </Container>
        <ResultGenero/>
        </Containerstyled>
        </>
  );
};

export default SearchResults;