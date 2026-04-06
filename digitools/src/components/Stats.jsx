const Stats = () => {
  return (
    <div className="bg-gray-50 py-12 px-8">
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8">

       <div className="px-8">
          <h2 className="text-4xl font-bold text-blue-600"> 50K+ </h2>
          <p className="text-gray-600 mt-2"> Active Users </p>
       </div>

    <div className="hidden md:block h-12 w-[1px] bg-gray-300"> </div>

       <div className="px-8">
       <h2 className="text-4xl font-bold text-blue-600"> 200+ </h2>
       <p className="text-gray-600 mt-2"> Premium Tools </p>
    </div>

    <div className="hidden md:block h-12 w-[1px] bg-gray-300"> </div>

       <div className="px-8">
       <h2 className="text-4xl font-bold text-blue-600"> 4.9 </h2>
       <p className="text-gray-600 mt-2" >Rating </p>
    </div>
   </div>
  </div>
  );
};

export default Stats;