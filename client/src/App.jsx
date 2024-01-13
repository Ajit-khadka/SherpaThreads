import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/Products/ProductInfo";
import AccessoriesCollection from "./pages/Products/AccessoriesCollection";
import { Suspense, lazy } from "react";

const AdminRoutes = lazy(() => import("./pages/Admin/AdminRoute/AdminRoutes"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/collection/:section" element={<AccessoriesCollection />} />
      <Route path="/collection/:productSection/:id" element={<ProductInfo />} />
      <Route path="*" element={<Error />} />

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
    </Routes>
  );
};

export default App;
