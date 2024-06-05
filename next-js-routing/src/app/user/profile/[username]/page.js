import React from "react";

const UserName = ({ params }) => {
  console.log(params, "pp");
  return <div>this is {params.username} page </div>;
};

export default UserName;
