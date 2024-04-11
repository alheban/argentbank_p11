import React from "react";
import { Link } from "react-router-dom"; // Importer NavLink depuis React Router
import Button from "./Button";
import { useSelector } from "react-redux";

function Account({ title, totalamount, description, id, onClick}) {
  const accounts = useSelector((state) => state.account); // Récupérer les données de compte depuis le store Redux

  // console.log('Account data:', accounts);
  return (
    <section className="account">
      <div className="account-content-wrapper" >
          <h3 className="account-title">{title}</h3>
          <h3 className="account-amount">{totalamount}</h3>
          <h3 className="account-amount-description">{description}</h3>
        </div>
        <div className="account-content-wrapper cta">
          <Link to={`/transaction/${id}`} style={{ textDecoration: 'none' }}>
            <Button
              title="View transactions"
              className="transaction-button"
              onClick={() => onClick(id)}
            />
          </Link>
      </div>
    </section>
  );
}

export default Account;