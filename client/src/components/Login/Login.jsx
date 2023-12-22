import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import LoginBag from "./LoginBag";

const Login = (props) => {
  //returning null to Header
  if (props.open === false) return null;

  let clickPrevent = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="h-[100%] w-[100%] fixed bg-transparent z-20 top-0 left-0 "
      onClick={props.close}
    >
      <div
        className="h-[92vh] w-[400px] bg-white rounded-xl absolute top-7 left-5 px-5 py-3"
        onClick={(event) => clickPrevent(event)}
      >
        <div className="w-[100%] flex justify-between items-center">
          <div className="text-xl font-inter font-bold">Welcome</div>
          <div>
            <IoCloseSharp
              className="h-6 w-6 cursor-pointer"
              onClick={props.close}
            />
          </div>
        </div>
        <div className="text-xl font-Inter font-bold mt-6">
          Discover a host of exclusive features, personalized shopping
          experience awaits you!
        </div>
        <form>
          <input
            className="border-[1px] border-black mt-5 border-opacity-40 rounded-md w-[100%] py-3 px-3"
            placeholder="E-mail"
          ></input>
          <div className="uppercase py-3 text-center w-[100%] font-bold text-[12px] bg-black text-white rounded-md font-Inter mt-3 tracking-widest cursor-pointer">Get Login Code</div>
          <div className="text-center font-Inter font-bold my-3 opacity-60">OR</div>
          <div className="flex items-center justify-center uppercase py-3  w-[100%] font-bold text-[12px] bg-white text-black rounded-md font-Inter mt-3 tracking-widest border-[1px] border-black border-opacity-20 opacity-80 cursor-pointer">
            <FcGoogle className="mr-2 text-xl" /> Sign in with google
          </div>
          <div className="my-4 text-center opacity-60">
            By signing in, you agree to{" "}
            <span className="underline cursor-pointer">privacy policy</span> and{" "}
            <span className="underline cursor-pointer">terms of service</span>
          </div>
        </form>
        <LoginBag/>
        <div></div>
      </div>
    </div>
  );
};

Login.propTypes = {
  close: PropTypes.bool,
  open: PropTypes.bool,
};

export default Login;
