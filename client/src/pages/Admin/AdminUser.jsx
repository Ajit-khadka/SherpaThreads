import SideNav from "../../components/SideNavAdmin/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import "./AllUsers/AdminUser.css";

const AdminUser = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const userFetch = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/All/Users");
        // console.log(res.data.userdata);
        setUser(res.data.userdata);
      } catch (err) {
        console.log("Error", err);
      }
    };

    userFetch();
  }, []);

  const deleteUser = async (id) => {
    // console.log(id);
    await axios
      .delete(`http://localhost:8000/api/All/Users/removeOne/${id}`)
      .then((res) => {
        setUser((prevUser) => prevUser.filter((user) => user._id !== id));
        toast.success(res.data.msg, { position: "bottom-left" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let allUsers = users.map((user, index) => {
    return (
      <tr key={user._id} className="">
        <td data-th="S.No">{index + 1}</td>
        <td data-th="Username">{user.userName}</td>
        <td data-th="Email">{user.email}</td>
        <td data-th="Account">{user.createdAt}</td>
        <td data-th="Action" className="">
          <button className=" text-xl" onClick={() => deleteUser(user._id)}>
            <MdDelete />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex bg-indigo-300 h-[100vh] w-[100vw] font-Nunito ">
      <SideNav />

      <div className="AllUser p-10 text-center space-y-8 shadow-xl  border bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
        <div className="container">
          <h1 className="text-black text-xl font-bold mb-5">User Accounts</h1>

          <div className="flex justify-center w-[100%] mb-7">
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
          {users.length > 0 ? (
            <table className="rwd-table border-2 border-red-500 w-[100%]">
              <tbody className="">
                <tr>
                  <th>S.No.</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Account created</th>
                  <th>Action</th>
                </tr>
                {allUsers}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center items-center w-[100%] h-[450px]">
              <div>No user Account created</div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
