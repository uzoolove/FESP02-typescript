"use strict";
// 인터페이스 상속 - 계층 구조
// 14.ts 복사
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
    };
    const todo3 = {
        id: 124,
        done: false,
        title: "할일 4",
        content: "시간을 포함한 상세 조회에 사용",
        createdAt: new Date(),
        updatedAt: new Date()
    };
    console.log(todo1, todo2, todo3);
})();
