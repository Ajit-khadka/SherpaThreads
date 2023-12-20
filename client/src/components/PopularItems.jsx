import { useState } from "react";
import { GrFavorite } from "react-icons/gr";

const PopularItems = () => {
    const [quickBag , setQuickBag] = useState(false)

    const mouseOverHandler = () => {
      setQuickBag(true);
    }
  
    const mouseOutHandler = () => {
      setQuickBag(false);
    }

  return (
    <div>
      <div className="h-[500px] w-[302px]  overflow-hidden mt-12"  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
          <div className="h-[400px] w-[300px] relative  rounded-md overflow-hidden" >
            <img className="max-w-[100%] max-h-[100%] object-cover" src="/images/modelfont.jpg" alt="products"/>
            <div className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-4 right-4 shadow-xl"><GrFavorite className="cursor-pointer"/></div>
            { quickBag && (<div className="Popularitems--quickbag py-4 px-1 w-[110px] bg-purple-500 font-Sans font-semibold flex items-center justify-center text-[12px] rounded-2xl text-white bottom-4 right-4 absolute">+ Quick Bag</div>)}
          </div>
          <div className="text-md font-Inter font-semibold mt-5">Kunuyo luga</div>
          <div className="opacity-[80%] font-Inter text-md mt-1">Rs 5000</div>
        </div>
    </div>
  )
}

export default PopularItems
