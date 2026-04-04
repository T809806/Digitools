import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">DigiTools</h3>
          <p>All-in-one AI tools for designers, marketers, and creators.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>Email: support@digitools.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-6 text-sm">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;