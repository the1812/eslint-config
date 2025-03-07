import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { extraFileExtensions } from './constants.js'
import { baseConfigs } from './base.js'

export default [
  ...baseConfigs,
  ...vuePlugin.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        projectService: true,
        parser: tseslint.parser,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
  eslintConfigPrettier,
]
