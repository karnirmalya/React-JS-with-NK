import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/usercontext";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
       {'   '}
      <button
        type="reset"
        onClick={() => {
          setUsername("");
          setPassword("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default LogIn;
