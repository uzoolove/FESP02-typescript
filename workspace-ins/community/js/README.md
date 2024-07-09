# React 커뮤니티 App Javascript 버전 개발

## 샘플 복사
* sample/community 폴더를 workspace/community로 복사

## 프로젝트 생성
```sh
cd workspace/community

npm init vite@latest js

Select a framework: » React
Select a variant: » JavaScript

cd js
npm i
```

## 샘플 HTML 복사
* workspace/community/sample/public/ -> workspace/community/js/public/ 복사

### 페이지 구조
```
public/
├── free/                     // 자유 게시판
│   └── ...
├── info/                     // 정보 공유 게시판
│   ├── 1/
│   │   ├── edit/
│   │   │   └── index.html    // 게시물 수정 페이지
│   │   └── index.html        // 1번 게시물 상세 페이지
│   ├── 2/
│   │   └── ...               // 2번 게시물 상세 페이지
│   ├── new/
│   │   └── index.html        // 게시물 생성 페이지
│   └── index.html            // 정보 공유 게시판 목록 페이지
├── user/                     // 회원
|   ├── login/                    
|   │   └── index.html        // 로그인 페이지
|   └── signup/                   
|       └── index.html        // 회원 가입 페이지
└── index.html                // 커뮤니티 메인 페이지
```

### 화면 테스트
```sh
npx serve public
```
* <http://localhost:3000> 접속 테스트

## 스타일 적용
### tailwind 설치
```sh
cd workspace/community/js
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

### tailwind css 지시어 추가
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

### 설정
#### jsconfig.json 생성
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["/*"],
      "@components/*": ["components/*"],
      "@hooks/*": ["hooks/*"],
      "@pages/*": ["pages/*"],
      "@recoil/*": ["recoil/*"],
      "@zustand/*": ["zustand/*"]
    }
  }
}
```

#### vite.config.js 파일 수정
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
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@zustand", replacement: "/src/zustand" },   
    ],
  },
})
```

#### eslintrc.cjs 수정
*  prop-types 에러 비활성
```js
...
rules: {
  ...
  'react/prop-types': 'off'
},
```

#### 추가 패키지 설치
```sh
npm i react-router-dom react-hook-form react-csspin react-infinite-scroller recoil recoil-persist zustand @tanstack/react-query @tanstack/react-query-devtools immer lodash
```

### 메인페이지 작성
* index.html 수정
* workspace/community/js/public/index.html의 `<head>` 부분으로 교체
  - `<head>`의 `<script src="https://cdn.tailwindcss.com"></script>` 삭제

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>멋쟁이 사자처럼 커뮤니티 - 멋사컴</title>

    <!-- 기본 meta 태그 -->
    <meta name="description" content="다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요." />
    <meta name="keywords" content="커뮤니티, 소통, 포럼, 관심사, 온라인 모임, 커뮤니티 서비스" />
    <meta name="author" content="FESP 2기" />

    <!-- Open Graph meta 태그 (소셜 미디어용) -->
    <meta property="og:title" content="멋사컴에 오신걸 환영합니다." />
    <meta property="og:description" content="유용한 정보를 나누고 공유하세요." />
    <meta property="og:image" content="/images/fesp.webp" />
    <meta property="og:url" content="https://community.fesp.shop" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="멋사컴" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### App 컴포넌트 작성
* src/App.jsx 수정
* workspace/community/js/public/index.html의 `<div id="root">` 하위 태그 복사
```jsx
function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      ......
    </div>
  );
}

