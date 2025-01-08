import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-gray-200">
      {/* Filter Section */}
      <div className="sm:w-1/4">
        <div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-5 sm:hidden"
          >
            Filters
            <img
              className={`h-5 transform transition-transform ${
                showFilter ? "rotate-90" : ""
              }`}
              src={assets.dropdown_icon}
              alt="Toggle Filters"
            />
          </button>
          {/* Category Filter */}
          <div
            className={`${
              showFilter ? "" : "hidden"
            } sm:block border rounded-lg p-4`}
          >
            <p className="text-base font-semibold text-gray-800 mb-3">
              Categories
            </p>
            <div className="space-y-2">
              {["Men", "Women", "Kids"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                    className="form-checkbox text-blue-500"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          {/* Subcategory Filter */}
          <div
            className={`${
              showFilter ? "" : "hidden"
            } sm:block border rounded-lg p-4 mt-5`}
          >
            <p className="text-base font-semibold text-gray-800 mb-3">Type</p>
            <div className="space-y-2">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <label
                  key={subCat}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <input
                    type="checkbox"
                    value={subCat}
                    onChange={toggleSubCategory}
                    className="form-checkbox text-blue-500"
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Product Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <Title text1="All" text2="Collections" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="form-select block w-40 p-2 text-sm border rounded-lg bg-white text-gray-700"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
