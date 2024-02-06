import Popular from "../components/PopularSection/Popular";
import OtherProducts from "../components/OurProductsSection/OurProducts";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import BackImages from "../data/BackImages";
import HomeSlider from "../components/HomeSlider";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../components/ExtraInfo/InfoModal";

const Home = () => {
  const [floatIcon, setFloatIcon] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios
          .get("http://localhost:8000/login", {
            withCredentials: true,
          })
          .then((res) => console.log("Response", res));
      } catch (error) {
        console.log(error);
        navigate("/err");
      }
    };

    getUser();
  }, []);

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
  const info = BackImages.map((items, index) => {
    if (index === currentIndex) {
      return <HomeSlider key={items.id} item={items} />;
    }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === BackImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="">
        <section className="">{info} </section>
      </div>
      <Popular />
      <OtherProducts />
      <Slogan />
      <InfoModal />
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
