"use strict";
(() => {
    var todo1 = {
        title: '할일 1',
        content: '등록에 사용'
    };
    var todo2 = {
        _id: 2,
        title: '할일 2',
        content: '상세조회에 사용',
        done: true
    };
    var todo3 = {
        _id: 3,
        title: '할일 3',
        done: false
    };
    console.log(todo1, todo2, todo3);
})();
