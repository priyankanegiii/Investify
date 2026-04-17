import React from "react";
export default function Hero() {
  return (
    <div className="container py-5 d-flex flex-column ">
      <h1 style={{ fontSize: "1.5rem" }}>Hi, User!</h1>

      <div className="mt-5" style={{width:"46rem",borderTop:"1px solid rgba(25, 31, 52, 0.5)"}}></div>
      <div className="py-5 d-flex flex-column">
        <h2 style={{fontSize:"1.1rem"}}>Equity</h2>
        <div className="container mt-5 d-flex" style={{width:"46rem",borderBottom:"1px solid #f0f0f0",paddingBottom:"5rem"}}>
          <div  style={{borderRight:"1px solid #f0f0f0",paddingRight:"10rem"}}>
            <h1>3.74k</h1>
            <p style={{color:"rgba(25,31,52,0.6)",fontSize:"0.8rem"}}>Margin Available</p>
          </div>
          <div className=" px-5 " style={{marginLeft:"5rem"}}>
            <p style={{color:"rgba(25,31,52,0.6)", fontSize:"0.8rem"}}>Margin Used  <span style={{color:"black",paddingLeft:"0.5rem"}}>0</span></p>
            <p style={{color:"rgba(25,31,52,0.6)", fontSize:"0.8rem"}}>Opening balance <span style={{color:"black",paddingLeft:"0.5rem"}}>3.74k</span> </p>
          </div>
        </div>
      </div>
      <h2 style={{fontSize:"1.1rem"}}>Holdings <span>(13)</span></h2>
       <div className="container mt-5 d-flex" style={{width:"46rem",borderBottom:"1px solid #f0f0f0",paddingBottom:"5rem"}}>
          <div  className="d-flex flex-column " style={{borderRight:"1px solid #f0f0f0",paddingRight:"10rem"}}>
            <h1 style={{color:"#74c476"}}>1.15k<span style={{color:"#a1d99b",fontSize:"0.9rem"}}>+5.20%</span></h1>
            <p style={{color:"rgba(25,31,52,0.6)", fontSize:"0.8rem",marginLeft:"0.5rem"}}>P & L</p>
          </div>
          <div className=" px-5 " style={{marginLeft:"5rem"}}>
            <p style={{color:"rgba(25,31,52,0.6)", fontSize:"0.8rem"}}>Current Value  <span style={{color:"black",paddingLeft:"0.5rem"}}>31.43k</span></p>
            <p style={{color:"rgba(25,31,52,0.6)", fontSize:"0.8rem"}}>Investment <span style={{color:"black",paddingLeft:"0.5rem"}}>29.88k</span> </p>
          </div>
        </div>
      
    </div>
  );
}
