import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
// import SecondaryHeader from "./components/Header/SecondaryHeader";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/Brands/BrandInfo" element={<ProductInfo />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
