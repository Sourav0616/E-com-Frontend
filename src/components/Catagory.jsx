import mob from "../../public/mob.jpg";
import fas from "../../public/fas.jpg";
import ele from "../../public/ele.jpg";
import gro from "../../public/gro.jpg";
import spo from "../../public/spo.jpg";
import care from "../../public/care.jpg";
import ser from "../../public/ser.png";
import { useSelector , useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { setViewProduct } from "../store/viewproduct.slice.js";
import { useNavigate } from "react-router-dom";
function Catagory() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const catgory = useSelector((state) => state.allProducts.switch);
  const fetch = useSelector((state) => state.allProducts.data);
  const mobile = useSelector((state) => state.allProducts.mobile);
  const electronic = useSelector((state) => state.allProducts.electronic);
  const beauty = useSelector((state) => state.allProducts.beauty);
  const sport = useSelector((state) => state.allProducts.sport);
  const grocery = useSelector((state) => state.allProducts.grocery);
  const fation = useSelector((state) => state.allProducts.fation);

  const [data, setdata] = useState("");

  useEffect(() => {
    const filterData = fetch.filter((item) => item.catagory == catgory);
    if (catgory == "") {
      setdata(fetch);
    } else {
      setdata(filterData);
    }
  }, [catgory]);

  const chMob = (e) => {
    e.preventDefault();
    setdata(mobile);
  };
  const chFa = (e) => {
    e.preventDefault();
    setdata(fation);
  };
  const chGo = (e) => {
    e.preventDefault();
    setdata(grocery);
  };
  const chSp = (e) => {
    e.preventDefault();
    setdata(sport);
  };
  const chBe = (e) => {
    e.preventDefault();
    setdata(beauty);
  };
  const chEl = (e) => {
    e.preventDefault();
    setdata(electronic);
  };

  const setProduct = (e)=>{
    e.preventDefault();
    console.log(e.target.id)
    const find = data.find((item)=> item._id == e.target.id)
    if(!find){
      return;
    }
    console.log(find)
    dispatch (setViewProduct(find))
    navigate("/app/indivisualproduct")
  }

  return (
    <div className="h-[692px] w-[393px] scroll  bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 h-[692px] scroll flex items-center">
        <div className="h-[692px] w-[30%]  flex flex-col justify-between items-center">
          <div className="w-24 h-[7%] mt-2 bg-yellow-100 flex justify-center items-center text-md font-bold rounded-xl">
            All
          </div>
          <div className=" mt-4 bg-yellow-100 w-24 rounded-xl flex  items-center h-[90%] mb-2 overflow-auto scroll flex-col">
            {/* comps */}

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chMob(e)}
            >
              <img
                src={mob}
                alt=""
                className="max-h-16 max-w-16 rounded-full"
              />
              <h1>Mobile</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chFa(e)}
            >
              <img
                src={fas}
                alt=""
                className="max-h-16 max-w-16 rounded-full"
              />
              <h1>Fations</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chEl(e)}
            >
              <img src={ele} alt="" className="h-16 w-16 rounded-full" />
              <h1>Electronic</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chGo(e)}
            >
              <img src={gro} alt="" className="h-16 w-16 rounded-full" />
              <h1>Grocery</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chSp(e)}
            >
              <img src={spo} alt="" className="h-16 w-16 rounded-full" />
              <h1>Sports</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            <button
              className="min-h-24 mt-1 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
              onClick={(e) => chBe(e)}
            >
              <img src={care} alt="" className="h-16 w-16 rounded-full" />
              <h1>Beauty</h1>
            </button>

            <div className="border-2 min-h-1 w-20 mt-1 mb-2 border-black" />

            {/* Comps */}
          </div>
        </div>

        {/* Second section */}
        <div className="h-[692px] w-[70%]  flex flex-col justify-center items-center">
          <div className=" h-[7%] ">
            <div className=" min-h-16 flex justify-center items-center">
              <div className="w-[270px] h-[7%] bg-stone-400 flex rounded-2xl justify-center items-center">
                <input
                  type="search"
                  className="w-[300px]  h-12 rounded-xl bg-transparent pl-2 text-black red"
                  placeholder="Search your product..."
                />
                <div className="w-1 border-r-2 border-yellow-100 h-10"></div>
                <button className="w-24  h-12 rounded-xl flex justify-center items-center ">
                  <img src={ser} alt="" className="h-10" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-[90%] w-full justify-around items-center  mt-6 flex overflow-y-scroll scroll flex-wrap ">
            {/* comps */}

            {data &&
              data.map((items) => (
                <div
                  className="h-40 w-28 mb-2 bg-yellow-100 flex flex-col justify-around items-center cursor-pointer"
                  key={items._id}
                  id={items._id}
                  onClick={(e)=>setProduct(e)}
                >
                  <img
                    src={items.image}
                    alt=""
                    className="h-16 w-16"
                    id={items._id}
                    onClick={(e)=>setProduct(e)}
                  />
                  <h1
                    className="text-sm font-bold w-24 capitalize text-center"
                    id={items._id}
                    onClick={(e)=>setProduct(e)}
                  >
                    {items.name}
                  </h1>
                  <h1 className="text-md capitalize font-bold" id={items._id}
                  onClick={(e)=>setProduct(e)}
                  >
                    {items.headline}
                  </h1>
                </div>
              ))}

            {/* comps */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catagory;
