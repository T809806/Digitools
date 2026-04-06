const Navbar = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

     <h1 className="text-2xl font-bold text-blue-600"> DigiTools </h1>

     <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer"> Products </li>
        <li className="hover:text-blue-600 cursor-pointer"> Features </li>
        <li className="hover:text-blue-600 cursor-pointer"> Pricing </li>
        <li className="hover:text-blue-600 cursor-pointer"> Testimonials </li>
        <li className="hover:text-blue-600 cursor-pointer"> FAQ </li>
    </ul>

     <div className="flex items-center gap-5">

         <div className="relative cursor-pointer hover:scale-110 transition">
          <span className="text-xl"> 🛒 </span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {cartCount}
          </span>
        </div>

     <button className="text-gray-600 hover:text-blue-600 transition"> Login </button>
     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Get Started </button>

   </div>
    </div>
  );
};

export default Navbar;