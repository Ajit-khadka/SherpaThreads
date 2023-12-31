import OnlineStore from "/images/ShoppingFeatures/onlineStore.png";
import BestSeller from "/images/ShoppingFeatures/bestSeller.png";
import BudgetFriendly from "/images/ShoppingFeatures/budgetFriendly.png";
import FreeDelivery from "/images/ShoppingFeatures/freeDelivery.png";

const Slogan = () => {
  return (
    <div className="px-16 my-14 overflow-hidden">
      <div className=" h-[35vh] w-[100%] rounded-md bg-purple-400 flex  items-center justify-around ">
        <div className="flex justify-center flex-col text-center">
          <img
            className="h-20 w-20 mx-auto block"
            src={OnlineStore}
          />
          <div className="uppercase font-Sans font-extrabold text-xl text-white italic mt-4">
            Dream Online Store
          </div>
        </div>
        <div className="flex justify-center flex-col text-center">
          <img
            className="h-20 w-20 mx-auto block"
            src={BestSeller}
          />
          <div className="uppercase font-Sans font-extrabold text-xl text-white italic mt-4">
            Best Seller website
          </div>
        </div>
        <div className="flex justify-center flex-col text-center">
          <img
            className="h-20 w-20 mx-auto block"
            src={BudgetFriendly}
          />
          <div className="uppercase font-Sans font-extrabold text-xl text-white italic mt-4">
            budget Friendly
          </div>
        </div>
        <div className="flex justify-center flex-col text-center">
          <img
            className="h-20 w-20 mx-auto block"
            src={FreeDelivery}
          />
          <div className="uppercase font-Sans font-extrabold text-xl text-white italic mt-4">
            Free Delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
