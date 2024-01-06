import SideNav from "../../components/SideNavAdmin/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import "./AllUsers/AdminUser.css";

const AdminUser = () => {
  const [users, setUser] = useState([]);

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
        toast.success(res.data.msg, { position: "bottom-center" });
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
        <td data-th="Action">
          <button
            className=" text-xl"
            onClick={() => deleteUser(user._id)}
          >
            <MdDelete />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex bg-indigo-300 h-[100vh] w-[100vw] font-Nunito ">
      <SideNav />

      <div className=" p-10 text-center space-y-8 shadow-xl  border bg-white h-[95vh] w-[100%] my-4 mr-4 rounded-tr-xl rounded-br-xl overflow-y-scroll">
        <div className="container">
          <h1 className="text-black text-xl mb-5 font-bold">User Accounts</h1>
          <table className="rwd-table">
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
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
