import React from 'react'
import {Nav,Navbar,Container, Form, FormControl, Button, Image,} from 'react-bootstrap';

const NavBarHome = () => {
    const ClosseSession = () => {
        localStorage.removeItem('data')
    }
    const user = JSON.parse(localStorage.getItem('data'));
    if(localStorage.getItem('data') != undefined){
        var infoUsers = <Form className="d-flex">
        <Image className='mx-2 mt-0' src={user.Photo} href="http://localhost:3000/login" roundedCircle height="50px" width="50px" />
        <Navbar.Brand href="#">{user.Name}</Navbar.Brand>
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            ariaLabel="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Nav.Link href="#">Ayuda</Nav.Link>
        <Nav.Link href="/" onClick={ClosseSession}>Salir</Nav.Link>
    </Form>
    }
    
    return (
        
        <>
            
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="/homeusers">ArtSociety</Navbar.Brand>
                    <Navbar.Toggle ariaControls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        {infoUsers}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarHome