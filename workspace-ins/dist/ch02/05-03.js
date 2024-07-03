"use strict";
// echo 함수 - 제네릭 타입 제약
// 05-02.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(200));
    // console.log(echo<boolean>(true));
    const str = echo('World');
    const num = echo(123.456);
    console.log(str.toLowerCase(), num.toFixed(2));
    function echo2(msg) {
        console.log('msg.length', msg.length);
        return msg;
    }
    echo2('hello');
    echo2([100, 200]);
    // echo2(100);
})();
