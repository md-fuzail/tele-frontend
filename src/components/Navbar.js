import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {UserContext} from "../App";



const Navbar = () => {
  const state  = useContext(UserContext);
  console.log(`the navbar user  ${JSON.stringify(state)} `);

  const RenderList = () => {
    if(state && state.state){
      return (
        <>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/analysis">My Analysis</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>
        </>
      )
    }else{
      return (
        <>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/analysis">My Analysis</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>
        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <p height={50} width={120}>Sentiment Sync</p>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <RenderList />
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
};

export default Navbar;
