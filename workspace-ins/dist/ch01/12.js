"use strict";
// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성
(() => {
    const todo1 = { id: 1, title: '할일1', content: '인터페이스 사용', done: true };
    todo1.title = '타이틀 수정';
    // todo1.id = 2;
    const todo2 = { id: 2, title: '할일2', content: '인터페이스 사용2' };
    // done 값을 반전시킨다.
    // const toggleDone = (todo: ITodo): void => {
    const toggleDone = (todo) => {
        todo.done = !todo.done;
    };
    console.log(todo1, todo2);
    toggleDone(todo1);
    toggleDone(todo2);
    console.log(todo1, todo2);
})();
