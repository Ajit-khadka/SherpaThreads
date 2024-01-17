import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  const current = new Date()
  let date = current.getFullYear();

  return (
    <div
      className="flex justify-center  px-16 py-16  text-md font-Nunito w-[100%] "
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <section className="flex justify-evenly w-[100%]">
        <div className=" flex flex-col justify-between">
         <div>
          <div className="w-[350px] uppercase font-Sans italic font-extrabold text-2xl">
            Sign up for GiveAways and Promo Codes{" "}
            <span className="text-3xl">⚡</span>
          </div>
          <div className="relative">
            <input
              className="px-5 py-4 w-[350px] border-[1px] border-black rounded-md mt-4 border-opacity-20"
              placeholder="Phone Number"
            />
            <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300 absolute cursor-pointer rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
              {" "}
              <IoIosArrowForward className="text-[12px]" />
            </div>
          </div>
          </div>
          <div className=" flex items-center space-x-4">
            <a href="#" target="blank">
              <IoLogoInstagram className="text-3xl cursor-pointer" />
            </a>
            <a href="#" target="blank">
              <FaFacebookF className="text-2xl cursor-pointer" />{" "}
            </a>
            <a href="#" target="blank">
              {" "}
              <FaThreads className="text-3xl cursor-pointer" />
            </a>
          </div>
          <div className=" text-sm flex items-center opacity-70"><MdOutlineCopyright className="opacity-60"/> {date}, SherpaThreads.</div>
        </div>
        <div className=" w-36 ">
          <div className=" font-bold">Shop</div>
          <ul className="Footer--items space-y-5 mt-6">
            <li>Popular Now</li>
            <li>Other Products</li>
            <li>Festival</li>
            <li>Brands</li>
            <li>Themes</li>
            <li>Sizes</li>
          </ul>
        </div>
        <div className="w-36 ">
          <div className=" font-bold">Other</div>
          <ul className="Footer--items space-y-5 mt-6 ">
            <li>Customer Care</li>
            <li>Your Account</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Give Away</li>
          </ul>
        </div>
        <div className="w-[350px]">
          <div className="Footer--items font-bold">Whats SherpaThreads?</div>
          <p className="mt-6 font-semibold opacity-70 leading-7">
            A premier online destination for Nepali fashion enthusiasts,
            showcasing curated collections from top brands and delivering
            nationwide <span className="opacity-1">🌈</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
