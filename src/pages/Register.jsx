import React, { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [exp, setExp] = useState(false);
  console.log(exp);

  const handleClickEx = useCallback(() => {
    if (exp) {
      setExp(false);
    } else {
      setExp(true);
    }
  }, [exp]);
  console.log(exp);
  return (
    <>
      <div className=" bg-[#353b48] md:h-[100vh] flex justify-center items-center  w-full">
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
                placeholder="Enter name"
                className="p-2 w-[100%]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="p-2 w-full"
              />
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 w-full"
              />
              <input
                type="password"
                placeholder="Address"
                className="p-2 w-full"
              />
              <input type="date" className="p-2 w-full" />

              <div className="flex items-center bg-white ">
                <label htmlFor="">
                  <input
                    type="checkbox"
                    value="english"
                    name="english"
                    placeholder="Language"
                    className="m-2 "
                  />
                  English
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    value="hindi"
                    name="english"
                    placeholder="Language"
                    className="m-2 "
                  />
                  Hindi
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    value="kannada"
                    name="english"
                    placeholder="Language"
                    className="m-2 "
                  />
                  Kannada
                </label>
              </div>
              <div className="flex flex-col bg-white ">
                <label className="ml-1">highest Qualification</label>
                <select name="" id="">
                  <option value="">B Tech</option>
                  <option value="">M Tech</option>
                  <option value="">Bsc</option>
                  <option value="">Msc</option>
                  <option value="">Bcom</option>
                  <option value="">Bcom</option>
                </select>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Name of the college"
                className="p-2  w-full"
              />
              <input
                type="text"
                placeholder="Specialization"
                className="bg-white  p-2 w-full"
              />
              <div className="bg-white  p-2 w-full">
                <label htmlFor="" className="ml-2">experience</label>
                <div className="flex ">
                  <input
                    type="radio"
                    name="true"
                    onClick={()=>handleClickEx(false)}
                    className="m-2"
                    id=""
                  />
                  <label htmlFor="">fresher</label>
                  <input
                    type="radio"
                    name="true"
                    onClick={()=>handleClickEx(true)}
                    className="m-2"
                    id=""
                  />
                  <label htmlFor="" className="">Experienced</label>
                </div>
                {exp && (
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      id=""
                      placeholder="Company Name"
                      className="p-1 border"
                    />
                    <input
                      type="number"
                      id=""
                      placeholder="0-50 years"
                      className="text-black p-1 border"
                    />
                  </div>
                )}
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Job Title"
                className="bg-white  p-2 w-full"
              />
              <div className="bg-white  p-2 w-full">
                <p className="ml-2">Job time</p>
                <input type="checkbox" name="true" id="" className="m-2"/>
                <label htmlFor="">Full time</label>
                <input type="checkbox" name="true" id="" className="m-2"/>
                <label htmlFor="">Part time</label>
                <input type="checkbox" name="true" id="" className="m-2"/>
                <label htmlFor="">Intern</label>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Location"
                className="bg-white  p-2 w-full"
              />
              <input
                type="file"
                id="pdfFile"
                name="pdfFile"
                accept=".pdf"
                className="bg-white  p-2 w-full"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Username"
                className="bg-white  p-2 w-full"
              />
              <input
                type="Password"
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

export default Register;
