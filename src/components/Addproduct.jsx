import logo from "../../public/comvectorstock45685575-removebg-preview.png";

function Addproduct() {
  return (
    <div className="h-auto rounded-xl items-center  w-[393px] scroll  bg-stone-200 flex flex-col ">
      <div className="h-24 bg-yellow-100 w-full flex justify-center items-center flex-col">
        <img
          src={logo}
          alt=""
          className=" h-16 w-16 rounded-full items-center"
        />
        <h1 className="font-bold">Add Product to Dolphy</h1>
      </div>

      <form className="w-96 flex flex-col items-center mt-4 mb-4 h-[820px] justify-around">
        <div className="flex flex-col w-[370px] ">
          <label htmlFor="name" className="font-bold">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="w-[370px] mt-2 h-10 bg-stone-400 pl-1 rounded"
          />
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product Description
            </label>
            <input
              type="textarea"
              id="name"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product Brands Name
            </label>
            <input
              type="textarea"
              id="name"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product Description
            </label>
            <input
              type="textarea"
              id="name"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2 ">
          <div className="flex flex-col  w-[370px] ">
            <label htmlFor="gender" className="font-bold">
              Product Catagory
            </label>
            <div className="flex flex-wrap justify-between items-center">
              <div className="min-w-[33%]">
                <input
                  type="radio"
                  required
                  id="Electronic"
                  name="type"
                  value="Electronic"
                  onClick={() => setGender("Electronic")}
                  className="mt-2"
                />
                <label className="ml-2 font-bold" htmlFor="Electronic">
                  Electronic
                </label>
              </div>

              <div className="min-w-[33%]">
                <input
                  type="radio"
                  required
                  id="Fashion"
                  name="type"
                  value="Fashion"
                  onClick={() => setGender("Fashion")}
                  className="mt-2"
                />
                <label className="ml-2 font-bold" htmlFor="Fashion">
                  Fashion
                </label>
              </div>

              <div className="min-w-[33%]">
                <input
                  type="radio"
                  required
                  id="Grocery"
                  name="type"
                  value="Grocery"
                  onClick={() => setGender("Grocery")}
                />
                <label className="ml-2 font-bold" htmlFor="Grocery">
                  Grocery
                </label>
              </div>
              <div className="min-w-[33%] mt-2 mb-2">
                <input
                  type="radio"
                  required
                  id="Sports"
                  name="type"
                  value="Sports"
                  onClick={() => setGender("Sports")}
                />
                <label className="ml-2 font-bold" htmlFor="Sports">
                  Sports
                </label>
              </div>

              <div className="min-w-[33%] mt-2 mb-2">
                <input
                  type="radio"
                  required
                  id="Beauty"
                  name="type"
                  value="Beauty"
                  onClick={() => setGender("Beauty")}
                />
                <label className="ml-2 font-bold" htmlFor="Beauty">
                  Beauty
                </label>
              </div>
              <div className="min-w-[33%] mt-2 mb-2">
                <input
                  type="radio"
                  required
                  id="Mobile"
                  name="type"
                  value="Mobile"
                  onClick={() => setGender("Mobile")}
                />
                <label className="ml-2 font-bold " htmlFor="Mobile">
                  Mobile
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product Headline
            </label>
            <input
              type="text"
              id="headline"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product MRP
            </label>
            <input
              type="text"
              id="headline"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>

        <div className="w-96 flex flex-col items-center mt-2">
          <div className="flex flex-col w-[370px] ">
            <label htmlFor="name" className="font-bold">
              Product Saleing Price
            </label>
            <input
              type="text"
              id="headline"
              className="w-[370px] mt-2 bg-stone-400 h-10 pl-1 rounded"
            />
          </div>
        </div>
        <button className="h-12 mt-3 w-40 text-xl font-bold bg-yellow-100 rounded-xl">
          Add Product
        </button>
      </form>
      {/* comps */}
    </div>
  );
}
export default Addproduct;
