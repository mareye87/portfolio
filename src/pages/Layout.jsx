import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="min-h-[calc(100vh-40px)]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
