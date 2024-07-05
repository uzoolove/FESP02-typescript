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
        <input className="flex-grow border-2 border-gray-300 p-1" type="text" value={ item.title } placeholder="내용을 입력하세요." />
        <div className="flex ml-auto">
          <button className="bg-gray-500 hover:bg-gray-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">수정</button>
          <button className="bg-red-500 hover:bg-red-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">삭제</button>
          <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">저장</button>
          <button className="bg-gray-500 hover:bg-gray-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">취소</button>
        </div>
      </form>
    </li>
  );
}

export default TodoItem;