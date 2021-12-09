import React from 'react'
import { Container, Row, Col, Stack, Image, Card, Button, Form } from 'react-bootstrap'
import imagen1 from '../assets/img/jinx.png'
import imagen2 from '../assets/img/otrajinx.png'
import imagen3 from '../assets/img/teamojinx.png'
import vid from '../assets/img/gif.gif'
import { Containerstyled } from '../css/Styledcomp'

const ObraUser = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={2}>
                            <Stack gap={2} className="align-items-center">
                                <div className="bg-light border">
                                    <Image src={imagen1} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={imagen2} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={imagen3} thumbnail />
                                </div>
                                <div className="bg-light border">
                                    <Image src={vid} thumbnail />
                                </div>
                            </Stack>

                            <Stack gap={2}>
                                <div>
                                    <br />
                                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <Button variant="link">UserLink</Button>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Art Title</Card.Title>
                                            <Card.Text>
                                                Art Description
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <Stack direction="horizontal" gap={3}>
                                                <Button variant="outline-info">Like</Button>
                                                <div className="vr" />
                                                <Form.Control className="me-auto" placeholder="Comment here..." />
                                                <Button variant="secondary">Submit</Button>                                                                                              
                                            </Stack>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Randomuser</Card.Title>
                                            <Card.Text>
                                                Comment
                                            </Card.Text>
                                            <Card.Title>Randomguy</Card.Title>
                                            <Card.Text>
                                                Comment
                                            </Card.Text>
                                            <Card.Title>Persona5</Card.Title>
                                            <Card.Text>
                                                Comment
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </div>
                            </Stack>

                        </Stack>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default ObraUser
