import Popular from "../components/PopularSection/Popular";
import OtherProducts from "../components/OurProductsSection/OurProducts";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import BackImages from "../data/BackImages";
import HomeSlider from "../components/HomeSlider";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [floatIcon, setFloatIcon] = useState(false);

  //popup Icon 
  let headerBgHandler = () => {
    if (window.scrollY >= 500) {
      setFloatIcon(true);
    } else {
      setFloatIcon(false);
    }
  };

  window.addEventListener("scroll", headerBgHandler);

  //to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //Mapping data from BackImages.js
  let info = BackImages.map((items) => {
    return <HomeSlider key={items.id} item={items} />;
  });
  return (
    <div className="relative">
      <div className="">
        <section className="">{info} </section>
      </div>
      <Popular />
      <OtherProducts />
      <Slogan />
      <Footer />
      {floatIcon && (
        <div
          className=" fixed bottom-10 right-10 rounded-[50%]"
          onClick={() => scrollToTop()}
        >
          <div className="h-12 w-12 rounded-[50%] bg-black text-white flex justify-center items-center cursor-pointer">
            <FaArrowUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
