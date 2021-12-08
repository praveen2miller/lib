import React from 'react'

function Login() {
  const homepage = () => {
    
    console.log('Hello world')
  }
  return (
    <div className='formfill'>
      <label htmlFor='name'>User Name</label>
      <input type='text' name='name' id='name' placeholder='username' />
      <label htmlFor='email'>Email</label>
      <input type='text' placeholder='Enter Your Email' />
      <label htmlFor='password'>Password</label>
      <input type='text' placeholder='Enter Password' />
      <button className='login-button' onClick={homepage}>
        Login
      </button>
    </div>
  )
}

export default Login
