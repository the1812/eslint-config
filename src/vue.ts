import vuePlugin from 'eslint-plugin-vue'
import baseConfig from './index.js'

export default [
  baseConfig,
  vuePlugin.configs['flat/essential'],
  {
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
  {
    files: ['*.vue'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]
