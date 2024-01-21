import SideNav from "../../components/SideNavAdmin/SideNav";
import { FaUsers } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaRing } from "react-icons/fa";
import { GiTemplarEye } from "react-icons/gi";
import "./AllUsers/AdminUser.css";
import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Order from './Order/Order'
import axios from "axios";

const AdminLand = ({ logout }) => {
  let [users, setUser] = useState();
  let [accessories, setAccessories] = useState();
  let [brands, setBrands] = useState();
  let [festivals, setFestivals] = useState();

  useEffect(() => {
    let getInfo = async () => {
      try {
        const resUser = await axios.get("http://localhost:8000/api/All/Users");
        setUser(resUser.data.userdata.length - 1);

        const resAccess = await axios.get(
          `http://localhost:8000/api/Add/Accessories`
        );
        setAccessories(resAccess.data.accessoriesdata.length);

        const resBrand = await axios.get(
          `http://localhost:8000/api/Add/Brands`
        );
        setBrands(resBrand.data.brandsdata.length);

        const resFestiv = await axios.get(
          `http://localhost:8000/api/Add/Festivals`
        );
        setFestivals(resFestiv.data.festivalsdata.length);
      } catch (err) {
        console.log("Error", err);
      }
    };

    getInfo();
  }, []);

  return (
    <>
      <div className="flex bg-indigo-300 h-[100vh] font-Nunito">
        <SideNav />
        <div className="AllUser p-10 text-center space-y-8 shadow-xl  border back h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
          <div className="flex space-x-5 justify-center">
            <h1 className="text-black text-xl font-bold ">Dashboard</h1>

            <div
              className=" text-[18px] cursor-pointer  rounded-md flex space-x-2  justify-start items-center "
              onClick={() => logout()}
            >
              <span>Logout</span>
              <MdLogout className="" />
            </div>
          </div>

          <article className="flex justify-around flex-wrap gap-y-5 self-start">
            <section>
              <div className="h-[120px] w-[230px] rounded-xl shadow-md bg-white flex justify-around items-center">
                <div>
                  <div className="h-14 w-14 bg-[#37373D] text-white rounded-xl text-xl flex justify-center items-center shadow-xl">
                    <FaUsers />
                  </div>
                </div>
                <div className="">
                  <span className="opacity-50">Users</span>
                  <div className="font-semibold text-xl">{users}</div>
                </div>
              </div>
            </section>
            <section>
              <div className="h-[120px] w-[230px] rounded-xl shadow-md bg-white flex justify-around items-center">
                <div>
                  <div className="h-14 w-14 bg-[#3791ED] text-white rounded-xl text-xl flex justify-center items-center shadow-xl">
                    <FaRing />
                  </div>
                </div>
                <div className="">
                  <span className="opacity-50">Accessories</span>
                  <div className="font-semibold text-xl">{accessories}</div>
                </div>
              </div>
            </section>
            <section>
              <div className="h-[120px] w-[230px] rounded-xl shadow-md bg-white flex justify-around items-center">
                <div>
                  <div className="h-14 w-14 bg-[#5BB35F] text-white rounded-xl text-xl flex justify-center items-center shadow-xl">
                    <TbBrandBooking />
                  </div>
                </div>
                <div className="">
                  <span className="opacity-50">Brands</span>
                  <div className="font-semibold text-xl">{brands}</div>
                </div>
              </div>
            </section>
            <section>
              <div className="h-[120px] w-[230px] rounded-xl shadow-md bg-white flex justify-around items-center">
                <div>
                  <div className="h-14 w-14 bg-[#E91E63] text-white rounded-xl text-xl flex justify-center items-center shadow-xl">
                    <GiTemplarEye />
                  </div>
                </div>
                <div className="">
                  <span className="opacity-50">Festival</span>
                  <div className="font-semibold text-xl">{festivals}</div>
                </div>
              </div>
            </section>
          </article>
          <main>
            <Order/>
          </main>
        </div>
      </div>
    </>
  );
};

AdminLand.propTypes = {
  logout: PropTypes.func,
};

export default AdminLand;
