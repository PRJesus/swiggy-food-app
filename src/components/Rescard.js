import React from "react";


const Rescard = (resData) => {
   
    const {name,cloudinaryImageId,avgRating,costForTwo,cuisines} = resData?.info
    
    return(
        <div className="res-card">
            {/* resData.map((item)=>{
                item.
            }) */}
            
            <img className="rescard-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}  alt= "rescard-logo"/>
            <h3>{name}</h3>
            <h6>{cuisines.join(",")}</h6>
            <h6>{costForTwo}</h6>
            <h6>{avgRating} stars</h6>
         

        </div>
    )
}
export default Rescard;