import React from 'react'
import ObraUser from '../components/ObraUser'
import { Navigate } from 'react-router-dom';

const Obra = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <ObraUser />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default Obra
