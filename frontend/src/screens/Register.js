import React from 'react'
import RegisterArtis from '../components/RegisterArtis';
import { Navigate } from 'react-router-dom';

const Register = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <RegisterArtis />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default Register