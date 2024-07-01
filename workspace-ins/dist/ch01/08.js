"use strict";
// 인터섹션 타입(intersection type)
(() => {
    // type TodoData = {
    //   title: string;
    //   content: string;
    //   id?: number,
    //   done?: boolean,
    // };
    const todo1 = {
        title: "타입스크립트 수업",
        content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
    };
    const todo2 = {
        id: 13,
        title: "타입스크립트 수업",
        content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
        done: false
    };
    console.log(todo1, todo2);
})();
