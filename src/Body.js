
import React, {useState, useEffect}  from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

function filterData(input, resturants) {
    console.log(resturants, input)
 return resturants.filter((resturant) => {
    return resturant.data.name.toLowerCase().includes(input.toLowerCase());
  });
}

function BodyCompomnent() {
    const [input, setInput] = useState('');
    const [allResturants, setAllResturants] = useState([]);
    const [filetrResturants, setFiletrResturantsts] = useState([]);

    useEffect(()=> {
        getResturants();
        console.log('useEffect here--');
     },[])

     async function getResturants() {
         const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&page_type=DESKTOP_WEB_LISTING');
         const json = await data.json();
         setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
         setFiletrResturantsts(json?.data?.cards[2]?.data?.data?.cards);
         return json;
     
     }

     if(filetrResturants?.length === 0) {
        return <h1>no resturat filetr matched</h1>
     }
   
    return allResturants?.length === 0 ? (<Shimmer/>):(
        <div>
            <div className="search-container">
               <input 
                type="text" 
                placeholder="type a Resturant Name" 
                value={input}
                onChange={(e) => {   
                    setInput(e.target.value)
                }}/>
               <button type="Search" onClick={()=> {
                   //call filter function
                  var data = filterData(input, allResturants) != false? filterData(input, allResturants): allResturants;
                   //update the resturant list
                   setFiletrResturantsts(data)
               }}>Search</button>
            </div>
        
            <div className="resturant-cards">                      
                {filetrResturants.map((resturant) => {
                    return <ResturantCard key={resturant.data.id} restaurant={resturant.data}/>
                })}
          </div>
                
         
        </div>
    )
}


export default BodyCompomnent;