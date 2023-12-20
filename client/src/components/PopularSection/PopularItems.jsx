import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import PropTypes from "prop-types";

const PopularItems = (props) => {
  const [quickBag, setQuickBag] = useState(false);
  const [frontImage, setFrontImage] = useState(true);
  const [backImage, setBackImage] = useState(false);
  const [quickBagAnime, setQuickBagAnime] = useState(false);

  //setting condition if admin dont what to post second image and image toggle on hover
  const onImageHandler = () => {
    if (props.items.backImg == "empty") {
      setFrontImage(true);
      setBackImage(false);
    } else {
      setFrontImage(false);
      setBackImage(!frontImage);
    }
  };

  const outImageHandler = () => {
    setFrontImage(true);
    setBackImage(!frontImage);
  };

  //pop up for quick bag
  const mouseOverHandler = () => {
    setQuickBag(true);
    setQuickBagAnime(true);
  };

  const mouseOutHandler = () => {
    setTimeout(setQuickBag(false), 0);
    setQuickBagAnime(false);
  };

  return (
    <div className="">
      <div
        className="h-[480px] w-[302px]  overflow-hidden mt-12 cursor-pointer border-2 border-blue-500"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <div
          className="h-[400px] w-[300px] relative  rounded-md overflow-hidden"
          onMouseOver={onImageHandler}
          onMouseOut={outImageHandler}
        >
          {frontImage && (
            <img
              className="max-w-[100%] max-h-[100%] object-cover"
              src={`/images/${props.items.fontImg}`}
              alt="products"
            />
          )}
          {backImage && (
            <img
              className="PopularItems--Imagefade max-w-[100%] max-h-[100%] object-cover"
              src={`/images/${props.items.backImg}`}
              alt="products"
            />
          )}{" "}
          <div className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-4 right-4 shadow-xl">
            <GrFavorite className="cursor-pointer" />
          </div>
          {quickBag && (
            <div className="Popularitems--quickBagIntro py-4 px-1 w-[110px] bg-purple-500 font-Sans font-semibold flex items-center justify-center text-[12px] rounded-2xl text-white bottom-4 right-4 absolute">
              + Quick Bag
            </div>
          )}
        </div>
        <div className="text-md font-Inter font-semibold mt-5">
          {props.items.name}
        </div>
        <div className="opacity-[80%] font-Inter text-md mt-1">
          Rs{" " + props.items.price}
        </div>
      </div>
    </div>
  );
};

PopularItems.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    fontImg: PropTypes.string,
    backImg: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default PopularItems;
