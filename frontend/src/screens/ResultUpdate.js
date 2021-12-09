import React from 'react'
import { Navigate } from 'react-router-dom';
import UpdateProfile from '../components/UpdateProfile';
import { Containerstyled } from '../css/Styledcomp';

const ResultUpdate = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <UpdateProfile />
    }
    return (
        <>
            <Containerstyled>
                {contentObra}
            </Containerstyled>
        </>
    )
}

export default ResultUpdate
