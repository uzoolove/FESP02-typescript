// 타입 별칭으로 객체의 타입 선언

(()=>{
  // 타입 별칭 생성
  type UserData = {
    name: string;
    age: number,
  };

  const u1: UserData = { name: '용쌤', age: 39 };
  const u2: UserData = { name: '범쌤', age: 33 };

  console.log(u1.name, u2.age);
})();