import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
