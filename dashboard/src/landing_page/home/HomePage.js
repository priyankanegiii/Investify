import React from 'react';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Hero from './Hero';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Apps from './Apps';
import Funds from './Funds';
import Topbar from './Topbar';
import Leftsection from './Leftsection';
export default function HomePage(){
    return(
        <>
            <Topbar />
            <div className='mx-5' style={{display:"flex"}}>
        
                <Leftsection />

                <div className="container p-5 "style={{height:"60rem",width:"70rem",borderRight:"1px solid #f0f0f0",marginRight:"15rem"}}>
                    <Routes>
                        <Route path="/" element={<Hero/>} />
                        <Route path="/orders" element={<Orders/>} />
                        <Route path="/holdings" element={<Holdings/>} />
                        <Route path="/positions" element={<Positions/>} />
                        <Route path="/funds" element={<Funds/>} />
                        <Route path="/apps" element={<Apps/>} />
                   </Routes>
                </div>
            
            

             </div>
            
            
           
            
        </>
    );
}
