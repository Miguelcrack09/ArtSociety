import React from 'react';
import { Carousel, Image, Nav } from 'react-bootstrap';
import Cards from "../components/Cards";
import ImageHome from '../components/ImageHome';
import img2 from "../public/img/Lion.jpg";



const HomeUsers = () => {
    
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
             
             <Nav.Link href="http://localhost:3000"><Image src={img2} className="float-xl-end" url="www.google.com" roundedCircle height="400px" width="400px"/></Nav.Link>
            <Cards />
            <Cards />
            <br />
          
      </>  
    )
}

export default HomeUsers