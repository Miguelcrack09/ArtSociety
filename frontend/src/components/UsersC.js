import React, { useState, useEffect } from "react";
import { Container, Row, Col,Stack, Image, Card, Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import ImagesUser from "./ImagesUser";
import UserInfo from "./UserInfo";
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

    const user = JSON.parse(localStorage.getItem('data'));
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={3} className="align-items-center">
                            
                            <Stack gap={3} className='align-items-center'>
                                <br />
                                
                                <Image src={results.photoUrl} roundedCircle height="225px" width="225px" />
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
                                    <Button variant="dark" href="/update">Update profile</Button>
                                    <Button variant="secondary" href="/add">Upload</Button>

                                </ButtonGroup>
                            </Stack>
                            <Container>
                                <br />
                                {/* <Row xs={3} md={4} className="g-4"> */}
                                {/* {Array.from({ length: 1 }).map((_, idx) => ( */}


                                    <ImagesUser/>



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



























