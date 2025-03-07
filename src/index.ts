import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import { baseConfigs } from './base.js'

export default tseslint.config(...baseConfigs, eslintConfigPrettier)
