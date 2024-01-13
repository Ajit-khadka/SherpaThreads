import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Accessories from "../../data/CategoryData/Accessories";
import Brands from "../../data/CategoryData/Brands";
import Festival from "../../data/CategoryData/Festival";
import Themes from "../../data/CategoryData/Themes";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeaderExtra = (props) => {
  const [navSelection, setNavSelection] = useState([]);
  // console.log(props.navName);
  const navigate = useNavigate();

  useEffect(() => {
    // Use useEffect to set navSelection based on props.navName
    if (props.navName === "Accessories") {
      setNavSelection(Accessories);
    } else if (props.navName === "Brands") {
      setNavSelection(Brands);
    } else if (props.navName === "Festivals") {
      setNavSelection(Festival);
    } else if (props.navName === "Themes") {
      setNavSelection(Themes);
    }
  }, [props.navName]);

  const data = navSelection.map((item) => {
    return (
      <div className="text-center space-y-2 cursor-pointer" key={item.id}>
        <LazyLoadImage
          className="h-[200px] w-[200px] object-cover rounded-md "
          src={`/images/NavImages/${item.AccessImg}`}
        />
        <div className="text-md ">{item.name}</div>
      </div>
    );
  });

  let clickPrevent = (event) => {
    event.stopPropagation();
  };

  let navigationHandler = () => {
    props.close();
    navigate(`/collection/${props.navName}`);
  };

  return (
    <div className="" onClick={props.close}>
      <div
        onClick={(event) => clickPrevent(event)}
        className={` ${
          props.open
            ? "Header--AnimateIntro fixed"
            : "Header--AnimateExit absolute"
        } h-[300px] border-t-[1px]  top-[95px] left-0 w-[100%] z-0 bg-white `}
      >
        <section className="text-black  w-[100%] h-[100%] flex justify-evenly items-center">
          <article
            className="font-Nunito font-bold space-x-8 flex  h-[220px]"
            onClick={navigationHandler}
          >
            {data}
          </article>
        </section>
      </div>
    </div>
  );
};

HeaderExtra.propTypes = {
  open: propTypes.bool,
  close: propTypes.func,
  navName: propTypes.string,
  type: propTypes.string,
};

export default HeaderExtra;
