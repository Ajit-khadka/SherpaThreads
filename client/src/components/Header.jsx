import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" h-[13vh] flex item-center z-1 fixed top-0 left-0 px-16 justify-between w-[100%]">
      <nav className="flex items-center space-x-16 ">
        <div className=" cursor-pointer font-Roboto italic text-[20px] font-bold text-white">
          SherpaThreads
        </div>
        <ul className="navlink flex gap-x-10 font-Sans font-semibold text-[14px] cursor-pointer text-white">
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
      <div className="text-white flex items-center space-x-8  font-bold text-xl">
        <LuUser2 className="cursor-pointer"/>
        <GrFavorite className="cursor-pointer"/>
        <IoBagHandleOutline className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Header;
