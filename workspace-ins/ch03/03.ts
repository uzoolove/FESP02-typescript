// Partial 유틸리티 타입
(()=>{
  interface Todo {
    title: string;
    content: string;
  }

  // 인터페이스로 정의
  // interface PartialTodo extends Partial<Todo> {}

  // type 별칭으로 정의
  // type PartialTodo = Partial<Todo>;

  const todo1: Partial<Todo> = {
    title: '할일 1',
    // content: '내용 1',
  }

  console.log(todo1);
})();