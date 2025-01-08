import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Card } from "flowbite-react";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchLatestProducts = () => {
      setLatestProducts(products.slice(0, 10));
    };
    fetchLatestProducts();
  }, [products]);

  return (
    <section className="my-16">
      {/* Title Section */}
      <div className="text-center py-8">
        <Title text1="LATEST " text2="COLLECTION" />
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore our latest collection of amazing products. Curated to bring
          you the best in style, quality, and affordability. Don't miss out on
          these exclusive picks.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map((product) => (
          <Card
            key={product._id}
            className="shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ProductItem
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default LatestCollection;
