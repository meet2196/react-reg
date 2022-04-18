import React, {useState} from "react";
const User = ({Form, setForm, Page, setPage}) => {

  let formIsValid = true;
  
   const handleFormValidation= (e)=>   {    
        const { FirstName,LastName, Email, Gender, Phone, Password, ConfirmPassword } = Form;    
        let formErrors = {};    
        

        if(FirstName.length===0)  {
          formIsValid=false;
          formErrors["FirstNameErr"] = "FirstName is required.";
          alert (' Enter Valid FirstName');
        }

        if(LastName.length===0) {
          formIsValid=false;
          formErrors["LastNameErr"] = "LastName is required.";
          alert (' Enter Valid LastName');
        }

           
        if (Email.length===0) {    
          formIsValid = false;    
          formErrors["EmailErr"] = "Email id is required."; 
          alert (' Enter Valid Email');   
      }    
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {    
  
          formIsValid = false;    
          formErrors["EmailErr"] = "Invalid email id.";    
      }  

      //Gender    
      if (Gender === '' || Gender === "select") {    
        formIsValid = false;    
        formErrors["GenderErr"] = "Select Gender."; 
        alert (' Enter Valid Gender');   
    }    

    if (Phone.length===0) {    
      formIsValid = false;    
      formErrors["PhoneErr"] = "Phone number is required."; 
      alert (' Enter Valid PhoneNumber');   
  }    
  else {    
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
      if (!mobPattern.test(Phone)) {    
          formIsValid = false;    
          formErrors["PhoneErr"] = "Invalid phone number.";   
           
      }    
  }   
  
  if (Password.length  ===  0) 
{
      formIsValid = false;
       formErrors["PasswordErr"] = "Invalid Password.";
       alert (' Enter Valid Password');  
       
  }

  if (ConfirmPassword !== Password) {
    formIsValid = false;
    formErrors["ConfirmPasswordErr"] = "Invalid ConfirmPassword";
    alert (' Enter Valid ConfirmPassword');  
        

  
  }
}
      

    const  handleChange= (e) =>{
        const { name, value } = e.target;    
        setForm((previousValue)=>({...previousValue, [name]: value })); 
        }
      
        const Submit= (e) =>{
            e.preventDefault ();
            console.log(formIsValid);
           handleFormValidation();
           console.log(formIsValid);
           let formValues = Form; 
           console.log(formValues);
           fetch("https://admin-panel-927d1-default-rtdb.firebaseio.com/Register.json", {
      method: "post",
      body: JSON.stringify({ ...Form}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      
          
      .catch((err) => console.log(err));
      
  
            if(formIsValid) {
           
             alert('Click Here For Education Form')
              //setForm=()
              setPage(Page + 1)
            }
            else {
              alert('Please Try Again')
            }
        }
 

        

    return (
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form_label" htmlFor="firstName"> First Name </label>
              <input className="form_input" name="FirstName" value={Form.FirstName}  onChange={handleChange} type="text" id="firstName" placeholder="First Name"/>
            </div>
            <div className="lastName">
              <label className="form_label" htmlFor="lastName">Last Name</label>
              <input className="form_input" name="LastName" value={Form.LastName}  onChange={handleChange} type="text" id="lastName" placeholder="Last Name"/>
            </div>
            <div className="email">
              <label className="form_label" htmlFor="email">Email</label>
              <input className="form_input" name="Email" value={Form.Email}  onChange={handleChange} type="email" id="email" placeholder="Email"/>
            </div>
            <div className="Phone">
              <label className="form_label" htmlFor="phone">Phone</label>
              <input className="form_input" name="Phone" value={Form.Phone} onChange={handleChange} type="number" id="phone" placeholder="Phone"/>
            </div>
            <div>
            <label className="form_label" htmlFor="gender">Gender</label>
            <select name="Gender" onChange={handleChange} value={Form.Gender} >
            <option value="select" name="Gender">--Select--</option>    
                                       <option value="male">Male</option>    
                                       <option value="female">Female</option>    
                                       <option value="Other">Other</option> 
            </select>

            <div className="password">
       <label className="form_label" htmlFor="password">Password</label>
       <input className="form_input" name="Password" value={Form.Password} onChange={handleChange} type="password" id="password" placeholder="Password"/>
     </div>
     <div className="Confirm-password">
       <label className="form_label" htmlFor="confirmpassword">Confirm Password</label>
       <input className="form_input" name="ConfirmPassword" value={Form.ConfirmPassword} onChange={handleChange} type="password" id="confirmpassword" placeholder="ConfirmPassword"/>
     </div>

            <div className="footer">
             <button className="btn btn-primary"  type="Submit" onClick={Submit} >Next</button>
           </div>
    
            </div>
            </div>
            </div>
    )
    }
  
export default User;