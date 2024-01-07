import { useState } from "react";
import SideNav from "../../components/SideNavAdmin/SideNav";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { IoLeafOutline } from "react-icons/io5";
import { TbGift } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";

const AdminAcces = () => {
  const [newDescription, setDescription] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDescription: [],
    productFeature: {
      fastShip: false,
      ecoFriendly: false,
      freeReturn: false,
      perfectGift: false,
    },
  });

  console.log(productData);

  let addDescription = () => {
    if(newDescription.trim() !== "")
    setProductData((prevProductData) => ({
      ...prevProductData,
      productDescription: [
        ...prevProductData.productDescription,
        { id: uuidv4(), descriptions: newDescription },
      ],
    }));
    setDescription("");
  };

  // console.log(productData.productDescription);

  let aboutProduct = productData.productDescription.map((items) => (
    <ul key={items.id} className="flex items-center mt-2">
      <RxCross2
        className="mr-4 text-red-500 cursor-pointer"
        onClick={() => deleteDesc(items.id)}
      />
      <div className="mr-2">•</div>
      <li>{items.descriptions}</li>
    </ul>
  ));

  let deleteDesc = (id) => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      productDescription: productData.productDescription.filter(
        (items) => items.id !== id
      ),
    }));
  };

  let formHandler = (event) => {
    const { name, checked, value, type } = event.target;
    setProductData((productData) => {
      return { ...productData, [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <div className="flex bg-indigo-300 h-[100vh] font-Nunito">
      <SideNav />
      <div className=" p-10 space-y-8 shadow-xl bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl">
        <h1 className="text-black text-xl font-bold text-center mb-5">
          Add Accessories
        </h1>
        <div className="">
          <form className="space-y-8">
            <div className="flex items-center justify-center">
              <label className="w-[200px]" htmlFor="product_name">
                Product Name
              </label>
              <input
                placeholder="e.g. Naruto Socks"
                type="text"
                id="product_name"
                name="productName"
                value={productData.productName}
                onChange={formHandler}
                className="bg-gray-50  border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <label className="w-[200px] " htmlFor="product_price">
                Product Price
              </label>
              <input
                placeholder="e.g. 500"
                type="text"
                id="product_price"
                name="productPrice"
                value={productData.productPrice}
                onChange={formHandler}
                className="bg-gray-50  border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <label className="w-[200px] " htmlFor="product_description">
                Product Description
              </label>
              <div>
                <div className="flex space-x-2 items-center relative">
                  <input
                    placeholder="e.g. 100% pure cotton"
                    type="text"
                    id="product_description"
                    name="productDes"
                    value={newDescription}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50   border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  />
                  <IoMdCheckmark
                    className="text-3xl cursor-pointer absolute flex right-2 top-2 text-black z-10 "
                    onClick={addDescription}
                  />
                </div>
                <div className=""> {aboutProduct}</div>
              </div>
            </div>

            <section className="">
              <div className="flex items-center justify-evenly">
                <div className="flex">
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="fast_shipping"
                    checked={productData.productFeature.fastShip}
                    onChange={formHandler}
                    name="fastShip"
                  />
                  <label
                    className="flex items-center space-x-2"
                    htmlFor="fast_shipping"
                  >
                    <GrDeliver className="h-6 w-6 ml-1" />
                    <span>Fast shipping</span>
                  </label>
                </div>
                <div className="flex">
                  {" "}
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="perfect_gift"
                    checked={productData.productFeature.perfectGift}
                    onChange={formHandler}
                    name="perfectGift"
                  />
                  <label
                    className="flex items-center space-x-2"
                    htmlFor="perfect_gift"
                  >
                    {" "}
                    <TbGift className="h-7 w-7" />
                    <span> Perfect to gift</span>
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="eco_friendly"
                    checked={productData.productFeature.ecoFriendly}
                    onChange={formHandler}
                    name="ecoFriendly"
                  />
                  <label
                    className="flex items-center space-x-2"
                    htmlFor="eco_friendly"
                  >
                    <IoLeafOutline className="h-6 w-6 ml-1" />
                    <span> Eco-friendly</span>
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="free_gift"
                    checked={productData.productFeature.freeReturn}
                    onChange={formHandler}
                    name="freeReturn"
                  />
                  <label
                    className="flex items-center space-x-2"
                    htmlFor="free_gift"
                  >
                    <PiKeyReturnDuotone className="h-6 w-6 ml-1" />
                    <span> Free returns</span>
                  </label>
                </div>
              </div>
            </section>
            <div className="flex justify-center">
              <button
                className="px-5 py-2 uppercase text-white rounded-md font-semibold "
                style={{ background: "#428bca" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAcces;
