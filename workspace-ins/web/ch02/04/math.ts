// 03/math.js 복사
// Named export
export type DataType = {
  a: number,
  b: number,
}
export function sum(data: DataType) {
  return data.a + data.b;
}
export function substract(data: DataType) {
  return data.a - data.b;
}
export function divide(data: DataType) {
  return data.a / data.b;
}

// default export
export default { sum, divide };