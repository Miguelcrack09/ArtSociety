import React from 'react'
import { Navigate } from 'react-router-dom'
import SearchBackground from '../components/Search/SearchBackground'
import { Containerstyled } from '../css/Styledcomp'

const SearchGenero = () => {
    var contentObra = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentObra = <SearchBackground />
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

export default SearchGenero
