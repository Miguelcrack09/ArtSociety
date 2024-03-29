import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack, Image, Card, Button, ListGroup, ListGroupItem, ButtonGroup, Form } from 'react-bootstrap'
import ImagesUser from "./ImagesUser";
import { getUser } from "../apis/ArtSocietyCRUD";



const User = localStorage.getItem('User');

const UsersC = () => {

    getUser(User, (res) => {
        console.log(res);
    })

    const [results, setResults] = useState([]);

    useEffect(() => {
        getUser(User, setResults);
    }, []);


    console.log(results)

        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Stack direction="horizontal" gap={3} className="align-items-center">

                                <Stack gap={3} className='align-items-center'>
                                    <br />

                                    <Image className="d-fixed mx-2" src={results.photoUrl} roundedCircle height="250px" width="250px" />

                                    <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                        <Card.Header>
                                            <Card.Title text-align="center">{results.name}</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {results.biography}

                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>{results.location}</ListGroupItem>
                                            <ListGroupItem>{results.contactLink}</ListGroupItem>
                                        </ListGroup>
                                    </Card>

                                    <ButtonGroup className="mb-auto">
                                        <Button variant="dark" href="/update">Actualizar perfil</Button>
                                        <Button variant="secondary" href="/add">Subir obra</Button>
                                    </ButtonGroup>
                                    <br />
                                    <br />
                                </Stack>
                                <Container>

                                    {/* <Row xs={3} md={4} className="g-4"> */}
                                    {/* {Array.from({ length: 1 }).map((_, idx) => ( */}

                                    {/*<Stack direction="horizontal" gap={0}>*/}
                                    {/*<Stack gap={4}>*/}
                                    <ImagesUser />

                                    {/*</Stack>*/}
                                    {/*</Stack>*/}


                                    {/* } */}
                                    {/* </Row> */}
                                </Container>
                            </Stack>

                        </Col>
                    </Row>
                </Container >
            </>
        )
    }

    export default UsersC



























