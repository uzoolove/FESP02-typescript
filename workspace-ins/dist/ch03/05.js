// Omit 유틸리티 타입 - 외부 파일에 type 정의
(() => {
    const todo1 = {
        title: "할일 1",
        content: "등록에 사용"
    };
    const todo2 = {
        title: "목록 2",
        id: 2,
        done: false,
        updatedAt: new Date()
    };
    console.log(todo1, todo2);
})();
export {};
