const Steps = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      
      <h2 className="text-3xl font-bold mb-10">
        Get Started in 3 Steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">01</h3>
          <p>Create Account</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">02</h3>
          <p>Choose Products</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2">03</h3>
          <p>Start Creating</p>
        </div>

      </div>

    </div>
  );
};

export default Steps;