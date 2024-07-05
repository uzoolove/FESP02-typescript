function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex mb-4">
          <input className="flex-grow border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-500" type="text" placeholder="할일을 입력하세요." />
          <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded" type="button">추가</button>
        </div>
        <ul>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex item-center">
              <span className="cursor-pointer">리액트 다시보기</span>
              <div className="flex ml-auto">
                <button className="bg-gray-500 hover:bg-gray-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">수정</button>
                <button className="bg-red-500 hover:bg-red-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">삭제</button>
              </div>
            </form>
          </li>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex item-center">
              <span className="cursor-pointer">자바스크립트 복습</span>
              <div className="flex ml-auto">
                <button className="bg-gray-500 hover:bg-gray-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">수정</button>
                <button className="bg-red-500 hover:bg-red-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">삭제</button>
              </div>
            </form>
          </li>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex item-center">
              <input className="flex-grow border-2 border-gray-300 p-1" type="text" value="타입스크립트 공부" placeholder="내용을 입력하세요." />
              <div className="flex ml-auto">
                <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">저장</button>
                <button className="bg-gray-500 hover:bg-gray-600 py-2 px-4 ml-2 text-sm text-white rounded" type="button">취소</button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App
