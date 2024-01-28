import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Sidenav = (props) => {
  let pageHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <aside
      className="h-[100vh] w-[100vw] bg-black bg-opacity-20 top-0 left-0 fixed z-20"
      onClick={props.close}
    >
      <section
        className=" h-[92vh] w-[250px] bg-white rounded-xl absolute top-7 left-5 px-5 py-3 font-extrabold font-Sans"
        onClick={pageHandler}
      >
        <div
          className="h-10 w-10 rounded-full border flex justify-center items-center mt-4"
          onClick={props.close}
        >
          <IoClose />
        </div>
        <div className="flex flex-col   h-[76vh] justify-between">
          <ul className=" mt-5 space-y-5 text-[16px] uppercase italic font-extrabold text-xl">
          <Link
              to="/Home"
              className="flex items-center justify-between"
              onClick={props.close}
            >
              <li className="cursor-pointer">Home</li>{" "}
              <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300  rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </div>
            </Link>
            <Link
              to="/collection/Accessories"
              className="flex items-center justify-between"
              onClick={props.close}
            >
              <li className="cursor-pointer">Accessories</li>{" "}
              <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300  rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </div>
            </Link>
            <Link
              to="/collection/Brands"
              className="flex items-center justify-between"
              onClick={props.close}
            >
              <li className="cursor-pointer">Brands</li>{" "}
              <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300  rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </div>
            </Link>
            <Link
              to="/collection/Festivals"
              className="flex items-center justify-between"
              onClick={props.close}
            >
              <li className="cursor-pointer">Festivals</li>{" "}
              <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300  rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </div>
            </Link>
            <Link
              to="/collection/Themes"
              className="flex items-center justify-between"
              onClick={props.close}
            >
              <li className="cursor-pointer">Themes</li>{" "}
              <div className="Footer--GiveawayEnter h-6 w-6 bg-gray-300  rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl">
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </div>
            </Link>
          </ul>
          <div>
            <div className=" flex items-around space-x-4">
              <a href="#" target="blank">
                <IoLogoInstagram className="text-2xl cursor-pointer" />
              </a>
              <a href="#" target="blank">
                <FaFacebookF className="text-xl cursor-pointer" />{" "}
              </a>
              <a href="#" target="blank">
                {" "}
                <FaThreads className="text-2xl cursor-pointer" />
              </a>
            </div>
            <div className="h-[1px] bg-gray-200 my-4"></div>
            <div>
              <div className="text-sm font-Nunito">Account</div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

Sidenav.propTypes = {
  close: PropTypes.func,
};

export default Sidenav;
