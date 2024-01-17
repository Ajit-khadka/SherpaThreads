import SideNav from "../../../components/SideNavAdmin/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import "../AllUsers/AdminUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const AllAccess = () => {
  const { section } = useParams();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userFetch = async () => {
      if (
        section != "Accessories" &&
        section != "Brands" &&
        section != "Festivals" &&
        section != "Themes"
      ) {
        navigate("/err");
      }
      try {
        const res = await axios.get(`http://localhost:8000/api/Add/${section}`);
        // console.log(res.data.userdata);
        setProduct(res.data[section.toLowerCase() + "data"]);
      } catch (err) {
        console.log("Error", err);
      }
    };

    userFetch();
  }, [section]);

  const deleteUser = async (id) => {
    // console.log(id);
    await axios
      .delete(`http://localhost:8000/api/Add/${section}/remove/${id}`)
      .then((res) => {
        setProduct((prevProduct) =>
          prevProduct.filter((item) => item._id !== id)
        );
        toast.success(res.data.msg, { position: "bottom-left" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let allProduct = product
    .filter((items) => {
      return search === ""
        ? items
        : items.productName.toLowerCase().includes(search.toLowerCase());
    })
    .map((items, index) => {
      const createdDate = new Date(items.createdAt);
      const createDateformatted = createdDate.toLocaleString();

      const updatedDate = new Date(items.updatedAt);
      const updateDateformatted = updatedDate.toLocaleString();

      return (
        <tr key={items._id} className="">
          <td data-th="P.No">{index + 1}</td>
          <td data-th="Product Name">{items.productName}</td>
          <td data-th="Product Price">{items.productPrice}</td>
          <td data-th="Created At">{createDateformatted}</td>
          <td data-th="Updated At">{updateDateformatted}</td>
          <td data-th="Action" className="">
            <div className="flex items-center space-x-4">
              <div className="w-[20px] ">
                <Link
                  className=""
                  to={`/Admin/Add/${section}/update/${items._id}`}
                >
                  {" "}
                  <MdEdit className="text-xl text-blue-500" />
                </Link>
              </div>

              <button
                className=" text-xl "
                onClick={() => deleteUser(items._id)}
              >
                <MdDelete className="text-red-500" />
              </button>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <div className="flex bg-indigo-300 h-[100vh] w-[100vw] font-Nunito ">
      <SideNav />

      <div className="AllUser p-10 text-center space-y-8 shadow-xl  border bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
        <div className="container">
          <h1 className="text-black text-xl font-bold mb-5">{section}</h1>

          <div className="flex justify-center w-[100%] mb-7">
            <div className="wrapper flex space-x-5">
              <Link
                className="px-3 text-white w-[200px] rounded-3xl flex items-center justify-center"
                style={{ background: "#428bca" }}
                to={`/Admin/Add/${section}/create`}
              >
                Add Product
              </Link>
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
                  <th>Product Name</th>
                  <th>Product Price (Rupees)</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Action</th>
                </tr>
                {allProduct}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center items-center w-[100%] h-[450px]">
              <div>No Product created</div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAccess;
