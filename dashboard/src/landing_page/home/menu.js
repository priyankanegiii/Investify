import React ,{useState} from 'react';
import { Link } from 'react-router-dom';



export default function Menu(){
    const [SelectedMenu,setSelectedMenu]=useState(0);
    const [IsProfileDropdwonOpen,setIsProfileDropdownOpen]=useState(false);
    
    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    };
    const handleProfileDropdown=()=>{
        setIsProfileDropdownOpen(!IsProfileDropdwonOpen);
    };

    const menuClass="menu";
    const activeMenuClass="menu-selected";
    return(
        <nav class="navbar navbar-expand-lg" style={{width:"85%",height:"43px",marginLeft:"8rem",paddingBottom:"1.4rem"}}>
        <div class="container-fluid" className='py-3 my-3' >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <img src="/media/kite.png" alt="logo" style={{ width: "25px", height: "22.6px" , marginLeft:"1rem",marginTop:"1rem"}} />
            <ul class="navbar-nav" >
              <li class="nav-item">
                <Link style={{textDecoration:"none",color:"black"}}
                to="/"
                onClick={()=> handleMenuClick(0)}>
                    <p classname={SelectedMenu===0? activeMenuClass: menuClass}>Dashboard</p>
                </Link>
              </li>
              <li class="nav-item">
                 <Link style={{textDecoration:"none",color:"black"}}
                to="/orders"
                onClick={()=> handleMenuClick(1)}>
                    <p classname={SelectedMenu===1? activeMenuClass: menuClass}>Orders</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{textDecoration:"none",color:"black"}}
                to="/holdings"
                onClick={()=> handleMenuClick(2)}>
                    <p classname={SelectedMenu===2? activeMenuClass: menuClass}>Holdings</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{textDecoration:"none",color:"black"}}
                to="/positions"
                onClick={()=> handleMenuClick(3)}>
                    <p classname={SelectedMenu===3? activeMenuClass: menuClass}>Positions</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{textDecoration:"none",color:"black"}}
                to="/funds"
                onClick={()=> handleMenuClick(4)}>
                    <p classname={SelectedMenu===4? activeMenuClass: menuClass}>Funds</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link style={{textDecoration:"none",color:"black"}}
                to="/apps"
                onClick={()=> handleMenuClick(5)}>
                    <p classname={SelectedMenu===5? activeMenuClass: menuClass}>Apps</p>
                </Link>
              </li>
              
            </ul>
            <span className="p-3"><i class="fa-regular fa-bell " style={{textAlign:"center",marginLeft:"2rem",color:"black",fontWeight:"200",marginTop:"1rem"}}></i></span>
            <span><img src="/media/userlogo.png" alt="User" style={{ width: "25px", height: "22.6px" , marginLeft:"0.4rem",marginBottom:"0.15rem",marginTop:"1rem"}} /></span>
            <p className="navbar-text p-1 " style={{fontSize:"0.8rem",marginTop:"1.5rem"}} >DEMOUSER</p>
          </div>
        </div>
      </nav>
    );
}