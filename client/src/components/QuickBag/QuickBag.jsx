import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { IoBagHandleOutline } from "react-icons/io5";

const QuickBag = (props) => {
  if (props.open === false) return null;
  return (
    <div
      className="h-[100%] w-[100%] fixed bg-black bg-opacity-40 z-20 top-0 left-0 "
      onClick={props.close}
    >
      <div className="h-[92vh] w-[650px] bg-white rounded-xl absolute top-7 right-5 px-5 py-3">
        <div className="w-[100%] flex justify-end">
          <IoCloseSharp
            className="h-6 w-6 cursor-pointer"
            onClick={props.close}
          />
        </div>
        <div className="h-[95%] w-[100%] flex flex-col justify-center items-center ">
          <IoBagHandleOutline className="text-4xl" />
          <div className="text-xl  font-Sans font-extrabold italic uppercase mt-3">
            your bag is empty
          </div>
        </div>
      </div>
    </div>
  );
};

QuickBag.propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool,
};

export default QuickBag;
