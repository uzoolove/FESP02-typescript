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
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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

### 메인페이지 작성
* index.html 수정
* todo.html의 <head> 부분으로 교체
  - <head>의 tailwind css 삭제

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo App</title>

    <!-- 기본 meta 태그 -->
    <meta name="description" content="간단하고 직관적인 Todo 애플리케이션으로, 작업을 효율적으로 관리하세요." />
    <meta name="keywords" content="Todo, 작업 관리, 할 일 목록, 생산성, 웹 애플리케이션" />
    <meta name="author" content="FESP 2기" />

    <!-- Open Graph meta 태그 (소셜 미디어용) -->
    <meta property="og:title" content="Todo 애플리케이션" />
    <meta property="og:description" content="간단하고 직관적인 Todo 애플리케이션으로, 작업을 효율적으로 관리하세요." />
    <meta property="og:image" content="/images/frontendplus.webp" />
    <meta property="og:url" content="https://todo-js.fesp.shop" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Todo 애플리케이션" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### App 컴포넌트 작성
* src/App.jsx 수정
* todo.html의 <div id="root"> 하위 태그 복사
```jsx
function App() {
  return (
    <div class="container mx-auto p-4">
      ......
    </div>
  );
}

export default App;
```

* JSX 문법에 맞춰서 수정
```jsx
function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex mb-4">
          <input className="flex-grow border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-orange-500" type="text" name="title" placeholder="할일을 입력하세요." />
          <button type="button" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded">추가</button>
        </div>
        <ul>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex items-center">
              <span className="cursor-pointer">리액트 다시보기</span>
              <div className="flex ml-auto">
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
                <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
              </div>
            </form>
          </li>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex items-center">
              <span className="line-through text-gray-400 cursor-pointer">자바스크립트 복습</span>
              <div className="flex ml-auto">
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
                <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
              </div>
            </form>
          </li>
          <li className="flex justify-between p-2 border-b-2 border-gray-200">
            <form className="flex-grow flex items-center">
              <input className="flex-grow mr-4 border-2 border-gray-300 p-1" type="text" name="title" value="타입스크립트 공부" placeholder="내용을 입력하세요." />
              <div className="flex ml-auto">
                <button type="button" className="bg-blue-500 hover:bg-blue-600 py-1 px-2 ml-2 text-sm text-white rounded">저장</button>
                <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">취소</button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
```

### 테스트
* <http://localhost:5173> 접속

### App 컴포넌트 분리
* App.jsx 파일에서 jsx 부분을 각 컴포넌트로 분리

#### 할일 등록
* src/pages/TodoInput.jsx
```jsx
function TodoInput() {
  return (
    <div className="flex mb-4">
      <input className="flex-grow border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-orange-500" type="text" name="title" placeholder="할일을 입력하세요." />
      <button type="button" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded">추가</button>
    </div>
  );
}

export default TodoInput;
```

#### 할일 목록
* src/pages/TodoList.jsx
```jsx
import TodoItem from "@pages/TodoItem";

const data = [
  { "id": "1", "title": "Typescript 학습", "done": true },
  { "id": "2", "title": "Typescript 프로젝트", "done": false },
  { "id": "3", "title": "Next.js 학습", "done": false },
  { "id": "4", "title": "Next.js 프로젝트", "done": false }
]

function TodoList() {
  const items = data?.map((item) => <TodoItem key={ item.id } item={ item } />);

  return (
    <>
      <ul>
        { items }
      </ul>
    </>
  );
}

export default TodoList;
```

#### 할일 하나
* src/pages/TodoItem.jsx
```jsx
function TodoItem() {
  return (
    <li className="flex justify-between p-2 border-b-2 border-gray-200">
      <form className="flex-grow flex items-center">
        <span className="line-through text-gray-400 cursor-pointer">자바스크립트 복습</span>
        <input className="flex-grow mr-4 border-2 border-gray-300 p-1" type="text" name="title" value="타입스크립트 공부" placeholder="내용을 입력하세요." />
        <div className="flex ml-auto">
          <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
          <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
          <button type="button" className="bg-blue-500 hover:bg-blue-600 py-1 px-2 ml-2 text-sm text-white rounded">저장</button>
          <button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">취소</button>
        </div>
      </form>
    </li>
  );
}

export default TodoItem;
```

