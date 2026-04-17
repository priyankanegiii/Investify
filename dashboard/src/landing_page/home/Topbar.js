import React from "react";
import Menu from "./menu";

export default function Topbar() {
  return (
    <div className=" px-5 mx-5" style={{ width: "100%", height: "4.5%" ,  display:"flex",justifyContent:"center",top:"0",
        borderBottom:"0.5px solid #f0f0f0",
        position:"fixed",
        width:"100%",
        backgroundColor:"#ffffff",
        zIndex:"1000"}}>
      <div classname="container mt-2 " style={{width:"15%",height:"43px",display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"6.5rem"}}>
             
                <div className='col-6 p-1 mt-3' style={{display:"flex",flexDirection:"row"}}>
                    <p style={{fontSize:"0.8rem",fontWeight:"600"}}>NIFTY 50</p>
                    <p  style={{fontSize:"0.8rem"}}>18181.75</p>
                </div>
                <div className='col-6 p-1 mt-3 mx-5' style={{display:"flex",flexDirection:"row"}}>
                    <p style={{fontSize:"0.8rem",fontWeight:"600"}}>SENSEX</p>
                    <p  style={{fontSize:"0.8rem"}}>61560.64</p>
                </div>
             
             
      </div>
      <Menu />
    </div>
  );
}
