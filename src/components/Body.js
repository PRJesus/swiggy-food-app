import React, { useState } from "react";
import Rescard from "./Rescard";
import { resList } from "../utils/mockdata";

const handlefilter = () => {
    const filteredList = resList.filter(res => res.info.avgRating > 4)
    console.log(filteredList);
}
const Body = () => {
    const [filteredList,setFilteredList] = useState();
    
    return(
        <div className="body">
            <div className="search-container">
                <label className="search-label">Search</label>
                <input type="text" className="search"/>
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={handlefilter}>Top Rated Restaurants</button>
            </div>
        <div className="res-container">
           
            {
                resList.map((restaurant) => (
                    <Rescard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
            
           

        </div>
        </div>
        
    )
    

}
export default Body;