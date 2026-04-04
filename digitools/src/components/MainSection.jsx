import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import products from "../data/products.json";
import { toast } from "react-toastify";

function MainSection({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("product");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const proceedToCheckout = () => {
    setCart([]);
    toast.success("Checkout successful!");
  };

  return (
    <section>
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("product")}
          className={`px-4 py-2 rounded ${activeTab === "product" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-4 py-2 rounded ${activeTab === "cart" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Cart
        </button>
      </div>

      {/* Products Section */}
      {activeTab === "product" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
          ))}
        </div>
      )}

      {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="max-w-md mx-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
              <p className="font-bold mt-2">Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
              <button
                onClick={proceedToCheckout}
                className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default MainSection;