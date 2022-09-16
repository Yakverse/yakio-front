import React from "react";
import "../styles/Login.scss";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";

import axios from "../api/axios";
const LOGIN_URL = "/ok";

const Login = () => {
  const { setAuth } = useContext(AuthContext) as any;
  const userRef: any = useRef();
  const errRef: any = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        LOGIN_URL
        // JSON.stringify({ user, pwd })
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true
        // }
      );
      console.log(JSON.stringify(response?.data));
      //   console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status == 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status == 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a className="login-signup-button" href="#">
              Go to Home
            </a>
          </p>
        </section>
      ) : (
        <section className="login">
          <p
            ref={errRef}
            className={errMsg ? "login-errmsg" : "login-offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="login-title">Sign In</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label" htmlFor="username"></label>
            <input
              className="login-name-input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              placeholder="Username"
            />

            <label className="login-label" htmlFor="password"></label>
            <input
              className="login-pwd-input"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              placeholder="Password"
            />
            <button className="login-signin-button">Sign In</button>
          </form>
          <p className="login-text">
            Need an Account?
            <span className="login-line">
              <Link className="login-signup-button" to="/register">
                Register now
              </Link>
            </span>
          </p>
          <p className="login-text2">
            Forgot your user/password?
            <span className="login-line2">
              <Link className="login-signup-button2" to="/">
                Click here
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
