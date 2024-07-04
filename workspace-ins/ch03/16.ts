// 타입 가드 함수 작성

(()=>{
  interface User {
    name: string;
    age: number;
    admin: false;
  }

  interface AdminUser {
    name: string;
    admin: true;
  }

  interface GuestUser {
    name: '게스트';
    age: 0
  }

  const user1: User = {
    name: '무지',
    age: 30,
    admin: false,
  };

  const user2: AdminUser = {
    name: '라이언',
    admin: true,
  };

  const user3: GuestUser = {
    name: '게스트',
    age: 0,
  };

  function helloUser(user: User | AdminUser | GuestUser) {
    if(isAdmin(user)){
      console.log(`안녕하세요. ${ user.name } 관리자님.`);
    }else{ // 나이를 출력
      console.log(`안녕하세요. ${ user.name } 회원님.`);
    }
  }

  // 타입 가드 구문이 복잡하고 여러번 사용해야 할 경우
  // user is AdminUser: true를 리턴할 경우 user의 타입이 AdminUser가 확정됨
  function isAdmin(user: User | GuestUser | AdminUser): user is AdminUser{
    return 'admin' in user && user.admin;
  }

  helloUser(user1);
  helloUser(user2);
})();