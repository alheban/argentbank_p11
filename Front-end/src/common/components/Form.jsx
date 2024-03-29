import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../app/actions/authActions";
import { getProfil } from "../../app/actions/profilActions";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);


const handleSubmit = async (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;



  try {
  
    const action = await dispatch(LogIn({ email, password }));
    // const data = action.payload;

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
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;





//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     try {
// // Réinitialiser les données du localStorage si "Remember me" n'est pas cochée et qu'il y a des données précédemment enregistrées
// if (!rememberMe && localStorage.getItem("rememberMe")) {
//   localStorage.removeItem("rememberMe");
//   localStorage.removeItem("username");
// }


//       // Appel de la fonction LogIn, attendre la réponse et récupérer les données
//       const action = await dispatch(LogIn({ email, password, rememberMe }));
//       const data = action.payload;

//       // Si la connexion est réussie (pas d'erreur dans la réponse)
//       if (action.type === LogIn.fulfilled.type) {
//         // Récupérer le token une fois la connexion réussie
//         const token = sessionStorage.getItem("token");
//         console.log("Token récupéré :", token);

//         // Stocker le "Remember me" dans le localStorage si la case est cochée
//         if (rememberMe) {
//           localStorage.setItem("rememberMe", true);
//         } else {
//           localStorage.removeItem("rememberMe");
//         }

//         // Si un token est trouvé, obtenir le profil de l'utilisateur et naviguer vers la page utilisateur
//         if (token) {
          
//           await dispatch(getProfil());
//           navigate("/user");
//         } else {
//           // Gérer le cas où aucun token n'est trouvé, par exemple afficher un message d'erreur
//           console.log("Aucun token trouvé. Connexion échouée.");
//         }
//       }
//     } catch (error) {
//       console.error("Erreur lors de la connexion :", error);
//     }
//   };
