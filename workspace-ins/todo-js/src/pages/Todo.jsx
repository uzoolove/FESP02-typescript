import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";
import { useEffect } from "react";

function Todo(){

  const fetchData = async() => {
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo App 2</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <TodoInput />
        <TodoList data={ data } />
      </div>
    </div>
  );
}

export default Todo;