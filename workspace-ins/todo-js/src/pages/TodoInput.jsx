function TodoInput(){
  return (
    <div className="flex mb-4">
      <input className="flex-grow border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-500" type="text" placeholder="할일을 입력하세요." />
      <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded" type="button">추가</button>
    </div>
  );
}

export default TodoInput;