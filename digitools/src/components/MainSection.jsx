import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const MainSection = ({ cart, setCart }) => {
  const [view, setView] = useState("product");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <div className="py-16 px-6 bg-white">

      {/* 🔘 Toggle Buttons (CENTERED + STYLED) */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 p-1 rounded-full flex">

          {/* Product Button */}
          <button
            onClick={() => setView("product")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition 
            ${
              view === "product"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Product
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition 
            ${
              view === "cart"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Cart
          </button>

        </div>
      </div>

      {/* 🛍️ Product Section */}
      {view === "product" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}

      {/* 🛒 Cart Section */}
      {view === "cart" && (
        <div className="max-w-3xl mx-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty 🛒
            </p>
          ) : (
            <Cart
              cart={cart}
              removeItem={removeItem}
              checkout={checkout}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MainSection;