"use strict";
// echo 함수 - 제네릭 함수
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(200));
    console.log(echo(true));
    const str = echo('World');
    const num = echo(123.456);
    console.log(str.toLowerCase(), num.toFixed(2));
})();
