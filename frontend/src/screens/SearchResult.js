import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
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
      <Containerstyled style={{ textAlign: "center" }}>
        <Container >
          <br />
          
        </Container>
        <div>
          <ResultGenero />
        </div>
        <br />
      </Containerstyled>
    </>
  );
};

export default SearchResults;