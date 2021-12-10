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
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Biografía</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your biography" type="text" />
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
