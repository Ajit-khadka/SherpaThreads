import OnlineStore from "/images/ShoppingFeatures/onlineStore.png";
import BestSeller from "/images/ShoppingFeatures/bestSeller.png";
import BudgetFriendly from "/images/ShoppingFeatures/budgetFriendly.png";
import FreeDelivery from "/images/ShoppingFeatures/freeDelivery.png";

const Slogan = () => {
  return (
    <div className="Slogan-Container my-14 overflow-hidden">
      <div className="Slogans-Holder w-[100%] bg-purple-400  flex flex-wrap items-center justify-around ">
        <div className="slogan-IconContainer  flex justify-center flex-col text-center">
          <img
            className="slogan-Icon mx-auto block"
            src={OnlineStore}
          />
          <div className="slogan-description uppercase font-Sans font-extrabold text-white italic mt-4">
            Dream Online Store
          </div>
        </div>
        <div className="slogan-IconContainer flex justify-center flex-col text-center">
          <img
            className="slogan-Icon mx-auto block"
            src={BestSeller}
          />
          <div className="slogan-description uppercase font-Sans font-extrabold text-white italic mt-4">
            Best Seller website
          </div>
        </div>
        <div className="slogan-IconContainer flex justify-center flex-col text-center">
          <img
            className="slogan-Icon mx-auto block"
            src={BudgetFriendly}
          />
          <div className="slogan-description uppercase font-Sans font-extrabold text-white italic mt-4">
            budget Friendly
          </div>
        </div>
        <div className="slogan-IconContainer flex justify-center flex-col text-center">
          <img
            className="slogan-Icon mx-auto block"
            src={FreeDelivery}
          />
          <div className="slogan-description uppercase font-Sans font-extrabold text-white italic mt-4">
            Free Delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
