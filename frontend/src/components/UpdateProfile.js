import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { updateUsersPartial } from '../apis/ArtSocietyCRUD';

const UpdateProfile = () => {
  var user = JSON.parse(localStorage.getItem("data"));



  function save(even) {
    even.preventDefault();
    const obj = {
      name: even.target[0].value,
      biography: even.target[1].value,
      location: even.target[2].value,
      contactLink: even.target[3].value,
      photoUrl: user.Photo,
      id: user.DNI,
    }
    updateUsersPartial(obj, (res) => {
      console.log(res);
      if (res == "Success") {
        //user.flagNewUser = false;
        //localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/users";
      } else {
        alert("Algo salió mal, vuelve a intentarlo")
      }
    })
  }
  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <br/>
        <h1>Actualiza tu Perfil</h1>
      </div>
      <Container>
        <Form onSubmit={save}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type="text" placeholder="Update User Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bio">
            <Form.Label>Biografía</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Update your biography" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Locación</Form.Label>
            <Form.Select>
              <option>Selecciona...</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Cali">Cali</option>
              <option value="Medellin">Medellin</option>
              <option value="Ibagué">Ibagué</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Barranquilla">Barranquilla</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactLink">
            <Form.Label>Contactos</Form.Label>
            <Form.Control type="text" placeholder="Update your Contact Link" />
          </Form.Group>


          <Container fluid="md">
            <Row>
              <Button variant="dark" type="submit">
                Update
              </Button>
              <Button variant="danger" href='/users'>
                Close
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

export default UpdateProfile
