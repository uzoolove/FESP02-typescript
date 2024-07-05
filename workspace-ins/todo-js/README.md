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
