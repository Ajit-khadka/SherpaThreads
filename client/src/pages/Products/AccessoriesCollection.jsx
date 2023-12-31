import AccessoriesProducts from "../../components/Accessories/AccessoriesProducts";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import PopularNow from "../../data/PopularNow";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const AccessoriesCollection = () => {
  const [showCat, setShowCat] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  const [filterData, setFilterData] = useState({
    category: "",
    brand: "",
  });

  console.log(filterData.category);

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

  let popularItem = PopularNow.map((items) => {
    // console.log(items)
    return <AccessoriesProducts key={items.id} items={items} />;
  });

  return (
    <div className="h-[100vh]">
      <SecondaryHeader />
      <div>
        <div
          className="uppercase italic font-extrabold font-Sans text-3xl w-[100%] text-center py-5  mt"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          Accessories
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
                Category{" "}
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
                      id="anime"
                      value="Anime"
                      checked={filterData.category === "Anime"}
                      onChange={filterHandler}
                      name="category"
                    />
                    <label htmlFor="anime">Anime</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Cartoon"
                      id="cartoon"
                      onChange={filterHandler}
                      checked={filterData.category === "Cartoon"}
                      name="category"
                    />
                    <label htmlFor="cartoon">Cartoon</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Movie"
                      id="movie"
                      onChange={filterHandler}
                      checked={filterData.category === "Movie"}
                      name="category"
                    />
                    <label htmlFor="movie">Movie</label>
                  </div>
                  <div className="space-x-1 ">
                    <input
                      type="radio"
                      value="Others"
                      id="other"
                      onChange={filterHandler}
                      checked={filterData.category === "Others"}
                      name="category"
                    />
                    <label htmlFor="other">Others</label>
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
          <div className=" Collection--scrollhide content-center w-[75%] pb-10">
            <div className=" flex flex-wrap justify-around">{popularItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCollection;
