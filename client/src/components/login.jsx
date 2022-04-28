
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({email: "", password: ""});

  const onChange = (event)=>{
    setCredentials({...credentials, [event.target.name]: event.target.value});
  }

  const handelLogin = async(event)=>{
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
  }

  return (
    <div className = "container my-5" style = {{width: "80%"}}>
      <form onSubmit = {handelLogin}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email</label>
          <input onChange ={onChange} name = "email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Passowrd</label>
          <input onChange ={onChange} name = "password" type="password" className="form-control" id="exampleFormControlInput2" placeholder="enter your password" required/>
        </div>
        <button className = "btn btn-lg btn-primary">login</button>
      </form>
    </div>
  )
}


export default Login;
