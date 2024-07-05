import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

const data = [
  {
    "id": "1",
    "title": "Typescript 학습",
    "done": true
  },
  {
    "id": "2",
    "title": "Typescript 프로젝트",
    "done": false
  },
  {
    "id": "3",
    "title": "Next.js 학습",
    "done": false
  },
];

function Todo(){
  
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