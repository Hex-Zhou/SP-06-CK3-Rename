module.exports = {
  parser: "@typescript-eslint/parser", //定義ESLint的解析器
  extends: ["plugin:@typescript-eslint/recommended"], //定義文件繼承的子規範
  plugins: ["@typescript-eslint"], //定義了該eslint文件所依賴的插件
  env: {
    //指定代碼的運行環境
    browser: true,
    node: true,
  },
};
