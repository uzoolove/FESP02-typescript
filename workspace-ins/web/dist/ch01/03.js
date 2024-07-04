"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        return 'Count: ' + count;
    }
    const result = getCount(20);
    // const result = getCount('hello'); // 컴파일 에러
    // const result = getCount(); // 컴파일 에러
    // const result = getCount(10, 20); // 컴파일 에러
    console.log(result.toUpperCase());
})();
