import logo from './logo.svg';
import './App.css';

function App() {
  // const teacher={
  //   teacherName:"raju" ,
    
  // }
  // const  teacher2={
  //   teacherName:"raju",
  // }
  // const fun =()=>{
  //   let a = 5;
  //   let b = 6;
  //   let sum = a+b;
  //   console.log(sum);
      
  //    }
  // if (teacher.teacher_name ===teacher2.teacher_name)
  //   {
      
  //    fun()

  //   }
    
  //    else{
  //     console.log("hello ")
  //   } 
  // const arr1 =[1,2,3,4,5,6];
  // for (let item of arr1){
  //   console.log(item);
  // }
// const student =
// [
//  {student_Name: "rahul kumar", age:18},
// {student_Name: "sujit kumar", age:20},
// {student_Name: "ram kumar", age:19}
// ];

// student.forEach((person)=>{
//   console .log(person.student_Name) 
// });
// const student1 = {
//   name: "sunil",
//   age: 20,
//   occupation:"B.Tech",
// };
// console .log(student1["age"]);

// const student = [
//   {name: "sunil",age:20,fee:48000},
//   {name:"vishal",age:22,fee:4800},
//   {name:"rahul",age:20,fee:4800},
//   {name:"ram",age:21,fee:4800},
// ];
// const mappedStudent =student.map((item) =>{
//   // console.log("item",item);
//  return {

// ...item,
// fee: item.fee + 100,
// };
// },[])
// console.log("student",student);
// console.log("mappedstudent",mappedStudent );

// const  employee = [
//   {name: "vishal", age: 40, salary: 10,category:" mobile"},
//   {name: "parth", age: 90, salary: 50,category: "cloth"},
//   {name: "shivam", age: 50, salary: 20,category: "laptop"},   
//   ];
//   const filteredEmployee = employee.filter((item)=>{
//     return item.category==="mobile";
//   });
//   console.log("filteredemployee",filteredEmployee);
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
