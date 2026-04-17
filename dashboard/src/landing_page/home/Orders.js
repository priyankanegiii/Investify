import React from 'react';
export default function Orders(){
    return(
        <div className="container p-5 text-center"style={{height:"95.5%",width:"77.5%",marginTop:"2.5rem"}}>
                <p style={{fontSize:"1.25rem",opacity:"0.3"}}>You haven't placed any orders today</p>
                <button className='p-2 m-2 btn btn-primary'>Get Started</button>
        </div>
    );
}