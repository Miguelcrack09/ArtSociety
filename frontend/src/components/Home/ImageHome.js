import React from 'react'
import img1 from "../public/img/FlechaIzquierda.png";
import img2 from "../public/img/anime.jpg";
import img3 from "../public/img/manga.jpg";
import img4 from "../public/img/Urbano.jpg";
import img5 from "../public/img/Callejero.jpg";
import img6 from "../public/img/Fanart.jpg";
import img7 from "../public/img/Realismo.jpg";
import img8 from "../public/img/Derecha.png";
import { Image, Col } from 'react-bootstrap'


const ImageHome = () => {
  const setGeneroInlocalstorage = (Genero) => {
    localStorage.setItem('Genero', Genero);
  }
  return (
    <>
      <Col xs={6} md={12}>
        <a href="/ResultGenero">
          <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img2} onClick={()=> setGeneroInlocalstorage('anime')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img3} onClick={()=> setGeneroInlocalstorage('manga')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img4} onClick={()=> setGeneroInlocalstorage('urbano')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img5} onClick={()=> setGeneroInlocalstorage('callejero')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img6} onClick={()=> setGeneroInlocalstorage('fanart')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img7} onClick={()=> setGeneroInlocalstorage('realismo')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img8} roundedCircle height="150px" width="150px" />
        </a>
      </Col>
      <br />
    </>
  )
}

export default ImageHome
