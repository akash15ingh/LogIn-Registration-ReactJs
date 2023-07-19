import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };
  return (
    <div className="auth-formContainer">
      <h2>LOGIN</h2>
      <form className="login-form" onSubmit={SubmitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*******"
          id="email"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOGIN</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account?Register here!
      </button>
    </div>
  );
}

export default Login;
