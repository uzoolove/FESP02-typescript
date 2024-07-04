"use strict";
// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)
(() => {
    // type UserField = 'id' | 'name' | 'address' | 'phone';
    // type User = {
    //   [ Prop in UserField ]: string;
    // }
    const ryan = {
        id: "1",
        name: "라이언",
        address: "성남시",
        phone: "010..."
    };
    ryan.id = '2';
    console.log(ryan);
})();
