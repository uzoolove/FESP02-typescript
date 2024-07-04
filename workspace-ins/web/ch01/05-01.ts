// 유니언 타입(union type)

(()=>{
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  const msg1: string = 'hello';
  const msg2: number = 123;

  logString(msg1);
  logNumber(msg2);
  
  function log(msg: number | string) {
    console.log(msg);
  }

  const msg3: string = 'world';
  const msg4: number = 456;
  
  log(msg3);
  log(msg4);

})();