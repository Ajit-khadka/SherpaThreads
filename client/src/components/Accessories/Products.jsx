import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AccessoriesProducts = (props) => {
  const [quickBag, setQuickBag] = useState(false);
  // const [frontImage, setFrontImage] = useState(true);
  // const [backImage, setBackImage] = useState(false);
  const [quickBagAnime, setQuickBagAnime] = useState(false);

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
            <div className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-4 right-4 shadow-xl">
              <GrFavorite className="cursor-pointer" />
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

AccessoriesProducts.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    fontImg: PropTypes.string,
    backImg: PropTypes.string,
    productSection: PropTypes.string,
    productName: PropTypes.string,
    productPrice: PropTypes.number,
    _id: PropTypes.string,
  }),
};

export default AccessoriesProducts;
