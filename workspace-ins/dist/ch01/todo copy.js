"use strict";
(() => {
    // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언
    let todoItems;
    // api
    function fetchTodoItems() {
        const todos = [
            { id: 1, title: '안녕', done: false },
            { id: 2, title: '타입', done: false },
            { id: 3, title: '스크립트', done: false },
        ];
        return todos;
    }
    // TODO: Todo Type 지정
    // crud methods
    function fetchTodos() {
        const todos = fetchTodoItems();
        return todos;
    }
    function addTodo(todo) {
        todoItems.push(todo);
    }
    function deleteTodo(index) {
        todoItems.splice(index, 1);
    }
    function completeTodo(index, todo) {
        todo.done = true;
        todoItems.splice(index, 1, todo);
    }
    // business logic
    function logFirstTodo() {
        return todoItems[0];
    }
    function showCompleted() {
        return todoItems.filter(item => item.done);
    }
    function addTwoTodoItems() {
        // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    }
    // 1. Todo 목록을 가져온다.
    todoItems = fetchTodos();
    // 2. 2개의 Todo를 등록한다.
    addTwoTodoItems();
    console.log(todoItems);
})();
