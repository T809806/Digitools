import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
   <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-16 bg-gray-50">
      
    <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"> Supercharge Your Digital Workflow 🚀 </h1>
        <p className="mt-4 text-gray-600">
        Access premium AI tools, design assets, templates, and productivity software—all in one place.
        </p>
       
    <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Explore Products </button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100"> Watch Demo </button>
   </div>
   </div>

   <div className="mt-10 md:mt-0">
        <img src={bannerImg} alt="banner" className="w-72 md:w-96" />
   </div>

    </div>
  );
};

export default Banner;