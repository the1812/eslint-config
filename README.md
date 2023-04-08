# @the1812/eslint-config

按照个人喜好 ([@the1812](https://github.com/the1812/)) 配置的 ESLint Config. 可用于 JavaScript, TypeScript 和 Vue 3 项目.

# 使用方式

## 安装

需要安装包本身和所有的 peerDependencies.
```powershell
pnpm install -D eslint @the1812/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue
```

也可以使用 [install-peerdeps](https://www.npmjs.com/package/install-peerdeps) 来简化命令.
```powershell
pnpx install-peerdeps @the1812/eslint-config -D -P
```

## 配置

在 ESLint 配置文件中添加任意一种配置.

### 适用于 JavaScript 或 TypeScript 项目
```JavaScript
// .eslintrc.cjs
module.exports = {
  extends: ['@the1812/eslint-config'],
  // ...
}
```

### 适用于 Vue 3 项目
```JavaScript
// .eslintrc.cjs
module.exports = {
  extends: ['@the1812/eslint-config/vue'],
  // ...
}
```
