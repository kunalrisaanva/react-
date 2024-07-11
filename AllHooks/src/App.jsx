import { useState, useCallback ,useEffect} from "react";
import "./App.css"
import Todo from "./components/Todo";
import Child from "./components/Child";


function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState([]);

  const [data , setData] = useState([])

  // const addTodo = () => {
    
  //   setTodo((prev) => [...prev , "new Todo "] )
  // }
 
  const addTodo = useCallback(() => {
   
    setTodo((prev) => [...prev , "new Todo "])
  },[todo])
  
  const func =  useCallback(() => {
    setData((p) => [...p , "kunal "] )

  },[data])  
  

  // const addTodo = useCallback(() => {
  //   setTodo((t) => [...t, "new todo "]);
  // }, [todo]);


  // const addTodo = () => {
  //   setTodo((t) => [...t,"new todo "])
  // }


  

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Todo todo={todo}  addTodo={addTodo}/>
      <Child data={data} func={func}/>
     
      <h4> {count} </h4>
      <br />
      <button onClick={increment}> + </button>

      
    </>
  );
}

export default App;
