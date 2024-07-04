"use strict";
// 타입 단언
(() => {
    // function getMsg(msg) { // 리턴타입은 any
    //   return msg;
    // }
    function getMsg(msg) {
        return msg;
    }
    const msg1 = getMsg(123.456);
    console.log(msg1.toFixed(2));
    const msg2 = getMsg('hello');
    console.log(msg2.toUpperCase());
})();
