import React from 'react';
import {Image, Container, Row, Col, Stack } from 'react-bootstrap';
import img2 from "../public/img/Lion.jpg";
import img1 from "../public/img/Espiral.jpg";
import img3 from "../public/img/Triangulo.jpg";
import SearchBar from './SearchBar';

const SearchBackground = () => {
  var user = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Stack gap={2} className="align-items-center">
              <Image className='mt-5' src={img1} width="400px" height="300px" />
              <SearchBar />
              <h1>Bienvenido {user.Name}</h1>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SearchBackground