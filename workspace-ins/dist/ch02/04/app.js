// 03/app.js 복사
const data = { a: 10, b: 20 };
// named export를 불러 올때는 구조분해할당 사용
// import { sum, substract } from './math.js';
// console.log(1, sum(data), substract(data));
// import MyMath from './math.js';
// console.log(2, MyMath.sum(data), MyMath.divide(data));
import MyMath, { sum as total, substract, divide } from './math.js';
console.log(2, MyMath.sum(data), substract(data), divide(data)), total(data);
