import React, { useState } from 'react'
import axios from 'axios';
import './login.css';
import background from '../images/hero.jpg' 

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3002/auth/adminlogin')
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage' style={{backgroundImage: `url(${background})`}}>
      <div className='p-3 rounded w-25 border loginForm'>
        <h2> Login </h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor='email'> <strong>Email:</strong></label>
                <input 
                    type='email' 
                    name='email' 
                    autoComplete='off' 
                    placeholder='Enter email' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, email: e.target.value})}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'> <strong>Password:</strong></label>
                <input 
                    type='password' 
                    name='password' 
                    autoComplete='off' 
                    placeholder='Enter password' 
                    className='form-control rounded-0'
                    onChange={(e) => setValues({...values, email: e.target.value})}
                />
            </div>
            <button className='btn btn-primary w-100 rounded-0 mb-2'>Log in</button>
            <div className='mb-2'>
                <input type='checkbox' name='tick' id='tick' className='me-2'></input>
                <label htmlFor='password'> Agree with terms & conditions:</label>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
