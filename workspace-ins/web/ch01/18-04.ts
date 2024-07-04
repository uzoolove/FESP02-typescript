// 상수를 직접 그룹화
// 18-03.ts 복사

(()=>{
  type ReadOnly = {
    readonly TYPE_SCRIPT: number;
    readonly NEXT_JS: number;
  }
  // 그룹화되는 상수끼리 중복되지 않도록 값을 지정
  const SubjectName: ReadOnly = {
    TYPE_SCRIPT: 100,
    NEXT_JS: 101,
  }

  function getSchedule(subject: number) {
    if(SubjectName.TYPE_SCRIPT === subject){
      return `타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.`;
    }else if(SubjectName.NEXT_JS === subject){
      return `넥스트 JS 수업은 이론 2주 + 프로젝트 4주 입니다.`;
    }
  }
  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));
})();