import AdminLand from "../AdminLand";
import AdminTheme from "../AdminTheme";
import AdminFestiv from "../AdminFestiv";
import AdminBrand from "../AdminBrand";
import AdminUser from "../AdminUser";
import Order from "../../Order/Order";
import AllAcces from "../Acessories/AllAcces";
import UpdateAcces from "../Acessories/UpdateAcces";
import CreateAcces from "../Acessories/CreateAcces";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="Dashboard" element={<AdminLand />} />
        <Route path="/Add/Accessories" element={<AllAcces />} />
        <Route path="/Add/Accessories/create" element={<CreateAcces />} />
        <Route path="/Add/Accessories/update/:id" element={<UpdateAcces />} />
        <Route path="/Add/Brands" element={<AdminBrand />} />
        <Route path="/Add/Festivals" element={<AdminFestiv />} />
        <Route path="/Add/Theme" element={<AdminTheme />} />
        <Route path="/All/Users" element={<AdminUser />} />
        <Route path="/Orders" element={<Order />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
