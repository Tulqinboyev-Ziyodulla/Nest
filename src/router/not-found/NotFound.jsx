import React from "react";
import img from "../../assets/images/not Found.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <>
      <img style={{ width: "50%", display: "flex", justifyContent: "center", margin: "auto" }} src={img} alt="" />
      <button style={{display: "flex"}} onClick={() => navigate(-1)} className="back">
        Goo Back
      </button>
    </>
  );
};

export default NotFound;
