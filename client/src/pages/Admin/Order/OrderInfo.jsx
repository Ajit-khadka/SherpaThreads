import { useParams } from "react-router-dom";
import SideNav from "../../../components/SideNavAdmin/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderInfo = () => {
  const { orderId } = useParams();
  const [orderInfo, setOrderinfo] = useState([]);

  useEffect(() => {
    let getOrderInfo = async () => {
      await axios
        .get(`http://localhost:8000/api/order/getOne/${orderId}`)
        .then((res) => setOrderinfo(res.data.orderExists))
        .catch((err) => console.log("error", err));
    };

    getOrderInfo();
  });

  const createdDate = new Date(orderInfo.createdAt);
  const createDateformatted = createdDate.toLocaleString();

  return (
    <>
      <div className="flex bg-indigo-300 h-[100vh] font-Nunito">
        <SideNav />
        <div className="AllUser p-10  space-y-8 shadow-xl  back h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
          <div className="flex justify-center">
            <h1 className="text-black text-xl font-bold ">Order Info</h1>
          </div>
          <main className="h-[85%] w-[100%] flex justify-center items-center">
          <section className=" w-[700px] flex bg-white">
            <div className="h-[350px] w-[500px] overflow-hidden  rounded-md">
              <img
                className="h-[350px] w-[300px] object-cover"
                src="/images/modelfont.jpg"
              />
            </div>
            <div className="ProductInfo--description flex flex-col  overflow-scroll h-[350px] w-[500px]">
              <div className="italic font-Sans font-extrabold text-2xl uppercase mt-1">
                {orderInfo.productName}
              </div>
              <div className="mt-2 text-md opacity-80 font-Inter">
                Price : Rs {orderInfo.productPrice}
              </div>
              <div className="mt-2 text-md opacity-80 font-Inter">
                Ordered By : {orderInfo.userName}
              </div>
              <div className=" border-t-[1px] my-4 w-[100%]"></div>
              <article className="space-y-5 text-left">
                <div>
                  <span className="opacity-70 ">color : </span>
                  {orderInfo.productColour}
                </div>
                <div>
                  <span className="opacity-70 ">Size : </span>
                  {orderInfo.productSize}
                </div>
                <div>
                  <span className="opacity-70 ">For : </span>
                  {orderInfo.buyerGender}
                </div>
                <div>
                  <span className="opacity-70 ">Type : </span>
                  {orderInfo.productSection}
                </div>
                <div>
                  <span className="opacity-70 ">Ordered At : </span>
                  {createDateformatted}
                </div>
              </article>
            </div>
          </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