export default App;
```

* JSX 문법에 맞춰서 수정
  - html 주석을 JSX 주석으로 변환
    + Ctrl + F

      `<!--` 찾아 바꾸기 `{/*`

      `-->` 찾아 바꾸기 `*/}`

  - class -> className
  - for -> htmlFor
  - 이벤트 수정
    ```jsx
    onclick="location.href='/user/login'"
    ```
    ```jsx
    onClick={ () => location.href='/user/login' }
    ```
* App.jsx
```jsx
function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
        <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
          <div className="w-1/2 order-1 md:w-auto">
            <a href="/" className="flex items-center gap-2">
              <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" alt="로고 이미지" />
              <span className="text-lg font-bold">멋사컴</span>
            </a>
          </div>
          <div className="w-auto order-2 text-base mt-4 md:mt-0">
            <ul className="flex items-center gap-6 uppercase">
              <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">정보공유</a></li>
              <li className="hover:text-amber-500 hover:font-semibold"><a href="/free">자유게시판</a></li>
              <li className="hover:text-amber-500 a:font-semibold"><a href="/qna">질문게시판</a></li>
            </ul>
          </div>

          <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

            {/* 로그인 후 */}
            {/*
            <p className="flex items-center">
              <img className="w-8 rounded-full mr-2" src="https://api.fesp.shop/files/00-sample/user-muzi.webp" />
              용쌤님 :)
              <button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/login' }>로그아웃</button>
            </p>
            */}

            {/* 로그인 전 */}
            <div className="flex justify-end">
              <button type="button" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/login' }>로그인</button>
              <button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/signup' }>회원가입</button>
            </div>

            {/* 라이트/다크 모드 전환 */}
            <button
              type="button"
              data-toggle-dark="dark"
              className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                data-toggle-icon="moon"
                className="w-3.5 h-3.5 hidden"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
              </svg>
              <svg
                data-toggle-icon="sun"
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
              </svg>
              <span className="sr-only">Toggle dark/light mode</span>
            </button>

          </div>
        </nav>
      </header>

      {/* 페이지 본문 */}
      <main className="container mx-auto mt-10 p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">멋사컴에 오신 것을 환영합니다!</h1>
          <p className="text-xl mb-6">다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.</p>
          <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</a>
        </section>
  
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">정보 공유</h3>
              <p className="mb-4">다양한 정보와 지식을 공유하세요.</p>
              <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
            </div>
            <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">자유 게시판</h3>
              <p className="mb-4">자유롭게 이야기를 나누세요.</p>
              <a href="/free" className="text-orange-500 hover:underline">바로가기</a>
            </div>
            <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">질문 게시판</h3>
              <p className="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
              <a href="/qna" className="text-orange-500 hover:underline">바로가기</a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
        <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</a>
          <a href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</a>
        </div>
      </footer>

    </div>
  )
}

export default App
```

### 테스트
```sh
npm run dev
```

* <http://localhost:5173> 접속 테스트


### 컴포넌트 생성
```
src/
├── components/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── index.jsx
│   ├── Button.jsx
│   ├── Pagination.jsx
│   ├── Search.jsx
│   ├── Spinner.jsx
│   ├── Submit.jsx
│   └── Theme.jsx
│
├── hooks/
│   └── useFetch.js
│
├── pages/
│   ├── community/
│   │   ├── CommentItem.jsx
│   │   ├── CommentList.jsx
│   │   ├── CommentNew.jsx
│   │   ├── Edit.jsx
│   │   ├── Detail.jsx
│   │   ├── List.jsx
│   │   ├── ListItem.jsx
│   │   ├── New.jsx
│   │   └── index.jsx
│   ├── user/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   └── Error.jsx
│
├── recoil/
│   └── user/
│       └── atoms.js
│
└── zustand/
    └── themeStore.js
```

### 리액트 라우터 설정
* src/routes.jsx
```jsx
import Layout from "@components/layout";
import Error from "@pages/Error";
import Community from "@pages/community";
import Detail from "@pages/community/Detail";
import List from "@pages/community/List";
import New from "@pages/community/New";
import CommentList from "@pages/community/CommentList";
import Login from "@pages/user/Login";
import Signup from "@pages/user/Signup";
import { createBrowserRouter } from "react-router-dom";
import Edit from "@pages/community/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Community />
      },
      {
        path: ":type",
        element: <List />
      },
      {
        path: ":type/:_id",
        element: <Detail />,
        children: [
          {
            index: true,
            element: <CommentList />
          }
        ]
      },
      {
        path: ":type/new",
        element: <New />
      },
      {
        path: ":type/:_id/edit",
        element: <Edit />
      },
      {
        path: "user/login",
        element: <Login />
      },
      {
        path: "user/signup",
        element: <Signup />
      },
    ]
  },
]);

