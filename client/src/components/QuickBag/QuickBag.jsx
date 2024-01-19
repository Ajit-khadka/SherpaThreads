import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const QuickBag = (props) => {
  const [ShowOrder, setShowOrder] = useState([]);

  useEffect(() => {
    let getOrders = async () => {
      await axios
        .get(`http://localhost:8000/api/order/getAll/${props.userData?._id}`)
        .then((res) => setShowOrder(res.data.orderdata))
        .catch((err) => console.log("error", err));
    };

    let interval = setInterval(getOrders, 1000);

    return () => clearInterval(interval);
  }, [props.userData?._id]);

  let orderHandler = async (event, productId, userId) => {
    event.preventDefault();
    event.stopPropagation();

    await axios
      .delete(`http://localhost:8000/api/removeorder/${productId}/${userId}`)
      .then((res) => {
        setShowOrder((prevShoworder) => {
          return prevShoworder.filter(
            (order) => order.productId !== productId || order.userId !== userId
          );
        });
        toast.success(res.data.msg, { position: "bottom-left" });
      })
      .catch((err) => console.log("error products", err));

    // window.location.reload()
  };

  let order = ShowOrder.map((order) => {
    return (
      <div
        // to={`/collection/${order.productSection}/${order.productId}`}
        key={order._id}
      >
        <div className="h-[150px] w-[100px] rounded-md overflow-hidden relative">
          <img
            className="object-cover  h-[150px] w-[100px]"
            src="/images/festival.jpg"
          />

          <div
            className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-1 right-1 shadow-xl"
            onClick={(event) =>
              orderHandler(event, order.productId, order.userId)
            }
          >
            <IoCloseSharp className="cursor-pointer  text-[18px] text-red-500" />
          </div>
        </div>
      </div>
    );
  });

  if (props.open === false) return null;

  return (
    <div
      className="h-[100%] w-[100%] fixed bg-black bg-opacity-40 z-20 top-0 left-0 "
      onClick={props.close}
    >
      <div
        className="h-[92vh] w-[650px] bg-white rounded-xl absolute top-7 right-5 px-5 py-3"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="w-[100%] flex justify-end">
          <IoCloseSharp
            className="h-6 w-6 cursor-pointer"
            onClick={props.close}
          />
        </div>
        {ShowOrder.length === 0 ? (
          <div className="h-[95%] w-[100%] flex flex-col justify-center items-center ">
            <IoBagHandleOutline className="text-4xl" />
            <div className="text-xl  font-Sans font-extrabold italic uppercase mt-3">
              your bag is empty
            </div>
          </div>
        ) : (
          <>
            <div className="text-2xl  font-Sans font-extrabold italic uppercase">your Orders</div>
            <div className="ProductInfo--description flex h-[560px] gap-5 justify-center flex-wrap overflow-y-scroll my-4 w-[100%] border border-black p-2 rounded-xl border-opacity-20">
              {order}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

QuickBag.propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool,
  userData: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default QuickBag;
