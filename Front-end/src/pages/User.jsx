import React, { useEffect } from "react";
import { useState } from 'react';
import { putProfil } from '../app/actions/UpdateProfilAction'
import { useDispatch, useSelector } from "react-redux";
import Account from "../common/components/Account";
import Button from "../common/components/Button";



function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profil.user);
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
                defaultValue={user.userName} required
                
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name :</label>
              <input
                type="text"
                id="firstName"
                value={user.firstName}
                disabled
                className='text_input'
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name :</label>
              <input
                type="text"
                id="lastName"
                value={user.lastName}
                disabled
                className='text_input'
              />
              <div className="buttons-form">
                <Button title="Save"/>
                <Button onClick={handleCancel} title="Cancel"/>
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
          <Button className="edit-button" onClick={handleEdit} title="Edit Name"/>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        totalamount="$2,082.79"
        description="Available Balance"/>
      <Account
        title="Argent Bank Savings (x6712)"
        totalamount="$10,928.42"
        description="Available Balance"/>
      <Account
        title="Argent Bank Credit Card (x8349)"
        totalamount="$184.30"
        description="Current Balance"/>
    </main>
  );
}
export default User;
