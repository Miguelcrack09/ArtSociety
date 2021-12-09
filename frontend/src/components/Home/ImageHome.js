import React from 'react'
import img1 from "../public/img/Woman.jpg";
import img2 from "../public/img/Lion.jpg";
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
          <Image className="d-fixed mx-2 mt-1" src={img1} onClick={()=> setGeneroInlocalstorage('manga')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img2} onClick={()=> setGeneroInlocalstorage('urbano')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img1} onClick={()=> setGeneroInlocalstorage('callejero')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img2} onClick={()=> setGeneroInlocalstorage('fanart')} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px" />
          <Image className="d-fixed mx-2 mt-1" src={img2} roundedCircle height="150px" width="150px" />
        </a>
      </Col>
      <br />
    </>
  )
}

export default ImageHome
