import { useState, useCallback } from "react";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "new todo "]);
  }, [todo]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Todo addTodo={addTodo} todo={todo} />

      <h4> {count} </h4>
      <br />
      <button onClick={increment}> + </button>
    </>
  );
}

export default App;
