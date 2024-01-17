import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/Products/ProductInfo";
import ProductCollection from "./pages/Products/ProductCollection";
import { Suspense, lazy, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const AdminRoutes = lazy(() => import("./pages/Admin/AdminRoute/AdminRoutes"));

const App = () => {
  const [userData, setUserData] = useState({});
  const [hideRoute, setHideRoute] = useState(false);

  console.log(userData.role);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/login", {
        withCredentials: true,
      });
      // console.log("response", res);
      setUserData(res.data.user);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        console.log("Bad Request: Invalid parameters");
      }
      return console.log("Axios Error:", err);
    }
  };

  useEffect(() => {
    if (userData.role === "Admin") {
      setHideRoute(true);
    }

    getUser();
  }, [userData.role]);


  //admin route protected
  //order
  //fav
  // popular
  //give away
  //extra feature
  //res

  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Route>
      <Route path="/collection/:section" element={<ProductCollection />} />
      <Route path="/collection/:productSection/:id" element={<ProductInfo />} />
      <Route path="*" element={<Error />} />

      {hideRoute && (
        <Route
          path="Admin/*"
          element={
            <Suspense
              fallback={
                <div
                  className="flex justify-center items-center h-[100vh] w-[100vw]"
                  style={{ background: "#f1f2f3" }}
                >
                  <div className="loadingio-spinner-dual-ball-0at5cijh53fj">
                    <div className="ldio-odtg1yzmetf">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              }
            >
              <AdminRoutes />{" "}
            </Suspense>
          }
        />
      )}
    </Routes>
  );
};

export default App;
