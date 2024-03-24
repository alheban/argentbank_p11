import { NavLink } from "react-router-dom";

function Page404 (){
    return (
      <div className="Page404-container">
        <h2 className="Page404-title">404 - Page Not Found !</h2>
        <p className="Page404-text">The page you are looking for does not exist.</p>
        <NavLink to="/" className="Page404-link">Go to Home Page</NavLink>
      </div>
    );
  };
  
  export default Page404;