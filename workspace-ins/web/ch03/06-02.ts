// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)

(()=>{
  // type UserField = 'id' | 'name' | 'address' | 'phone';
  // type User = {
  //   [ Prop in UserField ]: string;
  // }

  type User = {
    readonly id: string;
    name: string;
    address: string;
    phone?: string;
  }

  // type UserField = 'id' | 'name' | 'address' | 'phone';
  // keyof: 객체로 정의된 타입의 모든 속성을 유니언 타입으로 반환
  // type UserField = keyof User;

  type OptilnalUser = {
    -readonly [ Prop in keyof User ]+?: string | undefined;
  };

  const ryan: OptilnalUser = {
    id: "1",
    name: "라이언",
    address: "성남시",
    phone: "010..."
  };
  ryan.id = '2';

  console.log(ryan);
})();