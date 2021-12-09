import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { addArtist } from '../apis/ArtSocietyCRUD';

const RegisterArtis = () => {
    var user = JSON.parse(localStorage.getItem("data"));
    console.log(user)


    function save(even) {
        even.preventDefault();
        const obj = {
            name: even.target[0].value,
            biography: even.target[1].value,
            location: even.target[2].value,
            photoUrl: user.Photo,
            id: user.DNI,
        }
        addArtist(obj, (res) => {
            console.log(res);
            if (res == "Success") {
                user.flagNewUser = false;
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/homeusers";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Crea tu Perfil</h1>
            </div>
            <Container>
                <Form onSubmit={save}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Biography</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your biography" type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Select >
                            <option>Select a location</option>
                            <option value="Bogotá">Bogotá</option>
                            <option value="Cali">Cali</option>
                            <option value="Medellin">Medellin</option>
                            <option value="Ibagué">Ibagué</option>
                            <option value="Cartagena">Cartagena</option>
                            <option value="Barranquilla">Barranquilla</option>
                        </Form.Select>
                    </Form.Group>

                    <Container fluid="md">
                        <Row>
                            <Button variant="dark" type="submit">
                                Registrarse
                            </Button>
                        </Row>
                    </Container>

                    <br />
                    <br />
                </Form>
            </Container>
        </>
    )
}

export default RegisterArtis
