import React from 'react';
import Cards from "./Cards";
import ImageHome from './ImageHome';
import { Carousel } from 'react-bootstrap';


const CarouselHome = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <ImageHome />
        </Carousel.Item>
        <Carousel.Item>
          <ImageHome />
        </Carousel.Item>
      </Carousel>
      <Cards />

      <br />
    </>
  )
}

export default CarouselHome
