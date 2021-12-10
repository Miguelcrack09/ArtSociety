import React from 'react'
import ObraUser from '../components/ObraUser'
import { Navigate } from 'react-router-dom';
import { Containerstyled } from '../css/Styledcomp';

const Obra = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <ObraUser />
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

export default Obra
