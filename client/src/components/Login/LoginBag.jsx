import { FaArrowRight } from "react-icons/fa6";

const LoginBag = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-start">
        <div className="text-xl font-inter font-bold">Quick Bag</div>
        <div className="Footer--GiveawayEnter h-5 w-5 bg-gray-300 absolute cursor-pointer rounded-[50%] flex justify-center items-center text-black left-[100px] top-2 shadow-xl">
          {" "}
          <FaArrowRight className="text-[10px]" />
        </div>
      </div>
      <div className="border-[1px] w-[100%] h-40 rounded-md mt-4 border-black border-opacity-20 flex justify-center items-center opacity-80">Login to access your bag</div>
    </div>
  );
};

export default LoginBag;
