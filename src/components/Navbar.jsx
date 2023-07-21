import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import "../components/nav.css";



const Navbar = () => {




  return (
    <div className="h-[50px]  bg-[#e84118] text-white w-full flex justify-between items-center p-1 md:p-8">
      <div>
        <Link className="m-2" to="/">
          <div className="nav text-[15px] md:text-[20px]">

          Nuevera Infotech
          </div>
        </Link>
      </div>
      <div className="flex">

            <Link className="m-2" to="/findjoblogin">
              <div className="border border-red-300 p-2 hover:bg-white hover:text-red-400 duration-500">

                Find Job
              </div>
            </Link>
            <Link className="m-2" to="/postjoblogin">
              <div className="border border-red-300 p-2 hover:bg-white hover:text-red-400 duration-500">

              Post Job
              </div>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;
