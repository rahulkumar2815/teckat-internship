import React from "react"
import { Route, Routes } from "react-router-dom"
import { CreateStudent, HomePage, StudentOutlet, Students, UpdateStudent } from "./pages"

const AppRoute :React.FC = () => {
  return (
    <Routes>
    <Route path="" element={<HomePage/>} />
    <Route path=" Student" element={<StudentOutlet/>} />
    <Route path="" element={<Students/>} />
    <Route path=" Create-student" element={<CreateStudent/>} />
    <Route path=" Update-student/:studentID" element={<UpdateStudent/>} />
    
    </Routes>
  
  )
}

export default AppRoute