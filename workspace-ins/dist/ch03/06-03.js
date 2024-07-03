"use strict";
// Mapped 타입 - 매핑 수정자
(() => {
    const todo1 = {
        title: '할일 1',
        // content: '내용 1',
    };
    todo1.title = '수정';
    console.log(todo1);
})();
