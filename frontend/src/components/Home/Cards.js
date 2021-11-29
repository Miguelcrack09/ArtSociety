import React from 'react'
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap'
import img1 from "../public/img/Tiger.jpeg"
import img2 from "../public/img/Woman.jpg"
const Cards = () => {
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
    <>

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
          </OverlayTrigger>,






                {/* <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                  <Col>
                      <Card>
                          <Card.Img variant="top" src={img2}/>
                          <Card.Body>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                              </Card.Text>
                          </Card.Body>
                          <br/>
                          <Card.Img variant="top" src={img1} href="https://www.google.com"/>
                          <Card.Body>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
          <br/> */}
            </>
            )
}

            export default Cards
