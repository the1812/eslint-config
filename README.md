# @the1812/eslint-config

按照个人喜好 ([@the1812](https://github.com/the1812/)) 配置的 ESLint Config. 可用于 JavaScript, TypeScript 和 Vue 3 项目.

# 主要特性
## 集成 [prettier](https://prettier.io/)
一个命令搞定代码风格和格式化, 无需担心互相冲突.

```powershell
# ✔️
eslint . --ext .ts,.vue

# ❌
eslint . --ext .ts,.vue
prettier . --write
```

内置 prettier 的配置为:
```ts
{
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  printWidth: 100,
}
```

## 禁止先使用再声明
除纯类型引用以外, 所有定义必须先声明再使用.

```ts
// ✔️
function name() { }
const a = name()

// ❌
const a = name()
function name() { }
```

## 禁止 C 风格命名
跟丑陋的全大写和下划线说再见.

```ts
// ✔️
const SomeConstant = 1
function someFunction (param) {
  const clonedParam = clone(param)
}
let someVar = 2

// ❌
const SOME_CONSTANT = 1
function someFunction (param) {
  const _param = clone(param)
}
let some_var = 2
```

## 减少重复代码
同名属性优先解构, 同名参数省略冒号.

```ts
// ✔️
const { prop } = obj
const param = {
  prop,
}

// ❌
const prop = obj.prop
const param = {
  prop: prop,
}
```

## 禁止默认导出
有意义的名字才是好名字.

```ts
// ✔️
export const createApp = () => { }

// ❌
const createApp = () => { }
export default createApp
```

> [!NOTE]
> 其他常见第三方库的配置文件仍然允许默认导出. 例如 `webpack.config.ts`, `vite.config.ts` 等.

## 禁止省略大括号
控制流语句内容必须有大括号.

```ts
// ✔️
if (foo) {
  doSomething()
}
while (bar) {
  doSomething()
}
for (let i = 0; i < items.length; i+=1) {
  doSomething()
}

// ❌
if (foo) doSomething()
while (bar) doSomething()
for (let i = 0; i < items.length; i+=1)
  doSomething()
```

# 使用方式

## 安装

```powershell
pnpm install -D eslint prettier typescript @the1812/eslint-config
```

## 配置

在 ESLint 配置文件中添加任意一种配置.

### 适用于 JavaScript 或 TypeScript 项目
```JavaScript
import config from '@the1812/eslint-config'

export default config
```

### 适用于 Vue 3 项目
```JavaScript
import config from '@the1812/eslint-config/vue'

export default config
```
