import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "rules": {
      // "no-var": "off", // var 키워드 사용 가능
      "prefer-const": "warn", // 변수가 재할당 되지 않는다면 let 대신 const 사용
      "no-cond-assign": "warn", // 조건문에서 변수값 할당식 사용
      // "no-redeclare": "warn", // 변수 중복 선언
      // "@typescript-eslint/no-unused-vars": "warn", // 사용하지 않는 변수
      // "@typescript-eslint/explicit-function-return-type": "off", // 함수의 리턴타입을 명시적으로 지정하지 않아도 됨
      // "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용
    }
  }
];