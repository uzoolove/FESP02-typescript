// echo 함수 - 제네릭 함수

(()=>{
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(200));
  console.log(echo<boolean>(true));

  const str = echo('World');
  const num = echo(123.456);

  console.log(str.toLowerCase(), num.toFixed(2));
})();
