import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/Products/ProductInfo";
import AccessoriesCollection from "./pages/Products/AccessoriesCollection";
import BrandsCollection from "./pages/Products/BrandsCollection";
import FestivalsCollection from "./pages/Products/FestivalsCollection";
// import SecondaryHeader from "./components/Header/SecondaryHeader";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/collection/Accessories" element={<AccessoriesCollection />} />
      <Route path="/collection/Brands" element={<BrandsCollection />} />
      <Route path="/collection/Festivals" element={<FestivalsCollection />} />
      <Route path="/collection/ProductInfo" element={<ProductInfo />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
