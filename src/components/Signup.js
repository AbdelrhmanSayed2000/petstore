import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import Alert from "./Alert";
import logo from "../imags/Picture1-wh.png";
import error from "../imags/error.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="signup">
      <img src={logo} alt="" className="loader" />
      <div className="alert-box">
        <img src={error} alt="" className="alert-img" />
        <p className="alert-msg">alert massage</p>
      </div>
      <div className="container">
        <Link href="/">
          <img src="imags/Picture1-wh.png" alt="" className="logo" />
        </Link>
        <form method="POST" action="" onSubmit={handleSubmit}>
          {/* CSRF token */}
          <Input
            type={"hidden"}
            name={"csrfmiddlewaretoken"}
            value={"csrf_token"}
          />
          <Input
            type={"text"}
            id={"username"}
            placeholder={"username"}
            name={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type={"email"}
            id={"email"}
            placeholder={"email@hot.com"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type={"password"}
            id={"password"}
            placeholder={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type={"password"}
            id={"confirmPassword"}
            placeholder={"confirm password"}
            name={"confirm_password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Input
            type={"tel"}
            autocomplete={"off"}
            id={"number"}
            placeholder={"number"}
            name={"number"}
            required
          />
          <div className="radio-conainer">
            <label for="seller">
              <input
                type="radio"
                name="userType"
                id="seller"
                value="seller"
                className="radio"
                onChange={(event) => setUserType(event.target.value)}
              />
              Seller
            </label>
            <label for="User">
              <input
                type="radio"
                name="userType"
                id="user"
                value="user"
                label="user"
                className="radio"
                onChange={(event) => setUserType(event.target.value)}
              />
              User
            </label>
            <label for="doctor">
              <input
                type="radio"
                name="userType"
                id="doctor"
                value="doctor"
                className="radio"
                onChange={(event) => setUserType(event.target.value)}
              />
              Doctor
            </label>
          </div>
          <label className="chackbox">
            <input type="checkbox" className="checkbox" id="terms-and-cond" />I
            read all the <Link to="#">terms and condition</Link> and i approve
          </label>
          <Button type={"submit"}>create account</Button>
        </form>
        <div className="already">
          <p class="link">
            already have one? <Link to="/">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
