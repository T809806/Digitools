import React from "react";

function Banner() {
  return (
    <section className="bg-blue-100 p-10 flex flex-col md:flex-row items-center justify-between rounded-lg mb-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to DigiTools</h1>
        <p className="text-gray-700 mb-4">
          Build products, manage your cart, and explore amazing AI tools all in one place.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get Started
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="https://via.placeholder.com/400x250" alt="Banner" className="rounded-lg shadow"/>
      </div>
    </section>
  );
}

export default Banner;