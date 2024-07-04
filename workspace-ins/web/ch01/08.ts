// 인터섹션 타입(intersection type)

(()=>{
  type Todo = {
    title: string;
    content: string;
  };

  type TodoInfo = Todo & {
    id: number,
    done: boolean,
  };

  // type TodoData = {
  //   title: string;
  //   content: string;
  //   id?: number,
  //   done?: boolean,
  // };

  const todo1: Todo = {
    title: "타입스크립트 수업",
    content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
  };
  const todo2: TodoInfo = {
    id: 13,
    title: "타입스크립트 수업",
    content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
    done: false
  };

  console.log(todo1, todo2);
})();