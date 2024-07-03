// Pick 유틸리티 타입
// export interface Todo {
//   id: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }
(() => {
    const todo1 = {
        title: "할일 1",
        content: "등록에 사용"
    };
    const todo2 = {
        title: "목록 2",
        id: 2,
        done: false,
        updatedAt: new Date()
    };
    const user = {
        id: 1,
        name: '무지'
    };
    console.log(todo1, todo2, user);
})();
export {};
