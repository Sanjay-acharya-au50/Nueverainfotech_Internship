

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Postjobreg = () => {


  return (
    <>
      <div className=" bg-[#353b48] flex justify-center items-center md:h-[100vh] w-full">
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
        >
          <div className="flex flex-col border border-red-500  shadow-2xl bg-[#353b40] rounded  justify-center items-center p-3">
            {/*               -------------------                     */}

            <div className="md:grid grid  gap-1 md:grid-cols-2 ">
              <input
                type="text"
                placeholder="Company name"
                className="p-2 w-[100%]"
              />
              <input
                type="text"
                placeholder="Industry / Sector"
                className="p-2 w-full"
              />
               <div className="flex flex-col bg-white  p-2 w-full">
              <label htmlFor="">company Logo</label>
              <input type="file" accept="image/*" className="bg-white  p-2 w-full" />

              </div>
              <input
                type="text"
                placeholder="Company Overview"
                className="p-2 w-full"
              />
              <input
                type="text"
                placeholder="Website"
                className="p-2 w-full"
              />

              
              <input
                type="number"
                name=""
                id=""
                placeholder="Company Size"
                className="p-2  w-full"
              />
              <input
                type="text"
                placeholder="Location"
                className="bg-white  p-2 w-full"
              />
             

           

              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="bg-white  p-2 w-full"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Number"
                className="bg-white  p-2 w-full"

              />
              <input
                type="Email"
                name=""
                id=""
                placeholder="Email"
                className="bg-white  p-2 w-full"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="username"
                className="bg-white  p-2 w-full"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="bg-white  p-2 w-full"
              />
            </div>
            {/*               -------------------                     */}
            <button
              type="submit"
              className="bg-red-300  p-2 w-full hover:bg-black hover:text-red-500 duration-500 m-1"
            >
              Register
            </button>
            <Link
              to={"/findjoblogin"}
              className="bg-red-300 text-center hover:bg-black hover:text-red-500 duration-500  p-2 mb-1 w-full"
            >
              Login
            </Link>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Postjobreg;
