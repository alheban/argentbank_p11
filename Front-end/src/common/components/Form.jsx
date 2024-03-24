const handleSubmit = async (e) => {
  e.preventDefault();
};

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
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
    </form>
  );
}

export default Form;
