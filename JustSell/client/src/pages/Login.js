//https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8&t=1882s - PedroTech
import axios from "axios";
import { default as React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loginMessage, setLoginMessage] = useState(null);

  const login = () => {
    const data = { username: username, password: password };
    axios
      .post("http://localhost:3001/auth/login", data)
      .then((response) => {
        // handle success
        console.log(data);
        setLoginMessage("Login successful!");
      });
  };

  return (
    <div className="home">
      <div className="center">     
        <div className="box-container">
          <div className="formcontainer">
            <h1 className="heading">Login here:</h1>
            <div className="box">
              <label>Username</label>          
              <input
                className="input"
                type="text"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>

            <div className="box">
              <label>Password:</label>
              <input
                className="input"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn"
              onClick={login}
            >
              Login
            </button>
            
            {loginMessage && (
              <p
                style={{
                  color: "green", 
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "40px",
                  textTransform: "uppercase",
                  letterSpacing: "2px", 
                }}
              >
                {loginMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
