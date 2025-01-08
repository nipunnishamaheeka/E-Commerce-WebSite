import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-12">
      {/* Title Section */}
      <div className="text-center py-8">
        <Title text1={"BEST "} text2={"SELLERS"} />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          Explore our exclusive collection of bestsellers, carefully curated to
          meet your style and quality needs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
        {bestSeller.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default BestSeller;
