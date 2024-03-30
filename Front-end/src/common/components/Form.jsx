import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../app/actions/authActions";
import { getProfil } from "../../app/actions/profilActions";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [rememberMe, setRememberMe] = useState(false); // État local pour Remember Me
  const [username, setUsername] = useState(''); // État local pour le nom d'utilisateur
  const [password, setPassword] = useState(''); // État local pour le mot de passe


  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem("email");
    if (emailFromLocalStorage) {
      setUsername(emailFromLocalStorage);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const action = await dispatch(LogIn({ email, password,rememberMe }));
    

      if (action.type === LogIn.fulfilled.type) {
        const token = sessionStorage.getItem("token");

        if (token) {
          await dispatch(getProfil());
          navigate("/profil");
        } else {
          console.log("No token found. Login failed.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleRememberMeChange = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);
  
    if (!isChecked) {
      // Vider le localStorage si la case "Remember me" est décochée
      localStorage.removeItem("email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-remember">
           <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;


