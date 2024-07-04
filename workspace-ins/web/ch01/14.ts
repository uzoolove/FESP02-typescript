// 인터페이스 상속

(()=>{
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    id: number,
    done: boolean,
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "등록 할때 사용"
  }

  const todo2: TodoInfo = {
    id: 123,
    done: false,
    title: "할일 2",
    content: "상세 조회에 사용",
    // hello: 'world'
  }

  console.log(todo1, todo2);
})();