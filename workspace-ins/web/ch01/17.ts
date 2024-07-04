// 인터페이스 선언 병합
// 16.ts 복사

(()=>{
  interface Todo {
    title: string;
    content: string;
  }
  interface Todo {
    id: number,
    title: string,
    // title: number,
    done: boolean,
  }

  const todo3: Todo = {
    title: "할일 3",
    content: "상세 조회에 사용",
    id: 123,
    done: false
  }

  console.log(todo3);
})();