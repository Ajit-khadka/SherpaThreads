import { useEffect, useState } from "react";
import SideNav from "../../../components/SideNavAdmin/SideNav";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { IoLeafOutline } from "react-icons/io5";
import { TbGift } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateAcces = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newDescription, setDescription] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: 0,
    productCategory: "Others",
    productBrand: "Others",
    productDescription: [],
    productFeature: {
      fastShip: false,
      ecoFriendly: false,
      freeReturn: false,
      perfectGift: false,
    },
    productImages: [],
  });

  useEffect(() => {
    const checkExists = async () => {
      try {
        await axios
          .get(`http://localhost:8000/api/Add/Accessories/${id}`)
          .then((res) => setProductData(res.data.accessoriesExists))
          .catch((err) => console.log("error", err));
      } catch (err) {
        console.log("error", err);
      }
    };
    checkExists();
  }, [id]);

  let addDescription = () => {
    if (newDescription.trim() !== "" && newDescription.length > 0) {
      setProductData((prevProductData) => ({
        ...prevProductData,
        productDescription: [
          ...prevProductData.productDescription,
          { id: uuidv4(), descriptions: newDescription },
        ],
      }));
      setDescription("");
    } else {
      toast.error("Please fill up all the data", { position: "bottom-left" });
    }
  };

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

  let handleFeatureChange = (freatureName) => {
    setProductData((prevProductData) => {
      return {
        ...prevProductData,
        productFeature: {
          ...prevProductData.productFeature,
          [freatureName]: !prevProductData.productFeature[freatureName],
        },
      };
    });
  };

  let formHandler = (event) => {
    const { name, value } = event.target;
    setProductData((prevproductData) => {
      return {
        ...prevproductData,
        [name]: value,
      };
    });
  };

  let imageHandler = (event) => {
    if (productData.productImages.length < 2) {
      setProductData((prevProductData) => {
        return {
          ...prevProductData,
          productImages: [
            ...prevProductData.productImages,
            { id: uuidv4(), [event.target.name]: event.target.files },
          ],
        };
      });
    } else {
      toast.error("You can upload a maximum of 2 images.", {
        position: "bottom-left",
      });
    }
  };

  // let deleteImg = (id) => {
  //   setProductData((prevProductData) => ({
  //     ...prevProductData,
  //     productImages: productData.productImages.filter(
  //       (items) => items.id !== id
  //     ),
  //   }));
  // };

  // let imageRender = productData.productImages.map((image) => (
  //   <div
  //     key={image.id}
  //     style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
  //   >
  //     <RxCross2
  //       className="mr-4 text-red-500 cursor-pointer"
  //       onClick={() => deleteImg(image.id)}
  //     />
  //     <img
  //       src={URL.createObjectURL(image.Image)}
  //       alt={`Product Image ${image.id}`}
  //       style={{ maxWidth: "200px", maxHeight: "200px", marginRight: "30px" }}
  //     />
  //   </div>
  // ));

  let productDataHandler = async (e) => {
    e.preventDefault();
    if (productData.productDescription.length > 0) {
      await axios
        .post(
          `http://localhost:8000/api/Add/Accessories/update/${id}`,
          productData
        )
        .then((res) => {
          toast.success(res.data.msg, { position: "bottom-left" });
          navigate("/Add/Accessories");
        })
        .catch((err) => console.log("error", err));
    } else {
      toast.error("Please fill up all the data", { position: "bottom-left" });
    }
  };

  return (
    <div className="flex bg-indigo-300 h-[100vh] font-Nunito">
      <SideNav />
      <div className="AllUser p-10 space-y-8 shadow-xl bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
        <h1 className="text-black text-xl font-bold text-center mb-5">
          Add Accessories
        </h1>
        <div className="">
          <form className="space-y-8" onSubmit={productDataHandler}>
            <div className="flex items-center justify-left">
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
            <div className="flex items-center justify-left">
              <label className="w-[200px] " htmlFor="product_price">
                Product Price
              </label>
              <input
                placeholder="e.g. 500"
                type="number"
                id="product_price"
                name="productPrice"
                step="any"
                min={0}
                value={productData.productPrice}
                onChange={formHandler}
                className="bg-gray-50  border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                required
              />
            </div>
            <div className="flex items-center justify-left">
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
            <section className="flex">
              <label htmlFor="product_Brand" className="w-[200px]">
                Product Brand
              </label>
              <select
                id="product_Brand"
                onChange={formHandler}
                value={productData.productBrand}
                name="productBrand"
                className="w-[100px] border-2 rounded-md border-black p-1"
              >
                <option value="Aadarsha">Aadarsha</option>
                <option value="Saundarya">Saundarya</option>
                <option value="Aalur">Aalur</option>
                <option value="Others">Others</option>
              </select>
            </section>
            <section className="flex">
              <label htmlFor="product_Brand" className="w-[200px]">
                Product Category
              </label>
              <select
                id="product_Category"
                onChange={formHandler}
                value={productData.productCategory}
                name="productCategory"
                className="w-[100px] border-2 rounded-md border-black p-1"
              >
                <option value="Anime">Anime</option>
                <option value="Cartoon">Cartoon</option>
                <option value="Movie">Movie</option>
                <option value="Others">Others</option>
              </select>
            </section>

            <section className="">
              <div className="flex">
                <div className="w-[200px] ">Product Features</div>
                <div className="space-y-4">
                  <div className="flex">
                    <input
                      className="mr-2 cursor-pointer"
                      type="checkbox"
                      id="fast_shipping"
                      checked={productData.productFeature.fastShip}
                      onChange={() => handleFeatureChange("fastShip")}
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
                      className="mr-2 cursor-pointer"
                      type="checkbox"
                      id="perfect_gift"
                      checked={productData.productFeature.perfectGift}
                      onChange={() => handleFeatureChange("perfectGift")}
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
                      className="mr-2 cursor-pointer"
                      type="checkbox"
                      id="eco_friendly"
                      checked={productData.productFeature.ecoFriendly}
                      onChange={() => handleFeatureChange("ecoFriendly")}
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
                      className="mr-2 cursor-pointer "
                      type="checkbox"
                      id="free_gift"
                      checked={productData.productFeature.freeReturn}
                      onChange={() => handleFeatureChange("freeReturn")}
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
              </div>
            </section>
            <div className="flex items-center justify-left">
              <label className="w-[200px] " htmlFor="product_img">
                Upload Image
              </label>
              <div className="space-y-4">
                <span>(Try to use Potrait Images)</span>
                <div className="flex">
                  <input
                    className="w-[300px]"
                    type="file"
                    accept="image/*"
                    multiple
                    required
                    id="product_img"
                    name="Image"
                    onChange={imageHandler}
                  />
                </div>
                {/* <div className=" flex">{imageRender}</div> */}
              </div>
            </div>
            <div className="flex justify-left">
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

export default UpdateAcces;
