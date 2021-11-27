import React from 'react'
import img1 from "../public/img/Woman.jpg";
import img2 from "../public/img/Lion.jpg";
import {Image, Col } from 'react-bootstrap'
const ImageHome = () => {
  return (
    <>                 
                    <Col xs={6} md={12}>
                        <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img2} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img2} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img2} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img1} roundedCircle height="150px" width="150px"/>
                        <Image className="d-fixed mx-2 mt-1" src={img2} roundedCircle height="150px" width="150px"/>
                    </Col>
                    <br/>
                    {/* <Col xs={6} md={4}>
                        <Image className="d-fixed" src={img1} roundedCircle height="200px" width="200px"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="d-fixed" src={img1} roundedCircle height="200px" width="200px"/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="d-fixed" src={img1} roundedCircle height="200px" width="200px"/>
                    </Col>
                    <img
                        className="d-fixed w-40"
                        src={img1}
                        alt="Second slide"
                        url="https://www.google.com/"
                    />
                    <img
                        className="d.fixed w-40"
                        src={img1}
                        alt="Second slide"
                        url="https://www.google.com/"
                    />
                    <img
                        className="d-fixed w-40"
                        src={img1}
                        alt="Second slide"
                        url="https://www.google.com/"
                    />
                    <img
                        className="d.fixed w-40"
                        src={img1}
                        alt="Second slide"
                    />
                    <img
                        className="d-fixed w-40"
                        src={img1}
                        alt="Second slide"
                    />
                    <img
                        className="d-fixed w-40"
                        src={img1}
                        alt="Second slide"
                    /> */}
    </>
  )
}

export default ImageHome
