import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 const button = () => {
    const [data, setData] = useState<number>(0);
  
  useEffect(() => { 
  const addData = ()=>{
const oldData = data;
const newData = oldData + 1;
setData(newData);
console.log(newData);
};

 


  return ( 
     <>
    <button title="student">
      
    </button>
    <hr />
    <br>
    </br>


    
    <button title="title" onClick={addData}className={`number${data}`}>
      add Data
    </button>
    <div>incremented Data: {data}</div>
      <br />
</>
  ),
}

export default button 
