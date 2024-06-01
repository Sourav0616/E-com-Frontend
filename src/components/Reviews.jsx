import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Reviews() {
  const items = useSelector((state) => state.setorder.orderitems);
  

  let data = {};
  const [show, setShow] = useState(false);

  const setData = (e) => {
    e.preventDefault();
    data = items.find((iterator) => iterator._id == e.target.id);
    setShow(true);
  };

  return (
    <div className="h-[692px] w-[393px] bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 min-h-[692px] scroll overflow-y-scroll mb-2 flex flex-col items-center">
        <h1 className="w-96 mt-4 pl-2  mb-2 text-xl font-bold">
          Products For Review
        </h1>

        <div className="flex justify-between items-center w-[373px] mt-2">
          <Link
            to="/app/profile"
            className="h-10 w-40 bg-yellow-100 text-xl flex justify-center items-center font-bold rounded-xl"
          >
            Orders
          </Link>

          <Link className="h-10 w-40 bg-yellow-100 text-xl flex justify-center items-center font-bold rounded-xl">
            Reviews
          </Link>
        </div>

        {items &&
          items.length > 0 &&
          items.map((data) => (
            <div
              className="w-[373px] h-auto flex flex-col  rounded-xl bg-yellow-100 mt-2"
              key={data._id}
            >
              <div className="h-20 w-[370px] flex justify-around items-center">
                <img
                  src={data.product.url}
                  alt=""
                  className="h-16 w-16 rounded-xl"
                />
                <h1 className="w-40 font-bold">{data.product.productname}</h1>
                <button
                  className="text-sm font-bold h-12 w-24 rounded-xl bg-stone-200 "
                  id={data.product._id}
                >
                  Add Review
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
export default Reviews;
