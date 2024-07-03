"use strict";
// Readonly 유틸리티 타입
(() => {
    const todo1 = {
        title: '할일 1',
        content: '내용 1',
    };
    todo1.title = '수정';
    console.log(todo1);
    const todo2 = {
        title: '할일 2',
        content: '내용 2',
    };
    console.log(todo2);
    // todo2.title = '수정'; // error
    const todo3 = {
        title: '할일 3',
        content: '내용 3',
    };
    console.log(todo3);
    // todo3.title = '수정'; // error
})();
