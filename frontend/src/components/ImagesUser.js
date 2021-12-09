import React, { useState, useEffect } from "react";
import { Container, Stack, Card, Button } from 'react-bootstrap'
import { searchObras } from "../apis/ArtSocietyCRUD";

const User = localStorage.getItem('User');

const ImagesUser = () => {

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

    return (
        <>
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
                                <Button variant="outline-danger" href="/del" onClick={() => setDeleteInlocalstorage(res.uid)} >Delete</Button>
                            </Stack>


                        </Card.Body>
                    </Card></Container>))}
        </>
    )
}

export default ImagesUser
