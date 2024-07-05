import useFetch from "@hooks/useFetch";
import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

function Todo(){

  const { loading, data, error, refetch } = useFetch('/todos');

  if(loading) return <p>로딩중...</p>;
  if(error) return <p>{ error.message }</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo App 2</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <TodoInput refetch={ refetch } />
        <TodoList data={ data } refetch={ refetch } />
      </div>
    </div>
  );
}

export default Todo;