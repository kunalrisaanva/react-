import { memo } from "react";

const Todo = ({todo , addTodo}) => {
 

  console.log("Todo component render ");

  return (
    <div>

     {
      todo.map((data ,index) => {
         return <p key={index}> {data} </p>
      })
     }

     <button onClick={addTodo}>add To do </button>








      {/* {todo.map((data, index) => {
        return <p key={index}> {data} </p>;
      })}

      <button onClick={addTodo}> add Todo </button> */}
    </div>
  );
};

export default memo(Todo)
