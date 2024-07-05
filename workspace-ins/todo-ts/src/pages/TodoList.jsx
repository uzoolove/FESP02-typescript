import TodoItem from "@pages/TodoItem";

function TodoList({ data, refetch }){
  const items = data?.map(item => <TodoItem key={ item.id } item={ item } refetch={ refetch } />);
  return (
    <ul>
      { items }
    </ul>
  );
}

export default TodoList;