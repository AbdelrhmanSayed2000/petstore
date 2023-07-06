import React, { useState } from "react";
import "./Login.css";
import logo from "../imags/Picture1-wh.png";
import Input from "./Input";
import Button from "./Button";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "example@example.com" && password === "password") {
      console.log("Logged in successfully");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <img src={logo} alt="logo" className="logo"></img>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <Input
            label={"Email address"}
            type={"email"}
            id={"email"}
            describeDby={"emailHelp"}
            placeholder={"Enter email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label={"Password"}
            type={"password"}
            className="form-control"
            id={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type={"submit"}>Login</Button>
        </form>
        <Alert showAlert={showAlert}>Invalid email or password.</Alert>
      </div>
      <p className="regisster">
        didn't have one?
        <Link to="/signup" className="link">
          {" "}
          Regisster here
        </Link>
      </p>
    </>
  );
};

export default Login;
