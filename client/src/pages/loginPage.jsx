import { FcGoogle } from "react-icons/fc";
import Favorites from "../components/Profile/Favorites";

const Login = () => {
  //returning null to Header
  // console.log(props.userData);

  //login
  // console.log("userdata", userData);
  const loginwithGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  return (
    <div className="h-[100%] w-[100%] fixed bg-black bg-opacity-40 z-20 top-0 left-0 ">
      <img
        className="h-[100vh] w-[100vw] object-cover"
        src="/images/backLoginImage.png"
      ></img>
      <div
        className="login--Page bg-white rounded-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-5 py-3 shadow-xl overflow-hidden overflow-y-scroll "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="w-[100%] flex justify-between items-center">
          <div className="text-xl font-inter font-bold "> Welcome to SherpaThreads</div>
        </div>

        <div>
          <div className="text-xl font-Inter font-bold mt-4">
            Discover a host of exclusive features, personalized shopping
            experience awaits you!
          </div>
          <form>
            <input
              className="border-[1px] border-black mt-5 border-opacity-40 rounded-md w-[100%] py-3 px-3"
              placeholder="E-mail"
            ></input>
            <div className="uppercase py-3 text-center w-[100%] font-bold text-[12px] bg-black text-white rounded-md font-Inter mt-3 tracking-widest cursor-pointer">
              Get Login Code
            </div>
            <div className="text-center font-Inter font-bold my-3 opacity-60">
              OR
            </div>
            <div
              onClick={loginwithGoogle}
              className="flex items-center justify-center uppercase py-3  w-[100%] font-bold text-[12px] bg-white text-black rounded-md font-Inter mt-3 tracking-widest border-[1px] border-black border-opacity-20 opacity-80 cursor-pointer"
            >
              <FcGoogle className="mr-2 text-xl" /> Sign in with google
            </div>
            <div className="my-4 text-center opacity-60">
              By signing in, you agree to{" "}
              <span className="underline cursor-pointer">privacy policy</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">terms of service</span>
            </div>
          </form>
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default Login;
