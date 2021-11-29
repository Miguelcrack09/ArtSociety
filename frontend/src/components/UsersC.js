import React from 'react'
import { Container, Row, Col, Stack, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import iconouser from '../assets/img/gatoconvinito.jpg'

const UsersC = () => {
    const user = JSON.parse(localStorage.getItem('data'));
    return (
        <>
           <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={3} className="align-items-center">
                            <Stack gap={2} className='align-items-center'>
                                <br/>
                                <Image src={user.Photo} roundedCircle height="200px" width="200px" />
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
                            </Stack>
                            <Container>
                                <br/>
                                <Row xs={3} md={2} className="g-4">
                                    {Array.from({ length: 4 }).map((_, idx) => (
                                        <Col>
                                            <Card bg="dark" text="white" style={{ width: '20rem' }}>
                                                <Card.Img variant="top" src={iconouser} />
                                                <Card.Body>
                                                    <Card.Title>Art title</Card.Title>
                                                    <Card.Text>
                                                        Art description
                                                    </Card.Text>
                                                    <Button variant="outline-light" href='/obra'>See more...</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UsersC



























                {/* <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary" href='/obra'>See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iconouser} />
                            <Card.Body>
                                <Card.Title>Art Title</Card.Title>
                                <Card.Text>
                                    Art description.
                                </Card.Text>
                                <Button variant="primary">See more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default UsersC
 */}