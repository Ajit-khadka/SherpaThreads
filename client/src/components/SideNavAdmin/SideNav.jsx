import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { FaRing } from "react-icons/fa";
import { GiTemplarEye } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="flex justify-start">
      <section
        className=" h-[95vh] w-[300px] my-4 ml-4 font-Nunito rounded-tl-xl rounded-bl-xl shadow-3xl text-white"
        style={{
          background: "linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))",
        }}
      >
        <main className="space-y-8 text-center">
          <div className="cursor-pointer font-Roboto italic text-[22px] font-bold mt-8 ">
            SherpaThreads
          </div>

          <article className="space-y-5 px-5">
            <div>
              <NavLink
                to="/Admin"
                className=" text-[18px] cursor-pointer rounded-md flex space-x-4  justify-start py-2 items-center"
              >
                <FaHome className="ml-8" />
                <span>Dashboard</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/All/Users"
                className="text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center "
              >
                <FaUsers className="ml-8" />
                <span>Users</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Add/Accessories"
                className=" text-[18px] cursor-pointer rounded-md flex space-x-4  justify-start py-2 items-center"
              >
                <FaRing className="ml-8" />
                <span>Accessories</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Add/Brands"
                className=" text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center "
              >
                <TbBrandBooking className="ml-8" />
                <span>Brands</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Add/Festivals"
                className=" text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center "
              >
                <GiTemplarEye className="ml-8" />
                <span>Festivals</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Add/Theme"
                className=" text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center "
              >
                <HiTemplate className="ml-8" />
                <span>Themes</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Orders"
                className=" text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center "
              >
                <FaGift className="ml-8" />
                <span>Orders</span>
              </NavLink>
            </div>
            <div>
              <div className=" text-[18px] cursor-pointer  rounded-md flex space-x-4  justify-start py-2 items-center ">
                <MdLogout className="ml-8" />
                <span>Logout</span>
              </div>
            </div>
          </article>
        </main>
      </section>
    </div>
  );
};

export default SideNav;
