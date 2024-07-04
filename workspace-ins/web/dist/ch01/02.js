"use strict";
// 기본 타입
(() => {
    // let str = 'hello'; // 타입 추론
    let str = 'hello';
    let age = 30;
    let done;
    done = true;
    // done = 200;
    let done2;
    done2 = false;
    done2 = 100;
    let todo = { title: '도시락 싸오기', done: true };
    let todoList = ['도시락 싸오기', '프로젝터 밝기 조절'];
    let todoList2 = ['도시락 싸오기', '프로젝터 밝기 조절'];
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
    let items = ['용쌤', 39];
    let userName = '이일구';
    userName = 219;
    let nullVal = null;
    let emptyVal = undefined;
})();
