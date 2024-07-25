import React from "react";
import { CDN_URL } from "../utils/constants";


const Rescard = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,costForTwo,avgRating} = resData?.info;
   
    
    return(
        <div className="res-card">
            {/* resData.map((item)=>{
                item.
            }) */}
            
            <img className="rescard-img" src={CDN_URL + resData?.info?.cloudinaryImageId}  alt= "rescard-img"/>
            <h3>{name}</h3>
            <h6>{cuisines.join(",")}</h6>
            <h6>{costForTwo}</h6>
            <h6>{avgRating} stars</h6>
         

        </div>
    )
}
export default Rescard;