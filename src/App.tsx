import { useEffect, useState } from "react";

import "./App.ccs";


function App() {
  const [teacher, setteacher] = useState<string>();
useEffect(() => {
  setteacher("world");
},[]);
  return 
  (
    <>
      <div>{teacher}</div>

        </>

  )
}

export default App
