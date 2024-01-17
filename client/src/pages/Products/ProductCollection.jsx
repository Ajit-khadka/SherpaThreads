import AccessoriesProducts from "../../components/Accessories/Products";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const AccessoriesCollection = () => {
  const { section } = useParams();
  const [showCat, setShowCat] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  if (
    section != "Accessories" &&
    section != "Brands" &&
    section != "Festivals" &&
    section != "Themes"
  ) {
    navigate("/err");
  }

  const getUser = async () => {
    try {
      await axios.get("http://localhost:8000/login", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
      navigate("/err");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(section.toLowerCase() + "data");

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
        const res = await axios.get(`http://localhost:8000/api/Add/${section}`);
        setProducts(res.data[section.toLowerCase() + "data"]);
      } catch (err) {
        console.log((err) => {
          console.log("error", err);
        });
      }
    };

    fetchData();
  }, [section]);

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
      // console.log(items)
      return <AccessoriesProducts key={product._id} product={product} />;
    });

  //Renders

  let options = "";

  if (section === "Accessories") {
    options = (
      <>
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
            Products{" "}
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
                  id="Socks"
                  value="Socks"
                  checked={filterData.brand === "Socks"}
                  onChange={filterHandler}
                  name="brand"
                />
                <label htmlFor="Socks">Socks</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="Stickers"
                  id="Stickers"
                  onChange={filterHandler}
                  checked={filterData.brand === "Stickers"}
                  name="brand"
                />
                <label htmlFor="Stickers">Stickers</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="WallArts"
                  id="WallArts"
                  onChange={filterHandler}
                  checked={filterData.brand === "WallArts"}
                  name="brand"
                />
                <label htmlFor="WallArts">WallArts</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="Blankets"
                  id="Blankets"
                  onChange={filterHandler}
                  checked={filterData.brand === "Blankets"}
                  name="brand"
                />
                <label htmlFor="Blankets">Blankets</label>
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
      </>
    );
  } else if (section === "Brands") {
    options = (
      <>
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
      </>
    );
  } else if (section === "Festivals") {
    options = (
      <>
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
                  id="dhakaTopi"
                  value="DhakaTopi"
                  checked={filterData.category === "DhakaTopi"}
                  onChange={filterHandler}
                  name="category"
                />
                <label htmlFor="dhakaTopi">Dhaka Topi</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="DauraSuruwal"
                  id="dauraSuruwal"
                  onChange={filterHandler}
                  checked={filterData.category === "DauraSuruwal"}
                  name="category"
                />
                <label htmlFor="dauraSuruwal">Daura Suruwal</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="GunyuCholo"
                  id="gunyuCholo"
                  onChange={filterHandler}
                  checked={filterData.category === "GunyuCholo"}
                  name="category"
                />
                <label htmlFor="gunyuCholo">Gunyu Cholo</label>
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
      </>
    );
  } else {
    options = (
      <>
        <div className="mt-5">
          <div className="flex justify-between items-center font-Nunito font-bold">
            Themes{" "}
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
                  id="holiday"
                  value="Holiday"
                  checked={filterData.category === "Holiday"}
                  onChange={filterHandler}
                  name="category"
                />
                <label htmlFor="holiday">Holiday</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="Working"
                  id="working"
                  onChange={filterHandler}
                  checked={filterData.category === "Working"}
                  name="category"
                />
                <label htmlFor="working">Working</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="Party"
                  id="party"
                  onChange={filterHandler}
                  checked={filterData.category === "Party"}
                  name="category"
                />
                <label htmlFor="party">Party</label>
              </div>
              <div className="space-x-1 ">
                <input
                  type="radio"
                  value="Beach"
                  id="beach"
                  onChange={filterHandler}
                  checked={filterData.category === "Beach"}
                  name="category"
                />
                <label htmlFor="beach">Beach</label>
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
      </>
    );
  }

  return (
    <div className="h-[100vh]">
      <SecondaryHeader />
      <div>
        <div
          className="uppercase italic font-extrabold font-Sans text-3xl w-[100%] text-center py-5 mt-[95px]"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          {section}
        </div>
        <div className="flex">
          <div className="sticky w-[25%] h-[100%] px-14 ml-4 bg-white  left-0 top-[10vh]">
            <div className="flex items-center mt-10">
              {" "}
              <RxMixerHorizontal className="mr-2 h-5 w-5 " />
              <span className="font-Nunito">Filters</span>
            </div>
            <div className=" border-t-[1px] mt-8 w-[100%]"></div>
            {options}
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
      <Footer />
    </div>
  );
};

export default AccessoriesCollection;
