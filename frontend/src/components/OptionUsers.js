/* import React from 'react'

const OptionUsers = () => {
    if(localStorage.getItem('data') != undefined){
        const user = JSON.parse(localStorage.getItem('data'));
        var InfoUser = <Form className="d-flex">
        <Image className='mx-2' src={user.Photo} href="http://localhost:3000/login" roundedCircle height="50px" width="50px" />
        <Navbar.Brand href="#">{user.Name}</Navbar.Brand>
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            ariaLabel="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="#">Ayuda</Nav.Link>
        <Nav.Link href="/" onClick={ClosseSession}>Salir</Nav.Link>
    </Form>
    }
  return (
    <>
      
    </>
  )
}

export default OptionUsers
 */