declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint'
  declare const config: {
    flatConfigs: {
      recommended: Linter.Config
      typescript: Linter.Config
    }
  }
  export default config
}
