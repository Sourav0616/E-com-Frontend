import cross from "../../public/cross.png";
import ama from "../../public/ama.png";
import pay from "../../public/pay.jpg";
import pho from "../../public/pho.png";
import cash from "../../public/cash.png";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
import { useParams , useNavigate} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/orderslice.js";
import { deletAll } from "../store/cartslice.js";
function Payment() {
const dispatch = useDispatch()
  const { total } = useParams();
  const navigate = useNavigate()
  const [mode , setMode] = useState("")
  
  const back = (e)=>{
    e.preventDefault();
    navigate("/app/cart")
  }

  const order = (e)=>{
    e.preventDefault();
    const data = {
      userId : "6633886f35f919c0926f17ae"
    }
 dispatch(setOrder(data))
 dispatch(deletAll())
    navigate("/app/home")
  }

  return (
    <div className="h-[852px] w-[393px]   bg-stone-200 flex flex-col">
      <header className="h-20 w-full bg-yellow-100 flex justify-between items-center">
        <div className="w-48 h-16 ml-2 flex-col p-2">
          <h1 className="text-xl font-bold">Payment</h1>
          <h1 className="text-md font-semibold">Amount Payable : {total}</h1>
        </div>
        <button className="h-16 w-16  text-7xl rounded-full"
        onClick={(e)=>back(e)}
        >
          <img
            src={cross}
            alt=""
            className="h-10 w-10 bg-stone-200 ml-4  rounded-full p-2"
          />
        </button>
      </header>

      <section className="bg-pirple-500 w-full h-[692px] scroll overflow-auto mb-2 flex flex-col items-center">
        {/* Slide */}
        <div className="flex w-[370px]">
          <Marquee>
            <div className=" flex w-auto">
              {/* Copm */}

              <div className="h-20 w-[370px] mr-1 bg-green-700 mt-2 justify-between rounded-xl flex  items-center">
                <img
                  src={ama}
                  alt=""
                  className=" ml-3 h-16 w-16 rounded-full"
                />
                <div className="w-72  h-16  flex flex-col">
                  <h1 className="pl-2 pr-2  font-bold text-sm">
                    Get Up to Rs. 49 Cashback Minimum Transaction Value Of Rs.
                    499
                  </h1>
                  <p className="pl-2">Trams @ Condition apply</p>
                </div>
              </div>

              <div className="h-20 w-[370px] mr-1  bg-green-700 mt-2 justify-between rounded-xl flex  items-center">
                <img
                  src={ama}
                  alt=""
                  className=" ml-3 h-16 w-16 rounded-full"
                />
                <div className="w-72  h-16  flex flex-col">
                  <h1 className="pl-2 pr-2  font-bold text-sm">
                    Get Up to Rs. 49 Cashback Minimum Transaction Value Of Rs.
                    499
                  </h1>
                  <p className="pl-2">Trams @ Condition apply</p>
                </div>
              </div>

              {/* Copm */}
            </div>
          </Marquee>
        </div>

        {/* Slide */}

        {/* Upi section */}

        <div className="w-[373px] mt-3 rounded-xl h-auto flex justify-center items-center flex-col ">
          <div className="w-[370px] pl-1">
            <h1 className="text-xl font-bold">UPI</h1>
            <h1>Pay with any UPI app</h1>
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={ama} alt="" className="h-16 w-16 ml-1" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Amazon Pay
            </h1>
            <input type="radio" name="mode" className="w-6 h-6 mr-4" 
            onClick={()=>setMode("amazon pay")}
            />
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={pay} alt="" className="h-16 w-16 ml-1 rounded-full" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Paytm
            </h1>
            <input type="radio" name="mode" className="w-6 h-6 mr-4" 
            onClick={()=>setMode("Paytm")}
            />
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={pho} alt="" className="h-16 w-16 ml-1 rounded-full" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Phone pee
            </h1>
            <input type="radio" name="mode" className="w-6 h-6 mr-4" 
            onClick={()=>setMode("Phonepee")}
            />
          </div>

          <button className="text-md font-bold ml-72 mb-1">See more</button>
        </div>

        {/* Upi section */}

        {/* Card Section */}
        <div className="w-[373px] mt-3 rounded-xl h-auto flex justify-center items-center flex-col ">
          <div className="w-[370px] pl-1">
            <h1 className="text-xl font-bold">CARD</h1>
            <h1>Pay with any card</h1>
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={ama} alt="" className="h-16 w-16 ml-1 rounded-full" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Debit Card
            </h1>
            <input type="radio" name="mode" className="w-6 h-6 mr-4" 
            onClick={()=>setMode("debit card")}
            />
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={ama} alt="" className="h-16 w-16 ml-1 rounded-full" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Credit Card
            </h1>
            <input type="radio" name="mode" className="w-6 h-6 mr-4" 
            onClick={()=>setMode("credit card")}
            />
          </div>
        </div>
        {/* Card Section */}

        {/* Cash on delivery */}

        <div className="w-[373px] mt-3 rounded-xl h-auto flex justify-center items-center flex-col ">
          <div className="w-[370px] pl-1">
            <h1 className="text-xl font-bold">CASH ON DELIVERY</h1>
            <h1>Pay cash when delivered</h1>
          </div>

          <div className="h-20 mt-3 rounded-xl mb-2 w-[370px] flex justify-between items-center bg-yellow-100">
            <img src={cash} alt="" className="h-16 w-16 ml-1 rounded-full" />
            <h1 className="w-60  h-10 flex items-center font-bold text-xl">
              Cash on delivery
            </h1>
            <input
              type="radio"
              name="mode"
              className="w-6 h-6 mr-4"
              value="cash on delivery"
              onClick={()=>setMode("cash on delivery")}
            />
          </div>
        </div>

        {/* Cash on delivery */}

        <button className="min-h-12 w-40 rounded-xl text-xl font-bold bg-green-600 mt-10 mb-10"
        onClick={(e)=>order(e)}
        >
          Order
        </button>
      </section>
      <Footer />
    </div>
  );
}
export default Payment;
