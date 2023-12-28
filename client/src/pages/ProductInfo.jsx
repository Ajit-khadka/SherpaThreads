import SecondaryHeader from "../components/Header/SecondaryHeader";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { IoLeafOutline } from "react-icons/io5";
import { TbGift } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";

const ProductInfo = () => {
  return (
    <div className="h-[100vh]">
      <SecondaryHeader />
      <div className=" flex items-center h-[85vh] justify-center">
        <div className="h-[550px] w-[400px] overflow-hidden  bg-gray-400 rounded-md">
          <img
            className="h-[550px] w-[400px] object-cover"
            src="/images/modelfont.jpg"
          />
        </div>
        <div className="ProductInfo--description flex flex-col  items-start  overflow-scroll ml-10 h-[550px] w-[1000px]">
          <div className="italic font-Sans font-extrabold text-2xl uppercase">
            VINTAGE ELAINE T-SHIRT{" "}
          </div>
          <div className="mt-2 text-xl opacity-80 font-Inter">Rs 5000</div>
          <div className=" border-t-[1px] my-4 w-[100%]"></div>
          <div>
            <span className="opacity-70 ">Gender : </span>
          </div>
          <div className="flex space-x-2 mt-4 ">
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              Men&apos;s
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              Women&apos;s
            </div>
          </div>
          <div className="mt-4">
            <span className="opacity-70 ">Colour :</span>{" "}
          </div>
          <div className="my-4">
            <span className="opacity-70 ">Size : </span>{" "}
          </div>
          <div className="flex space-x-2">
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              XS
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              M
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              L
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              XL
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              2XL
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              3XL
            </div>
            <div className="border-[1px] border-black px-5 py-3 rounded-2xl border-opacity-20 cursor-pointer">
              4XL
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <div className="px-6 py-4 bg-purple-500 text-white font-semibold font-Inter w-[300px] text-center rounded-2xl text-[14px] cursor-pointer">
              Add to Bag
            </div>
            <div className="relative ">
              {" "}
              <div
                className="px-6 py-4 text-white font-semibold font-Inter w-[300px] text-center rounded-2xl text-sm cursor-pointer"
                style={{ backgroundColor: "#60BB47" }}
              >
                Buy with <span className="text-md">Esewa</span>
              </div>
              {/* <img
                className="absolute h-10 w-10 top-1 right-[80px]"
                src={Esewa}
              /> */}
            </div>
          </div>
          <div className=" border-t-[1px] mt-6 w-[100%]"></div>
          <div className="w-[600px] text-Inter mt-5">
            <div className="font-Inter font-semibold ">
              Things to know about the product
            </div>
            <ul className="ProductInfo--productAbout mt-2">
              <li>• Brilliant print quality</li>
              <li>• 100% combed cotton</li>
              <li>• Ethically sourced garment</li>
              <li>• Made-to-order by SherpaThreads</li>
            </ul>
          </div>
          <div className="mt-4 space-y-1">
            <div className=" flex space-x-2 items-center ">
              <GrDeliver className="h-6 w-6 ml-1" />
              <span className="font-Inter text-sm opacity-80">
                Fast shipping
              </span>
            </div>
            <div className=" flex space-x-2 items-center">
              <PiKeyReturnDuotone className="h-7 w-7" />
              <span className="font-Inter text-sm opacity-80">
                Free returns{" "}
              </span>
            </div>
            <div className=" flex space-x-2 items-center">
              <IoLeafOutline className="h-7 w-7" />
              <span className="font-Inter text-sm opacity-80">
                Eco-friendly{" "}
              </span>
            </div>
            <div className=" flex space-x-2 items-center">
              <TbGift className="h-7 w-7" />
              <span className="font-Inter text-sm opacity-80">
                Perfect to gift
              </span>
            </div>
          </div>
          <div className=" border-t-[1px] my-4 w-[100%]"></div>
          <div className="">
            <div className="font-Inter font-semibold mb-1">Comment</div>
            <div>No comments yet</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
