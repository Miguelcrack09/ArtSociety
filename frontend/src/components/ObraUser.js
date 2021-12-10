import React from 'react'
import { Container, Row, Col, Stack, Image, Card, Button, Form } from 'react-bootstrap'
import imagen1 from '../assets/img/jinx1.jpg'
import imagen2 from '../assets/img/jinx2.jpg'
import vid from '../assets/img/jinx.gif'
import { Containerstyled } from '../css/Styledcomp'

const setUserInlocalstorage = (User) => {
    localStorage.setItem('User', User);
}

const ObraUser = () => {
    const ClosseSession = () => {
        localStorage.removeItem('data')
    }
    const user = JSON.parse(localStorage.getItem('data'));
    if (localStorage.getItem('data') != undefined) {
        var linkUser = <Form className="d-flex">
            <Image className='mx-0' src={user.Photo} href="/login" roundedCircle height="35px" width="35px" />
            <Button variant="link" href="/users" onClick={() => setUserInlocalstorage(user.DNI)}>{user.Name}</Button>
        </Form>
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Stack direction="horizontal" gap={2}>
                                <Stack gap={2} className="align-items-center">
                                    <div bg="dark">
                                        <Image src={imagen1} thumbnail />
                                    </div>
                                    <div bg="dark">
                                        <Image src={imagen2} thumbnail />
                                    </div>                                
                                    <div bg="dark">
                                        <Image src={vid} thumbnail />
                                    </div>
                                </Stack>

                                <Stack gap={2}>
                                    <div>
                                        <br />
                                        <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                            <Card.Header>
                                                {linkUser}
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Arcane Jinx Fanart</Card.Title>
                                                <Card.Text>
                                                <p>Fanart de Jinx de la serie Arcane, me gustó mucho, la recomiendo!</p>
                                                   <p> Creador real: Huvy Nguyen, ilustrador freelancer - huyy.nguyen2112@gmail.com </p>
                                                
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                            <Card.Header>
                                                <Stack direction="horizontal" gap={3}>
                                                    <Button variant="outline-info">Like</Button>
                                                    <div className="vr" />
                                                    <Form.Control className="me-auto" placeholder="Comenta aquí..." />
                                                    <Button variant="secondary">Enviar</Button>
                                                </Stack>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Pollitoart</Card.Title>
                                                <Card.Text>
                                                    Esta increíble!
                                                </Card.Text>
                                                <Card.Title>Inkarla</Card.Title>
                                                <Card.Text>
                                                    Estupendo!
                                                </Card.Text>
                                                <Card.Title>Persona5</Card.Title>
                                                <Card.Text>
                                                    La calidad es excelente!
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
}

export default ObraUser
