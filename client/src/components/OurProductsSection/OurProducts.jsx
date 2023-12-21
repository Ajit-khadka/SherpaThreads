import OurItems from './OurItems'
import OtherProducts from '../../data/OtherProducts'

const OurProducts = () => {

  //Mapping data from OtherProducts,js
  let products = OtherProducts.map((items) => {
    return (<OurItems key={items.id} items={items}/>)
  })
  
  return (
    <div className="mb-12">
      <div className="uppercase text-3xl italic font-extrabold font-Sans px-16 mb-12">
        Our Products
      </div>
      <section className="flex space-x-5 pl-16 pr-16 ">
        {products}
      </section>
    </div>
  );
};

export default OurProducts;
