// 인덱스 시그니처 - 복합 객체
// TODO: User 인터페이스를 완성해서 실행하시오.
// phones에는 mobile, home, office 중 mobile은 필수로 제공 되어야 함
// 타입 정의는 어떤 방법이든지 상관 없고 출력 결과에 맞춰서 출력할 수 있도록 작성

/* 출력 결과
이름: 라이언
      이메일: ryan@kakao.com
      휴대폰: 010...
      회사 번호: 없음
      집 번호: 031...
    
이름: 네오
      이메일: neo@kakao.com
      휴대폰: 011...
      회사 번호: 02...
      집 번호: 없음
    
이름: 무지
      이메일: muzi@kakao.com
      휴대폰: 010...
      회사 번호: 없음
      집 번호: 없음
*/

(()=>{

  interface Phone {
    mobile: {
      num: string
    },
    [location: string]: {
      num: string
    }
  }

  interface User {
    name: string,
    email: string,
    // TODO: phones 타입 정의
    phones: Phone,
    // phones: {
    //   // home?: {
    //   //   num: string
    //   // },
    //   // office?: {
    //   //   num: string
    //   // },
    //   mobile: {
    //     num: string
    //   },
    //   [location: string]: {
    //     num: string
    //   }
    // }
  }

  const ryan: User = {
    name: '라이언',
    email: 'ryan@kakao.com',
    phones: {
      home: {
        num: '031...'
      },
      mobile: {
        num: '010...'
      }
    }
  };

  const neo: User = {
    name: '네오',
    email: 'neo@kakao.com',
    phones: {
      office: {
        num: '02...'
      },
      mobile: {
        // number: '010...', // 이 주석을 제거하면 컴파일 에러가 발생해야 함
        num: '011...'
      }
    }
  };

  const muzi: User = {
    name: '무지',
    email: 'muzi@kakao.com',
    phones: {
      mobile: {
        num: '010...'
      }
    }
  };

  function getUserInfo(user: User): string {
    // TODO: 출력결과에 맞춰서 작성
    return `이름: ${ user.name }
      이메일: ${ user.email }
      휴대폰: ${ user.phones.mobile.num }
      회사 번호: ${ user.phones.office?.num || '없음' }
      집 번호: ${ user.phones.home?.num || '없음' }`;
  }

  console.log(getUserInfo(ryan));
  console.log(getUserInfo(neo));
  console.log(getUserInfo(muzi));
})();