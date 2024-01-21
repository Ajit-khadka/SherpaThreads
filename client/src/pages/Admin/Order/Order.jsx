import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import "../AllUsers/AdminUser.css";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";

const Order = () => {
  const [product, setProduct] = useState([]);
  // console.log(product);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getOrder = async () => {
      await axios
        .get("http://localhost:8000/api/order/deliver")
        .then((res) => {
          setProduct(res.data.orderdata);
        })
        .catch((err) => console.log("error", err));
    };

    let interval = setInterval(getOrder, 500);

    return () => clearInterval(interval);
  }, []);

  const deleteUser = async (productId, orderId, orderid) => {
    // console.log(id);
    await axios
      .delete(`http://localhost:8000/api/removeOrder/${productId}/${orderId}`)
      .then((res) => {
        setProduct((prevProduct) =>
          prevProduct.filter((item) => item._id !== orderid)
        );
        toast.success(res.data.msg, { position: "bottom-left" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let allProduct = product
    .filter((order) => {
      return search === ""
        ? order
        : order.productName.toLowerCase().includes(search.toLowerCase());
    })
    .map((order, index) => {
      const createdDate = new Date(order.createdAt);
      const createDateformatted = createdDate.toLocaleString();

      return (
        <tr key={order._id} className="">
          <td data-th="P.No">{index + 1}</td>
          <td data-th="Ordered By">{order.userName}</td>
          <td data-th="Product Name">{order.productName}</td>
          <td data-th="Product Price">{order.productPrice}</td>
          <td data-th="Ordered At">{createDateformatted}</td>
          <td data-th="Action" className="">
            <div className="flex item-center space-x-4">
              <div className="w-[20px] ">
                <Link
                  className=""
                  to={`/Admin/Dashboard/orderInfo/${order._id}`}
                >
                  {" "}
                  <GrContactInfo className="text-xl text-blue-500" />
                </Link>
              </div>

              <button
                className=" text-xl "
                onClick={() =>
                  deleteUser(order.productId, order.userId, order._id)
                }
              >
                <MdDelete className="text-red-500" />
              </button>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <main>
      <div className="text-xl font-bold mb-5">Avaiable orders</div>

      <div className="container">
        <div className="flex justify-center w-[100%] mb-7">
          <div className="wrapper flex space-x-5">
            <div className="searchBar ">
              <input
                className=" placeholder-white text-white"
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFFF"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {product.length > 0 ? (
          <table className="rwd-table border-2 border-red-500 w-[100%]">
            <tbody className="">
              <tr>
                <th>P.No.</th>
                <th>Ordered By</th>
                <th>Product Name</th>
                <th>Product Price (Rupees)</th>
                <th>Ordered At</th>
                <th>Action</th>
              </tr>
              {allProduct}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center w-[100%] h-[300px]">
            <div>No Orders Yet</div>{" "}
          </div>
        )}
      </div>
    </main>
  );
};

export default Order;
