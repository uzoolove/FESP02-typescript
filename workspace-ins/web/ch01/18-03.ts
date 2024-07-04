// const 사용
// 18-02.ts 복사

(()=>{
  const TYPE_SCRIPT = 'TypeScript';
  const NEXT_JS = 'Next.js';
  
  function getSchedule(subject: string) {
    if(TYPE_SCRIPT === subject){
      return `타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.`;
    }else if(NEXT_JS === subject){
      return `넥스트 JS 수업은 이론 2주 + 프로젝트 4주 입니다.`;
    }
  }

  console.log(getSchedule(TYPE_SCRIPT));
  console.log(getSchedule(NEXT_JS));
})();