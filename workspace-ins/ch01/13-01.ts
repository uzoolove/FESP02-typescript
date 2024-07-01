// 인덱스 시그니처 - 문자열

(()=>{
  interface User {
    name: string,
    email: string,
    // address?: string,
    // phone?: string,
    // hobby?: string,
    age: number, // 에러
    [param: string]: string | number
  }

  const ryan: User = {
    name: "라이언",
    email: "ryan@kakao.com",
    age: 12,
    address: "경기도 성남시 분당구",
    // phone: "010-111-2222",
    hobby: "독서"
  }

  const muzi: User = {
    name: '무지',
    email: 'muzi@kakao.com',
    age: 34,
    hobby: 123
  };

  console.log(ryan, muzi);
})();