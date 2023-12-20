import PopularItems from "../components/PopularItems"

const Popular = () => {
 
  return (
    <div className="px-16 my-12">
      <div className="uppercase text-3xl italic font-extrabold font-Sans">Popular Now</div>
      <section className="flex space-x-5 ">
        <PopularItems/>
        <PopularItems/>
        <PopularItems/>
        <PopularItems/>
        <PopularItems/>
        <PopularItems/>
      </section>
    </div>
  )
}

export default Popular
