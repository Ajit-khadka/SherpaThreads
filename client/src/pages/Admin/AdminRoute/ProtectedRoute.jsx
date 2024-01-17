import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    return <Navigate to={"/admin"} />;
  }
};

ProtectedRoute.propTypes = {
  user: PropTypes.bool,
  children: PropTypes.node
};

export default ProtectedRoute;
