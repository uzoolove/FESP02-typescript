"use strict";
// typeof 연산자
(() => {
    console.log(typeof 10);
    console.log(typeof 'hello');
    console.log(typeof true);
    console.log(typeof new Function());
    console.log(typeof function () { });
    console.log(typeof undefined);
    console.log(typeof BigInt(Number.MAX_VALUE + 100));
    console.log(typeof Symbol('hello'));
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof new Date());
    console.log(typeof new RegExp(''));
    console.log(typeof new Array());
    console.log(typeof []);
    function print(msg) {
        if (typeof msg === 'string' || msg instanceof Array) {
            console.log(msg.length);
        }
        else if (typeof msg === 'number') {
            console.log(msg.toFixed(2));
        }
    }
    print(['hello', 'world']);
    print('hello');
    print(123.456);
})();
