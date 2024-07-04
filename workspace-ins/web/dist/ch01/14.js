"use strict";
// 인터페이스 상속
(() => {
    const todo1 = {
        title: "할일 1",
        content: "등록 할때 사용"
    };
    const todo2 = {
        id: 123,
        done: false,
        title: "할일 2",
        content: "상세 조회에 사용",
        // hello: 'world'
    };
    console.log(todo1, todo2);
})();
