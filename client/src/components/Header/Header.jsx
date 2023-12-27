import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import BackImages from "../../data/BackImages";
import HomeSlider from "../HomeSlider";
import { useState } from "react";
import Login from "../Login/Login";
import HeaderExtra from "./HeaderExtra";

const Header = () => {
  const [openLoginPop, setOpenLoginPop] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [navClick, setNavClick] = useState(false);

  let toggleNavlink = () => {
    setNavClick(!navClick);
  };

  //Mapping data from BackImages.js
  let info = BackImages.map((items) => {
    return <HomeSlider key={items.id} item={items} />;
  });

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
  let modalHandler = () => {
    setOpenLoginPop(true);
    setNavClick(false);
  };

  return (
    <div className=" flex flex-col  relative  z-10 ">
      <Login open={openLoginPop} close={() => setOpenLoginPop(false)} />
      <div
        className={` ${
          headerColor || navClick
            ? "Header--AnimateIntro fixed text-black bg-white "
            : "absolute  text-white"
        }  flex justify-between item-center w-[100%] px-16 h-[13vh] top-0 left-0 z-10`}
      >
        <nav className="flex items-center  space-x-16 ">
          <div className=" cursor-pointer font-Roboto italic text-[22px] font-bold">
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
          <div>
            <HeaderExtra open={navClick} close={toggleNavlink} />
            <div
              className="h-[400px] w-[100%] absolute bg-transparent top-[395px] left-0 text-red"
              onClick={toggleNavlink}
            ></div>
          </div>
        )}
        <div className=" flex items-center space-x-8 font-bold text-xl">
          <LuUser2 className="cursor-pointer" onClick={modalHandler} />
          <GrFavorite className="cursor-pointer" />
          <IoBagHandleOutline className="cursor-pointer" />
        </div>
      </div>

      <div className="">
        <section className="">{info} </section>
      </div>
    </div>
  );
};

export default Header;
