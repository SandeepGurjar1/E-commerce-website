import React, {useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import "./sign.css"

function Register() {

  const history=useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function submit(){
         history("/login");
  }
 
    return (

    
      <div className='login'>
   
              <table>
          <td className='col1'>
            
            <h1 className="logo">Register</h1>
       
          </td>
          <td className='col2'>
          <h1 className="heading">Sign Up</h1>
          <h2 className="subheading">Create new Account</h2>
        
          <button className='google'>
          <table>
            <td>
            <div id="google"></div>
            </td>
            <td className='n1'>
            Sign in with Google
            </td>
          </table>
           
          </button>
          <button className='apple'>
           <i class="fa fa-apple"></i> &nbsp; Sign in with Apple
          </button>
         
          <div className='con1'>
        <form action="POST">
          <label className='lable1'>Email address</label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='abc@gmail.com' className="input1"></input>
          <label className='lable2'>Password</label>
          <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' className="input2"></input>
          <br></br>
          <a href='/' className='lable3'>Forget Password</a>
          <button type="sumbit" onClick={submit}  className='button1'>Sumbit</button>
        </form>
        {/* <Link to="/">Login Page</Link> */}
        </div>
          </td>
        </table>

      </div>

    )
}

export default Register;