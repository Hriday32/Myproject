import React from "react";
import RentalFleets from "../../Data/RentalFleets";
import { useParams } from "react-router-dom";
import { ClassNames } from "@emotion/react";
const Viewdetail = () => {
  const { id } = useParams();
  console.log(id);
   return(
    <div ClassNames="">
        <h1>hello world</h1>
    </div>
   )
};

export default Viewdetail;
