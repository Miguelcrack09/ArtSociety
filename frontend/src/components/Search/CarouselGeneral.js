import React from 'react'
import ImageHome from '../Home/ImageHome'
import { Carousel } from 'react-bootstrap';

const CarouselGeneral = () => {
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
    </>
  )
}

export default CarouselGeneral
