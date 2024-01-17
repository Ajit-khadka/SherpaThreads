import AdminLand from "../AdminLand";
import AdminUser from "../AllUsers/AdminUser";
import Order from "../../Order/Order";
import AllAcces from "../AdminProducts/AllProducts";
import UpdateAcces from "../AdminProducts/UpdateProducts";
import CreateAcces from "../AdminProducts/CreateProducts";
import AdminLogin from "../AdminLogin";
import { Route, Routes } from "react-router-dom";
import Error from "../../Error";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      <Routes>
        <Route index element={<AdminLogin login={() => setUser(true)} />} />
        <Route path="*" element={<Error />} />
        <Route
          path="Dashboard"
          element={
            <ProtectedRoute user={user}>
              <AdminLand logout={() => setUser(false)} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/All/Users"
          element={
            <ProtectedRoute user={user}>
              {" "}
              <AdminUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Add/:section"
          element={
            <ProtectedRoute user={user}>
              <AllAcces />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/Add/:section/create"
          element={
            <ProtectedRoute user={user}>
              {" "}
              <CreateAcces />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/Add/:section/update/:id"
          element={
            <ProtectedRoute user={user}>
              <UpdateAcces />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/GiveAway"
          element={
            <ProtectedRoute user={user}>
              <Order />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
