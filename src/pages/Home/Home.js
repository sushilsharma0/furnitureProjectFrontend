import React from "react";
import Carousel from "../../components/home/Carousel";
import Products from "../../components/home/Products";
import Info from "../../components/home/Info";
import Footers from "../../components/Footer";

function Home() {
  return (
    <>
      <Carousel />
      <Info />
      <Products />
      <Footers />
    </>
  );
}

export default Home;
