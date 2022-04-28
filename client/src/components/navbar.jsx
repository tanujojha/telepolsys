import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  let navigate = useNavigate();

  const handelLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">telepolsys</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>

    </div>
    {!localStorage.getItem("token") ? <> <a href="/login"><button type="button" class="btn btn-primary mx-2">Login</button></a>
    <a href="/signup"><button type="button" class="btn btn-primary mx-2">Sign up</button></a> </>
    : <a href="/login"><button onClick = {handelLogout} type="button" class="btn btn-primary mx-2">logout</button></a>}
  </div>
</nav>
)
}


export default Navbar;
