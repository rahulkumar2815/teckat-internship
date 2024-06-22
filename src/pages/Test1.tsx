import React, {useEffect, useState } from 'react'

const Test1 = () => {
    const[val,setVal]= useState(0);
useEffect(() => {
console.log("value changed");
},[val]);

  return (
  <>
    <h1>
        school
    </h1>
    <button onClick={() =>
        setVal(val + 1)
    }>Click{val}
    </button>
    </>
  )
}

export default Test1