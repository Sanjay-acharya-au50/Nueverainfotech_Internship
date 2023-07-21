import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Postjoblogin = () => {


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {};

  return (
    <div >
      <motion.div className=" bg-[#353b48] flex  justify-center items-center h-[100vh] w-full" 
     
      >
        <motion.form
          onSubmit={loginUser}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="md:grid grid-cols-3 md:px-[200px]"
        >
          <div className="md:col-span-2 shadow-lg flex  items-center bg-[#353b40] md:text-[50px] p-5">Let's make your next great hire. Fast.</div>
          <div className="md:grid-span-1">

          <div className="flex flex-col border border-red-500  shadow-2xl bg-[#353b40] rounded h-[400px]  justify-center items-center p-3">
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter email"
              className=" m-1 p-2 w-[250px]"
            />
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter password"
              className=" m-1 p-2 w-[250px]"
            />
            <button
              type="submit"
              className="bg-red-300  hover:bg-black hover:text-red-500 duration-500 m-1 p-2 w-[250px]"
            >
              Login
            </button>
            <Link
              to={"/postjobreg"}
              className="bg-red-300  hover:bg-black hover:text-red-500 duration-500 m-1 p-2 w-[250px] text-center"
            >
              Create Account
              
            </Link>
          </div>
          </div>

        </motion.form>
      </motion.div>
    </div>
  );
};

export default Postjoblogin;
