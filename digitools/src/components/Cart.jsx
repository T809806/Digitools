

import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, checkout }) => {

  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 border rounded-lg shadow bg-white">
      
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty 🛒</p>
      )}

      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-3">
          <p>{item.name}</p>

          <div className="flex items-center gap-4">
            <span>${item.price}</span>

            <button
              onClick={() => {
                removeItem(item.id);
                toast("Removed from cart");
              }}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* 🔥 Total Section */}
      {cart.length > 0 && (
        <div className="mt-6">
          
          <h3 className="text-lg font-semibold">
            Total: ${total}
          </h3>

          <button
            onClick={() => {
              checkout();
              toast("Checkout successful");
            }}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;