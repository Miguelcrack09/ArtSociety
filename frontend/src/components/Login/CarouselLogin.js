import React from 'react';
import ButtonLogin from './ButtonLogin';
import { Carousel, Image } from 'react-bootstrap';
import img2 from "../public/img/Lion.jpg";
import img1 from "../public/img/Espiral.jpg";
import img3 from "../public/img/Triangulo.jpg";

const CarouselLogin = () => {
  return (
    <>
      <Carousel variant="light">
        <Carousel.Item>
        <Image className="d-block" src={img3} height="570px" width="100%"/>
          <Carousel.Caption>
            <ButtonLogin />
            <h1>Únete a esta gran comunidad</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="d-block" src={img2} height="570px" width="100%"/>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="d-block" src={img1} rounded height="570px" width="100%"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselLogin
