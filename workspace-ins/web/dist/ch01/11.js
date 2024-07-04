"use strict";
// 인터페이스 사용 - 클래스의 타입 지정
(() => {
    // class HighSchool {
    //   constructor(kor, eng) {
    //     this.kor = kor;
    //     this.eng = eng;
    //   }
    //   sum() {
    //     return this.kor + this.eng;
    //   }
    class HighSchool {
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng;
        }
        avg() {
            return this.sum() / 2;
        }
    }
    const muzi = new HighSchool(100, 90);
    console.log(muzi.sum(), muzi.avg());
})();
