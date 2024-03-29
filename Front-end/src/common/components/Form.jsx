import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../app/actions/authActions";
import { getProfil } from "../../app/actions/profilActions";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  // Récupérer la valeur de "rememberMe" du localStorage lors du rendu initial
  const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true");

  // Récupérer le nom d'utilisateur sauvegardé depuis le store Redux
  const savedUsernameRedux = useSelector((state) => state.auth.username) || '';

  // Récupérer le nom d'utilisateur sauvegardé depuis le localStorage
  const savedUsernameLocalStorage = localStorage.getItem("username") || '';

  // Initialisez le champ de saisie du nom d'utilisateur avec le nom sauvegardé
  const [username, setUsername] = useState(savedUsernameRedux || savedUsernameLocalStorage);

  // Mettre à jour le nom d'utilisateur dans le localStorage lorsqu'il est modifié
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

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


const handleSubmit = async (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Remember Me:", rememberMe);

  try {
    if (!rememberMe && localStorage.getItem("rememberMe")) {
      console.log("Removing localStorage data...");
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("username");
    }

    const action = await dispatch(LogIn({ email, password, rememberMe }));
    const data = action.payload;

    if (action.type === LogIn.fulfilled.type) {
      const token = sessionStorage.getItem("token");
      console.log("Token retrieved:", token);

      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
        console.log("Remember Me set in localStorage");
      } else {
        localStorage.removeItem("rememberMe");
        console.log("Remember Me removed from localStorage");
      }

      if (token) {
        await dispatch(getProfil());
        navigate("/user");
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
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;