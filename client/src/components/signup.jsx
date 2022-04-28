import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Signup = ()=>{

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  const onChange = (event)=>{
    setDetails({...details, [event.target.name]: event.target.value})
  }

  const handelSignup = async (event)=>{
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: details.email, password: details.password})
        });

    const json = await response.json();
    console.log(json);
    if (json.success){
      localStorage.setItem('token', json.authtoken);
      navigate("/");
  }
  else{
      alert("Invalid credentials");
  }

  }


  return (
    <div className= "container my-5" style = {{width: "80%"}}>
      <form onSubmit = {handelSignup}>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Email</label>
          <input name = "email" onChange = {onChange} value = {details.email} type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Passowrd</label>
          <input name = "password" onChange = {onChange} value = {details.password} type="password" className="form-control" id="exampleFormControlInput3" placeholder="enter your password" required/>
        </div>
        <button className= "btn btn-lg btn-primary">Sign up</button>
      </form>
    </div>
  )
}


export default Signup;
