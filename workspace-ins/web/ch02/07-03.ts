// Map - 제네릭 클래스
// 07-02.ts 복사

(()=>{

  interface IMap<K extends string | number, V> {
    set(key: K, value: V): void;
    get(key: K): V;
    delete(key: K): void;
    has(key: K): boolean;
    clear(): void;
  }

  class MyMap<K extends string | number, V> implements IMap<K, V>{
    // index signature는 리터럴 타입이나 제네릭 타입을 키로 사용할 수 없음.
    private items: { [key: string|number]: V } = {};
    set(key: K, value: V): void {
      this.items[key] = value;
    }
    get(key: K): V {
      return this.items[key];
    }
    delete(key: K): void {
      delete this.items[key];
    }
    has(key: K): boolean {
      return this.items[key] !== undefined;
    }
    clear(): void {
      this.items = {};
    }
  }

  // Map 생성
  const mymap = new MyMap<string, string>();
  // const mymap = new Map<string, string|number>();


  // 데이터 추가
  mymap.set("hello", 'world');
  mymap.set("js", 'JavsScript');
  mymap.set("ts", 'TypeScaript');
  mymap.set("next", 14.12345);

  // 조회
  const m1 = mymap.get('next');
  if(typeof m1 === 'string'){ // 타입 가드
    console.log(m1.toUpperCase());
  }else if(typeof m1 === 'number'){
    console.log(m1.toFixed(2));
  }
  
  console.log(mymap.get('hello'));

  // 삭제
  mymap.delete ('hello');

  // 존재 확인
  console.log(mymap.has('hello'));

  console.log(mymap);

  // 초기화
  console.log(mymap.clear());

  console.log(mymap);
})();
