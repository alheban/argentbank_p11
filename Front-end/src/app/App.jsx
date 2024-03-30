import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import Page404 from "../pages/Page404";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";

import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }
  return children ? children : <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route element={<PrivateRoute isAuthenticated={true} />}>
          <Route path='/profil' element={<User />} />
        </Route>
        <Route path='*' element={<Page404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
