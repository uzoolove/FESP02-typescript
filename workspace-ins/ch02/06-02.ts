// 드롭다운 리스트 생성 - 타입스크립트
// 06-01.js 복사

(()=>{

  interface ICity {
    value: string;
    selected?: boolean;
  }

  interface IZipcode {
    value: number;
    selected?: boolean;
  }

  const cityList: ICity[] = [
    { value: 'Seoul', selected: false },
    { value: 'busan' },
    { value: 'GwangJu', selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: IZipcode[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  function createDropdownList(list: (ICity | IZipcode)[]){
    let value;
    const options = list.map(item => {
      value = item.value;
      return `<option selected="${ item.selected ? 'selected' : '' }">${ typeof value === 'string' ? value.toLowerCase() : value }</option>`;
    });
    return `<select>\n${ options.join('\n') }\n</select>`;   
  }

  console.log(createDropdownList(cityList));
  console.log(createDropdownList(zipcodeList));
})();
