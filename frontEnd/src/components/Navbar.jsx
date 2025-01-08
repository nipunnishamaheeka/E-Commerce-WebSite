import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Dropdown } from "flowbite-react";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-5 bg-white border-b border-gray-200 px-4 sm:px-6">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-blue-600" : "hover:text-gray-900"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </ul>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        {/* Profile Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Profile Icon"
            />
          }
        >
          <Dropdown.Item>
            <Link to="/profile">My Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/orders">Orders</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/logout">Logout</Link>
          </Dropdown.Item>
        </Dropdown>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
          <p className="absolute -top-2 -right-2 w-4 h-4 text-center text-xs text-white bg-blue-600 rounded-full">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          visible ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-600 p-4">
          {/* Close Icon */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Close Icon"
            />
            <p>Close</p>
          </div>

          {/* Mobile Navigation Links */}
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              onClick={() => setVisible(false)}
              className="py-2 text-gray-700 hover:text-blue-600"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
