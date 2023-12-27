import { FaArrowRight } from "react-icons/fa6";

const Favorites = () => {
  return (
    <div className="h-[100%]">
      <div className="relative flex items-center justify-start">
        <div className="text-xl font-inter font-bold">Favorites</div>
        <div className="Footer--GiveawayEnter h-5 w-5 bg-gray-300 absolute cursor-pointer rounded-[50%] flex justify-center items-center text-black left-[90px] top-2 shadow-xl">
          {" "}
          <FaArrowRight className="text-[10px]" />
        </div>
      </div>
      <div className="border-[1px] w-[100%] h-40 rounded-md mt-4 border-black border-opacity-20 flex justify-center items-center opacity-80">Login to see your favorites</div>
    </div>
  );
};

export default Favorites;
