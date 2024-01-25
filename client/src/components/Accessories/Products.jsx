import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdFavorite } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import QuickBagModel from "../QuickBag/QuickBagModel";

const Products = (props) => {
  const [quickBag, setQuickBag] = useState(false);
  // const [frontImage, setFrontImage] = useState(true);
  // const [backImage, setBackImage] = useState(false);
  const [quickBagAnime, setQuickBagAnime] = useState(false);
  const [fav, setFav] = useState(false);
  const [bag, setBag] = useState(false);
  const [quickModal, setQuickModal] = useState(false);
  const [orderBag, setorderBag] = useState({
    productName: props.product.productName,
    productId: props.product._id,
    productSection: props.product.productSection,
    productPrice: props.product.productPrice,
    productImages: props.product.productImages,
    userName: props.user.user,
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
            `http://localhost:8000/api/getFav/${props.product._id}/${props.user.userId}`
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
        productName: props.product.productName,
        productId: props.product._id,
        productSection: props.product.productSection,
        productPrice: props.product.productPrice,
        productImages: props.product.productImages,
        userName: props.user.user,
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
            `http://localhost:8000/api/getOrder/${props.product._id}/${props.user.userId}`
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

  useEffect(() => {
    console.log("Updated orderBag:", orderBag);
  }, [orderBag]);

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

  // console.log(props.product);

  return (
    <div className="">
      {quickModal && (
        <QuickBagModel
          close={() => setQuickModal(false)}
          quickBagHandler={quickBagHandler}
          product={props.product}
        />
      )}
      <div
        className="h-[480px] w-[302px]  overflow-hidden mt-12 cursor-pointer"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <Link
          to={`/collection/${props.product.productSection}/${props.product._id}`}
        >
          <div
            className="h-[400px] w-[300px] relative  rounded-md overflow-hidden"
            // onMouseOver={onImageHandler}
            // onMouseOut={outImageHandler}
          >
            <LazyLoadImage
              className="max-w-[100%] max-h-[100%] object-cover"
              src={`/images/modelfont.jpg`}
              alt="products"
            />

            {/* {frontImage && (
              <img
                className="max-w-[100%] max-h-[100%] object-cover"
                src={`/images/modelfont.jpg`}
                alt="products"
              />
            )}
            
            {backImage && (
              <img
                className={` ${
                  backImage && "PopularItems--ImagefadeIntro"
                }  max-w-[100%] max-h-[100%] object-cover `}
                src={`/images/modelback.jpg`}
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
          {props.product.productName}
        </div>
        <div className="opacity-[80%] font-Inter text-md mt-1">
          Rs{" " + props.product.productPrice}
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    fontImg: PropTypes.string,
    backImg: PropTypes.string,
    productSection: PropTypes.string,
    productName: PropTypes.string,
    productPrice: PropTypes.number,
    _id: PropTypes.string,
    productImages: PropTypes.array,
  }),
  user: PropTypes.shape({
    user: PropTypes.string,
    userId: PropTypes.string,
  }),
};

export default Products;
