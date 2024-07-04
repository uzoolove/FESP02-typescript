// 타입 단언

(()=>{
  // function getMsg(msg) { // 리턴타입은 any
  //   return msg;
  // }

  function getMsg<T>(msg: T) { // 리턴타입은 any
    return msg;
  }

  const msg1 = getMsg(123.456) as number;
  console.log(msg1.toFixed(2));

  const msg2 = getMsg<string>('hello');
  console.log(msg2.toUpperCase());

})();