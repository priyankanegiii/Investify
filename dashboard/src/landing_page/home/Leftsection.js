import React from 'react';
import { Tooltip , Grow } from '@mui/material';
import { watchlist } from '../../data/data';
import { useState } from 'react';
import {BarChartOutlined, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';

export default function Leftsection(){
    return(
        <div classname="container " style={{height:"60rem",width:"25.5%",marginTop:"2.5rem",marginLeft:"9rem",borderRight:"1px solid #f0f0f0",borderLeft:"1px solid #f0f0f0"}} >
             <div className='search-box' style={{border:"1px solid #f0f0f0",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",color:"#888888"}}>
                <span className='px-1' ><i class="fa-solid fa-magnifying-glass" style={{fontSize:"0.7rem"}}></i></span>
                <input placeholder="Search(infy,base,nifty,fut,etc)" style={{width:"100%",padding:"0.5rem",border:"none",outline:"none"}}/>
                <span className='p-2' style={{fontSize:"0.8rem"}}>{watchlist.length}/50</span>
             </div>
             <div style={{width:"100%"}}>
                {
                    watchlist.map((stock,index)=>{
                        return(
                           <WatchlistItem key={index} stock={stock} />
                        );
                        
                    })
                }

             </div>
        </div>
    );
    
};  

const WatchlistItem = ({ stock }) => {
    const [showWatchlistActions,setShowWatchlistActions] = useState(false);
     const handleMouseEnter=(e)=>{
        setShowWatchlistActions(true);
     
     };
      const handleMouseExit=(e)=>{
        setShowWatchlistActions(false);
     
     };
     return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} style={{borderBottom:"1px solid #f0f0f0",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 0"}}>
          <div className='watchlist' >
            <p className={stock.isDown?"down":"up"}>{stock.name}</p>

          </div>
          <div className='info'>
            <span>{stock.percent}</span>
            {stock.isDown? (
               <KeyboardArrowDown className="down" />
            ):(
                <KeyboardArrowUp className="up" />
            )

            }
            <span className={stock.isDown?"down":"up"}>{stock.price}</span>
            {showWatchlistActions && <WatchlistActions uid={stock.name} />}
            


          </div>
        </div>
     );

};

const WatchlistActions = ({uid})=>{
   return(
      <span className='actions'>
         <span>
            <Tooltip
               title="Buy (B)"
               placement="top"
               arrow
               TransitionComponent={Grow}>
               <button className="buy">Buy</button>
            </Tooltip>
            <Tooltip
               title="Sell (S)"
               placement="top"
               arrow
               TransitionComponent={Grow}>
               <button className="sell">Sell</button>
            </Tooltip>
            <Tooltip
               title="Chart (C)"
               placement="top"
               arrow
               TransitionComponent={Grow}>
               <button>
                  <BarChartOutlined className="icon" />

               </button>
            </Tooltip>
            <Tooltip
               title="More (M)"
               placement="top"
               arrow
               TransitionComponent={Grow}>
               <button>
                  <MoreHoriz  className='icon'/>
               </button>
            </Tooltip>
         </span>

      </span>

   )


};