import React from "react";
import Card2 from "../assets/images/card2.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex ">
      <div className=" w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className=" text-lg font-medium text-black">Expenses</h2>
        {children}
      </div>
      <div className=" hidden md:block w-[40vw] bg-violet-50 bg-auth0bg-img bg-cover"></div>
    </div>
  );
};

export default AuthLayout;
