"use client";
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false even on error
      });
  }, []); // Empty dependency array to only fetch data once

  if (loading) {
    return <Loader />; // Show loader while fetching data
  }

  return (
    <section className="max-w-[100rem] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
      {products.map((product) => (
        <Card
        key={product._id}
          className="max-w-sm hover:scale-105 transition-all duration-150 ease-in"
          imgAlt={product.name}
          imgSrc={`data:image/png;base64,${product.image}`}
        >
          <Link to={`/product/${product._id}`} key={product._id}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Rs.{product.price}
            </span>
            <AddToCartButton productId={product._id} />
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Products;
