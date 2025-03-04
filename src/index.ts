import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'
import { extendNamingConvention } from './utils.js'

export default tseslint.config(
  eslint.configs.recommended,
  prettierRecommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.vercel/'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-default-export': 'error',
    },
  },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
          endOfLine: 'auto',
          printWidth: 100,
        },
      ],
    },
  },
  {
    rules: {
      'no-return-assign': 'error',
      'prefer-arrow-callback': 'error',
      radix: ['error', 'as-needed'],
      curly: ['error', 'all'],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/naming-convention': ['error', ...extendNamingConvention()],
      '@typescript-eslint/prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],
      '@typescript-eslint/no-dynamic-delete': 'off',
    },
  },
  {
    files: [
      'shims.d.ts',
      'webpack.*.ts',
      'vite.*.ts',
      'vite-env.d.ts',
      'tailwind.config.*',
      'postcss.*.{js,cjs}',
      'esbuild.{js,mjs}',
      'vitest.config.*',
      'vitest.workspace.*',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['*.test.*', '*.spec.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['*.d.*.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['*.{js,cjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['tailwind.config.*'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        ...extendNamingConvention({ allowedPatterns: ['^[A-Z]+$'] }),
      ],
    },
  },
)
