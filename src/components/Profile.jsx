import { Link } from "react-router-dom";
import fas from "../../public/fas.jpg";
import { useSelector } from "react-redux";
function Profile() {
  const items = useSelector((state) => state.setorder.orderitems);

  return (
    <div className="h-[692px] w-[393px] bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 min-h-[692px] scroll overflow-y-scroll mb-2 flex flex-col items-center">
        <div className="flex flex-col w-[370px] mt-2">
          <h1 className="text-xl font-bold">Name</h1>
          <p className="font-semibold">Sourav Debnath</p>
        </div>
        <div className="flex flex-col w-[370px]">
          <h1 className="text-xl font-bold">Addaress</h1>
          <div className="w-[373px] min-h-28 mt-2 bg-yellow-100 rounded-lg p-1 flex items-center">
            <div className="w-[373px]">
              <p className="mt-1 text-sm w-60 font-medium">
                Bhakrai nagar , Phursungi , Teloc Colony ,Near Rajashree Sahu
                Bank, Pune , 412308
              </p>
              <h2 className="mt-2 font-bold">9064333818</h2>
            </div>
            <button className="w-24 ml-2 h-10 bg-red-600 rounded-xl text-md font-bold text-center">
              Change
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-[373px] mt-2">
          <button className="h-10 w-40 bg-yellow-100 rounded-xl font-bold text-xl">
            Orders
          </button>

          <Link
            to="/app/reviews"
            className="h-10 w-40 bg-yellow-100 text-xl flex justify-center items-center font-bold rounded-xl"
          >
            Reviews
          </Link>
        </div>

        {/* Orders */}

        {items &&
          items.length > 0 &&
          items.map((data) => (
            <div
              className="flex mt-3 mb-3 rounded-xl w-[373px] flex-col justify-center items-center h-auto bg-yellow-100"
              key={data._id}
            >
              <h1 className="mr-10 mt-1 text-md font-bold">
                Order id &nbsp; : &nbsp; {data._id}
              </h1>
              <div className="h-24 mb-2 mt-1 w-[360px] flex items-center bg-stone-200">
                <img
                  src={data.product.url}
                  alt=""
                  className="max-h-20  min-w-20 rounded-full"
                />
                <h1 className="font-bold ml-4 w-36">
                  {data.product.productname}
                </h1>
                <h1 className="font-bold ml-16 w-32">
                  Rs {data.product.saleprice}
                </h1>
              </div>

              {data.statu != "cancal" ? (
                <div
                  className="w-[360px] relative flex  mb-2 mt-2  h-64
              justify-between bg-stone-200 rounded-xl"
                >
                  <div className="w-[20%]  justify-center flex flex-col items-center">
                    <div className="h-6 w-6 bg-green-500 rounded-full"></div>
                    <div className="h-[60px] w-1.5 bg-yellow-100"></div>
                    <div className="h-6 w-6 bg-red-500 rounded-full"></div>
                    <div className="h-[60px] w-1.5 bg-yellow-100"></div>
                    <div className="h-6 w-6 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="w-[75%]  flex justify-around flex-col">
                    <div className="ml-1 mt-4">
                      <h1 className="font-bold">Order created</h1>
                      <p>Order succesfully sent to the vender</p>
                    </div>

                    <div className="ml-1 mt-4">
                      <h1 className="font-bold">Shipped</h1>
                      <p>Order dispatch vender to delivery partner</p>
                    </div>

                    <div className="ml-1 mb-2">
                      <h1 className="font-bold">Delivered</h1>
                      <p>Order delivered</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="w-[360px] relative flex  mb-2 mt-2  h-52
              justify-between bg-stone-200 rounded-xl"
                >
                  <div className="w-[20%]  justify-center flex flex-col items-center">
                    <div className="h-6 w-6 bg-green-500 rounded-full"></div>
                    <div className="h-20 w-1.5 bg-yellow-100"></div>
                    <div className="h-6 w-6 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="w-[75%]  flex justify-between flex-col">
                    <div className="ml-1 mt-9">
                      <h1 className="font-bold">Order created</h1>
                      <p>Order succesfully sent to the vender</p>
                    </div>

                    <div className="ml-1 mb-5">
                      <h1 className="font-bold">Cancaled</h1>
                      <p>You cancal this order</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="h-16 mb-2 w-[360px] rounded-md bg-stone-200 flex justify-around items-center">
                <button
                  className="h-10 w-32  bg-yellow-500 text-xl font-bold  flex justify-center items-center rounded-2xl text-black"
                  id={data._id}
                >
                  Modify
                </button>
                <button
                  className="h-10 w-32 flex justify-center text-xl font-bold items-center bg-red-600 rounded-2xl text-black"
                  id={data._id}
                >
                  Cancal
                </button>
              </div>
            </div>
          ))}

        {/* Orders */}
      </section>
    </div>
  );
}
export default Profile;
