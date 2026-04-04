import React from "react";
import { toast } from "react-toastify";

function CartItem({ item, removeFromCart }) {
  const handleRemove = () => {
    removeFromCart(item.id);
    toast.info(`${item.name} removed from cart`);
  };

  return (
    <div className="flex justify-between items-center border rounded p-2 mb-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{item.icon}</span>
        <p>{item.name}</p>
      </div>
      <p>${item.price}</p>
      <button onClick={handleRemove} className="bg-red-500 text-white px-2 py-1 rounded">
        Remove
      </button>
    </div>
  );
}

export default CartItem;