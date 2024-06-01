import Footer from "./Footer";
import Header from "./Header";
import ama from "../../public/ama.png";

function Notification() {
  return (
    <div className="h-[692px] w-[393px] bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 min-h-[692px] scroll overflow-y-scroll mb-2 flex flex-col items-center">
        <div className="w-96">
          <h1 className="h-12 w-36 text-xl font-bold flex justify-center items-center bg-yellow-100  pl-2 mt-2 rounded-xl">
            Notification
          </h1>
        </div>

        <div className="h-20 w-[370px]  bg-yellow-100 mt-4 justify-between rounded-xl flex  items-center">
          <img src={ama} alt="" className=" ml-3 h-16 w-16 rounded-full" />
          <div className="w-72  h-16  flex flex-col">
            <h1 className="pl-2 pr-2  font-bold text-sm">
              Get Up to Rs. 49 Cashback Minimum Transaction Value Of Rs. 499
            </h1>
            <p className="pl-2">Trams @ Condition apply</p>
          </div>
        </div>

        <div className="h-20 w-[370px]  bg-yellow-100 mt-4 justify-between rounded-xl flex  items-center">
          <img src={ama} alt="" className=" ml-3 h-16 w-16 rounded-full" />
          <div className="w-72  h-16  flex flex-col">
            <h1 className="pl-2 pr-2  font-bold text-sm">
              Get Up to Rs. 49 Cashback Minimum Transaction Value Of Rs. 499
            </h1>
            <p className="pl-2">Trams @ Condition apply</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notification;
