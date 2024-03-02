import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";

function Carousels() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setAllProducts(res.data); // Set allProducts state with the data received from the API
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[25rem] w-[50vw]">
      <Carousel>
        {/* Map through allProducts array and render img elements for each image URL */}
        {allProducts.map((product, index) => (
          <img
            key={index}
            src={`data:image/png;base64,${product.image}`}
            alt={`Product ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
