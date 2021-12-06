import React from 'react'
import { Navigate } from 'react-router-dom'
import DeleteObra from '../components/DeleteObra'

const ResultDelete = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <DeleteObra />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default ResultDelete