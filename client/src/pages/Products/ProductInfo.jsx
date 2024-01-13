import SecondaryHeader from "../../components/Header/SecondaryHeader";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { IoLeafOutline } from "react-icons/io5";
import { TbGift } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductInfo = () => {
  const { id, productSection } = useParams();
  const [userBuy, setUserBuy] = useState({
    buyerGender: "",
    productColour: "",
    productSize: "",
  });
  const [productInfo, setProductInfo] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/Add/${productSection}/${id}`
        );
        setProductInfo(response.data[productSection.toLowerCase() + "Exists"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, productSection]);

  let aboutProduct = productInfo.productDescription?.map((items) => (
    <ul key={items.id} className="ProductInfo--productAbout mt-2">
      <li> • {items.descriptions}</li>
    </ul>
  ));

  let orderHandler = (objectName, objectValue) => {
    setUserBuy((userBuy) => {
      return {
        ...userBuy,
        [objectName]: objectValue,
      };
    });
  };

  return (
    <div className="h-[85vh] mt-[90px]" key={productInfo._id}>
      <SecondaryHeader />

      <div className=" flex items-center h-[85vh] justify-center">
        <div className="h-[550px] w-[400px] overflow-hidden  bg-gray-400 rounded-md">
          <LazyLoadImage
            className="h-[550px] w-[400px] object-cover"
            src="/images/modelfont.jpg"
          />
        </div>
        <div className="ProductInfo--description flex flex-col  items-start  overflow-scroll ml-10 h-[550px] w-[1000px] ">
          <div className="italic font-Sans font-extrabold text-2xl uppercase mt-1">
            {productInfo.productName}{" "}
          </div>
          <div className="mt-2 text-xl opacity-80 font-Inter">
            Rs {productInfo.productPrice}
          </div>
          <div className=" border-t-[1px] my-4 w-[100%]"></div>
          <div>
            <span className="">
              <span className="opacity-70 ">Gender : </span>
              {userBuy.buyerGender}
            </span>
          </div>
          <div className="flex space-x-2 mt-4 ml-1">
            <div
              className={`${
                userBuy.buyerGender === "Men"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  px-5 py-3 flex justify-center items-center rounded-2xl cursor-pointer`}
              onClick={() => orderHandler("buyerGender", "Men")}
            >
              Men&apos;s
            </div>
            <div
              className={`${
                userBuy.buyerGender === "Women"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  px-5 py-3 flex justify-center items-center rounded-2xl cursor-pointer`}
              onClick={() => orderHandler("buyerGender", "Women")}
            >
              Women&apos;s
            </div>
          </div>
          <div className="mt-4">
            <span className="opacity-70 ">Colour :</span>{" "}
            {userBuy.productColour}{" "}
            <div className="flex space-x-2 mt-4 ml-1">
              <div
                className={`${
                  userBuy.productColour === "Red" && "outline outline-2"
                }  px-1 py-1  rounded-[50%]`}
                onClick={() => orderHandler("productColour", "Red")}
              >
                <div className=" h-5 w-5 bg-red-500  rounded-[50%] cursor-pointer px-3 py-3"></div>
              </div>
              <div
                className={`${
                  userBuy.productColour === "Green" && "outline outline-2"
                } px-1 py-1  rounded-[50%]`}
                onClick={() => orderHandler("productColour", "Green")}
              >
                <div className=" h-5 w-5 bg-green-500  rounded-[50%] cursor-pointer px-3 py-3"></div>
              </div>
              <div
                className={`${
                  userBuy.productColour === "Blue" && "outline outline-2"
                } px-1 py-1  rounded-[50%]`}
                onClick={() => orderHandler("productColour", "Blue")}
              >
                <div className=" h-5 w-5 bg-blue-500  rounded-[50%] cursor-pointer px-3 py-3"></div>
              </div>
              <div
                className={`${
                  userBuy.productColour === "Orange" && "outline outline-2"
                } px-1 py-1  rounded-[50%]`}
                onClick={() => orderHandler("productColour", "Orange")}
              >
                <div className=" h-5 w-5 bg-orange-500  rounded-[50%] cursor-pointer px-3 py-3"></div>
              </div>
              <div
                className={`${
                  userBuy.productColour === "Purple" && "outline outline-2"
                }  px-1 py-1  rounded-[50%]`}
                onClick={() => orderHandler("productColour", "Purple")}
              >
                <div className=" h-5 w-5 bg-purple-500  rounded-[50%] cursor-pointer px-3 py-3"></div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <span className="opacity-70 ">Size : </span> {userBuy.productSize}{" "}
          </div>
          <div className="flex space-x-2 ml-1">
            <div
              className={`${
                userBuy.productSize === "XS"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "XS")}
            >
              XS
            </div>
            <div
              className={`${
                userBuy.productSize === "M"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "M")}
            >
              M
            </div>
            <div
              className={`${
                userBuy.productSize === "L"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "L")}
            >
              L
            </div>
            <div
              className={`${
                userBuy.productSize === "XL"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "XL")}
            >
              XL
            </div>
            <div
              className={`${
                userBuy.productSize === "2XL"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "2XL")}
            >
              2XL
            </div>
            <div
              className={`${
                userBuy.productSize === "3XL"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "3XL")}
            >
              3XL
            </div>
            <div
              className={`${
                userBuy.productSize === "4XL"
                  ? "outline outline-2 "
                  : "outline outline-1 outline-gray-300"
              }  border-black px-5 py-3 rounded-2xl  cursor-pointer`}
              onClick={() => orderHandler("productSize", "4XL")}
            >
              4XL
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <div className="px-6 py-4 bg-purple-500 text-white font-semibold font-Inter w-[300px] text-center rounded-2xl text-[14px] cursor-pointer">
              Add to Bag
            </div>
            <div className="relative ">
              {" "}
              <div
                className="px-6 py-4 text-white font-semibold font-Inter w-[300px] text-center rounded-2xl text-sm cursor-pointer"
                style={{ backgroundColor: "#60BB47" }}
              >
                Buy with <span className="text-md">Esewa</span>
              </div>
              {/* <img
                className="absolute h-10 w-10 top-1 right-[80px]"
                src={Esewa}
              /> */}
            </div>
          </div>
          <div className=" border-t-[1px] mt-6 w-[100%]"></div>
          <div className="w-[600px] text-Inter mt-5">
            <div className="font-Inter font-semibold ">
              Things to know about the product
            </div>
            {aboutProduct}
          </div>

          <div className="mt-4 space-y-2">
            {(productInfo.productFeature?.fastShip ||
              productInfo.productFeature?.freeReturn ||
              productInfo.productFeature?.ecoFriendly ||
              productInfo.productFeature?.perfectGift) && (
              <div className="font-Inter font-semibold ">
                Feature provide through product
              </div>
            )}

            {productInfo.productFeature?.fastShip && (
              <div className=" flex space-x-2 items-center ">
                <GrDeliver className="h-6 w-6 ml-1" />
                <span className="font-Inter text-sm opacity-80">
                  Fast shipping
                </span>
              </div>
            )}
            {productInfo.productFeature?.freeReturn && (
              <div className=" flex space-x-2 items-center">
                <PiKeyReturnDuotone className="h-7 w-7" />
                <span className="font-Inter text-sm opacity-80">
                  Free returns{" "}
                </span>
              </div>
            )}
            {productInfo.productFeature?.ecoFriendly && (
              <div className=" flex space-x-2 items-center">
                <IoLeafOutline className="h-7 w-7" />
                <span className="font-Inter text-sm opacity-80">
                  Eco-friendly{" "}
                </span>
              </div>
            )}
            {productInfo.productFeature?.perfectGift && (
              <div className=" flex space-x-2 items-center">
                <TbGift className="h-7 w-7" />
                <span className="font-Inter text-sm opacity-80">
                  Perfect to gift
                </span>
              </div>
            )}
          </div>
          <div className=" border-t-[1px] my-4 w-[100%]"></div>
          {/* comments */}
          <div className="">
            <div className="font-Inter font-semibold mb-1">Comment</div>
            <div>No comments yet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
