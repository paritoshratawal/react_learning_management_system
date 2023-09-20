import React, { useState } from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import axiosInstance from '../../services/Interceptor';

import './style.css'


export default function LoginSignup() {

  const navigate = useNavigate();

  const user_type = [
    { id: 1, label: 'Admin', value: 'admin' },
    { id: 2, label: 'Teacher', value: 'teacher' },
    { id: 3, label: 'Student', value: 'student' }
  ];

  const [isLogin, setIsLogin] = useState(true);
  const [signUpType, setSignUpType] = useState('Admin');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableLoginBtn, setDisableLoginBtn] = useState(false);

  const switchMode = (event) => {
    console.log('switchMode');
    setIsLogin(!isLogin);
  }

  const selectedSignUpType = (event) => {
    console.log('selectedSignUpType', event);
    // setSignUpType()
    setSignUpType(event.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const validateEmail = (event) => {
    console.log('validateEmail', event.target.value);
    setEmail(event.target.value)
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const isValid = emailPattern.test(event.target.value);
    setDisableLoginBtn(!isValid);
  }

  const validatePassword = (event) => {
    setPassword(event.target.value);
  }

  const proceed = async() => {
    console.log('proceed');
    console.log(email);
    console.log(password);
    const login_data = await axiosInstance.post('/user/login', { email: email, password: password });
    console.log(login_data);
    // axios.post('http://localhost:2000/user/login', {
    //   email: email, 
    //   password: password
    // }).then((res) => {
    //   navigate('/student', { replace: true });
    // }).catch(e => {
    //   console.log(e);
    // });
  }

  return (
    <div className="App-header">
      <Form className="wdth_22_prcnt">
        {
          !isLogin && <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" onChange={validateEmail} value={email} placeholder="Enter First Name" />
            {disableLoginBtn && <Form.Text className="text-muted red_color">
              Invalid Password
            </Form.Text>}
          </Form.Group>
        }

        { !isLogin && <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" onChange={validateEmail} value={email} placeholder="Enter Last Name" />
          {disableLoginBtn && <Form.Text className="text-muted red_color">
            Invalid Password
          </Form.Text>}
        </Form.Group>
        }

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={validateEmail} value={email} placeholder="Enter email" />
          {disableLoginBtn && <Form.Text className="text-muted red_color">
            Invalid Password
          </Form.Text>}
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={validatePassword}  value={password} />
        </Form.Group>
        
        {!isLogin && <Form.Group className="" controlId="formBasicCheckbox">
          <div className='row my-4'>
            <div className='col-md-4'>Login As</div>
            <div className='col-md-8'>
              <div>
                <Dropdown
                  options={user_type} onChange={selectedSignUpType} value={signUpType} placeholder="Select an option" />
              </div>
            </div>
          </div>
        </Form.Group>}
        <div className='row mrgn_top_13px'>
          <div className='col-md-6'>
            <Button variant='primary' onClick={switchMode}>{isLogin ? <span>Sign Up</span> : <span>Back To Login</span>}</Button>
          </div>
          <div className='col-md-6'>
            <Button variant='primary' disabled={disableLoginBtn} onClick={proceed}>{isLogin ? <span>Login</span> : <span>Submit</span>}</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
