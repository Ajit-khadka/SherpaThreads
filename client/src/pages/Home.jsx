import BackImages from "../data/BackImages"
import HomeSlider from "../components/HomeSlider";
import Header from "../components/Header";

const Home = () => {
    let info = BackImages.map((items) => {
        return (<HomeSlider key = {items.id} item = {items} />)
    })
  return (
    <div className="">
      
      <section className="">{info} <section className=""><Header/></section> </section>
    </div>
  )
}

export default Home
