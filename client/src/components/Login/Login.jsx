import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";

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
        className="h-[92vh] w-[400px] bg-white rounded-xl absolute top-7 left-5 px-5 py-5"
        onClick={(event) => clickPrevent(event)}
      >
        <div className="w-[100%] flex justify-between ">
          <div>Welcome</div>
          <div>
            <IoCloseSharp
              className="h-6 w-6 cursor-pointer"
              onClick={props.close}
            />
          </div>
        </div>
        <div>
          Discover a host of exclusive features, your personalized shopping
          experience awaits you!
        </div>
        <form>
          <input
            className="border-[1px] border-black"
            placeholder="E-mail"
          ></input>
          <div className="uppercase">Get Login Code</div>
          <div>OR</div>
          <div className="uppercase flex items-center">
            <FcGoogle className="mr-2" /> Sign in with google
          </div>
          <div>
            By signing in, you agree to{" "}
            <span className="underline">privacy policy</span> and{" "}
            <span className="underline">terms of service</span>
          </div>
        </form>
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
