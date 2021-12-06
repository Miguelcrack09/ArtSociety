import React from 'react'
import { Navigate } from 'react-router-dom';
import AddObra from '../components/AddObra';

const ConfObra = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <AddObra />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default ConfObra
