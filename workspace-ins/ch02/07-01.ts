// Queue - 일반 클래스

(()=>{
  interface Queue {
    data: string[];
    push(item: string): void;
    pop(): string | undefined;
  }
  class StringQueue implements Queue{
    data: string[] = [];
    push(item: string) {
      this.data.push(item);
    }
    pop(): string | undefined {
      return this.data.shift();
    }
  }

  const sq = new StringQueue();
  sq.push('hello');
  sq.push('typescript');
  sq.push('world');

  const s1 = sq.pop();
  const s2 = sq.pop();
  const s3 = sq.pop();

  console.log(s1, s2?.toUpperCase(), s3);


  interface NumQueue {
    data: number[];
    push(item: number): void;
    pop(): number | undefined;
  }
  class NumberQueue implements NumQueue{
    data: number[] = [];
    push(item: number) {
      this.data.push(item);
    }
    pop(): number | undefined {
      return this.data.shift();
    }
  }

  const nq = new NumberQueue();
  nq.push(10);
  nq.push(20.12345);
  nq.push(300);
  const n1 = nq.pop();
  const n2 = nq.pop();
  const n3 = nq.pop();
  console.log(n1, n2?.toFixed(2), n3);

})();
