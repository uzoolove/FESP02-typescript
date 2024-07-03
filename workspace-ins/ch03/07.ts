// 변수와 객체의 타입 추론

(()=>{
  // 기본 데이터 타입의 변수 타입을 추론에 의지(권장)
  const name = '데이지'; // '데이지'(string), 리터럴 타입: 값 자체를 타입으로 사용
  const age = 25;
  // name = '무지';

  // 기본 데이터 타입을 명시적으로 지정할 경우
  let address: string;
  address = '서울시';
  // address = 100;
  // address = true;

  console.log(name, age, address);


  interface Todo {
    title: string;
    content: string;
  }

  // 객체(속성값에 맞춰서 타입 추론)
  const todo1: Todo = {
    title: '할일 1',
    content: '내용 1',
  };
  const todo2: Todo = {
    title: '할일 2',
    content: 'Hello',
  };

  function printTodo(todo: Todo){
    console.log(todo.title, todo.content.toLowerCase());
  }

  printTodo(todo1);
  printTodo(todo2);

})();


