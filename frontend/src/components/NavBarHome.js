import React from 'react'
import {Nav,Navbar,Container, Form, FormControl, Button, Image,} from 'react-bootstrap';

const setUserInlocalstorage = (User) => {
    localStorage.setItem('User', User);
  }

const NavBarHome = () => {
    const ClosseSession = () => {
        localStorage.removeItem('data')
    }
    const user = JSON.parse(localStorage.getItem('data'));
    if(localStorage.getItem('data') != undefined){
        var infoUsers = <Form className="d-flex">
        <Nav.Link href="/homeusers"><Image className='mx-2' src={user.Photo} href="/login" roundedCircle height="50px" width="50px" /></Nav.Link>
        <Navbar.Brand href="/users" className='mt-2' onClick={()=> setUserInlocalstorage(user.DNI)}>{user.Name}</Navbar.Brand>
        {/* <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            ariaLabel="Search"
        />
        <Button variant="outline-success">Search</Button> */}
        <Nav.Link href="/homeusers" className='mt-2'>Home</Nav.Link>
        <Nav.Link href="/searchgenero" className='mt-2'>Buscar</Nav.Link>
        <Nav.Link href="#" className='mt-2'>Ayuda</Nav.Link>
        <Nav.Link href="/" className='mt-2' onClick={ClosseSession}>Salir</Nav.Link>
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