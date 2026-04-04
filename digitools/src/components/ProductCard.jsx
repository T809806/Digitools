import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <span>{product.icon}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold mb-1">Price: ${product.price}</p>
      <p className="text-sm mb-1">Period: {product.period}</p>
      <p className="text-sm mb-1">Tag: {product.tagType}</p>
      <ul className="text-sm mb-2">
        {product.features.map((feat, index) => (
          <li key={index}>• {feat}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;