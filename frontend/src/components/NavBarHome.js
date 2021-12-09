import React from 'react'
import {Nav,Navbar,Container, Form, FormControl, Button, Image,} from 'react-bootstrap';
import iconoo from "../assets/img/iconart.ico"
import { GiHouse, GiMagnifyingGlass, GiHelp, GiExitDoor } from "react-icons/gi";

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
        <Nav.Link href="/users"><Image className='mx-0' src={user.Photo} href="/login" roundedCircle height="35px" width="35px" /></Nav.Link>
        <Navbar.Brand href="/users" className='mt-1' onClick={()=> setUserInlocalstorage(user.DNI)}>{user.Name}</Navbar.Brand>
        {/* <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            ariaLabel="Search"
        />
        <Button variant="outline-success">Search</Button> */}
        <Nav.Link href="/homeusers" className='mt-0'><GiHouse color="cyan" size="2em"/></Nav.Link>
        <Nav.Link href="/searchgenero" className='mt-0'><GiMagnifyingGlass color="#92f74f" size="2em"/></Nav.Link>
        <Nav.Link href="#" className='mt-0'><GiHelp color="cyan" size="2em"/></Nav.Link>
        <Nav.Link href="/" className='mt-0' onClick={ClosseSession}><GiExitDoor color="#92f74f" size="2em"/></Nav.Link>
    </Form>
    }
    
    return (
        
        <>
            
            <Navbar bg="black" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="/homeusers"><Image src={iconoo} width="50px" height="50px" />ArtSociety</Navbar.Brand>
                    <Navbar.Toggle ariaControls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-auto"
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