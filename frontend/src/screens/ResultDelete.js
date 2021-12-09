import React from 'react'
import { Navigate } from 'react-router-dom'
import DeleteObra from '../components/DeleteObra'
import { Containerstyled } from '../css/Styledcomp';

const ResultDelete = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <DeleteObra />
    }
    return (
        <>
            <Containerstyled>
                {contentObra}
            </Containerstyled>
        </>
    )
}

export default ResultDelete