import React from 'react'
import RegisterArtis from '../components/RegisterArtis';
import { Navigate } from 'react-router-dom';
import { Containerstyled } from '../css/Styledcomp';

const Register = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <RegisterArtis />
    }
    return (
        <>
            <Containerstyled>
                {contentObra}
                <br/>
            </Containerstyled>
        </>
    )
}

export default Register