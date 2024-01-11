import AccessoriesProducts from "../../components/Accessories/AccessoriesProducts";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

const FestivalsCollection = () => {
  const [showCat, setShowCat] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [products, setProducts] = useState([]);

  const [filterData, setFilterData] = useState({
    category: "Others",
    brand: "Others",
  });

  let catHandler = () => {
    setShowCat(!showCat);
  };

  let brandHandler = () => {
    setShowBrand(!showBrand);
  };

  let filterHandler = (event) => {
    setFilterData((filterData) => {
      return {
        ...filterData,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/Add/Accessories"
        );
        setProducts(res.data.accessoriesdata);
      } catch (err) {
        console.log((err) => {
          console.log("error", err);
        });
      }
    };

    const fetchDataTimer = () => {
      fetchData();
      const interval = setInterval(fetchData, 30000);

      // console.log("data fetched");
      return () => clearInterval(interval);
    };

    fetchDataTimer();
  }, []);

  let AccessoriesItem = products
    .filter((item) => {
      if (filterData.category === "Others" && filterData.brand === "Others") {
        return item;
      } else {
        return (
          item.productCategory === filterData.category &&
          item.productBrand === filterData.brand
        );
      }
    })
    .map((product) => {
      console.log(product);
      return <AccessoriesProducts key={product._id} product={product} />;
    });

  return (
    <div className="h-[100vh]">
      <SecondaryHeader />
      <div>
        <div
          className="uppercase italic font-extrabold font-Sans text-3xl w-[100%] text-center py-5  mt-[95px]"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          Festival
        </div>
        <div className="flex">
          <div className="sticky w-[25%] h-[100%] px-14 ml-4 bg-white  left-0 top-[10vh]">
            <div className="flex items-center mt-10">
              {" "}
              <RxMixerHorizontal className="mr-2 h-5 w-5 " />
              <span className="font-Nunito">Filters</span>
            </div>
            <div className=" border-t-[1px] mt-8 w-[100%]"></div>
            <div className="mt-5">
              <div className="flex justify-between items-center font-Nunito font-bold">
                Products{" "}
                <div
                  className="Footer--GiveawayEnter h-6 w-6 bg-gray-300 cursor-pointer rounded-[50%] flex justify-center items-center text-blackshadow-xl"
                  onClick={catHandler}
                >
                  {" "}
                  {showCat === true ? (
                    <IoIosArrowUp className="text-[12px]" />
                  ) : (
                    <IoIosArrowDown className="text-[12px]" />
                  )}
                </div>
              </div>
              {showCat && (
                <div className="mt-4 space-y-1 font-Nunito">
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      id="pants"
                      value="Pants"
                      checked={filterData.category === "Pants"}
                      onChange={filterHandler}
                      name="category"
                    />
                    <label htmlFor="pants">Pants</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Shirts"
                      id="shirts"
                      onChange={filterHandler}
                      checked={filterData.category === "Shirts"}
                      name="category"
                    />
                    <label htmlFor="shirts">Shirts</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Coats"
                      id="coats"
                      onChange={filterHandler}
                      checked={filterData.category === "Coats"}
                      name="category"
                    />
                    <label htmlFor="coats">Coats</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Sweathers"
                      id="sweathers"
                      onChange={filterHandler}
                      checked={filterData.category === "Sweathers"}
                      name="category"
                    />
                    <label htmlFor="sweathers">Sweathers</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Others"
                      id="others"
                      onChange={filterHandler}
                      checked={filterData.category === "Others"}
                      name="category"
                    />
                    <label htmlFor="others">Others</label>
                  </div>
                </div>
              )}
            </div>
            <div className=" border-t-[1px] mt-5 w-[100%]"></div>
            <div className="mt-5">
              <div className="flex justify-between items-center font-Nunito font-bold">
                Brand{" "}
                <div
                  className="Footer--GiveawayEnter h-6 w-6 bg-gray-300 cursor-pointer rounded-[50%] flex justify-center items-center text-blackshadow-xl"
                  onClick={brandHandler}
                >
                  {" "}
                  {showBrand === true ? (
                    <IoIosArrowUp className="text-[12px]" />
                  ) : (
                    <IoIosArrowDown className="text-[12px]" />
                  )}
                </div>
              </div>
              {showBrand && (
                <div className="mt-4 space-y-1 font-Nunito">
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      id="Aadarsha"
                      value="Aadarsha"
                      checked={filterData.brand === "Aadarsha"}
                      onChange={filterHandler}
                      name="brand"
                    />
                    <label htmlFor="Aadarsha">Aadarsha</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Saundarya"
                      id="Saundarya"
                      onChange={filterHandler}
                      checked={filterData.brand === "Saundarya"}
                      name="brand"
                    />
                    <label htmlFor="Saundarya">Saundarya</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Aalur"
                      id="Aalur"
                      onChange={filterHandler}
                      checked={filterData.brand === "Aalur"}
                      name="brand"
                    />
                    <label htmlFor="Aalur">Aalur</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Others"
                      id="other"
                      onChange={filterHandler}
                      checked={filterData.brand === "Others"}
                      name="brand"
                    />
                    <label htmlFor="other">Others</label>
                  </div>
                </div>
              )}
            </div>
            <div className=" border-t-[1px] mt-5 w-[100%]"></div>
          </div>
          <div className=" Collection--scrollhide content-center w-[75%] pb-10 text-left">
            {AccessoriesItem.length !== 0 ? (
              <div className=" flex flex-wrap justify-around gap-x-10">
                {AccessoriesItem}
              </div>
            ) : (
              <div className="h-[80vh] flex justify-center items-center ">
                No such product added
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalsCollection;
