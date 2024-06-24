import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";



function App() {
  const [count, setCount] = useState(0);

  const info  = {
    email:"kunalrisaanva12gmail.com",
    username:"kunalrisaanva"
  }

  const newArray = [1,2,3,4];



  return (
    <>
      <h1 className="bg-green-800 p-4 rounded-xl d mb-4"> kunal </h1>

      <Card  userName = "kunal "  btnText = "click me" />
      <Card  userName = " risaanva " btnText = "visit me" />


    </>
    
  );
}

export default App;
