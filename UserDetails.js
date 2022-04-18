import React, { useState } from 'react';
import classes from "./Table.css";


const UserDetails = (props) => {
  const [data, setData] = useState();

  fetch("https://admin-panel-927d1-default-rtdb.firebaseio.com/Register.json", {
  })
  .then((res) => res.json())

  .then ((res) => setData(res))
  


    return (
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>firstname</td>
                <td>lastname</td>
                <td>email</td>
                <td>phone</td>
                <td>gender</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserDetails;