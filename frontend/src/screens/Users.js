import React from 'react'
import UsersC from '../components/UsersC'
import { Navigate } from 'react-router-dom'

const Users = () => {
  var contentUsers =<Navigate to="/"/>
    if(localStorage.getItem('data') != undefined){
        contentUsers = <UsersC/>
    }
  return (
    <>
      {contentUsers}
    </>
  )
}

export default Users
