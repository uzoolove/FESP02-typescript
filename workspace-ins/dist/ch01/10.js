"use strict";
// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// 09.ts 복사
(() => {
    ;
    // 인터페이스를 객체의 타입으로 지정
    const u1 = { name: '용쌤', age: 39 };
    const u2 = { name: '범쌤', age: 33 };
    console.log(u1.name, u2.age);
    // 함수의 리턴 타입으로 인터페이스 지정
    const createUser = (name, age) => {
        return { name, age };
    };
    // 함수의 매개변수로 인터페이스 지정
    const getAge = (user) => {
        return user.age;
    };
    const u3 = createUser('슬비쌤', 35);
    console.log(u3, getAge(u3));
})();
