import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from 'prop-types'

const AdminLogin = ({login}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let formHandler = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  let LoginHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    await axios
      .post("http://localhost:8000/api/Admin", formData)
      .then((res) => {
        // console.log("check", res);
        if (res.data.msg === "Matched") {
          toast.success("Logged in Successfully", { position: "bottom-left" });
          login()
          navigate("/Admin/Dashboard");
        } else {
          toast.error(res.data.msg, { position: "bottom-left" });
         
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      {" "}
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 font-Nunito">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <form className="md:w-1/3 max-w-sm" onSubmit={LoginHandler}>
          <div className="text-center mb-10">Admin Page Login</div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={formHandler}
            name="email"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={formHandler}
            name="password"
          />

          <div className="text-center md:text-left flex justify-center">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

AdminLogin.propTypes = {
  user: PropTypes.bool,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export default AdminLogin;


