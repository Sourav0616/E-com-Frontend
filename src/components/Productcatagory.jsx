import ser from "../../public/ser.png";

import { RiStarSFill } from "react-icons/ri";
import { useSelector , useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setViewProduct } from "../store/viewproduct.slice.js";
import { useNavigate } from "react-router-dom";
function Productcatagory() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const catgory = useSelector((state) => state.setproductrender.catagory);
  const fetch = useSelector((state) => state.allProducts.data);

  const [data, setdata] = useState("");
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  if (filter == "low") {
    const filterData = data.sort((a, b) => a.saleprice - b.saleprice);
    
  } else if (filter == "high") {
    const filterData = data.sort((a, b) => b.saleprice - a.saleprice);
    
  }else if (filter == "new") {
    const filterData = data.sort((a, b) => a.createdAt - b.createdAt);
    
  }else if (filter == "rating") {
    const filterData = data.sort((a, b) => b.rating - a.rating);
    
  }

  const viewProducts = async (e)=>{
    e.preventDefault();
    const findProduct = await data.find((item)=> item._id == e.target.id)
    dispatch (setViewProduct(findProduct))
    navigate("/app/indivisualproduct")
  }


  useEffect(() => {
    const filterData = fetch.filter((item) => item.catagory == catgory);
    if (catgory == "") {
      setdata(fetch);
    } else {
      setdata(filterData);
    }
  }, [catgory, filter]);

  return (
    <div className="h-[852px] w-[393px]   bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 h-[892px] scroll overflow-auto flex flex-col items-center">
        <div className="min-h-[10%] w-96  flex justify-between items-center">
          <div className="w-auto p-2 h-10 ml-2  bg-yellow-100 flex justify-center items-center text-md font-bold capitalize rounded-xl">
            {catgory}
          </div>

          <div className="h-10 w-40 bg-yellow-100 rounded-xl flex justify-center items-center">
            <label for="filter" className="text-md font-bold">
              Filter
            </label>
            <select
              name="filter"
              id="options"
              className="bg-transparent ml-1 text-sm font-bold "
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
              <option value="rating">Rating</option>
              <option value="new">Newest</option>
            </select>
          </div>

          <button className="h-10 w-20  rounded-xl mr-2 flex justify-center items-center">
            <img src={ser} alt="" className="h-8" />
          </button>
        </div>

        {/* Items part */}
        <div className="min-h-[88%] mb-2 w-96  overflow-y-scroll scroll flex flex-wrap justify-around items-center">
          {/* Comps */}

          {data &&
            data.map((data) => (
              <div
                className="min-w-[46%] min-h-60 mb-2 bg-yellow-100 flex flex-col items-center justify-around cursor-pointer"
                key={data._id}
                id={data._id}
                onClick={(e)=>viewProducts(e)}
              >
                <img src={data.image} alt="" className="h-32 w-28 mt-2" id={data._id}
                onClick={(e)=>viewProducts(e)}
                />
                <h1 className="w-32 h-2 text-sm font-bold text-center"
                id={data._id}
                onClick={(e)=>viewProducts(e)}
                >
                  {data.name}
                </h1>

                <div className="w-24 flex justify-center items-center h-12 mt-6 "
                id={data._id}
                onClick={(e)=>viewProducts(e)}
                >
                  <RiStarSFill className="text-3xl text-green-600" />
                  <RiStarSFill className="text-3xl text-green-600" />
                  <RiStarSFill className="text-3xl text-green-600" />
                  <RiStarSFill className="text-3xl text-green-600" />
                  <RiStarSFill className="text-3xl  text-red-600" />
                  <span className="text-sm font-bold">({data.rating})</span>
                </div>

                <div className="w-[90%] h-10  mt-[-10px] flex justify-between items-center"
                id={data._id}
                onClick={(e)=>viewProducts(e)}
                >
                  <span className="line-through font-bold">MRP {data.mrp}</span>
                  <span className=" font-bold ">Rs {data.saleprice}</span>
                </div>
              </div>
            ))}

          {/* Comps */}
        </div>

        {/* Items part */}
      </section>
    </div>
  );
}
export default Productcatagory;
