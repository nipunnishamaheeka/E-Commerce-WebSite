import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            perferendis quia! Nemo doloremque eius eveniet inventore similique
            deserunt consectetur omnis repellendus animi. Architecto, fuga ullam
            asperiores officia esse debitis voluptate!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94763825296</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="my-5" />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Nipun Nishamaheeka - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;