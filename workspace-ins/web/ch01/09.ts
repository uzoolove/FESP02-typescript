// 인터페이스로 객체의 타입 선언
// 07.ts 복사

(()=>{
  // 인터페이스 정의
  interface UserData {
    name: string;
    age: number,
  };

  const u1: UserData = { name: '용쌤', age: 39 };
  const u2: UserData = { name: '범쌤', age: 33 };
  console.log(u1.name, u2.age);
})();