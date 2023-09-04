import React, { useState } from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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

  const proceed = () => {
    console.log('proceed');
    if(isLogin){
      localStorage.setItem('login', true);
      navigate('/student', { replace: true });
    }
  }

  return (
    <div className="App-header">
      <Form className="wdth_22_prcnt">
        <Form.Group  controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={validateEmail} value={email} placeholder="Enter email"/>
          {disableLoginBtn && <Form.Text className="text-muted red_color">
            Invalid Password
          </Form.Text>}
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

    // <div className="App-header">
    //   <div className='container'>
    //     <div className="card">
    //       <div className="card-body">
    //         {isLogin ? <h1>Login</h1> : <h1>Sign Up</h1>}
    //         <div className='row'>
    //           <div className='col-md-4'>Email</div>
    //           <div className='col-md-8'><input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Email" /></div>
    //         </div>
    //         <div className='row my-4'>
    //           <div className='col-md-4'>Password</div>
    //           <div className='col-md-8'><input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Password" /></div>
    //         </div>
    //         {!isLogin && <div className='row my-4'>
    //           <div className='col-md-4'>Login As</div>
    //           <div className='col-md-8'>
    //             <div>
    //               <Dropdown
    //                arrowClosed={<span className="arrow-closed" />}
    //               arrowOpen={<span className="arrow-open" />}
    //                options={user_type} onChange={selectedSignUpType} value={signUpType} placeholder="Select an option" />
    //             </div>
    //           </div>
    //         </div>}

    //         <div className='row'>
    //           <div className='col-md-6'>
    //              <Button variant='primary' onClick={switchMode}>{isLogin ? <span>Sign Up</span> : <span>Back To Login</span>}</Button>
    //           </div>
    //           <div className='col-md-6'>
    //             <Button variant='primary'>{isLogin ? <span>Login</span> : <span>Submit</span>}</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
