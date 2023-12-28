import Popular from "../components/PopularSection/Popular";
import OtherProducts from "../components/OurProductsSection/OurProducts";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import BackImages from "../data/BackImages";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  //Mapping data from BackImages.js
  let info = BackImages.map((items) => {
    return <HomeSlider key={items.id} item={items} />;
  });
  return (
    <div className="">
      <div className="">
        <section className="">{info} </section>
      </div>
      <Popular />
      <OtherProducts />
      <Slogan />
      <Footer />
    </div>
  );
};

export default Home;
