import SideNav from "../../../components/SideNavAdmin/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import "../AllUsers/AdminUser.css";
import { GiPodiumWinner } from "react-icons/gi";
import Popup from "../../../components/VerificationModal/Popup";

const Giveaway = () => {
  const [users, setUser] = useState([]);
  const [win, setWin] = useState([]);
  const [showWinner, setShowWinner] = useState(false);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [verifyDelete, setverifyDelete] = useState(false);

  useEffect(() => {
    const userFetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/giveAway/getAll"
        );
        // console.log(res.data.userdata);
        setUser(res.data.givedata);
      } catch (err) {
        console.log("Error", err);
      }
    };

    userFetch();
  }, []);

  const pickWinner = async () => {
    let random = Math.floor(Math.random() * users.length);
    let winner =
      `${users[random].name}` +
      " is Winner with Phone no : " +
      `${users[random].phone}`;
    setWin(winner);
    setShowWinner(true);
    toast.success("winner is Selected", { position: "bottom-left" });
  };

  useEffect(() => {
    const deleteHandler = async () => {
      if (verifyDelete === true) {
        await axios;
        await axios
          .delete(`http://localhost:8000/api/giveAway/removeAll`)
          .then((res) => {
            setUser([]);
            toast.success(res.data.msg, { position: "bottom-left" });
          })
          .catch((err) => {
            console.log(err);
          });
        setverifyDelete(false);
      }
    };

    deleteHandler();
  }, [verifyDelete]);

  let verifyPopup = () => {
    setShowPopup(true);
  };

  let allUsers = users
    .filter((user) => {
      return search === ""
        ? user
        : user.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((user, index) => {
      const createdDate = new Date(user.createdAt);
      const createDateformatted = createdDate.toLocaleString();

      return (
        <tr key={user._id} className="">
          <td data-th="S.No">{index + 1}</td>
          <td data-th="Username">{user.name}</td>
          <td data-th="Phone">{user.phone}</td>
          <td data-th="Participated on">{createDateformatted}</td>
        </tr>
      );
    });

  return (
    <section>
      {showPopup && (
        <Popup
          close={() => setShowPopup(false)}
          delete={() => setverifyDelete(true)}
        />
      )}
      <div className="flex bg-indigo-300 h-[100vh] w-[100vw] font-Nunito ">
        <SideNav />

        <div className="AllUser p-10 text-center space-y-8 shadow-xl  border bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
          <div className="container">
            <h1 className="text-black text-xl font-bold mb-5">
              GiveAway Section
            </h1>

            <div className="flex justify-center w-[100%] mb-7 space-x-8">
              <div className="wrapper ">
                <div className="searchBar ">
                  <input
                    className=" placeholder-white text-white"
                    id="searchQueryInput"
                    type="text"
                    name="searchQueryInput"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    id="searchQuerySubmit"
                    type="submit"
                    name="searchQuerySubmit"
                  >
                    <svg
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFFF"
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 mb-5">
              <button
                className=" flex justify-center items-center space-x-2"
                onClick={verifyPopup}
              >
                <span className="text-md">Delete All</span>
                <MdDelete className="text-red-500 text-xl" />
              </button>
              <button
                className=" flex justify-center items-center space-x-2"
                onClick={pickWinner}
              >
                <span className="text-md">Pick Winner</span>
                <GiPodiumWinner className="text-red-500 text-xl" />
              </button>
            </div>
            {showWinner && <div className="mb-5">{win}</div>}
            {users.length > 0 ? (
              <table className="rwd-table border-2 border-red-500 w-[100%]">
                <tbody className="">
                  <tr>
                    <th>S.No.</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Participated on</th>
                  </tr>
                  {allUsers}
                </tbody>
              </table>
            ) : (
              <div className="flex justify-center items-center w-[100%] h-[450px]">
                <div>No user participated for Giveaway</div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giveaway;
