import React, { useState, useEffect } from "react";
import { Container, Row, Col, Stack, Image, Card, Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import { searchObras } from "../apis/ArtSocietyCRUD";



const User = localStorage.getItem('User');


const UsersC = () => {
    const setDeleteInlocalstorage = (del) => {
        localStorage.setItem('Delete', del);
      }

    searchObras(User, (res) => {
        console.log(res);
    })

    const [results, setResults] = useState([]);

    useEffect(() => {
        searchObras(User, setResults);
    }, []);

    const user = JSON.parse(localStorage.getItem('data'));
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={3} className="align-items-center">
                            
                            <Stack gap={3} className='align-items-center'>
                                <br />
                                
                                <Image src={user.Photo} roundedCircle height="225px" width="225px" />
                                <Card bg="dark" text="white" style={{ width: '25rem' }}>
                                    <Card.Header>
                                        <Card.Title text-align="center">{user.Name}</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Biography

                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Ubication</ListGroupItem>
                                        <ListGroupItem>Contact (Phone, Email)</ListGroupItem>
                                    </ListGroup>
                                </Card>
                               
                                <ButtonGroup className="mb-auto">
                                    <Button variant="dark" href="http://localhost:3000/update">Update profile</Button>
                                    <Button variant="secondary" href="/add">Upload</Button>

                                </ButtonGroup>
                            </Stack>
                            <Container>
                                <br />
                                {/* <Row xs={3} md={4} className="g-4"> */}
                                {/* {Array.from({ length: 1 }).map((_, idx) => ( */}


                                {results.map((res) => (
                                    <Container>

                                        <Card bg="dark" text="white" style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={res.Images} />
                                            <Card.Body>
                                                <Card.Title>{res.title}</Card.Title>
                                                <Card.Text>
                                                    {res.Description}
                                                </Card.Text>
                                                <Stack gap={1} className="text-center">
                                                    <Button variant="outline-light" href='/obra'>See more...</Button>
                                                    <Button variant="outline-danger" href="/del" onClick={()=> setDeleteInlocalstorage(res.uid)} >Delete</Button>
                                                </Stack>


                                            </Card.Body>
                                        </Card></Container>))}



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



























