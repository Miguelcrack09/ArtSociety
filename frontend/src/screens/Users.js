import React from 'react'
import UsersC from '../components/UsersC'
import { Navigate } from 'react-router-dom'
import { Containerstyled } from '../css/Styledcomp'

const Users = () => {
  var contentUsers =<Navigate to="/"/>
    if(localStorage.getItem('data') != undefined){
        contentUsers = <UsersC/>
    }
  return (
    <>
    <Containerstyled>
      {contentUsers}
    </Containerstyled>
      
    </>
  )
}

export default Users
