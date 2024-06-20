import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IStudent } from '../interface/student';

import "./student.scss"
const Students : React.FC  = () => {
  const [allStudent,setAllStudent]=useState<IStudent[]>();
useEffect(() => {
  const student = JSON.parse(localStorage.getItem("students") as string);
  setAllStudent(student)
  console.log("student data",student);
},[]);
  return (
     <>
    <button title="student" className='create button'>
      <Link to="/student/create-student">Create-student-details</Link>
    </button>
    <table>
        <thead>
          <tr>
            <td>SN.</td>
            <td>Name</td>
            <td>Age</td>
            <td>Phone Number</td>
            <td>Email ID</td>
          </tr>
        </thead>
        <tbody>
          {allStudent?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    
  )

} 
export default Students