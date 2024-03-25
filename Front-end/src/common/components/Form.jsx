import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../app/actions/authActions";
import {  getProfile } from "../../app/actions/profilActions";
function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

      try {
        // Appel de la fonction LogIn, attendre la réponse et récupérer les données
        const action = await dispatch(LogIn({ email, password }));
        const data = action.payload;
  
        // Si la connexion est réussie (pas d'erreur dans la réponse)
        if (action.type === LogIn.fulfilled.type) {
          // Récupérer le token une fois la connexion réussie
          const token = localStorage.getItem("token");
          console.log("Token récupéré :", token);
  
          // Si un token est trouvé, obtenir le profil de l'utilisateur et naviguer vers la page utilisateur
          if (token) {
            await dispatch(getProfile());
            navigate("/user");
          } else {
            // Gérer le cas où aucun token n'est trouvé, par exemple afficher un message d'erreur
            console.log("Aucun token trouvé. Connexion échouée.");
          }
        }
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username"  />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password"  />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      {/* <a href="./user.html" className="sign-in-button">
  Sign In
</a> */}
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      <button className="sign-in-button">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
