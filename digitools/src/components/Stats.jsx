import React from "react";

function Stats() {
  return (
    <section className="flex justify-around bg-white p-8 rounded-lg shadow mb-8">
      <div className="text-center">
        <p className="text-2xl font-bold">100+</p>
        <p className="text-gray-600">Templates</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">24/7</p>
        <p className="text-gray-600">Support</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">500+</p>
        <p className="text-gray-600">Users</p>
      </div>
    </section>
  );
}

export default Stats;