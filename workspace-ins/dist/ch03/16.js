"use strict";
// 타입 가드 함수 작성
(() => {
    const user1 = {
        name: '무지',
        age: 30,
        admin: false,
    };
    const user2 = {
        name: '라이언',
        admin: true,
    };
    const user3 = {
        name: '게스트',
        age: 0,
    };
    function helloUser(user) {
        if (isAdmin(user)) {
            console.log(`안녕하세요. ${user.name} 관리자님.`);
        }
        else { // 나이를 출력
            console.log(`안녕하세요. ${user.name} 회원님.`);
        }
    }
    // 타입 가드 구문이 복잡하고 여러번 사용해야 할 경우
    // user is AdminUser: true를 리턴할 경우 user의 타입이 AdminUser가 확정됨
    function isAdmin(user) {
        return 'admin' in user && user.admin;
    }
    helloUser(user1);
    helloUser(user2);
})();
