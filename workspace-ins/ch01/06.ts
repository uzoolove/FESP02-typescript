// 유니언 타입에 타입 별칭 지정

(()=>{
  type Message = number | string;

  function log(msg: Message) {
    return msg;
  }

  const result1: string | number = log('hello');
  const result2: Message = log(100);

  console.log(result1);
  console.log(result2);
})();