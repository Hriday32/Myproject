import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoToTop from "../components/Go-to-top/GoToTop";
function Layout() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="h-screen">
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Layout;
