import React, { useState, useEffect } from "react";
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap';
import { searchGenero } from "../../apis/ArtSocietyCRUD";




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
      <h1>{title}</h1>
      <h2>{description}</h2>
    </Tooltip>
  );

  return (
    <>
      {results.map((res) => (

        <OverlayTrigger
          placement="auto"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(res.title, res.Description, res.Images)}
        >
          <Image className="d-fixed mx-3 mt-1" src={res.Images} height="330px" width="400px" />
        </OverlayTrigger>
      ))}

    </>
  )
}

export default ResultGenero