import propTypes from "prop-types";
import Favorites from "./Favorites";

const Profile = (props) => {
  // console.log("from",props.userData)

  const logOut = () => {
    window.open("http:///localhost:8000/logout", "_self");
  };

  return (
    <div className="">
      <div className="flex justify-center flex-col w-[100%] items-center ">
        <div className=" h-20 rounded-[50%] bg-white border-[1px] border-black border-opacity-20 overflow-hidden mt-5 w-20">
          <img className="" src={props.userData?.profileImage} />
        </div>

        <div className=" mt-3 font-Inter font-semibold">
          {props.userData?.userName}
        </div>
        <div className=" mt-1 font-Inter text-sm">{props.userData?.email}</div>
        <div
          onClick={logOut}
          className="uppercase py-3 text-center w-[100%] font-bold text-[12px] bg-white text-black rounded-md font-Inter mt-3 tracking-widest cursor-pointer border-[1px] border-black text-opacity-80"
        >
          log out
        </div>
      </div>
      <div className="mt-3">
        <Favorites />
      </div>
    </div>
  );
};

Profile.propTypes = {
  userData: propTypes.shape({
    profileImage: propTypes.string,
    userName: propTypes.string,
    email: propTypes.string,
  }),
};

export default Profile;
