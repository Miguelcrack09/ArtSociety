import React from 'react'
import { Navigate } from 'react-router-dom';
import UpdateProfile from '../components/UpdateProfile';

const ResultUpdate = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <UpdateProfile />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default ResultUpdate
