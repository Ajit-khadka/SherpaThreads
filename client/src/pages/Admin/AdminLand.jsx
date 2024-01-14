import SideNav from "../../components/SideNavAdmin/SideNav";
import { FaUsers } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaRing } from "react-icons/fa";
import { GiTemplarEye } from "react-icons/gi";
import "./AllUsers/AdminUser.css";

const AdminLand = () => {
  return (
    <>
      <div className="flex bg-indigo-300 h-[100vh] font-Nunito">
        <SideNav />
        <div className="AllUser p-10 text-center space-y-8 shadow-xl  border back h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
          <h1 className="text-black text-xl font-bold mb-5">Dashboard</h1>
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
                  <div className="font-semibold text-xl">13</div>
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
                  <div className="font-semibold text-xl">13</div>
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
                  <div className="font-semibold text-xl">13</div>
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
                  <div className="font-semibold text-xl">13</div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default AdminLand;
