import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import toast from "react-hot-toast";
import QuickBagModel from "../QuickBag/QuickBagModel";

const PopularItems = (props) => {
  const [quickBag, setQuickBag] = useState(false);
  // const [frontImage, setFrontImage] = useState(true);
  // const [backImage, setBackImage] = useState(false);
  const [quickBagAnime, setQuickBagAnime] = useState(false);
  const [fav, setFav] = useState(false);
  const [bag, setBag] = useState(false);
  const [quickModal, setQuickModal] = useState(false);
  const [orderBag, setorderBag] = useState({
    productName: props.items.productName,
    productId: props.items._id,
    productSection: props.items.productSection,
    productPrice: props.items.productPrice,
    productImages: props.items.productImages,
    userName: props.user.userName,
    userId: props.user.userId,
    bagCondition: !bag,
    buyerGender: "",
    productColour: "",
    productSize: "",
  });

  const [favorites, setFavorites] = useState({
    userName: "",
    userId: "",
    productName: "",
    productId: "",
    productSection: "",
    productPrice: "",
    productImages: [],
    favCondition: fav,
  });

  useEffect(() => {
    const getFavCondition = async () => {
      try {
        await axios
          .get(
            `http://localhost:8000/api/getFav/${props.items._id}/${props.user.userId}`
          )
          .then((res) => setFav(res.data.msg))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    setFavorites((prevfav) => {
      return {
        ...prevfav,
        productName: props.items.productName,
        productId: props.items._id,
        productSection: props.items.productSection,
        productPrice: props.items.productPrice,
        productImages: props.items.productImages,
        userName: props.user.userName,
        userId: props.user.userId,
        favCondition: !fav,
      };
    });

    let interval = setInterval(getFavCondition, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getBagCondition = async () => {
      try {
        await axios
          .get(
            `http://localhost:8000/api/getOrder/${props.items._id}/${props.user.userId}`
          )
          .then((res) => {
            setBag(res.data.msg);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    let interval = setInterval(getBagCondition, 1000);

    return () => clearInterval(interval);
  }, []);

  //setting condition if admin dont what to post second image and image toggle on hover
  // const onImageHandler = () => {
  //   if (props.items.backImg == "empty") {
  //     setFrontImage(true);
  //     setBackImage(!frontImage);
  //   } else {
  //     setFrontImage(false);
  //     setBackImage(!frontImage);
  //   }
  // };

  // const outImageHandler = () => {
  //   setFrontImage(true);
  //   setBackImage(!frontImage);
  // };

  //pop up for quick bag
  const mouseOverHandler = () => {
    setQuickBag(true);
    setQuickBagAnime(true);
  };

  const mouseOutHandler = () => {
    setQuickBagAnime(false);
  };

  let favHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setFav((prevFav) => !prevFav);

    await axios
      .post("http://localhost:8000/api/addfavorite", favorites)
      .then((res) => toast.success(res.data.msg, { position: "bottom-left" }))
      .catch((err) => console.log("error products", err));
  };

  let quickBagHandler = async (event, userBuy) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      const updatedOrderBag = { ...orderBag, ...userBuy };

      setorderBag(updatedOrderBag);

      setBag((prevBag) => !prevBag);

      const response = await axios.post(
        "http://localhost:8000/api/addorder",
        updatedOrderBag
      );
      toast.success(response.data.msg, { position: "bottom-left" });
    } catch (error) {
      console.log("Error handling:", error);
    }
  };

  let quickModalHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setQuickModal(true);
  };

  return (
    <div className="">
      {quickModal && (
        <QuickBagModel
          close={() => setQuickModal(false)}
          quickBagHandler={quickBagHandler}
          product={props.items}
        />
      )}
      <div
        className="h-[480px] w-[302px]  overflow-hidden mt-12 cursor-pointer"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <Link
          to={`/collection/${props.items.productSection}/${props.items._id}`}
        >
          <div
            className="h-[400px] w-[300px] relative  rounded-md overflow-hidden"
            // onMouseOver={onImageHandler}
            // onMouseOut={outImageHandler}
          >
            <LazyLoadImage
              className={` max-w-[100%] max-h-[100%] object-cover `}
              src={`/images/modelfont.jpg`}
              alt="products"
            />
            {/* {frontImage && (
              <LazyLoadImage
                className="max-w-[100%] max-h-[100%] object-cover"
                src={`/images/${props.items.fontImg}`}
                alt="products"
              />
            )}
            {backImage && (
              <LazyLoadImage
                className={` ${
                  backImage && "PopularItems--ImagefadeIntro"
                }  max-w-[100%] max-h-[100%] object-cover `}
                src={`/images/${props.items.backImg}`}
                alt="products"
              />
            )}{" "} */}
            <div
              className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-4 right-4 shadow-xl"
              onClick={favHandler}
            >
              {fav ? (
                <MdFavorite className="cursor-pointer  text-[18px] text-red-500" />
              ) : (
                <GrFavorite className="cursor-pointer" />
              )}
            </div>
            {quickBag && (
              <div
                className={`${
                  quickBagAnime
                    ? "Popularitems--quickBagIntro"
                    : "Popularitems--quickBagExit"
                } Popularitems--quickBagIntro py-6 px-1 w-[110px] bg-purple-500 font-Sans font-semibold flex items-center justify-center text-[12px] rounded-2xl text-white bottom-4 right-4 absolute`}
              >
                {bag ? (
                  <span
                    onClick={quickBagHandler}
                    className="absolute py-3 px-3"
                  >
                    - Remove Bag
                  </span>
                ) : (
                  <span
                    onClick={quickModalHandler}
                    className="absolute py-3 px-5"
                  >
                    + Quick Bag
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
        <div className="text-md font-Inter font-semibold mt-5">
          {props.items.productName}
        </div>
        <div className="opacity-[80%] font-Inter text-md mt-1">
          Rs{" " + props.items.productPrice}
        </div>
      </div>
    </div>
  );
};

PopularItems.propTypes = {
  items: PropTypes.shape({
    _id: PropTypes.string,
    fontImg: PropTypes.string,
    backImg: PropTypes.string,
    productName: PropTypes.string,
    productSection: PropTypes.string,
    productPrice: PropTypes.number,
    productImages: PropTypes.array,
  }),
  user: PropTypes.shape({
    userName: PropTypes.string,
    userId: PropTypes.string,
  }),
};

export default PopularItems;