export default router;
```

### App 컴포넌트 분리
#### App.jsx 파일에서 jsx 부분을 각 컴포넌트로 분리
* components/layout/Header.jsx
```jsx
function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <a href="/" className="flex items-center gap-2">
            <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" alt="로고 이미지" />
            <span className="text-lg font-bold">멋사컴</span>
          </a>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">정보공유</a></li>
            <li className="hover:text-amber-500 hover:font-semibold"><a href="/free">자유게시판</a></li>
            <li className="hover:text-amber-500 a:font-semibold"><a href="/qna">질문게시판</a></li>
          </ul>
        </div>

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

          {/* 로그인 후 */}
          {/*
          <p className="flex items-center">
            <img className="w-8 rounded-full mr-2" src="https://api.fesp.shop/files/00-sample/user-muzi.webp" />
            용쌤님 :)
            <button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/login' }>로그아웃</button>
          </p>
          */}

          {/* 로그인 전 */}
          <div className="flex justify-end">
            <button type="button" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/login' }>로그인</button>
            <button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/signup' }>회원가입</button>
          </div>

          {/* 라이트/다크 모드 전환 */}
          <button
            type="button"
            data-toggle-dark="dark"
            className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              data-toggle-icon="moon"
              className="w-3.5 h-3.5 hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg
              data-toggle-icon="sun"
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
            <span className="sr-only">Toggle dark/light mode</span>
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Header;
```

* components/layout/Footer.jsx
```jsx
function Footer() {
  return (
    <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
      <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</a>
        <a href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</a>
      </div>
    </footer>
  );
}

export default Footer;
```

* pages/community/index.jsx
```jsx
function Community() {
  return (
    <main className="container mx-auto mt-10 p-4">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">멋사컴에 오신 것을 환영합니다!</h1>
        <p className="text-xl mb-6">다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.</p>
        <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">정보 공유</h3>
            <p className="mb-4">다양한 정보와 지식을 공유하세요.</p>
            <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">자유 게시판</h3>
            <p className="mb-4">자유롭게 이야기를 나누세요.</p>
            <a href="/free" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">질문 게시판</h3>
            <p className="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
            <a href="/qna" className="text-orange-500 hover:underline">바로가기</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Community;
```

* App.jsx
```jsx
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Community from '@pages/community';

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <Header />
      <Community />
      <Footer />
    </div>
  )
}

export default App;
```

* <http://localhost:5173> 접속 테스트

### 레이아웃 작성
#### components/layout/index.jsx
* App.jsx를 복사해서 수정
```jsx
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
```

#### App.jsx
```jsx
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';

function App() {
  return (
    <RouterProvider router={ router } />
  )
}

