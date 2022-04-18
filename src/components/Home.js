import React, {useEffect} from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import "./Home.css"
function Home() {

    

      
        useEffect(() => {
          let abc = JSON.parse(localStorage.getItem("user"));
           console.log(abc);
        
        }, []);
    // const history = useNavigate()
    // useEffect( async()=> {
    //     let url = 'http://localhost:3000users/list'
    //     let options = {
    //         method:'GET',
    //         url:url,
    //         Headers:{
    //             'Authorization' : 'Bearer ${localStorage.getItem(token)}' 
    //         }
    //     }
    //      try{
    //          let response = await axios(options)
    //          console.log(response.data)
    //      }

    //      catch(e){
    //          history('/login')
    //          //toast.error("Something Went Wrong!");
    //      }
    //     })
    return (
                     
                     <div className="container"> 
                         <div className="row login homepage">
                             <ToastContainer />
                       <h3 className="heading"> 
                       You Are Logged In As    
                        </h3><br />


                     </div>
                     </div>
                   


    )
}
export default Home;     