import React, { useState } from "react";
import Navbar from "./components/Navbar";
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

      {/* Main Products Section */}
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
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;