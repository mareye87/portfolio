import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopTipModule from "../components/TopTipModule";

const Layout = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="min-h-[calc(100vh-40px)]">
        <TopTipModule />
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
