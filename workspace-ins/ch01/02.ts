// 기본 타입

(()=>{
  // let str = 'hello'; // 타입 추론
  let str: string = 'hello';
  let age: number = 30;
  let done: boolean;
  done = true;
  // done = 200;
  let done2;
  done2 = false;
  done2 = 100;

  let todo: object = { title: '도시락 싸오기', done: true };
  let todoList: Array<string> = ['도시락 싸오기', '프로젝터 밝기 조절'];
  let todoList2: string[] = ['도시락 싸오기', '프로젝터 밝기 조절'];

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
  let items: [string, number] = ['용쌤', 39];
  let userName: any = '이일구';
  userName = 219;
  let nullVal: null = null;
  let emptyVal: undefined = undefined;
})();