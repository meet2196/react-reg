import React from 'react';
import { render } from "react-dom";
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';
import Nav from './widgets/Nav'
import UserDetails from './components/UserDetails'
import UserEducationDetails from './components/UserEducationDetails'


//  const NavHideElement =(props)=>{
//   const {location} = props
//   console.log(location)
//   return (
//     (location.pathname.match(/^\/(registration|login)$/))? <div style={{padding: '35px'}}></div>:
//     <Nav/>
//   )
// }

// const NavHide = (NavHideElement)

function App() {
  return (
    <div className="App">
    {/* <NavHide /> */}
    <BrowserRouter>
    <navbar />
    <Routes>
      <Route path='/' exact={true} element={<Nav></Nav>}/>
      <Route path='/Home' element={<Home></Home>}/>
      <Route path='/Login' element={<Login></Login>}/>
      <Route path='/Registration'  element={<Registration></Registration>}/>
      <Route path='/UserDetails' element={<UserDetails></UserDetails>}/>
      <Route path='/UserEducationDetails' element={<UserEducationDetails></UserEducationDetails>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}



export default App;
