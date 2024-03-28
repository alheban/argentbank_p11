import React from "react";
import { useState } from 'react';
import { putProfil } from '../app/actions/UpdateProfilAction'
import { useDispatch, useSelector } from "react-redux";


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
                <button>Save</button>
                <button onClick={handleCancel}>Cancel</button>
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
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
export default User;
