import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdFavorite } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Products = (props) => {
  const [quickBag, setQuickBag] = useState(false);
  // const [frontImage, setFrontImage] = useState(true);
  // const [backImage, setBackImage] = useState(false);
  const [quickBagAnime, setQuickBagAnime] = useState(false);
  const [fav, setFav] = useState(false);
  const [favorites, setFavorites] = useState({
    userName: "",
    userId: "",
    productName: "",
    productId: "",
    productSection: "",
    productPrice: "",
    productImage: [],
    favCondition: fav,
  });


  useEffect(() => {
    const getFavCondition = async () => {
      try {
        console.log("product id", props.product._id);
        // console.log("user id", favorites.userId);
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
        productImage: props.product.productImages,
        user: props.user.userName,
        userId: props.user.userId,
        favCondition: !fav,
      };
    });

    getFavCondition();
  }, []);

  let favHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setFav((prevFav) => !prevFav);

    await axios
      .post("http://localhost:8000/api/addfavorite", favorites)
      .then((res) => toast.success(res.data.msg, { position: "bottom-left" }))
      .catch((err) => console.log("error products", err));
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
                } Popularitems--quickBagIntro py-4 px-1 w-[110px] bg-purple-500 font-Sans font-semibold flex items-center justify-center text-[12px] rounded-2xl text-white bottom-4 right-4 absolute`}
              >
                + Quick Bag
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
    userName: PropTypes.string,
    userId: PropTypes.string,
  }),
};

export default Products;
