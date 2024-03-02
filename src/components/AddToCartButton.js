import axios from "axios";
import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("USER-TOKEN");
function AddToCartButton({ productId }) {
  const userId = localStorage.getItem("userId");

  const addToCartHandler = async () => {
    try {
      if (!userId) {
        console.error("Invalid userId");
        return;
      }

      await axios.post("http://localhost:8000/api/cart/post", {
        product_id: productId,
        userId: userId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return token ? (
    <button
      className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#ff1b1b]"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  ) : (
    <button
      className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#ff1b1b]"
      onClick={() => alert("login")}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