#### 할일 메인
* src/pages/Todo.jsx
```jsx
import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
```

#### App.jsx
```jsx
import Todo from '@pages/Todo';

function App() {
  return (
    <Todo />
  );
}

export default App;
```

### 공통 컴포넌트 작성
* prop-types 패키지 설치
```sh
npm i prop-types
```

#### Button
* src/components/Button.jsx
```jsx
import PropTypes from 'prop-types';

const Button = ({ children, type="button", bgColor="gray", size="md", ...rest }) => {
  const btnColor = {
    gray: `bg-gray-500 hover:bg-gray-600`,
    blue: `bg-blue-500 hover:bg-blue-600`,
    red: `bg-red-500 hover:bg-red-600`,
  };
  const btnSize = {
    sm: `py-1 px-2 text-sm`,
    md: `py-2 px-4 text-base`,
    lg: `py-2 px-6 text-lg`
  };
  return (
    <button type={ type } className={`${ btnColor[bgColor] } ${ btnSize[size] } ml-2 text-white rounded`} { ... rest }>{ children }</button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  bgColor: PropTypes.oneOf(['gray', 'blue', 'red']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
```

#### Submit
* src/components/Submit.jsx
```jsx
import Button from "@components/Button";
import PropTypes from "prop-types";

const Submit = ({ children, ...rest }) => {
  return <Button type="submit" { ...rest }>{ children }</Button>
};

Submit.propTypes = {
  children: PropTypes.string,
};

export default Submit;
```

#### Button, Submit 적용
* TodoInput.jsx
```jsx
// 적용전
<button type="button" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 text-base text-white rounded">추가</button>

// 적용후
<Button size="md" bgColor="blue">추가</Button>
```

* TodoItem.jsx에 적용
```jsx
// 적용전
<button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">수정</button>
<button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-2 ml-2 text-sm text-white rounded">삭제</button>
<button type="button" className="bg-blue-500 hover:bg-blue-600 py-1 px-2 ml-2 text-sm text-white rounded">저장</button>
<button type="button" className="bg-gray-500 hover:bg-gray-600 py-1 px-2 ml-2 text-sm text-white rounded">취소</button>

// 적용후
<Button size="sm">수정</Button>
<Submit size="sm" bgColor="red">삭제</Submit>
<Submit size="sm" bgColor="blue">저장</Submit>
<Button size="sm" type="reset">취소</Button>
```

### API 서버 연동
#### fetch 커스텀 훅 작성
* src/hooks/useFetch.js
```js
import { useState, useEffect } from 'react';

const API_SERVER = 'http://localhost:3000';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null); // API 응답 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const fetchData = async () => {
    setData(null);
    setLoading(true);
    setError(null);
    try {
      if(!url.startsWith('http')){
        url = API_SERVER + url;
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${ response.status }`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
```

* src/hooks/useMutation.js
```js
const API_SERVER = 'http://localhost:3000';

const useMutation = (url, options = {}) => {
  const send = async (addOptions = {}) => {
    if(!url.startsWith('http')){
      url = API_SERVER + url;
    }

    options = {
      headers: {
        'Content-Type': 'application/json'
      },
      ...options,
      ...addOptions
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  return { send };
};

export default useMutation;
```

#### 할일 목록 조회
* Todo.jsx
  - API 서버에서 할일 목록 조회
  - TodoList에 조회 결과 전달
  - refetch 전달

```jsx
......
import useFetch from "@hooks/useFetch";

function App() {
  const { loading, data, error, refetch } = useFetch('/todos');

  if(loading) return <p>로딩중...</p>;
  if(error) return <p>{ error.message }</p>;

  return (
    ......
    <TodoInput refetch={ refetch } />
    <TodoList data={ data } refetch={ refetch } />
    ......
  );
}
......
```

* TodoInput.jsx
  - prop-types 추가
  
```jsx
......
import PropTypes from 'prop-types';

TodoInput.propTypes = {
  refetch: PropTypes.func
};

function TodoInput({ refetch }) {
  ......
}
......
```

* TodoList.jsx
  - prop-types 추가
  - TodoItem에 refetch 전달

```jsx
......
import PropTypes from 'prop-types';

TodoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      done: PropTypes.bool,
    })
  ).isRequired,
  refetch: PropTypes.func,
};

