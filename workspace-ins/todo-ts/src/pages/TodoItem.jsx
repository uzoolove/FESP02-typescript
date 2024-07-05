import Button from '@components/Button';
import Submit from '@components/Submit';
import useMutation from '@hooks/useMutation';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool
  }),
  refetch: PropTypes.func,
};

function TodoItem({ item, refetch }){

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const { send } = useMutation(`/todos/${ item.id }`);

  // 수정 모드로 변경
  const handleEdit = () => {
    setEditMode(true);
  };

  // 수정 사항 저장
  const handleSave = async (e) => {
    e.preventDefault();
    try{
      await send({
        method: 'PATCH',
        body: JSON.stringify({ title })
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }   
  };

  // 수정 취소
  const handleCancel = () => {
    setTitle(item.title);
    setEditMode(false);
  };

  // 완료/미완료 처리
  const handleDone = async () => {
    try{
      await send({
        method: 'PATCH',
        body: JSON.stringify({ done: !item.done })
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }
  };

  // 삭제
  const handleDelete = async (e) => {
    e.preventDefault();
    try{
      await send({
        method: 'DELETE'
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }
  };

  return (
    <li className="flex justify-between p-2 border-b-2 border-gray-200">
      <form className="flex-grow flex item-center">
        { !editMode
          ? <span 
              className={`${ item.done ? 'line-through text-gray-400' : '' } cursor-pointer`}
              onClick={ handleDone } >
                { item.title }
            </span>
          : <input 
              className="flex-grow border-2 border-gray-300 p-1" 
              type="text" 
              value={ title } 
              onChange = { e => setTitle(e.target.value) }
              placeholder="내용을 입력하세요." />
        }
        
        <div className="flex ml-auto">
          { !editMode
            ? <>
                <Button onClick={ handleEdit }>수정</Button>
                <Submit bgColor="red" onClick={ handleDelete }>삭제</Submit>
              </>
            : <>
                <Submit bgColor="blue" onClick={ handleSave }>저장</Submit>
                <Button onClick={ handleCancel }>취소</Button>
              </>
          }
        </div>
      </form>
    </li>
  );
}

export default TodoItem;