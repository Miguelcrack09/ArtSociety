import React, { useState, useEffect } from "react";
import { Stack, Image, Card, Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import { getUser } from "../apis/ArtSocietyCRUD";

const User = localStorage.getItem('User');

const UserInfo = () => {

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
                                Biography

                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Ubication</ListGroupItem>
                            <ListGroupItem>Contact (Phone, Email)</ListGroupItem>
                        </ListGroup>
                    </Card>

                    <ButtonGroup className="mb-auto">
                        <Button variant="dark" href="/update">Update profile</Button>
                        <Button variant="secondary" href="/add">Upload</Button>

                    </ButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}

export default UserInfo
