import React from 'react';
import { Navigate } from 'react-router-dom';
import CarouselHome from '../components/Home/CarouselHome';

const HomeUsers = () => {
    var contentHome =<Navigate to="/"/>
    if(localStorage.getItem('data') != undefined){
        contentHome = <CarouselHome/>
    }
    return ( 
      <>
            {contentHome}
      </>  
    )
}

export default HomeUsers