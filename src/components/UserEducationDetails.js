import React from 'react';
import classes from "./Table.css";

const UserEducationDetails = (props) => {

  fetch("https://admin-panel-927d1-default-rtdb.firebaseio.com/Register.json", {
  })
  .then((res) => res.json())

  .then ((res) => console.log(res))


    return (
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>InstituteName</th>
              <th>Percentage</th>
              <th>Course</th>
              <th>StartDate</th>
              <th>EndDate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>instituteName</td>
                <td>percentage</td>
                <td>course</td>
                <td>startDate</td>
                <td>endDate</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserEducationDetails;