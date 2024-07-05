import Button from "@components/Button";

function TodoInput(){
  return (
    <div className="flex mb-4">
      <input className="flex-grow border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-orange-500" type="text" placeholder="할일을 입력하세요." />
      <Button btnSize="md" bgColor="blue">추가</Button>
    </div>
  );
}

export default TodoInput;