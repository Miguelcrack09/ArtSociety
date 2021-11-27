import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cards from "../components/Cards";
import ImageHome from '../components/ImageHome';



const Home = () => {
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
                <Carousel.Item>
                    <ImageHome />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Cards />
            <Cards />
            <br />
          
      </>  
    )
}

export default Home