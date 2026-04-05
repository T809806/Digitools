import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg">
      
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>

      <p className="mt-2 font-semibold">
        ${product.price} / {product.period}
      </p>

      <ul className="text-sm mt-2">
        {product.features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          addToCart(product);
          toast("Added to cart");
        }}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;