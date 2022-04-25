import React from 'react'
import banner from "../img/banner.png"
import LoginForm from './LoginForm'
export default function Login() {
  return (
    <>
      <div style={{position: "relative"}}>
        <LoginForm />
        <img src={banner} alt="" />
      </div>
    </>

  )
}

