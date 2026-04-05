import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, checkout }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <p>{item.name}</p>
          <div>
            <span>${item.price}</span>
            <button
              onClick={() => {
                removeItem(item.id);
                toast("Removed");
              }}
              className="ml-3 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={() => {
            checkout();
            toast("Checkout done");
          }}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;