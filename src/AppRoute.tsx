import React from "react"
import { Route, Routes } from "react-router-dom"
import { CreateStudent, HomePage, StudentOutlet, Students, UpdateStudent } from "./pages"
import Test1 from "./pages/Test1"

const AppRoute :React.FC = () => {
  return (
    <Routes>
      <Route path="test" element={<Test1/>} />
    <Route path="" element={<HomePage/>} />
    <Route path="student" element={<StudentOutlet/>} >
    <Route path="" element={<Students/>} />
    <Route path="create-student" element={<CreateStudent/>} />
    <Route path="Update-student/:studentID" element={<UpdateStudent/>} />
    </Route>
    </Routes>
  
  )
}

export default AppRoute