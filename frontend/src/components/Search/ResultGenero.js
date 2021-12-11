import React, { useState, useEffect } from "react";
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap';
import { searchGenero } from "../../apis/ArtSocietyCRUD";
import CarouselGeneral from "./CarouselGeneral";



const genero = localStorage.getItem('Genero');
const ResultGenero = () => {
  searchGenero(genero, (res) => {
    console.log(res);
  })
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchGenero(genero, setResults);
  },[]);

  const renderTooltip = (title, description) => (
    <Tooltip id="button-tooltip" >
      <h5>{title}</h5>
      <h6>{description}</h6>
    </Tooltip>
  );

  return (
    <>
    <CarouselGeneral/>
    <h1>El género que seleccionaste es: {genero}</h1>
      {results.map((res) => (

        <OverlayTrigger
          placement="auto"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(res.title, res.Description, res.Images)}
        ><a href="/obra">
          <Image className="d-fixed mx-3 mt-4" src={res.Images} height="330px" width="400px" />
          </a>
        </OverlayTrigger>
      ))}
      
      
    </>
  )
}

export default ResultGenero