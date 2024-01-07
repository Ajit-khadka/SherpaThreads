import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/Products/ProductInfo";
import AccessoriesCollection from "./pages/Products/AccessoriesCollection";
import BrandsCollection from "./pages/Products/BrandsCollection";
import FestivalsCollection from "./pages/Products/FestivalsCollection";
import AdminLand from "./pages/Admin/AdminLand";
import AdminAcces from "./pages/Admin/AdminAcces";
import AdminTheme from "./pages/Admin/AdminTheme";
import AdminFestiv from "./pages/Admin/AdminFestiv";
import AdminBrand from "./pages/Admin/AdminBrand";
import AdminUser from "./pages/Admin/AdminUser";
import Order from "./pages/Order/Order"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/collection/Accessories"
        element={<AccessoriesCollection />}
      />
      <Route path="/collection/Brands" element={<BrandsCollection />} />
      <Route path="/collection/Festivals" element={<FestivalsCollection />} />
      <Route path="/collection/ProductInfo" element={<ProductInfo />} />
      <Route path="/Admin" element={<AdminLand />} />
      <Route path="*" element={<Error />} />

      <Route path="/Admin" element={<AdminLand />} />
      <Route path="/Add/Accessories" element={<AdminAcces />} />
      <Route path="/Add/Brands" element={<AdminBrand />} />
      <Route path="/Add/Festivals" element={<AdminFestiv />} />
      <Route path="/Add/Theme" element={<AdminTheme />} />
      <Route path="/All/Users" element={<AdminUser />} />
      <Route path="/Orders" element={<Order />} />
    </Routes>
  );
};

export default App;
