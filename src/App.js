import React, {useReducer, createContext, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Analysis from './components/Analysis';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from './components/Logout';

import { initialState, reducer } from "./reducer/useReducer";
// we create a contextAPI 
export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Router >
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/analysis" element = {<Analysis />}/>
          <Route path="/login" element = {< Login/>}/>
          <Route path="/signup" element = {< Signup />}/>
          <Route path="/logout" element = {< Logout />}/>
          <Route path="*" element = {< Error />}/>
        </Routes>
      </Router>
    </>
  )
}

const App = () => {
  const [state, dispatch] = useState(initialState);
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Routing />
      </UserContext.Provider>
    </>
  )
};

export default App;
