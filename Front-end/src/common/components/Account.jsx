import Button from "./Button";


function Account({ title, totalamount, description }) {
    return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{totalamount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button title ="View transactions"className="transaction-button"/>
      </div>
    </section>
    );
  }
  
  export default Account;