
import Header from "../components/Header";
import Popular from "../components/PopularSection/Popular";
import OtherProducts from "../components/OurProductsSection/OurProducts";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div className="">
      <section><Header/></section>
     
      <Popular />
      <OtherProducts/>
      <Slogan/>
      <Footer/>
    </div>
  )
}

export default Home
