// Queue - 제네릭 클래스
// 07-01.ts 복사

(()=>{

  interface IQueue<T> {
    data: T[];
    push(item: T): void;
    pop(): T | undefined
  }

  class Queue<T> implements IQueue<T>{
    data: T[] = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  class Stack<T> implements IQueue<T>{
    data: T[] = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.pop();
    }
  }

  const sq = new Queue<string>();
  sq.push('hello');
  sq.push('typescript');
  sq.push('world');

  const s1 = sq.pop();
  const s2 = sq.pop();
  const s3 = sq.pop();

  console.log(s1, s2?.toUpperCase(), s3);

  const nq = new Stack<number>();
  nq.push(10);
  nq.push(20.12345);
  nq.push(300);
  const n1 = nq.pop();
  const n2 = nq.pop();
  const n3 = nq.pop();
  console.log(n1, n2, n3);

})();
