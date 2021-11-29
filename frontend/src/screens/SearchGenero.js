import React from 'react'
import { Navigate } from 'react-router-dom'
import SearchBackground from '../components/Search/SearchBackground'

const SearchGenero = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <SearchBackground />
    }
    return (
        <>
            {contentObra}
        </>
    )
}

export default SearchGenero
