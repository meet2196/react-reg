import React, {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "./Login.css";


 function Login () {

    const [InputFeild, setInputField] = useState({
        email:'',
        password:'', 
    }) 
    // let history = useNavigate();
    // const [errFeild, setErrField] = useState({
    //  emailErr:'',
    //  passwordErr:'', 
 //}) 

 const inputHandler =(e)=>{
    setInputField({...InputFeild,[e.target.name]:e.target.value })
   }

   const submitButton =  ()=> {
       console.log(InputFeild)
    // if(validForm()){
    //   let url = 'http://localhost:3000/'
    //   let options = {
    //       method:'POST',
    //       url:url,
    //       Headers:{

    //       },
    //       data: InputFeild
    //   }
    //   try{
    //       let  resoponse =  await axios(options)
    //       console.log(Response)
    //       if(Response.data.statusText =='success'){
    //           toast.success("Login Successfull !");
    //           localStorage.setItem('token',Response.data.token)
    //          setTimeout(()=>{
    //              history('/login')
    //           },1500)
    //       }else
    //       toast.error(resoponse.data.message);  

    //     } catch(e){
    //         toast.error('Something Went Wong!');
    //   }
    // } else {
    //     toast.error('Form Invalid');
    // }
}

    // const validForm= ()=>{
    //     const validemailRegex= /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    //     let formIsValid = true;
    //     setErrField({
    //       emailErr:'',
    //       passwordErr:'',
    //     })
    //   if(InputFeild.email !='' && validemailRegex.test(InputFeild.email) ){
    //       formIsValid = false;
    //       setErrField(prevState=>({
    //           ...prevState,emailErr:'Please Enter The Valid Email'
    //       }))
    //   }
      
    //   if(InputFeild.password ==''){
    //       formIsValid = false;
    //       setErrField(prevState=>({
    //           ...prevState,passwordErr:'Please Enter The Password'
    //       }))
    //   }
       // return formIsValid
   // }

    return (
        <div className='conatiner'>
        <div className='row-login'>

            
            <div className='col-md-6'>
                <h3>Login User</h3><br/>
                <form autoComplete='off' action="/login-user" method="post" onSubmit={submitButton}>
                <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input type="email" className='form-control' name='email'
                               autoComplete='off'  value={InputFeild.email} onChange={inputHandler}
                            />
                               
                        </div>
                        <div className='mb-3'>
                          <label className='form-label'>Password</label>
                          <input type='password' className='form-control' name='password'
                          autoComplete="off" value={InputFeild.password} onChange={inputHandler}
                           />
                          
                      </div>
                      <div className="text-center my-3">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </div>
          <div>
            <NavLink to="/forgotpassword">Forgot Password</NavLink><br />
            <NavLink to="/Registration">Register Here</NavLink>
          </div>

                </form>
            </div>
            </div>
            </div>
    )
}

export default Login;