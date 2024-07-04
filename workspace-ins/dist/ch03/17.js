// 함수 호환
(() => {
    const todo1 = {
        title: "할일 1",
        content: "등록에 사용"
    };
    const todo2 = {
        title: "목록 2",
        id: 2,
        done: false,
        content: '목록에 사용'
    };
    function toString(todo) {
        const str = `[TodoRegist] title: ${todo.title}, content: ${todo.content}`;
        return str;
    }
    // function toString(todo: TodoList) {
    //   const str = `[TodoList] id: ${ todo.id }, title: ${ todo.title }, done: ${ todo.done }, updatedAt: ${ todo.content }`;
    //   return str;
    // }
    console.log(toString(todo1));
    console.log(toString(todo2));
    // console.log(toString('hello'));
    console.log(toString({
        title: "목록 3",
        // id: 3,
        // done: false,
        content: '목록에 사용333',
        // name: '무지',
        // age: 25
    }));
})();
export {};