export default App;
```

* <http://localhost:5173> 접속 테스트

### 페이지 컴포넌트 작성
#### 게시글 목록 조회
* pages/community/List.jsx
```jsx
function List() {
  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">정보 공유</h2>
      </div>
      <div className="flex justify-end mr-4">
        
        {/* 검색 */}
        <form onSubmit={ (event) => { event.preventDefault(); location.href='' } }>
          <input
            className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
            type="text"
            name="keyword"
          />
          <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
        </form>

        <button type="button" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info/new' }>글작성</button>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">조회수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">댓글수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">작성일</th>
            </tr>
          </thead>
          <tbody>
            {/* 로딩 상태 표시 */}
            {/*
              <tr>
                <td colSpan="6" className="py-20 text-center">로딩중...</td>
              </tr>
            */}

            {/* 에러 메세지 출력 */}
            {/*
              <tr>
                <td colSpan="6" className="py-20 text-center">에러 메세지</td>
              </tr>
            */}

            {/* 본문 출력 */}
            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">2</td>
              <td className="p-2 truncate indent-4 cursor-pointer" onClick={ () => location.href='/info/2' }>안녕하세요.</td>
              <td className="p-2 text-center truncate">용쌤</td>
              <td className="p-2 text-center hidden sm:table-cell">29</td>
              <td className="p-2 text-center hidden sm:table-cell">2</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">1</td>
              <td className="p-2 truncate indent-4 cursor-pointer" onClick={ () => location.href='/info/1' }>좋은 소식이 있습니다.</td>
              <td className="p-2 text-center truncate">제이지</td>
              <td className="p-2 text-center hidden sm:table-cell">22</td>
              <td className="p-2 text-center hidden sm:table-cell">5</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.03 17:59:13</td>
            </tr>
          </tbody>
        </table>
        <hr />

        {/* 페이지네이션 */}
        <div>
          <ul className="flex justify-center gap-3 m-4">
            <li className="text-bold text-blue-700">
              <a href="/info?page=1">1</a>
            </li>
            <li>
              <a href="/info?page=2">2</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default List;
```

* <http://localhost:5173/info> 접속 테스트

#### 게시글 상세 조회
* pages/community/Detail.jsx
```jsx
function Detail() {
  return (
    <main className="container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">제목 : 좋은 소식이 있습니다.</div>
        <div className="text-right text-gray-400">작성자 : 제이지</div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap">좋은 소식을 가지고 왔습니다.<br />오늘 드디어 최종 면접을 합니다.<br />많이 응원해 주세요^^</pre>
          </div>
          <hr/>
        </div>
        <div className="flex justify-end my-4">
          <button type="button" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>목록</button>
          <button type="button" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info/1/edit' }>수정</button>
          <button type="button" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info' }>삭제</button>
        </div>
      </section>
      
      {/* 댓글 목록 */}
      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        {/* 댓글 */}
        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="어피치 프로필 이미지"
            />
            <a href="" className="text-orange-400">어피치</a>
            <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
          </div>
          <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
        </div>

        {/* 댓글 */}
        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="무지 프로필 이미지"
            />
            <a href="" className="text-orange-400">무지</a>
            <time className="ml-auto text-gray-500" dateTime="2024.07.07 12:34:56">2024.07.07 12:34:56</time>
          </div>
          <div className="flex justify-between items-center mb-2">
            <pre className="whitespace-pre-wrap text-sm">축하해요~~</pre>
            <button type="button" className="bg-red-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </div>
        </div>

        {/* 댓글 입력 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
          <form>
            <div className="mb-4">
              <textarea
                rows="3"
                cols="40"
                className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="내용을 입력하세요."
                name="comment"></textarea>
    

              {/* 에러 메세지 출력 */}
              {/*
              <p className="ml-2 mt-1 text-sm text-red-500">
                에러 메세지
              </p>
              */}
              
            </div>
            <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Detail;
```

* <http://localhost:5173/info/1> 접속 테스트

#### 게시글 수정
* pages/community/Edit.jsx
```jsx
function Edit() {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 수정</h2>
      </div>
      <section className="mb-8 p-4">
        <form onSubmit={ (event) => { event.preventDefault(); history.back(); } }>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
              defaultValue="안녕하세요."
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              rows="15" 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            >가입인사 드립니다
반가워요</textarea>
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</button>
            <button type="reset" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Edit;
```

* <http://localhost:5173/info/1/edit> 접속 테스트

#### 게시글 등록
* pages/community/New.jsx
```jsx
function New() {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 등록</h2>
      </div>
      <section className="mb-8 p-4">
        <form onSubmit={ (event) => { event.preventDefault(); history.back();} }>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea
              id="content"
              rows="15" 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            ></textarea>
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
            <button type="reset" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default New;
```

* <http://localhost:5173/info/new> 접속 테스트

#### 회원 가입
* pages/user/Signup.jsx
```jsx
function Signup() {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8  border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">회원 가입</h2>
        </div>

        <form onSubmit={ (event) => { event.preventDefault(); history.back(); } }>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="name"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="email"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="profileImage">프로필 이미지</label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              name="profileImage"
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded">회원가입</button>
            <button type="reset" className="bg-gray-900 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
```

* <http://localhost:5173/user/signup> 접속 테스트

#### 로그인
* pages/user/Login.jsx
```jsx
function Login() {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">로그인</h2>
        </div>

        <form onSubmit={ (event) => { event.preventDefault(); history.back(); } }>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              value="u1@market.com"
              name="email"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              value="11111111"
              name="password"
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
            <a href="#" className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline">비밀번호를 잊으셨나요?</a>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
            <a href="/user/signup" className="ml-8 text-gray-800 hover:underline">회원가입</a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
```

* <http://localhost:5173/user/login> 접속 테스트

### 에러 페이지
* pages/Error.jsx
```jsx
import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

function Error() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <Header />
      <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
        <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
        <h3 className="text-md font-semibold mb-2 text-center">존재하지 않는 페이지입니다.</h3>
        <p className="pt-12 text-center">이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!</p>
        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
          ⚙️ 문제 해결하기
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
```

* <http://localhost:5173/user/signup/hello> 접속 테스트

### 공통 컴포넌트 작성
#### Button
* components/Button.jsx
```jsx
function Button({
  children,
  type = 'button',
  bgColor = 'orange',
  size = 'md',
  ...rest
}) {
  let btnColor = {
    gray: `bg-gray-900`,
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  };

  return (
    <button
      type={ type }
      className={`${ btnColor[bgColor] } ${ btnSize[size] } text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded`}
      { ...rest }
    >
      { children }
    </button>
  );
}

export default Button;
```

#### Submit
* components/Submit.jsx
```jsx
import Button from "@components/Button";

function Submit({ children, ...rest }){
  return <Button type="submit" { ...rest }>{ children }</Button>
}

export default Submit;
```

#### Button, Submit 적용
##### components/layout/Header.jsx
* 적용전
```jsx
<button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/' }>로그아웃</button>
<button type="button" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/login' }>로그인</button>
<button type="button" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/user/signup' }>회원가입</button>
```

* 적용후
```jsx
<Button size="md" bgColor="gray" onClick={ () => location.href='/' }>로그아웃</Button>
<Button size="sm" onClick={ () => location.href='/user/login' }>로그인</Button>
<Button size="sm" bgColor="gray" onClick={ () => location.href='/user/signup' }>회원가입</Button>
```

##### pages/community/List.jsx
* 적용전
```jsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
<button type="button" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info/new' }>글작성</button>
```

* 적용후
```jsx
<Submit>검색</Submit>
<Button onClick={ () => location.href='/info/new' }>글작성</Button>
```

##### pages/community/Detail.jsx
* 적용전
```jsx
<button type="button" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>목록</button>
<button type="button" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info/1/edit' }>수정</button>
<button type="button" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => location.href='/info' }>삭제</button>
<button type="button" className="bg-red-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
```

* 적용후
```jsx
<Button onClick={ () => history.back() }>목록</Button>
<Button bgColor="gray" onClick={ () => location.href='/info/1/edit' }>수정</Button>
<Button bgColor="red" onClick={ () => location.href='/info' }>삭제</Button>
<Button bgColor="red" size="sm">삭제</Button>
<Submit size="sm">댓글 등록</Submit>
```

##### pages/community/Edit.jsx
* 적용전
```jsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</button>
<button type="reset" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
```

* 적용후
```jsx
<Submit>수정</Submit>
<Button type="reset" bgColor="gray" onClick={ () => history.back() }>취소</Button>
```

##### pages/community/New.jsx
* 적용전
```jsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
<button type="reset" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
```

* 적용후
```jsx
<Submit>등록</Submit>
<Button type="reset" bgColor="gray" onClick={ () => history.back() }>취소</Button>
```

##### pages/user/Signup.jsx
* 적용전
```jsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded">회원가입</button>
<button type="reset" className="bg-gray-900 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded" onClick={ () => history.back() }>취소</button>
```

* 적용후
```jsx
<Submit>회원가입</Submit>
<Button type="reset" bgColor="gray" onClick={ () => history.back() }>취소</Button>
```

##### pages/user/Login.jsx
* 적용전
```jsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
```

* 적용후
```jsx
<Submit>로그인</Submit>
```

### 복잡한 컴포넌트 분리
#### 페이지 네이션
* components/Pagination.jsx
  - pages/community/List.jsx에서 페이지네이션 부분 이동
```jsx
function Pagination() {
  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        <li className="text-bold text-blue-700">
          <a href="/info?page=1">1</a>
        </li>
        <li>
          <a href="/info?page=2">2</a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
```

#### 검색
* components/Search.jsx
  - pages/community/List.jsx에서 검색 부분 이동
```jsx
import Submit from "@components/Submit";

function Search() {
  return (
    <form onSubmit={ (event) => { event.preventDefault(); location.href='' } }>
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <Submit>검색</Submit>
    </form>
  );
}

export default Search;
```

#### 라이트/다크 테마
* components/Theme.jsx
  - components/layout/Header.jsx에서 테마 부분 이동
```jsx
function Theme() {
  return (
    <button
      type="button"
      data-toggle-dark="dark"
      className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <svg
        data-toggle-icon="moon"
        className="w-3.5 h-3.5 hidden"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
      </svg>
      <svg
        data-toggle-icon="sun"
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
      </svg>
      <span className="sr-only">Toggle dark/light mode</span>
    </button>
  );
}

export default Theme;
```

### 링크 수정
#### `<a>`태그 대신 `<Link>` 컴포넌트로 교체
* 페이지 이동시 새로고침 발생하지 않도록 react-router-dom의 `<Link>` 컴포넌트로 수정
```jsx
import { Link } from "react-router-dom";
```

* Ctrl + F
  - `<a href` 찾아 바꾸기 `<Link to`
  - `</a>` 찾아 바꾸기 `</Link>`

* 대상 페이지
  - components/layout/Footer.jsx
  - components/layout/Header.jsx
  - components/Pagination.jsx
  - pages/community/Detail.jsx
  - pages/community/index.jsx
  - pages/user/Login.jsx

#### location.href 대신 useNavigate() 훅으로 수정
* location.href로 페이지 이동시 새로고침이 발생하므로
```jsx
onClick={() => location.href='/info' }
```

* 다음처럼 수정
```jsx
import { useNavigate } from 'react-router-dom';
...
const navigate = useNavigate();
...
onClick={ () => navigate(`/info`) }
```

* 대상 페이지
  - component/layout/Header.jsx
  - pages/community/Detail.jsx
  - pages/community/List.jsx

### 자식 컴포넌트 분리
#### 댓글 입력 화면
* pages/community/CommentNew.jsx
  - pages/community/Detail.jsx에서 이동
```jsx
import Button from "@components/Button";

function CommentNew() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form>
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"></textarea>


          {/* 에러 메세지 출력 */}
          {/*
          <p className="ml-2 mt-1 text-sm text-red-500">
            에러 메세지
          </p>
          */}
          
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}

export default CommentNew;
```

#### 댓글 목록
* pages/community/CommentList.jsx
  - pages/community/Detail.jsx에서 이동
```jsx
import Button from "@components/Button";
import CommentNew from "@pages/community/CommentNew";
import { Link } from "react-router-dom";

function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      
      {/* 댓글 */}
      <div className="shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <img
            className="w-8 mr-2 rounded-full"
            src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
            alt="어피치 프로필 이미지"
          />
          <Link to="" className="text-orange-400">어피치</Link>
          <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
        </div>
        <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
      </div>

      {/* 댓글 */}
      <div className="shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <img
            className="w-8 mr-2 rounded-full"
            src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
            alt="무지 프로필 이미지"
          />
          <Link to="" className="text-orange-400">무지</Link>
          <time className="ml-auto text-gray-500" dateTime="2024.07.07 12:34:56">2024.07.07 12:34:56</time>
        </div>
        <div className="flex justify-between items-center mb-2">
          <pre className="whitespace-pre-wrap text-sm">축하해요~~</pre>
          <Button bgColor="red" size="sm">삭제</Button>
        </div>
      </div>

      {/* 댓글 입력 */}
      <CommentNew />

    </section>
  );
}

export default CommentList;
```

#### 게시물 목록의 아이템
* pages/community/ListItem.jsx
  - pages/community/List.jsx에서 이동
```jsx
import { useNavigate } from "react-router-dom";

function ListItem() {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">2</td>
      <td className="p-2 truncate indent-4 cursor-pointer" onClick={ () => navigate(`/info/2`) }>안녕하세요.</td>
      <td className="p-2 text-center truncate">용쌤</td>
      <td className="p-2 text-center hidden sm:table-cell">29</td>
      <td className="p-2 text-center hidden sm:table-cell">2</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
    </tr>
  );
}

export default ListItem;
```

## API 테스트
* `workspace/community/js/test` 폴더 생성

### bruno 설치
* bruno 다운로드: <https://www.usebruno.com/downloads>
* 각자 OS에 맞는 버전 다운로드 후 설치
  - Windows 사용자일 경우 Windows x64 다운로드
  - 맥OS 사용자일 경우 M1, M2등 Apple Silicon 칩을 사용하면 Mac Apple Silicon 다운로드
  - M1, M2 이전 세대일 경우 Mac x64 다운로드

### 기본 설정
#### Collection 생성
* bruno 실행
* Create Collection
  - Name: `Community`
  - Location: `workspace/community/js/test` 폴더 선택
  - Folder Name: `api`

#### 폴더 생성
* [Community] ... > New Folder
```
📂 Community
├── 📂 게시물
│   └── 📂 댓글
└── 📂 회원
```

### 회원 기능 테스트
#### 이메일 중복 체크
* [회원] ... > New Request
  - Name: `이메일 중복 체크`
  - URL: GET, `https://api.fesp.shop/users/email`
  - Create

* [이메일 중복 체크] > Params > Add Param
  - Name: `email`
  - Value: `u1@market.com`

#### 환경 변수 등록
* 우측 상단의 환경변수 드롭다운 > Configure > Create Environment
  - Environment Name: `Community-dev`
  - Add Variable
    + Name: `URL`
    + Value: `https://api.fesp.shop`
  - Add Variable
    + Name: `name`
    + Value: `yongssam`
      * 게시판 식별자 역할을 할 값이므로 다른 사람과 중복되지 않을 만한 고유한 텍스트 지정
    + Save

* 우측 상단의 환경변수 드롭다운에서 Community-dev 선택

#### 파일 업로드
* [회원] ... > New Request
  - Name: `파일 업로드`
  - URL: POST, `{{URL}}/files`
  - Create

* [파일 업로드] > Body > Multipart Form > Add File
  - Key: `attach`
  - Value: 업로드할 이미지 선택

#### 회원 가입
* [회원] ... > New Request
  - Name: `회원 가입`
  - URL: POST, `{{URL}}/users`
  - Create

* [회원 가입] > Body > JSON
  - email은 중복되지 않게 지정
  - profileImage는 [파일 업로드] 결과를 복사

```json
{
  "email": "yongssam@market.com",
  "password": "11111111",
  "name": "용쌤",
  "type": "user",
  "profileImage": {
    "originalname": "user-apeach.webp",
    "name": "5HEAo-PF2.webp",
    "path": "/files/00-ins/5HEAo-PF2.webp"
  }
}
```

#### 로그인
* [회원] ... > New Request
  - Name: `로그인`
  - URL: POST, `{{URL}}/users/login`
  - Create

* [로그인] > Body > JSON
```json
{
  "email": "yongssam@market.com",
  "password": "11111111"
}
```

##### 로그인 성공시 토큰 저장
* 로그인 성공후에 전달 받은 토큰을 저장
* [Community] ... > Settings > Script > Post Response
```js
if(res.status === 200){
  if(req.url === `${ bru.getEnvVar('URL') }/users/login`){
    bru.setEnvVar('accessToken', res.body.item.token.accessToken);
    bru.setEnvVar('refreshToken', res.body.item.token.refreshToken);
  }else if(req.url === `${ bru.getEnvVar('URL') }/auth/refresh`){ // accessToken 재발행 후
    bru.setEnvVar('accessToken', res.body.accessToken);
  }
}
```

##### 저장한 토큰을 헤더에 추가
* 로그인 성공후에 저장해둔 토큰을 요청 헤더에 추가
* [Community] ... > Settings > Auth > Bearer Token
  - Token: `{{accessToken}}`
  - Save

* 각 Request의 Auth 값으로 inherite를 선택하면 컬렉션에 설정한 Auth 값이 적용됨

### 게시물 기능 테스트
#### 게시물 등록
* [게시물] ... > New Request
  - Name: `게시물 등록`
  - URL: POST, `{{URL}}/posts`
  - Create

* [게시물 등록] > Body > JSON
```json
{
  "type": "{{name}}",
  "title": "첫번째 게시물",
  "content": "첫번째 게시물입니다."
}
```

#### 게시물 목록 조회
* [게시물] ... > New Request
  - Name: `게시물 목록 조회`
  - URL: GET, `{{URL}}/posts`
  - Create

* [게시물 목록 조회] > Params > Add Param
  - Name: `type`
  - Value: `{{name}}`

#### 게시물 상세 조회
* [게시물] ... > New Request
  - Name: `게시물 상세 조회`
  - URL: GET, `{{URL}}/posts/_id`
    + _id: [게시물 목록 조회]에서 확인한 게시물의 _id 값으로 대체
  - Create

#### 게시물 수정
* [게시물] ... > New Request
  - Name: `게시물 수정`
  - URL: PATCH, `{{URL}}/posts/_id`
    + _id: 게시물의 _id 값으로 대체
  - Create

* [게시물 수정] > Body > JSON
```json
{
  "title": "첫번째 게시물 - 수정함",
  "content": "수정한 내용."
}
```

#### 게시물 삭제
* [게시물] ... > New Request
  - Name: `게시물 삭제`
  - URL: DELETE, `{{URL}}/posts/_id`
    + _id: 게시물의 _id 값으로 대체
  - Create

### 댓글 기능 테스트
#### 댓글 등록
* [댓글] ... > New Request
  - Name: `댓글 등록`
  - URL: POST, `{{URL}}/posts/_id/replies`
    + _id: 게시물의 _id 값으로 대체
  - Create

* [댓글 등록] > Body > JSON
```json
{
    "content": "댓글 달아봅니다."
}
```

#### 댓글 목록 조회
* [댓글] ... > New Request
  - Name: `댓글 목록 조회`
  - URL: GET, `{{URL}}/posts/_id/replies`
    + _id: 게시물 _id
  - Create

#### 댓글 수정
* [댓글] ... > New Request
  - Name: `댓글 수정`
  - URL: PATCH, `{{URL}}/posts/post_id/replies/reply_id`
    + post_id: 게시물 _id
    + reply_id: [댓글 목록 조회]에서 확인한 댓글의 _id 값으로 대체
  - Create

* [댓글 수정] > Body > JSON
```json
{
    "content": "댓글 수정해봅니다."
}
```

#### 댓글 삭제
* [댓글] ... > New Request
  - Name: `댓글 삭제`
  - URL: DELETE, `{{URL}}/posts/post_id/replies/reply_id`
    + post_id: 게시물 _id
    + reply_id: 댓글 _id
  - Create
