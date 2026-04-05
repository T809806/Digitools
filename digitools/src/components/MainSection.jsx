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
    setCart(cart.filter(item => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <div className="px-8 py-12">

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setView("product")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Product
        </button>

        <button
          onClick={() => setView("cart")}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cart
        </button>
      </div>

      {/* Product View */}
      {view === "product" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}

      {/* Cart View */}
      {view === "cart" && (
        <Cart cart={cart} removeItem={removeItem} checkout={checkout} />
      )}

    </div>
  );
};

export default MainSection;