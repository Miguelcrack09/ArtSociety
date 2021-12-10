import React from 'react';
import { Navigate } from 'react-router-dom';
import CarouselHome from '../components/Home/CarouselHome';
import { Containerstyled } from '../css/Styledcomp';

const HomeUsers = () => {
  var contentHome = <Navigate to="/" />
  if (localStorage.getItem('data') != undefined) {
    contentHome = <CarouselHome />
  }
  return (
    <>
      <Containerstyled>
        {contentHome}
        <br/>
      </Containerstyled>
    </>
  )
}

export default HomeUsers