import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import { Navigate } from 'react-router-dom'

function AuthPage({children}) {

  const {user,loading}=useContext(AuthContext)

  if(loading) return <h1>Loding Plz Wait</h1>
  if(user) return children
  return (
    <Navigate to={'/login'}/>
  )
}

export default AuthPage