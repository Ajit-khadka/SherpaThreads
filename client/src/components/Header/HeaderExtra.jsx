import propTypes from "prop-types";

const HeaderExtra = (props) => {
  // console.log(props.open);

  let clickPrevent = (event) => {
    event.stopPropagation();
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
      ></div>
    </div>
  );
};

HeaderExtra.propTypes = {
  open: propTypes.bool,
  close: propTypes.func,
};

export default HeaderExtra;
