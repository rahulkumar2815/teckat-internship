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
  const arr1 =[1,2,3,4,5,6];
  for (let item of arr1){
    console.log(item);
  }



  return (
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
