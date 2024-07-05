import Button from '@components/Button';
import Submit from '@components/Submit';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool
  }),
};

function TodoItem({ item }){
  return (
    <li className="flex justify-between p-2 border-b-2 border-gray-200">
      <form className="flex-grow flex item-center">
        <span className={`${ item.done ? 'line-through text-gray-400' : '' } cursor-pointer`}>{ item.title }</span>
        <input 
          className="flex-grow border-2 border-gray-300 p-1" 
          type="text" 
          value={ item.title } 
          placeholder="내용을 입력하세요." />
        <div className="flex ml-auto">
          <Button>수정</Button>
          <Submit bgColor="red">삭제</Submit>
          <Submit bgColor="blue">저장</Submit>
          <Button>취소</Button>
        </div>
      </form>
    </li>
  );
}

export default TodoItem;