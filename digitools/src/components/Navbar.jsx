const Navbar = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-xl font-bold">DigiTools</h1>
      <p>Cart: {cartCount}</p>
    </div>
  );
};

export default Navbar;