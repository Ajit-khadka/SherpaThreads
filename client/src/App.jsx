import "./App.css";
import MainHeader from "./pages/MainHeader";
import Home from "./pages/Home";
import Error from './pages/Error'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<MainHeader/>} >
      <Route index element={<Home/>} />
      <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
  );
};

export default App;
