import React from 'react'
import Styledcomp from '../css/Styledcomp';
import { Navigate } from 'react-router-dom';

const Scomp = () => {
    var contentScomp = <Navigate to="/" />
    if (localStorage.getItem('data') != undefined) {
        contentScomp = <Styledcomp />
        return (
            <>
                {contentScomp}
            </>
        )
    }
}
export default Scomp


