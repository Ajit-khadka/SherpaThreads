import { FaArrowRight } from "react-icons/fa6";
// import axios from "axios";
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  const [Showfav, setShowFav] = useState([]);
  useEffect(() => {
    let getFavs = async () => {
      await axios
        .get(`http://localhost:8000/api/favorite/getAll/${props.user?._id}`)
        .then((res) => setShowFav(res.data.favdata))
        .catch((err) => console.log("error", err));
    };

    getFavs();
  }, [props.user?._id]);

  let favHandler = async (event, productId, userId) => {
    event.preventDefault();
    event.stopPropagation();

    await axios
      .delete(`http://localhost:8000/api/removeFav/${productId}/${userId}`)
      .then((res) => {
        setShowFav((prevShowfav) => {
          return prevShowfav.filter(
            (fav) => fav.productId !== productId || fav.userId !== userId
          );
        });
        toast.success(res.data.msg, { position: "bottom-left" });
      })
      .catch((err) => console.log("error products", err));
  };

  let favorite = Showfav.map((favorite) => {
    return (
      <Link
        to={`/collection/${favorite.productSection}/${favorite.productId}`}
        key={favorite._id}
      >
        <div className="h-[150px] w-[100px] rounded-md overflow-hidden border border-red-500 relative">
          <img
            className="object-cover  h-[150px] w-[100px]"
            src="/images/festival.jpg"
          />

          <div
            className="h-8 w-8 bg-white rounded-[50%] text-md absolute flex items-center justify-center top-1 right-1 shadow-xl"
            onClick={(event) =>
              favHandler(event, favorite.productId, favorite.userId)
            }
          >
            <MdFavorite className="cursor-pointer  text-[18px] text-red-500" />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="h-[100%] ">
      <div className="relative flex items-center justify-start">
        <div className="text-xl font-inter font-bold">Favorites</div>
        <div className="Footer--GiveawayEnter h-5 w-5 bg-gray-300 absolute cursor-pointer rounded-[50%] flex justify-center items-center text-black left-[90px] top-2 shadow-xl">
          {" "}
          <FaArrowRight className="text-[10px]" />
        </div>
      </div>
      {/* <div className="border-[1px] w-[100%] h-40 rounded-md mt-4 border-black border-opacity-20 flex justify-center items-center opacity-80">
        Login to see your favorites
      </div>{" "} */}
      <div className="ProductInfo--description flex h-[340px] gap-5 justify-center flex-wrap overflow-y-scroll my-4 w-[100%]">
        {favorite}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default Favorites;
