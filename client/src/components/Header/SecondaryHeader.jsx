import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Login from "../Login/Login";
import HeaderExtra from "./HeaderExtra";
import axios from "axios";
import QuickBag from "../QuickBag/QuickBag";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState({});
  const [openLoginPop, setOpenLoginPop] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [quickBag, setQuickBag] = useState(false);

  let navigate = useNavigate();

  let toggleNavlink = () => {
    setNavClick(!navClick);
  };

  //open popup login modal
  let LoginmodalHandler = () => {
    setOpenLoginPop(true);
    setNavClick(false);
  };

  let BagmodalHandler = () => {
    setQuickBag(true);
    setNavClick(false);
  };

  //login
  // console.log("userdata", userData);
  const loginwithGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/login", {
        withCredentials: true,
      });
      // console.log("response", res);
      setUserData(res.data.user);
    } catch (err) {
      if (err.code === "ERR_BAD_REQUEST") {
        return console.log("No user logged");
      }
      return console.log("Axios Error:", err);
    }
  };

  useEffect(() => {
    // console.log("running");
    getUser();
  }, []);

  return (
    <div className=" flex flex-col  relative  z-10 ">
      <Login
        open={openLoginPop}
        userData={userData}
        googleLogin={() => {
          loginwithGoogle();
        }}
        close={() => setOpenLoginPop(false)}
      />
      <QuickBag open={quickBag} close={() => setQuickBag(false)} />
      <div
        className={` ${
          navClick && "Header--AnimateIntro text-black bg-white "
        }  flex justify-between item-center w-[100%] px-16 h-[13vh] top-0 left-0 z-10 `}
      >
        <nav className="flex items-center  space-x-16 ">
          <div
            className=" cursor-pointer font-Roboto italic text-[22px] font-bold"
            onClick={() => navigate("/")}
          >
            SherpaThreads
          </div>
          <ul className="navlink flex gap-x-10 font-Nunito font-bold text-[15px] cursor-pointer ">
            <li onClick={toggleNavlink}>
              Accessories{" "}
              <span className="">
                <IoIosArrowDown />
              </span>
            </li>
            <li onClick={toggleNavlink}>
              Brands{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li onClick={toggleNavlink}>
              Festivals{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li onClick={toggleNavlink}>
              Sizes{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li onClick={toggleNavlink}>
              Themes{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
        </nav>
        {navClick && (
          <div className="">
            <HeaderExtra open={navClick} close={toggleNavlink} />
            <div
              className="h-[400px] w-[100%] bg-black top-[395px] left-0 "
              onClick={toggleNavlink}
            ></div>
          </div>
        )}
        <div className=" flex items-center space-x-8 font-bold text-xl">
          <LuUser2 className="cursor-pointer" onClick={LoginmodalHandler} />
          <GrFavorite className="cursor-pointer" onClick={LoginmodalHandler} />
          <IoBagHandleOutline
            className="cursor-pointer"
            onClick={BagmodalHandler}
          />
        </div>
       
      </div>
    </div>
  );
};

export default Header;
