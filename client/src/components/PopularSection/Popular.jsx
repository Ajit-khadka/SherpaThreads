import PopularItems from "./PopularItems";
import PopularNow from "../../data/PopularNow";

const Popular = () => {

  //mapping data from PopularNow.js
  let popularItem = PopularNow.map((items) => {
    // console.log(items)
    return <PopularItems key={items.id} items={items} />;
  });

  return (
    <div className=" my-12 border-2 border-red-500 ">
      <div className="uppercase text-3xl italic font-extrabold font-Sans px-16">
        Popular Now
      </div>
      <section className="Popular--ScrollSection flex space-x-5 overflow-x-scroll pl-16 pr-16">
        {popularItem}
      </section>
    </div>
  );
};

export default Popular;
