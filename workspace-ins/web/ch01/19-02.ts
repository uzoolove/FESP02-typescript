// Enum으로 상수를 그룹화 - 문자형
// 19-01.ts 복사

(()=>{
    // 그룹화되는 상수끼리 중복되지 않도록 값을 지정
    enum SubjectName {
      TYPE_SCRIPT = 'TS',
      NEXT_JS = 'NEXT',
    }

    // enum 병합
    enum SubjectName {
      REACT = '리액트'
    }
  
    function getSchedule(subject: string) {
      if(SubjectName.TYPE_SCRIPT === subject){
        return `타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.`;
      }else if(SubjectName.NEXT_JS === subject){
        return `넥스트 JS 수업은 이론 2주 + 프로젝트 4주 입니다.`;
      }
    }
    console.log(getSchedule(SubjectName.TYPE_SCRIPT));
    console.log(getSchedule(SubjectName.NEXT_JS));
  
    console.log(SubjectName);
})();