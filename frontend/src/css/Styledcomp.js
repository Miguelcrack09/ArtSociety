import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'
import img from '../assets/img/bg2.jpg'

export const Containerstyled = styled.div`
  background-image: url(${img});
  height: 1500px;
  width: auto;
`;

export const variantOptions = styled.div`
  header: {
    background-color: pink;
    color: white;
  }
  white: {
    background-color: "white";
    color: lightblue;
  }
`;

const Styledcomp = () => {
  return (
    <>
      <Containerstyled>
        <Row>
          <Col>
            <p>holaaaaaaa</p>
          </Col>
        </Row>
      </Containerstyled>
    </>
  )
}

export default Styledcomp

