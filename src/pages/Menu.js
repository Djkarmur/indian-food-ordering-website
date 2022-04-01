import React from "react";
import Fooddata from "./Fooddata";
import Foodcard from './Foodcard';
import './foodcard.css';
const Menu = () =>{
    return(
       <>
       <div className="mainmenu">
         <h1>Our Menu</h1>
           <div className="menulist">
               {
                   Fooddata.map((item,key)=>{
                        return(
                            
                            <Foodcard 
                                key={key.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                calory={item.calory}
                                desc={item.desc} />
                            
                        )
                   })
               }

           </div>
       </div>
       </>
    )
}
export default Menu;