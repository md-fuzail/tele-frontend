import React, { useContext, useState } from "react";
import loginpic from "../images/login.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(UserContext);

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("https://sentimentsync.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.status === 200) {
      window.alert("Login Successfully");
      const data = await res.json();
      localStorage.setItem("jwt", data.token);
      dispatch(data);
      navigate("/");
    } else {
      const data = await res.json();
      window.alert(data.error);
      console.log(data.error);
    }
  };

  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-images">
              <figure>
                <img src={loginpic} alt="login image" />
              </figure>
              <NavLink to="/signup">Create an Account</NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Log In</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
