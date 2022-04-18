import React, { useState } from "react";
const Education = ({Form, setForm, Page, setPage}) => {
    const [EDU,setEDU]= useState(
        {
        InstituteName: "", 
        Percentage: "",
        Course: "",
        StartDate: "",
        EndDate: "",
    }
    );
    let formIsValid = true;
   const handleFormValidation= (e)=>   {    
        const { InstituteName,Percentage, Course, StartDate, EndDate } = EDU;    
        let formErrors = {};    
        

        if(InstituteName.length===0)  {
          formIsValid=false;
          formErrors["InstituteNameErr"] = "InstituteName is required.";
          alert ('Please Enter Valid InstituteName');  
        }

        if(Percentage.length===0) {
          formIsValid=false;
          formErrors["PecentageErr"] = "Percentage is required.";
          alert (' Enter Valid Percentage');  
        }
           
        if(Course.length===0)  {
          formIsValid=false;
          formErrors["CourseErr"] = "Course is required.";
          alert (' Enter Valid Course');  
        }

        if(StartDate.length===0) {
          formIsValid=false;
          formErrors["StartDateErr"] = "StartDate is required.";
          alert (' Enter Valid StateDate');  
        }

        if(EndDate.length===0) {
          formIsValid=false;
          formErrors["EndDateErr"] = "EndDate is required.";
          alert (' Enter Valid EndDate');  
        }

      }
 
        const previous= () =>{
          setPage(Page - 1)
            
        } 
        const  handleChange= (e) =>{
            const { name, value } = e.target;    
            setEDU((previousValue)=>({...previousValue, [name]: value })); 
            }
          
            const Submit= (e) =>{
              e.preventDefault ();
              console.log(formIsValid);
             handleFormValidation();
             console.log(formIsValid);
             fetch("https://admin-panel-927d1-default-rtdb.firebaseio.com/Register.json", {
              method: "post",
              body: JSON.stringify({ ...EDU}),
              headers: {
                "Content-Type": "application/json",
              },
            })
              if(formIsValid) {
              alert('You Have Registration Successfully')
              console.log(Form)
              Form.EducationList.push(EDU)
             
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
              <label className="form_label" htmlFor="InstituteName"> InstituteName </label>
              <input className="form_input" name="InstituteName" value={EDU.InstituteName}  onChange={handleChange} type="text" id="instituteName" placeholder="InstituteName"/>
            </div>
            <div className="Percentage">
              <label className="form_label" htmlFor="percentage">Percentage</label>
              <input className="form_input" name="Percentage" value={EDU.Percentage}  onChange={handleChange} type="number" id="percentage" placeholder="Percentage"/>
            </div>
            <div className="Course">
              <label className="form_label" htmlFor="course">Course</label>
              <input className="form_input" name="Course" value={EDU.Course}  onChange={handleChange} type="text" id="course" placeholder="course"/>
            </div>
            <div className="StartDate">
              <label className="form_label" htmlFor="startdate">StartDate</label>
              <input className="form_input" name="StartDate" value={EDU.StartDate} onChange={handleChange} type="date" id="startdate" placeholder="StartDate"/>
            </div>
            <div className="EndDate">
              <label className="form_label" htmlFor="enddate">EndDate</label>
              <input className="form_input" name="EndDate" value={EDU.EndDate} onChange={handleChange} type="date" id="enddate" placeholder="StartDate"/>
            </div>
            
            
            
            <div className="footer">
            <button type="button" onClick={previous} className="btn">Previous</button>
             <button type="Submit" onClick={Submit} className="btn">Submit</button>
           </div>


    </div> 
    </div>
        );
};

export  default Education;
