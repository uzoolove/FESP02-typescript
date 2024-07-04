"use strict";
// 함수가 null을 리턴할 수 있을 경우
(() => {
    const a = document.querySelector('a[href="dist/ch03/11.js"]');
    // Non-null assertion(!)
    // a!.innerHTML += ' 클릭';
    if (a !== null) { // 타입 가드
        a.innerHTML += ' 클릭';
        console.log(a.href);
    }
})();
