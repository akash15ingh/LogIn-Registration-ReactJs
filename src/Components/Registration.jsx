import React, { useState } from "react";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setPassword("");
    console.log(name, email, password);
  };
  return (
    <div className="auth-formContainer">
      <h2>Register</h2>
      <form className="register-form" onSubmit={SubmitHandler}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Full name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="register-email"
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
        <button type="submit">Create Account</button>
      </form>
      <button
        className="link-btn"
        type="submit"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account?Click here!
      </button>
    </div>
  );
};

export default Registration;
