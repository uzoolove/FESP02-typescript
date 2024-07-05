import Button from "@components/Button";
import useMutation from "@hooks/useMutation";
import PropTypes from 'prop-types';
import { useState } from "react";

TodoInput.propTypes = {
  refetch: PropTypes.func,
};

function TodoInput({ refetch }){
  const [title, setTitle] = useState('');
  const { send } = useMutation('/todos', {
    method: 'POST'
  });

  const handleAdd = async () => {
    try{
      await send({
        body: JSON.stringify({ title, done: false })
      });

      refetch();
    }catch(err){
      alert(err.message);
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