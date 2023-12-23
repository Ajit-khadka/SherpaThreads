import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import BackImages from "../data/BackImages";
import HomeSlider from "../components/HomeSlider";
import { useState } from "react";
import Login from "./Login/Login";

const Header = () => {
  const [openLoginPop, setOpenLoginPop] = useState(false)
  const [headerColor, setHeaderColor] = useState(false);

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
  }

  return (
    <div className=" flex flex-col  relative  z-10 ">
      <Login open={openLoginPop} close={() => setOpenLoginPop(false)} />
      <div
        className={` ${
          headerColor
            ? "Header--AnimateIntro fixed text-black bg-white "
            : "absolute  text-white"
        }  flex justify-between item-center w-[100%] px-16 h-[13vh] top-0 left-0 z-10`}
      >
        <nav className="flex items-center  space-x-16 ">
          <div className=" cursor-pointer font-Roboto italic text-[22px] font-bold">
            SherpaThreads
          </div>
          <ul className="navlink flex gap-x-10 font-Nunito font-bold text-[15px] cursor-pointer ">
            <li>
              Accessories{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li>
              Brands{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li>
              Festivals{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li>
              Sizes{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li>
              Themes{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
        </nav>
        <div className=" flex items-center space-x-8  font-bold text-xl">
          <LuUser2 className="cursor-pointer" onClick={modalHandler}/>
          <GrFavorite className="cursor-pointer" />
          <IoBagHandleOutline className="cursor-pointer" />
        </div>
      </div>
      <section className="">{info} </section>
    </div>
  );
};

export default Header;
