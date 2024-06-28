# 멋쟁이 사자처럼 Front-End School Plus 2기: TypeScript 프로그래밍
* GitHub Page에서 보기: <https://uzoolove.github.io/FESP02-typescript>
* 소스 코드(GitHub): <https://github.com/uzoolove/FESP02-typescript>
* 예제 테스트(GitHub Page): <https://uzoolove.github.io/FESP02-typescript/workspace-ins>

## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치: <https://nodejs.org/en/download>
2. Visual Studio Code 설치: <https://code.visualstudio.com/download>
3. Git 설치: <https://git-scm.com/downloads>

### Visual Studio Code 설정
1. VSCode 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* `https://github.com/uzoolove/FESP02-typescript.git` 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

### TypeScript Compiler 설치
* node.js용 TypeScript Compiler 모듈을 global로 설치(어느 경로에서나 tsc 명령어 사용 가능)
* VSCode > View > Terminal

```sh
npm i typescript -g
```

## 샘플 코드 복사
* workspace 폴더 생성
* sample 폴더를 workspace 폴더로 복사해서 실습 진행
  - sample/01 폴더 내부의 파일과 폴더를 workspace 폴더에 복사
* 완성된 강사의 코드는 [workspace-ins](<https://github.com/uzoolove/FESP02-typescript/workspace-ins>) 폴더에서 확인

## 터미널 테스트
* workspace/ch01/01.ts 파일 작성

```ts
function hello(name: string): string {
  return 'Hello ' + name;
}
console.log(hello('TypeScript'));
```

* VSCode 터미널에서 컴파일

```sh
tsc 01.ts
```

* 실행

```sh
node 01.js
```

## 브라우저 테스트
* 강사의 완성된 코드를 테스트하려면 workspace-ins 폴더로 이동

### 타입스크립트 설정 파일
* 타입스크립트 설정 파일(tsconfig.json) 생성
```sh
tsc --init
```

* tsconfig.json 파일 수정
  - "rootDir": "./" 주석 해제
  - "outDir": "./" 주석 해제 후 "outDir": "./dist"로 수정

### tsc --watch 옵션
* 하위 폴더를 포함해서 ts 파일 변경을 감지하고 자동으로 컴파일한 후 outDir로 지정한 폴더에 js 파일 생성

```sh
tsc --watch
```

### 웹서버 구동
* 새로운 터미널에서 실행

```sh
npx serve .
```

* <http://localhost:3000> 접속
  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 다른 포트로 접속
* 각 예제 클릭해서 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인

## ESLint
* 정적 문법 검사 및 코딩 스타일 등을 점검해서 런타임 오류나 코드의 가독성을 높이기 위해 사용하는 도구
* 규칙 예시
  - const로 선언한 변수에 값을 재할당하면 경고
  - 변수를 선언하지 않고 사용하면 경고
  - 선언후 사용안되는 변수가 있으면 경고
  - 들여쓰기를 스페이스 2개, 4개 또는 탭으로 할지 여부를 지정해서 규칙을 지키지 않으면 경고
* 사전에 정의한 규칙을 지키지 않는다면 경고나 에러를 띄워서 문법 오류나 코딩 스타일을 유지할 수 있게 도와줌

### ESLint 설정
* 설정 파일 작성 방법: <https://eslint.org/docs/latest/use/configure/configuration-files>
* 프로젝트 루트에서 다음 명령 실행후 프로젝트 환경 질문에 답변하면 .eslint.config.mjs 파일 생성됨
* package.json 파일 생성

```sh
npm init -y
```

* .eslint.config.mjs 파일 생성

```sh
npx eslint@latest --init
또는
npm init @eslint/config

Need to install the following packages: @eslint/create-config@1.1.5 Ok to proceed? (y)
  - y
? How would you like to use ESLint?
  - To check syntax and find problems
? What type of modules does your project use?
  - JavaScript modules (import/export)
? Which framework does your project use?
  - None of these
? Does your project use TypeScript?
  - Yes
? Where does your code run?
  - browser
The config that you have selected requires the following dependencies:

eslint@9.x, globals, @eslint/js, typescript-eslint 
? Would you like to install them now?
  - Yes
? Which package manager do you want to use?
  - npm
```

* .eslint.config.mjs

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
```

### 설정 파일 내용
* files: 확장자가 js, mjs, cjs, ts인 경우에 적용
* languageOptions.globals: 각 전역 변수를 덮어쓰기 가능한지 여부 지정(true면 덮어쓰기 가능, false면 읽기 전용, 기본은 false)
  - globals.browser: 브라우저의 전역 변수에 대해서 기본값(false, 읽기 전용) 적용(location, 이벤트 핸들러에 대해서만 true)
* pluginJs.configs.recommended: ESLint 팀에서 권장하는 규칙 활성화
  - pluginJs.configs.all: 모든 ESLint 규칙 활성화
* tseslint.configs.recommended
  - tseslint: ESLint와 TypeScript를 함께 사용할 수 있게 해주는 도구
  - TypeScript에서 권장하는 ESLint 규칙 활성화
  - <https://typescript-eslint.io/packages/typescript-eslint> 참조

* rules: 사용자 정의 규칙 지정
  - 이전의 모든 규칙 보다 우선함
  - 'off' 또는 0
  - 'warn' 또는 1
  - 'error' 또는 2

### 커스텀 규칙 설정
* 필요에 따라 .eslint.config.mjs 파일의 rules에 커스텀 룰 추가
* 작성 방법
  - Javascript: <https://eslint.org/docs/latest/rules>
  - Typescript: <https://typescript-eslint.io/rules>

```js
export default [
  ......
  {
    "rules": {
      "no-var": "off", // var 키워드 사용 가능
      "prefer-const": "warn", // 변수가 재할당 되지 않는다면 let 대신 const 사용
      "no-cond-assign": "warn", // 조건문에서 변수값 할당식 사용
      "no-redeclare": "warn", // 변수 중복 선언
      "@typescript-eslint/no-unused-vars": "warn", // 사용하지 않는 변수
      "@typescript-eslint/explicit-function-return-type": "off", // 함수의 리턴타입을 명시적으로 지정하지 않아도 됨
      "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용
    }
  }
]
```

### ESLint 실행
* 현재 폴더내의 모든 파일 검사
```sh
npx eslint .
```
* 지정한 폴더내의 모든 파일 검사
```sh
npx eslint ./ch01
```
* 지정한 파일 검사
```sh
npx eslint ./ch01/ex01-01.ts
```

### VSCode ESLint 플러그인 설치
* VSCode 편집창에서 바로 ESLint 경고/에러 확인 가능
* VSCode > Extensions > ESLint 검색, 설치
  - VSCode에서 오픈한 작업폴더에 설치된 eslint 모듈이나 글로벌로 설치된 eslint 모듈을 사용하므로 eslint 모듈이 설치되어 있어야 함
  ```sh
  npm i -D eslint
  # 또는
  npm i -g eslint
  ```

## 수업 자료
* PPT 폴더 확인

