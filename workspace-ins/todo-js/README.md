# React Todo App Javascript 버전 개발
## 프로젝트 생성
```sh
cd workspace

npm init vite@latest todo-js

Select a framework: » React
Select a variant: » JavaScript

cd todo-js
npm i
npm run dev
```

## API 서버 구동
* workspace/todo-js/db.json 파일 생성
```json
{
  "todos": [
    { "id": "1", "title": "Typescript 학습", "done": true },
    { "id": "2", "title": "Typescript 프로젝트", "done": false },
    { "id": "3", "title": "Next.js 학습", "done": false },
    { "id": "4", "title": "Next.js 프로젝트", "done": false }
  ]
}
```

* 새로운 터미널에서 실행
```sh
cd workspace/todo-js

npx json-server@latest db.json --port 3300
```

## API 서버 테스트
* workspace/todo-js/test 폴더 생성

### bruno 설치(Postman과 유사)
* bruno 다운로드: <https://www.usebruno.com/downloads>
* 각자 OS에 맞는 버전 다운로드 후 설치
  - Windows 사용자일 경우 Windows x64 다운로드
  - 맥OS 사용자일 경우 M1, M2등 Apple Silicon 칩을 사용하면 Mac Apple Silicon 다운로드
  - M1, M2 이전 세대일 경우 Mac x64 다운로드

### Collection 생성
* bruno 실행
* Create Collection
  - Name: Todo App
  - Location: workspace/todo-js/test 폴더 선택
  - Folder Name: api

### CRUD 테스트
#### 할일 등록(Create)
* Todo App 컬렉션의 더보기 메뉴 > New Request
  - Name: 할일 등록
  - URL: POST, http://localhost:3300/todos
  - Create
* 할일 등록 > Body > No Body를 JSON으로 변경
```json
{
  "title": "Next.js 프로젝트",
  "done": false
}
```

#### 할일 조회(Read)
* Todo App 컬렉션의 더보기 메뉴 > New Request
  - Name: 할일 목록 조회
  - URL: GET, http://localhost:3300/todos
  - Create

#### 할일 수정(Update)
* Todo App 컬렉션의 더보기 메뉴 > New Request
  - Name: 할일 수정
  - URL: PATCH, http://localhost:3300/todos/2
  - Create
* 할일 수정 > Body > No Body를 JSON으로 변경
```json
{
  "done": true
}
```

#### 할일 삭제(Delete)
* Todo App 컬렉션의 더보기 메뉴 > New Request
  - Name: 할일 삭제
  - URL: DELETE, http://localhost:3300/todos/1
  - Create

## 샘플 복사
* sample/04/todo-sample 폴더를 workspace/todo-js에 복사
  - todo-sample/public/todo.html -> todo-js/public/todo.html
  - todo-sample/public/images/ -> todo-js/public/images
* <http://localhost:5173/todo.html> 접속

## 스타일 적용
### tailwind css 적용
* todo.html <head>에 tailwind css 추가
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```

* body 영역에 tailwind css 추가
```html
<body>
  <div id="root">
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold text-center mb-8">Todo List - Sample</h1>
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex mb-4">
          <input class="flex-grow border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-orange-500" type="text" name="title" placeholder="할일을 입력하세요.">
          <button type="button" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded">추가</button>
        </div>
        <ul>
          <li class="flex justify-between p-2 border-b-2 border-gray-200">
            <form class="flex-grow flex items-center">
              <span class="cursor-pointer">리액트 다시보기</span>
              <div class="flex ml-auto">
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
                <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
              </div>
            </form>
          </li>
          <li class="flex justify-between p-2 border-b-2 border-gray-200">
            <form class="flex-grow flex items-center">
              <span class="line-through text-gray-400 cursor-pointer">자바스크립트 복습</span>
              <div class="flex ml-auto">
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
                <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
              </div>
            </form>
          </li>
          <li class="flex justify-between p-2 border-b-2 border-gray-200">
            <form class="flex-grow flex items-center">
              <input class="flex-grow mr-4 border-2 border-gray-300 p-1" type="text" name="title" value="타입스크립트 공부" placeholder="내용을 입력하세요.">
              <div class="flex ml-auto">
                <button type="button" className="bg-blue-500 hover:bg-blue-600 py-1 px-2 ml-2 text-sm text-white rounded">저장</button>
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">취소</button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</body>
```

### tailwind 설치
```sh
npm install -D tailwindcss postcss autoprefixer
```

### 설정 파일 생성
* tailwind.config.js
* postcss.config.js(-p 옵션으로 생성)
```sh
npx tailwindcss init -p
```

### 설정 파일 수정
* tailwind.config.js
  - tailwindcss를 적용할 대상 확장자 지정
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{js,jsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

### tailwindcss 지시어 추가
* src/index.css
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  - 지시어 경고 수정
    + VSCode가 @tailwind 키워드를 인식할 수 없어서 경고 발생할 경우
    + VScode 설정에서 unknown at rules 검색 후 CSS > Lint: Unknown At Rules를 Ignore로 변경
    
### VSCode 플러그인
* Tailwind CSS IntelliSense
  - VSCode에서 tainwindcss 관련 자동 완성, 구문 강조, 린팅 같은 기능 제공
  - 마우스 오버시 실제 적용되는 CSS가 툴팁으로 표시

## 리액트 컴포넌트 개발

### 설정 파일 작성
* jsconfig.json 생성
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["/*"],
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@hooks/*": ["hooks/*"]
    }
  }
}
```

* vite.config.js 파일 수정
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
    ],
  },
})
```