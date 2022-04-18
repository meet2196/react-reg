import React, {useState} from "react";
import Education from "./Education";
import User from  './User';
import "./Registration.css";

const Registration = () => {
  const [Form,setForm]= useState(
    {
    FirstName: "", 
    LastName: "",
    Email: "",
    Phone: "",
    Gender: "",
    Password: "",
    ConfirmPassword: "",
    EducationList: []
    }
);
 
const [Page, setPage]= useState(0); 
const  Main=() => {
 if (
   Page === 0   
 ) {
return <User Form={Form} setForm={setForm} setPage={setPage} Page={Page}> </User>

 }  else {
 return <Education Form={Form} setForm={setForm} setPage={setPage} Page={Page}>   </Education>
 }
 };
 return (
  <>
  {
  Main() 
}

  </>


 ); 
};

export default Registration;
