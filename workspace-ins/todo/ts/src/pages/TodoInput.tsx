import { TodoItemData } from "#types/todo";
import Button from "@components/Button";
import useMutation from "@hooks/useMutation";
import { useState } from "react";

function TodoInput ({ refetch } : { refetch: () => Promise<void> }){
  const [title, setTitle] = useState('');
  const { send } = useMutation('/todos', {
    method: 'POST'
  });

  const handleAdd = async () => {
    try{
      const result = await send<TodoItemData>({
        body: JSON.stringify({ title, done: false })
      });
      console.log(result.id);
      refetch();
    }catch(err){
      if(err instanceof Error){
        alert(err.message);
      }
    }
  };

  return (
    <div className="flex mb-4">
      <input 
        className="flex-grow border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-500" 
        type="text" 
        placeholder="할일을 입력하세요."
        value={ title }
        onChange={ e => setTitle(e.target.value )} />
      <Button btnSize="md" bgColor="blue" onClick={ handleAdd }>추가</Button>
    </div>
  );
}

export default TodoInput;