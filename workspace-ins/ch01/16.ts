// 인터페이스 다중 상속

(()=>{
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoList {
    id: number,
    title: string,
    done: boolean,
  }

  interface TodoInfo extends Todo, TodoList {
    createdAt: Date,
    updatedAt: Date,
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "등록 할때 사용"
  }

  const todo2: TodoList = {
    id: 123,
    done: false,
    title: "할일 2",
    // content: "상세 조회에 사용",
  }

  const todo3: TodoInfo = {
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "할일 3",
    content: "상세 조회에 사용",
    id: 123,
    done: false
  }

  console.log(todo1, todo2, todo3);
})();