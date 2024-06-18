import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  



//  function App() {
//    const [data, setdata] = useState<number>(0);

//    useEffect(()=>{
 
//    },[]);
//  const  addData = () => {
//   const olddata = data;
//  const newdata = olddata + 1;
//  setData(newdata);
//  console.log(newdata);
// };
//   return (
//     <>
//       <button title="tital" onClick={addData}>
// add data
//       </button>
      
//       <div> {data}</div>
//     </>
//   )
// }
// function App() {
//    const[data, setData] = useState<number>(0);

//    useEffect(()=>{
 
//    },[]);
//  const  addData = () => {
//   const olddata = data;
//  const newdata = olddata + 1;
//  setData(newdata);
//  console.log(newdata);
// };
//   return (
//     <>
//       <button title="tital" onClick={addData}>
// add data
//       </button>
      
//       <div> {data}</div>
//     </>
//   )
// }

  const [data, setData] = useState<number>(0);
  const[numberData, setNumberData] = useState<number>(0) ;//usestate it means to change the bata
const numberArray =[1,2,3,4];

const people =[
  {name: "rahul",age:20, status:"active"},
  {name: "sunil",age:25,status:"inactive"},
  {name: "ram",age:30, status:"active"},
];

  useEffect(() => { addData();}, [numberData]);
  const addData = ()=>{
const oldData = data;
const newData = oldData + 1;
setData(newData);
console.log(newData);

  //   setData("world");
  };
  const decrementData = () => {
    setNumberData(numberData - 1);
  };
  return (
    <> 
    <button title="student">
      <Link to="/student">student-details</Link>
    </button>




    <hr />
    <br>
    </br>


    
    <button title="title" onClick={addData}className={`number${data}`}>
      add Data
    </button>

      <div>incremented Data: {data}</div>
      <br />
      <button onClick = {decrementData}> decrementData</button>
      <div>decrementData: {numberData}</div>
      {numberArray.map((item,i) =>{
        return <div key={i}>{item}</div>
      })}


      {/* map with object array */}

      {people.map((item,i) =>{
        return(
          
          <div key={i}>
          {
          item.status ==="active" && (
            <>
            
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            
            <br/>
            
            </>
          )}
        
          </div>
        );
      })}
     <hr/>

{/* else case  */}

     {people.map((item,i) =>{
        return(
          
          <div key={i}>
          {
          item.status ==="active" ? (
            <>
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            <br/>
            </>
          ): (
         
            <>
            
            <div> inactive </div>
            <br/>
            </>
          )}
          </div>
        );
      })}
    
    </>
  )
}




export default HomePage
      
