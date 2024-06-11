import React from "react";
import "../../app/globals.css";

const PublicLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <div className="bg-indigo-300 flex justify-center text-2xl mt-[92vh] ">
        <p>About</p>
      </div>
    </>
  );
};

export default PublicLayout;
