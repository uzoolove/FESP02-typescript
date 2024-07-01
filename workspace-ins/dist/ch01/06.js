"use strict";
// 유니언 타입에 타입 별칭 지정
(() => {
    function log(msg) {
        return msg;
    }
    const result1 = log('hello');
    const result2 = log(100);
    console.log(result1);
    console.log(result2);
})();
