import React from "react";
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap';
import { searchGenero } from "../../apis/ArtSocietyCRUD";
import img1 from "../public/img/Tiger.jpeg"
import img2 from "../public/img/Woman.jpg"


const genero = localStorage.getItem('Genero');

const ResultGenero = () => {
  searchGenero(genero, (res)=>{
    console.log(res);
  })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Simple tooltip<br />
        hola<br />
        como estas?<br />
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.<br />
        <Image className="d-fixed mx-2 mt-1" src={img1} height="50px" width="50px" />
    </Tooltip>
);
  return (
    <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Image className="d-fixed mx-3 mt-1" src={img1} height="330px" width="400px" />
            </OverlayTrigger>,
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Image className="d-fixed mx-3 mt-1" src={img2} height="330px" width="400px" />
            </OverlayTrigger>,
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Image className="d-fixed mx-3 mt-1" src={img1} height="330px" width="400px" />
            </OverlayTrigger>,
            <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
            <Image className="d-fixed mx-3 mt-1" src={img2} height="330px" width="400px"/>
          </OverlayTrigger>
  );
};

export default ResultGenero;