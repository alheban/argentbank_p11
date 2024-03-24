import { Outlet } from "react-router-dom";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
