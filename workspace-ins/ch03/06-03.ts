// Mapped 타입 - 매핑 수정자

(()=>{
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  // type ReadonlyTodo = Readonly<Todo>; // 모든 속성을 읽기 전용으로
  // type PartialTodo = Partial<Todo>; // 모든 속성을 옵셔널로

  // type PartialTodo = {
  //   [ Prop in keyof Todo ]?: Todo[Prop];
  // }

  type MyPartial<T> = {
    [ P in keyof T ]?: T[P];
  }

  const todo1: MyPartial<Todo> = {
    title: '할일 1',
    // content: '내용 1',
  }
  todo1.title = '수정';
  console.log(todo1);
})();