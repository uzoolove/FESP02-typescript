"use strict";
// 클래스 정의 - private 접근 지정자
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 02-01.ts 복사
(() => {
    class HighSchool {
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng;
        }
        avg() {
            // return this.sum() / 2;
            return Math.round(this.sum() / 2);
        }
    }
    const s1 = new HighSchool(100, 93);
    console.log('평균', s1.avg());
    // s1.eng = 99;
    console.log('평균', s1.avg() / 2);
})();
