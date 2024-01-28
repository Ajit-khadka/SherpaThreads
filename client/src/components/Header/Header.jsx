import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Login from "../Login/Login";
import HeaderExtra from "./HeaderExtra";
import axios from "axios";
import QuickBag from "../QuickBag/QuickBag";
import { HiMiniBars3 } from "react-icons/hi2";
import Sidenav from "./Sidenav";

const Header = () => {
  const [openLoginPop, setOpenLoginPop] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [quickBag, setQuickBag] = useState(false);
  const [extraHeader, setExtraHeader] = useState();
  const [showNav, setShowNav] = useState(false);
  const [userData, setUserData] = useState({});

  let toggleNavlink = (navName) => {
    setNavClick(!navClick);
    if (navName === "Accessories") {
      setExtraHeader(navName);
    } else if (navName === "Brands") {
      setExtraHeader(navName);
    } else if (navName === "Festivals") {
      setExtraHeader(navName);
    } else if (navName === "Themes") {
      setExtraHeader(navName);
    }
  };

  useEffect(() => {
    // console.log("running");

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/login", {
          withCredentials: true,
        });
        // console.log("response", res);
        setUserData(res.data.user);
      } catch (err) {
        if (err.response && err.response.status === 400) {
          console.log("Bad Request: Invalid parameters");
        }
        return console.log("Axios Error:", err);
      }
    };

    let interval = setInterval(getUser(), 30000);

    return () => clearInterval(interval);
  }, [userData]);

  //go to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //Header color change on scroll
  let headerBgHandler = () => {
    if (window.scrollY >= 500) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener("scroll", headerBgHandler);

  //open popup login modal
  let LoginmodalHandler = () => {
    setOpenLoginPop(true);
    setNavClick(false);
    setShowNav(false);
  };

  let BagmodalHandler = () => {
    setQuickBag(true);
    setNavClick(false);
    setShowNav(false);
  };

  return (
    <div className=" flex flex-col  relative  z-10 ">
      {Object.keys(userData).length < 1 ? (
        <Login
          open={openLoginPop}
          // userData={userData}
          // googleLogin={() => {
          //   loginwithGoogle();
          // }}
          close={() => setOpenLoginPop(true)}
        />
      ) : (
        <Login
          open={openLoginPop}
          // userData={userData}
          // googleLogin={() => {
          //   loginwithGoogle();
          // }}
          close={() => setOpenLoginPop(false)}
        />
      )}

      <QuickBag
        open={quickBag}
        userData={userData}
        close={() => setQuickBag(false)}
      />

      {showNav && (
        <Sidenav
          className="Header-SideNav"
          close={() => setShowNav(!showNav)}
        />
      )}

      <div
        className={` ${
          headerColor || navClick
            ? "Header--AnimateIntro fixed text-black bg-white "
            : "absolute  text-white"
        }  flex justify-between item-center w-[100%] h-[13vh] top-0 left-0 z-10 global-padding`}
      >
        <nav className="flex items-center  space-x-16 ">
          <div
            className="flex justify-center items-center
          "
          >
          {!showNav && <div
              className="Header-SideNav cursor-pointer mr-5"
              onClick={() => setShowNav(!showNav)}
            >
              <HiMiniBars3 className="text-xl" />
            </div>}
            <div
              className=" cursor-pointer font-Roboto italic text-[22px] font-bold"
              onClick={() => scrollToTop()}
            >
              SherpaThreads
            </div>
          </div>
          <div className="Header-navlink">
            <ul className=" navlink flex gap-x-10 font-Nunito font-bold text-[15px] cursor-pointer ">
              <li onClick={() => toggleNavlink("Accessories")}>
                Accessories{" "}
                <span className="">
                  <IoIosArrowDown />
                </span>
              </li>
              <li onClick={() => toggleNavlink("Brands")}>
                Brands{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li onClick={() => toggleNavlink("Festivals")}>
                Festivals{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li onClick={() => toggleNavlink("Themes")}>
                Themes{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
            </ul>
          </div>
        </nav>
        {navClick && (
          <div>
            <HeaderExtra
              open={navClick}
              close={toggleNavlink}
              navName={extraHeader}
            />
            <div
              className="h-[400px] w-[100%] absolute bg-transparent top-[395px] left-0 "
              onClick={() => setNavClick(!navClick)}
            ></div>
          </div>
        )}
        <div className=" flex items-center font-bold text-xl">
          <LuUser2 className=" cursor-pointer" onClick={LoginmodalHandler} />
          <GrFavorite className="header-icon fav-icon cursor-pointer" onClick={LoginmodalHandler} />
          <IoBagHandleOutline
            className="cursor-pointer header-icon"
            onClick={BagmodalHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
