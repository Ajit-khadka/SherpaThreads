import AdminLand from "../AdminLand";
import AdminUser from "../AllUsers/AdminUser";
import Order from "../../Order/Order";
import AllAcces from "../AdminProducts/AllProducts";
import UpdateAcces from "../AdminProducts/UpdateProducts";
import CreateAcces from "../AdminProducts/CreateProducts";
import AdminLogin from "../AdminLogin";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<AdminLogin />} />
        <Route path="Dashboard" element={<AdminLand />} />
        <Route path="/All/Users" element={<AdminUser />} />
        <Route path="/Add/:section" element={<AllAcces />} />
        <Route path="/Add/:section/create" element={<CreateAcces />} />
        <Route path="/Add/:section/update/:id" element={<UpdateAcces />} />
        <Route path="/GiveAway" element={<Order />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
