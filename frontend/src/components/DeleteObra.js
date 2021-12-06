import React from "react";
import { Form, Button, Container, Row } from 'react-bootstrap'
import { deleteObra } from '../apis/ArtSocietyCRUD'

const DeleteObra = () => {
    
    function save(even) {

        even.preventDefault();
        const Id = localStorage.getItem('Delete');
        deleteObra(Id, (res) => {
            console.log(res);
            if (res == "Success") {
                window.location.href = "http://localhost:3000/users";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>¿Quieres eliminar este elemento?
                </h1>
            </div> 
                <Container>
                    <Form onSubmit={save}>
                        

                        <Container fluid="md">
                            <Row>
                                <Button variant="dark" type="submit">
                                    Aceptar
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

export default DeleteObra
