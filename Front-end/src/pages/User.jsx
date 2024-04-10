import React from "react";
import { useState } from "react";
import { putProfil } from "../app/actions/UpdateProfilAction";

import { useDispatch, useSelector } from "react-redux";
import Account from "../common/components/Account";
import Button from "../common/components/Button";
import { setSelectedAccountId } from "../app/actions/accountActions"; 

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profil.user);
  const accounts = useSelector((state) => state.account.accounts); // Récupérer les données de compte depuis le store Redux
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true); // Mettre à jour l'état pour afficher le formulaire
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false); // Mettre à jour l'état pour revenir au header
  };

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.newUserName.value;
    dispatch(putProfil(newUserName));
    setIsEditing(false);
  };

  const handleClick = (accountId) => { // Prenez l'ID du compte en paramètre
    console.log("Account ID:", accountId); // Vérifier que l'ID est correct
    dispatch(setSelectedAccountId(accountId)); // Déclenchez setSelectedAccountId avec l'ID du compte
    console.log("Selected account ID:", accountId); // Vérifier que l'ID du compte sélectionné est correct
  };

  console.log("User component rendered"); // Vérifier que le composant est rendu

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleUpdateUserName}>
          <h2>Edit User Name</h2>
          <div>
            <label htmlFor="newUserName">User Name :</label>
            <input
              type="text"
              id="newUserName"
              placeholder="Enter New Username"
              defaultValue={user.userName}
              required
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={user.firstName}
              disabled
              className="text_input"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={user.lastName}
              disabled
              className="text_input"
            />
            <div className="buttons-form">
              <Button title="Save" />
              <Button onClick={handleCancel} title="Cancel" />
            </div>
          </div>
        </form>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          <Button
            className="edit-button"
            onClick={handleEdit}
            title="Edit Name"
          />
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      {/* Afficher les comptes à partir des données extraites du store Redux */}
      {accounts.map((account) => (
        <Account
          key={account.id} // Utilisation de l'identifiant unique comme clé
          id={account.id} // Passer l'identifiant unique du compte
          title={account.title}
          totalamount={account.totalamount}
          description={account.description} 
          onClick={() => handleClick(account.id)} // Passer la fonction handleClick avec l'ID du compte en paramètre
        />
      ))}
    </main>
  );
}

export default User;
