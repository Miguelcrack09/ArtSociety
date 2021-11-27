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
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageHome />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>          
            <Cards />
            <Cards />
            <br />
    </>
  )
}

export default CarouselHome
