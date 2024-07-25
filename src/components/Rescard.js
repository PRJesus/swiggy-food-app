import React from "react";


const Rescard = (props) => {
    const {resData} = props;
   
    
    return(
        <div className="res-card">
            {/* resData.map((item)=>{
                item.
            }) */}
            
            <img className="rescard-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId}  alt= "rescard-img"/>
            <h3>{resData?.info?.name}</h3>
            <h6>{resData?.info?.cuisines.join(",")}</h6>
            <h6>{resData?.info?.costForTwo}</h6>
            <h6>{resData?.info?.avgRating} stars</h6>
         

        </div>
    )
}
export default Rescard;