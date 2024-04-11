import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Transaction() {
  const { id } = useParams(); // Récupérer l'ID du compte depuis les paramètres d'URL
  const accounts = useSelector((state) => state.account.accounts);
  const [expandedTransaction, setExpandedTransaction] = useState(null);

  // Trouver le compte correspondant à l'ID dans le tableau de comptes
  const selectedAccount = accounts.find(
    (account) => account.id === parseInt(id, 10)
  );

  if (!selectedAccount) {
    return <div>Aucun compte sélectionné</div>;
  }

  const transactions = [
    {
      date: "04/04/2024",
      description: "Golden sun bakery",
      amount: 100,
      balance: 500,
      transactionType: "Electronic",
      category: "Game",
      note: "un super jeu",
    },
    {
      date: "04/04/2024",
      description: "Golden sun bakery",
      amount: 200,
      balance: 300,
      transactionType: "Electronic",
      category: "Food",
      note: "blablba",
    },

    // Ajoutez autant d'objets de transaction que nécessaire
    {
      date: "04/04/2024",
      description: "Golden sun bakery",
      amount: 200,
      balance: 300,
      transactionType: "Electronic",
      category: "Food",
      note: "blablba",
    },
    {
      date: "04/04/2024",
      description: "Golden sun bakery",
      amount: 200,
      balance: 300,
      transactionType: "Electronic",
      category: "Food",
      note: "blablba",
    },
    {
      date: "04/04/2024",
      description: "Golden sun bakery",
      amount: 200,
      balance: 300,
      transactionType: "Electronic",
      category: "Food",
      note: "blablba",
    },
  ];

  const toggleExpandedTransaction = (index) => {
    if (expandedTransaction === index) {
      setExpandedTransaction(null); // Réduire si déjà ouvert
    } else {
      setExpandedTransaction(index); // Ouvrir la transaction
    }
  };

  return (
    <main className="main bg-dark">
      <section className="account-transaction">
        <section className="account-detail">
          <div className="account-content-wrapper">
            <h3 className="account-title">{selectedAccount.title}</h3>
            <h3 className="account-amount">{selectedAccount.totalamount}</h3>
            <h3 className="account-amount-description">
              {selectedAccount.description}
            </h3>
          </div>
          <Link to="/profil">
            <i className="fa fa-times sign-in-icon" aria-hidden="true" alt="Icône de fermeture"></i>
          </Link>
        </section>
        <section >
          <div className="transaction tableau">
            <span>Date</span>
            <span>Descriptif</span>
            <span>Montant</span>
            <span>Solde</span>
            <div className="transaction-detail-fleche"></div>
          </div>
        </section>
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <section>
              <div className={`transaction ${expandedTransaction === index ? "expanded" : ""}`}>
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>${transaction.amount}</p>
                <p>${transaction.balance}</p>
                <div
                  className="transaction-detail-fleche"
                  onClick={() => toggleExpandedTransaction(index)}
                >
                  <i class={`fa ${expandedTransaction === index ? "fa-angle-down" : "fa-angle-right"}`}></i>
                </div>
              </div>
            </section>
            {expandedTransaction === index && (
              <section
                className="transaction-container-detail"
                style={{ animation: "fadeIn 0.5s" }}
              >
                <div className="transaction-detail">
                  <div className="transaction-detail-list">
                    <span>Transaction type: </span>
                    <span>Catégorie: </span>
                    <span>Note: </span>
                  </div>
                  <div className="transaction-detail-list-titre">
                    <span>{transaction.transactionType}</span>
                    <span>{transaction.category}</span>
                    <span>{transaction.note}</span>
                  </div>
                </div>
              </section>
            )}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}

export default Transaction;
