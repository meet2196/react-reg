import React, { useState, useEffect } from 'react'
import {NavLink} from "react-router-dom"
import   "./Navbar.css"



  function Nav(props) {
   // const [isLogedIn, setisLogedIn] = useState(false);
    //  useEffect(() => {
    //      const User=localStorage.getItem()
    //      if (User) {
    //          setisLogedIn(true)
    //      }

    //   }, [])
    const Mak= (<><h3><li><NavLink to ="/Bacancy">Bacancy</NavLink></li></h3></> 
    );
      const NotLogedIn = (<>
     
      <li><NavLink to="/Login">Login</NavLink></li>
      <li><NavLink to="/Registration">Registration</NavLink></li>
     </> );
     
    
    const LogedIn = (<>
     <li><NavLink to="/Home">Home</NavLink></li>
     <li> <NavLink to="/UserDetails">UserDetails</NavLink><br /></li>
      <li><NavLink to="/UserEducationDetails">UserEducationDetails</NavLink></li></>
     );
   
      
    return (
        <ul className='ulNav'>
            {/* <li><NavLink to ="/home">Home</NavLink></li> */}
           {/* <li style={{float: 'left'}}><NavLink to ="/test">Bacancy</NavLink></li>  */}
              {
                Mak
              }
             {
               
               NotLogedIn  
             }
             {
               LogedIn
             }
            
            {/* <li style={{float: 'right'}}><NavLink to="/logout"> LogOut < div style={ */}
                {/* {fontSize: '22'}}/></NavLink></li> */}
        </ul>
    )
}
export default Nav;
