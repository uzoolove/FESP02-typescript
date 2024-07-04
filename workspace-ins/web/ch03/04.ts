// Pick 유틸리티 타입

// import { Todo } from "./types/todo";
// import { User } from "./types/user";

import { Todo, User } from './types';

// export interface Todo {
//   id: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

(()=>{
  type TodoRegist = Pick<Todo, 'title' | 'content'>;
  type TodoList = Pick<Todo, 'id' | 'title' | 'done' | 'updatedAt'>;

  const todo1: TodoRegist = {
    title: "할일 1",
    content: "등록에 사용"
  };
  const todo2: TodoList = {
    title: "목록 2",
    id: 2,
    done: false,
    updatedAt: new Date()
  };

  const user: User = {
    id: 1,
    name: '무지'
  };

  console.log(todo1, todo2, user);

})();