function TodoList({ data, refetch }) {
  const items = data?.map((item) => <TodoItem key={ item.id } item={ item } refetch={ refetch } />);
  ......
}
......
```

* TodoItem.jsx
  - prop-types 추가
  - item 값 출력

```jsx
......
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool,
  }),
  refetch: PropTypes.func,
};

function TodoItem({ item, refetch }) {
  return (
    ......
    <span className={`${ item.done ? 'line-through text-gray-400' : '' } cursor-pointer`} >{ item.title }</span>
    <input className="flex-grow mr-4 border-2 border-gray-300 p-1" type="text" name="title" value={ item.title } placeholder="내용을 입력하세요." />
    ......
  );
}
......
```

### 이벤트 추가
#### 할일 등록
* TodoInput.jsx
  - input 요소의 change 이벤트
  - 추가 버튼 click 이벤트

```jsx
import Button from "@components/Button";
import useMutation from "@hooks/useMutation";
import { useState } from "react";
import PropTypes from 'prop-types';

TodoInput.propTypes = {
  refetch: PropTypes.func
};

function TodoInput({ refetch }) {
  const [ title, setTitle ] = useState('');
  const { send } = useMutation('/todos');

  const handleAdd = async () => {
    try{
      await send({
        method: 'POST',
        body: JSON.stringify({
          title,
          done: false
        }),
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }
  }

  return (
    <div className="flex mb-4">
      <input 
        className="flex-grow border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-orange-500" 
        type="text" 
        name="title" 
        placeholder="할일을 입력하세요."
        value={ title }
        onChange={ (e) => setTitle(e.target.value) } />
      <Button size="md" bgColor="blue" onClick={ handleAdd }>추가</Button>
    </div>
  );
}

export default TodoInput;
```

#### 할일 수정, 삭제, 완료/미완료 처리
* TodoItem.jsx
  - 수정 모드 변경
  - 수정 사항 저장
  - 수정 취소
  - 완료/미완료 처리
  - 삭제

```jsx
import Button from "@components/Button";
import Submit from "@components/Submit";
import useMutation from "@hooks/useMutation";
import PropTypes from 'prop-types';
import { useState } from "react";

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool,
  }),
  refetch: PropTypes.func,
};

function TodoItem({ item }) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const { send } = useMutation(`/todos/${ item.id }`);

  // 수정 모드로 변경
  const handleEdit = () => {
    setEditMode(true);
  };

  // 수정 사항 저장
  const handleSave = async (e) => {
    e.preventDefault();
    try{
      await send({
        method: 'PATCH',
        body: JSON.stringify({ title })
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }   
  };

  // 수정 취소
  const handleCancel = () => {
    setTitle(item.title);
    setEditMode(false);
  };

  // 완료/미완료 처리
  const handleDone = async () => {
    try{
      await send({
        method: 'PATCH',
        body: JSON.stringify({ done: !item.done })
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }
  };

  // 삭제
  const handleDelete = async (e) => {
    e.preventDefault();
    try{
      await send({
        method: 'DELETE'
      });
      refetch();
    }catch(err){
      alert(`에러 ${ err.message }`);
    }
  };

  return (
    <li className="flex justify-between p-4 border-b-2 border-gray-200">
      <form className="flex-grow flex items-center" onSubmit={ handleSave }>
        { editMode
          ? <input className="flex-grow mr-4 border-2 border-gray-300 p-1" type="text" name="title" value={ title } onChange={ (e) => setTitle(e.target.value) } placeholder="내용을 입력하세요." />
          : <span className={`${ item.done ? 'line-through text-gray-400' : '' } cursor-pointer`} onClick={ () => handleDone() }>{ title }</span>
        }

        <div className="flex ml-auto">
          { editMode 
            ? <>
                <Submit size="sm" bgColor="blue">저장</Submit>
                <Button type="reset" size="sm" onClick={ () => handleCancel() }>취소</Button>
              </>
            
            : <>
                <Button size="sm" onClick={ handleEdit }>수정</Button>
                <Submit size="sm" bgColor="red" onClick={ handleDelete }>삭제</Submit>
              </>
          }
        </div>
      </form>
    </li>
  );
}

export default TodoItem;
```
