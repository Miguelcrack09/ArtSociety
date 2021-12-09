import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row } from 'react-bootstrap'
import { updateUsersPartial } from '../apis/ArtSocietyCRUD';
import { getUser } from '../apis/ArtSocietyCRUD';


const User = localStorage.getItem('User');
const UpdateProfile = () => {
  var user = JSON.parse(localStorage.getItem("data"));

  getUser(User, (res) => {
    console.log(res);
})

const [results, setResults] = useState([]);

useEffect(() => {
    getUser(User, setResults);
}, []);


console.log(results)


  function save(even) {
    even.preventDefault();
    const obj = {
      name: even.target[0].value,
      photoUrl: even.target[1].value,
      biography: even.target[2].value,
      contactLink: even.target[3].value,
      id: user.DNI,
    }
    updateUsersPartial(obj, (res) => {
      console.log(res);
      if (res == "Success") {
        window.location.href = "/users";
      } else {
        alert("Algo salió mal, vuelve a intentarlo")
      }
    })
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Actualiza tu Perfil</h1>
      </div>
      <Container>
        <Form onSubmit={save}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Update User Name" defaultValue={results.name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bio">
            <Form.Label>Image</Form.Label>
            <Form.Control as="textarea" rows={1} placeholder="Enter URL of Image" type="text" defaultValue={results.photoUrl} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="img">
            <Form.Label>Biography</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Update your biography" type="text" defaultValue={results.biography} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactLink">
            <Form.Label>Contact Link</Form.Label>
            <Form.Control type="text" placeholder="Update your Contact Link" defaultValue={results.contactLink} />
          </Form.Group>


          <Container fluid="md">
            <Row>
              <Button variant="dark" type="submit">
                Update
              </Button>
              <Button variant="secondary" href='/users'>
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
