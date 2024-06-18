import React from 'react'
import { Link } from 'react-router-dom'

const Students : React.FC  = () => {
  return (
     
    <button title="student">
      <Link to="/student/create-student">Create-student-details</Link>
    </button>

    
  )
}

export default Students