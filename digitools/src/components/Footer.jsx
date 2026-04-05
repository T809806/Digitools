import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

       
        <div className="md:w-1/4 text-left">
          <h2 className="text-2xl font-bold">DigiTools</h2>
          <p className="mt-2 text-gray-400">
            Premium digital tools for creators.
          </p>
        </div>

       
        <div className="md:w-1/2 grid grid-cols-3 gap-6 text-left">
         
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integration</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 space-y-1">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

      
        <div className="md:w-1/4 text-left md:text-right">
          <h3 className="font-semibold mb-2"> Social Links </h3>
          <div className="flex gap-4 mt-2 justify-start md:justify-end">
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      
      <hr className="border-gray-700 my-6" />

     
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
      
        <p>© 2026 DigiTools. All rights reserved.</p>

    
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;