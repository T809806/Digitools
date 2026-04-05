const Pricing = () => {
  return (
    <div className="py-16 px-6 bg-gray-50 text-center">
      
      <h2 className="text-3xl font-bold mb-10">
        Simple Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Starter */}
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold">Starter</h3>
          <p className="text-2xl mt-2">$0</p>
          <p className="mt-2">Basic features</p>
        </div>

        {/* Pro */}
        <div className="p-6 border rounded-lg bg-blue-600 text-white">
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="text-2xl mt-2">$29/mo</p>
          <p className="mt-2">All premium tools</p>
        </div>

        {/* Enterprise */}
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="text-2xl mt-2">$99/mo</p>
          <p className="mt-2">Team features</p>
        </div>

      </div>

    </div>
  );
};

export default Pricing;