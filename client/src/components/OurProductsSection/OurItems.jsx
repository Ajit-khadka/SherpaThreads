import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PropTypes } from "prop-types";
import {Link} from 'react-router-dom'

const OurItems = (props) => {
  const [popupIcon, setPopupIcon] = useState(false);
  const [iconAnimate, setIconAnimate] = useState(false);

  //Icon popup on hover
  let onIconHandler = () => {
    setPopupIcon(true);
    setIconAnimate(true);
  };

  let OutIconHandler = () => {
    setIconAnimate(false);
  };

  return (
    <>
    <Link to={`/collection/${props.items.type}`}>
    <div className="h-[450px] w-[450px] overflow-hidden rounded-md">
      <div
        className=" OurItems--Products  relative cursor-pointer"
        onMouseOver={onIconHandler}
        onMouseOut={OutIconHandler}
      >
        <img
          className="h-[450px] w-[450px] object-cover rounded-md "
          src={`/images/${props.items.ourProductImg}`}
        />
        <div className=" absolute bottom-12 left-10 flex font-Inter font-extrabold text-xl uppercase italic text-white items-center  ">
          {props.items.type}{" "}
          {popupIcon && (
            <span
              className={`${
                iconAnimate ? "OutItems--IconIntro" : "OutItems--IconExit"
              } h-10 w-10 rounded-[50%] bg-white flex items-center justify-center shadow-xl ml-4`}
            >
              <IoIosArrowForward className=" text-black text-md" />
            </span>
          )}
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

OurItems.propTypes = {
  items: PropTypes.shape({
    ourProductImg: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default OurItems;
