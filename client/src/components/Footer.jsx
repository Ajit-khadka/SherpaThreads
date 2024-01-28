import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const current = new Date();
  let date = current.getFullYear();

  const [give, setGive] = useState({
    phone: "",
    userId: "",
    name: "",
  });

  let giveHandler = async (e) => {
    e.preventDefault();
    if (give.phone.length === 10 && /^\d+$/.test(give.phone)) {
      console.log(give);
      await axios
        .post("http://localhost:8000/api/giveaway", give)
        .then((res) => {
          toast.success(res.data.msg, {
            position: "bottom-left",
          });
        })

        .catch((err) => {
          console.log("error", err);
        });

      setGive((prevGive) => ({
        ...prevGive,
        phone: "",
      }));
    } else {
      toast.error("Invalid phone number", { position: "bottom-left" });
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/login", {
          withCredentials: true,
        });

        setGive((prevGive) => ({
          ...prevGive,
          userId: res.data.user._id,
          name: res.data.user.userName,
        }));
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchUser();
  }, []);

  const dataHandler = (e) => {
    setGive((prevGive) => ({
      ...prevGive,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="flex justify-between  global-padding py-16  text-md font-Nunito w-[100%]"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <section className="flex justify-evenly w-[100%] flex-wrap ">
        <div className="footer-giveAway flex flex-col   ">
          <div className="">
            <div className="footer-giveAwayInput  footer-inputLabel uppercase font-Sans italic font-extrabold">
              Sign up for GiveAways and Promo Codes{" "}
              <span className="text-3xl">⚡</span>
            </div>
            <div className="relative">
              <input
                className="footer-giveAwayInput px-5 py-4 border-[1px] border-black rounded-md mt-4 border-opacity-20"
                placeholder="Phone Number"
                value={give.phone}
                type="tel"
                onChange={dataHandler}
                pattern="[0-9]{10}"
                name="phone"
              />
              <button
                className="Footer--GiveawayEnter h-6 w-6 bg-gray-300 absolute cursor-pointer rounded-[50%] flex justify-center items-center text-black right-4 top-8 shadow-xl"
                onClick={giveHandler}
              >
                {" "}
                <IoIosArrowForward className="text-[12px]" />
              </button>
            </div>

            <section className=" flex  justify-evenly items-center h-[150px] ">
              <div className=" flex items-around space-x-4 ">
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
              <div className=" text-sm flex items-center opacity-70 ">
                <MdOutlineCopyright className="opacity-60" /> {date},
                SherpaThreads.
              </div>
            </section>
          </div>
        </div>
        <div className="Footer--AboutWeb flex flex-wrap gap-y-10  ">
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
        </div>
      </section>
    </div>
  );
};

export default Footer;
