import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm text-gray-700">
          <div>
            <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
            <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              perferendis quia! Nemo doloremque eius eveniet inventore similique
              deserunt consectetur omnis repellendus animi. Architecto, fuga
              ullam asperiores officia esse debitis voluptate!
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900 mb-5">Company</p>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Delivery</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900 mb-5">
              Get in Touch
            </p>
            <ul className="space-y-2">
              <li className="hover:text-blue-600">+94763825296</li>
              <li className="hover:text-blue-600">forever@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-5">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Nipun Nishamaheeka - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
