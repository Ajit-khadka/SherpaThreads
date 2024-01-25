import PopularItems from "./PopularItems";
// import PopularNow from "../../data/PopularNow";
import { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios
          .get("http://localhost:8000/login", {
            withCredentials: true,
          })
          .then((res) =>
            setUser({
              userName: res.data.user.userName,
              userId: res.data.user._id,
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/Add/themes`);
        setProducts(res.data.themesdata);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  //mapping data from PopularNow.js
  let popularItem = products.slice(0, 9).map((items) => {
    // console.log(items)
    return <PopularItems key={items._id} items={items} user={user} />;
  });

  let emptyProduct = (
    <div className="h-[350px] flex justify-center items-center w-[100%]">
      No products Available
    </div>
  );

  return (
    <div className=" my-12 ">
      <div className="uppercase text-3xl italic font-extrabold font-Sans px-16">
        Popular Themes
      </div>
      <section className="Popular--ScrollSection flex space-x-5 overflow-x-scroll pl-16 pr-16">
        {products.length > 0 ? popularItem : emptyProduct}
      </section>
    </div>
  );
};

export default Popular;
