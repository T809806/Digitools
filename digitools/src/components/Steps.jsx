import React from "react";

const stepsData = [
  {
    id: 1,
    title: "Choose a Product",
    description: "Select from our wide range of AI-powered tools.",
    icon: "🛒",
  },
  {
    id: 2,
    title: "Add to Cart",
    description: "Easily add your selected products to the cart.",
    icon: "🛍️",
  },
  {
    id: 3,
    title: "Checkout",
    description: "Proceed to checkout and enjoy your products.",
    icon: "💳",
  },
];

function Steps() {
  return (
    <div className="my-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;