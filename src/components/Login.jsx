import React, {useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
// import "./Login.css"

function Login() {
 
  const history=useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function submit(){
    history("/")
  }
 
    return (
      <div className='login' >
          <table>
          <td className="col1">
            <h1 className="logo">Welcome</h1>
          </td>
          <td className="col2">
          <h1 className="heading">Login</h1>
          <div className='con1'>
        <form action="POST">
          <input tupe="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='abc@gmail.com' className="input1"></input>
          <input tupe="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' className="input2"></input>
          <button type="sumbit" onClick={submit} className='button1'>Sumbit</button>
        </form>
        </div>
          </td>
        </table>
        
      </div>

    )
}

export default Login;