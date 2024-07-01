"use strict";
// 유니언 타입(union type)
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    const msg1 = 'hello';
    const msg2 = 123;
    logString(msg1);
    logNumber(msg2);
    function log(msg) {
        console.log(msg);
    }
    const msg3 = 'world';
    const msg4 = 456;
    log(msg3);
    log(msg4);
})();
