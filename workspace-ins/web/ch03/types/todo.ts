export interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TodoInfo = Omit<Todo, 'createdAt'>;

export type TodoList = Omit<TodoInfo, 'content'>;

export type TodoRegist = Pick<Todo, 'title' | 'content'>;