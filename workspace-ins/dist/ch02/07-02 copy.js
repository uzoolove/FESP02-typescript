"use strict";
// Queue - 제네릭 클래스
// 07-01.ts 복사
(() => {
    class Queue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class Stack {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.pop();
        }
    }
    const sq = new Queue();
    sq.push('hello');
    sq.push('typescript');
    sq.push('world');
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
    console.log(s1, s2 === null || s2 === void 0 ? void 0 : s2.toUpperCase(), s3);
    const nq = new Stack();
    nq.push(10);
    nq.push(20.12345);
    nq.push(300);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    console.log(n1, n2, n3);
})();
