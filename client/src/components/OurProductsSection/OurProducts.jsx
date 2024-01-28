import OurItems from "./OurItems";
import OtherProducts from "../../data/OtherProducts";

const OurProducts = () => {
  //Mapping data from OtherProducts,js
  let products = OtherProducts.map((items) => {
    return <OurItems key={items.id} items={items} />;
  });

  return (
    <div className="mb-12">
      <div className="global-text uppercase italic font-extrabold font-Sans global-padding mb-12">
        Our Products
      </div>
      <section className="items--ourProduct flex gap-5 ourproducts-padding flex-wrap ">
        {products}
      </section>
    </div>
  );
};

export default OurProducts;
