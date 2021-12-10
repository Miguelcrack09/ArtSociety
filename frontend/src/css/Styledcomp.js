import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled, { css, footer } from 'styled-components'
import img from '../assets/img/bg2.jpg'

export const ButtonS = styled.button`
padding: 10px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
border: 1px solid #663399;
font-size: 16px;

${(props) =>
    props.primary &&
    css`
        background-color: #663399;
        color: white;
    `}
`;

export const Containerstyled = styled.div`
  background-image: url(${img});
  background-position: center center;
  //height: 1500px;
  //width: auto;
  //text-align: center;
  color: white;
  background-size: cover;
	background-repeat: no-repeat;
	background-color: rgba(0,0,0,0.0);
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

export const ImageTransition = styled.image`
  transition: all .5s ease-out;
`;

const media = {
  desktop: (...args) => css`
    @media (min-width: 500px) {
      ${css(...args)};
    }
  `
};

export const FooterS = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  padding-bottom: 25px;
  ${media.desktop`
    text-align: center;
    background: black;
  `}
`;

export const Policy = styled.div`
  width: auto;
  max-width: auto;
  font-size: 15px;
  line-height: 4;
  color: white;
  margin: 0 20px;
  
`;

const Styledcomp = () => {
  return (
    <>
      <Containerstyled>
        <p>holaaaaaaa</p>
        <ButtonS />
      </Containerstyled>
      <FooterS>
        <Policy>
          <p>
            ©2021 ArtSociety by Miguel Andrés, Catalina Páez and contributors.
          </p>
        </Policy>
      </FooterS>
    </>
  )
}

export default Styledcomp

