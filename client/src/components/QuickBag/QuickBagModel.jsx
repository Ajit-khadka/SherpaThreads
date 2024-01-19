import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const QuickBagModel = (props) => {
  const [userBuy, setUserBuy] = useState({
    buyerGender: "Men",
    productColour: "Red",
    productSize: "M",
  });

  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };

  let orderHandler = (objectName, objectValue) => {
    setUserBuy((userBuy) => {
      return {
        ...userBuy,
        [objectName]: objectValue,
      };
    });
  };

  let quickOrder = (event) => {
    props.quickBagHandler(event, userBuy);
    props.close();
  };

  return (
    <>
      <div
        className="h-[100%] w-[100%] fixed bg-black bg-opacity-40 z-20 top-0 left-0 "
        onClick={props.close}
      >
        <div
          className="h-[520px] w-[600px] bg-white rounded-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-5 py-3"
          onClick={handleOverlayClick}
        >
          <div className="flex justify-end">
            <IoCloseSharp
              className="h-6 w-6 cursor-pointer "
              onClick={props.close}
            />
          </div>
          <section>
            <div className="italic font-Sans font-extrabold text-2xl uppercase mt-1">
              {props.product.productName}
            </div>
            <div className="mt-2 text-xl opacity-80 font-Inter">
              Rs {props.product.productPrice}
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
            <div className=" border-t-[1px] my-4 w-[100%]"></div>
            <div
              className="px-3 py-3 bg-purple-500 text-white font-semibold font-Inter w-[250px] text-center rounded-2xl text-[14px] cursor-pointer m-auto"
              onClick={quickOrder}
            >
              Add to Bag
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

QuickBagModel.propTypes = {
  close: PropTypes.func,
  quickBagHandler: PropTypes.func,
  product: PropTypes.shape({
    productName: PropTypes.string,
    productPrice: PropTypes.number,
  }),
};

export default QuickBagModel;
