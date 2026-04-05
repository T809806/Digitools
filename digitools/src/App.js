import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Hero Section */}
      <Banner />
      <Stats />

      {/* Main Content */}
      <main className="flex-grow">
        <MainSection cart={cart} setCart={setCart} />
        <Steps />
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>
  );
}

export default App;