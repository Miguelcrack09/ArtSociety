import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { addObra } from '../apis/ArtSocietyCRUD';


const User = localStorage.getItem('User');
const AddObra = () => {
    function save(even) {
        even.preventDefault();
        const obj = {
            title: even.target[0].value,
            Images: even.target[1].value,
            Description: even.target[2].value,
            genero: even.target[3].value,
            User: User,
        }
        addObra(obj, (res) => {
            console.log(res);
            if (res == "Success") {
                localStorage.setItem("ObraD", JSON.stringify(User));
                window.location.href = "/users";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Sube una nueva obra</h1>
            </div>
            <Container>
                <Form onSubmit={save}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Image</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter URL of Image" type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description of Obra" type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Genero</Form.Label>
                        <Form.Select>
                            <option>Select a location</option>
                            <option value="anime">Anime</option>
                            <option value="manga">Manga</option>
                            <option value="urbano">Urbano</option>
                            <option value="callejero">Callejero</option>
                            <option value="fanart">Fanart</option>
                        </Form.Select>
                    </Form.Group>

                    <Container fluid="md">
                        <Row>
                            <Button variant="dark" type="submit">
                                Cargar
                            </Button>
                            <Button variant="danger" href='/users'>
                                Cancelar
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

export default AddObra
