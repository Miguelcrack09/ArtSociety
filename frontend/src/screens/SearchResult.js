import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import ResultGenero from "../components/Search/ResultGenero";
import Cards from "../components/Home/Cards";

const SearchResults = () => {
  var user = JSON.parse(localStorage.getItem("data"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  const genero = localStorage.getItem('Genero');
  return (
    <Container>
      <Row>
        <h1>El Genero que seleccionaste es: {genero}</h1>
      </Row>
      <Row>
        <Col>
            <ResultGenero/>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;