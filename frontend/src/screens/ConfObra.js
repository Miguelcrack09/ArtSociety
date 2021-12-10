import React from 'react'
import { Navigate } from 'react-router-dom';
import AddObra from '../components/AddObra';
import { Containerstyled } from '../css/Styledcomp';


const ConfObra = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <AddObra />
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

export default ConfObra
