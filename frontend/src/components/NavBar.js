import React from 'react'
import {Nav,Navbar,Container, Form, FormControl, Button, Image} from 'react-bootstrap';

const NavBar = () => {
    const user = JSON.parse(localStorage.getItem('data'));
    console.log(user.DNI)

    return (
        <>
            
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="#">ArtSociety</Navbar.Brand>
                    <Navbar.Toggle ariaControls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Image className='mx-2' src={user.Photo} href="http://localhost:3000/login" roundedCircle height="50px" width="50px" />
                            <Navbar.Brand href="#">{user.Name}</Navbar.Brand>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                ariaLabel="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar