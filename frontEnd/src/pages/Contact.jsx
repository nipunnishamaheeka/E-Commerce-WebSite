import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Us Section */}
      <div className="text-center text-2xl pt-10 border-t border-gray-200">
        <Title text1={"CONTACT "} text2={"US"} />
      </div>

      {/* Contact Information Section */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-700">
          <p className="font-bold text-xl text-gray-800">Our Store</p>
          <p className="text-gray-600">
            80064 Galle Road <br /> Colombo
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tel:</span> 091 123 4567 <br />
            <span className="font-semibold">Fax:</span> 011 123 4567 <br />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:9GKQK@example.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
             foreverContact@gmail.com
            </a>
          </p>
          <p className="font-bold text-xl text-gray-800">Careers at Forever</p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300 shadow-md">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Box Section */}
      <div className="bg-gradient-to-t from-gray-50 to-white py-10">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
