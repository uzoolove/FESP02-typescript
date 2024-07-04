"use strict";
// Map - 제네릭 클래스
// 07-02.ts 복사
(() => {
    class MyMap {
        constructor() {
            // index signature는 리터럴 타입이나 제네릭 타입을 키로 사용할 수 없음.
            this.items = {};
        }
        set(key, value) {
            this.items[key] = value;
        }
        get(key) {
            return this.items[key];
        }
        delete(key) {
            delete this.items[key];
        }
        has(key) {
            return this.items[key] !== undefined;
        }
        clear() {
            this.items = {};
        }
    }
    // Map 생성
    const mymap = new MyMap();
    // const mymap = new Map<string, string|number>();
    // 데이터 추가
    mymap.set("hello", 'world');
    mymap.set("js", 'JavsScript');
    mymap.set("ts", 'TypeScaript');
    mymap.set("next", 14.12345);
    // 조회
    const m1 = mymap.get('next');
    if (typeof m1 === 'string') { // 타입 가드
        console.log(m1.toUpperCase());
    }
    else if (typeof m1 === 'number') {
        console.log(m1.toFixed(2));
    }
    console.log(mymap.get('hello'));
    // 삭제
    mymap.delete('hello');
    // 존재 확인
    console.log(mymap.has('hello'));
    console.log(mymap);
    // 초기화
    console.log(mymap.clear());
    console.log(mymap);
})();
