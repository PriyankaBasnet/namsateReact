import React, { useState } from 'react';

const ResturantCard = ({restaurant})=> {
    const [count, setCount] = useState(0);
     return (    
 
         <div className="card">
             <img alt="resturant image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
              restaurant?.cloudinaryImageId} />
             <p className="name">{restaurant?.name}</p>
             <p className="cusines">{restaurant?.cuisines.join(", ")}</p>
             <p className="deliveryTime">{restaurant?.minDeliveryTime} mins</p>
         </div>
     )
 }

 export default ResturantCard

