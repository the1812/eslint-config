import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'
import { extendNamingConvention } from './utils.js'
import { prettierConfig } from './prettier.js'
import { extraFileExtensions } from './constants.js'

export const baseConfigs = tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierRecommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions,
        projectService: true,
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
    files: ['**/*.{js,cjs,mjs,jsx}'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/prefer-destructuring': 'off',
    },
  },
  {
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
      'prettier/prettier': ['error', prettierConfig],
    },
  },
  {
    rules: {
      'no-return-assign': 'error',
      'prefer-arrow-callback': 'error',
      radix: ['error', 'as-needed'],
      curly: ['error', 'all'],
      'no-undef': 'off',
    },
  },
  {
    ignores: ['**/*.{js,cjs,mjs,jsx}'],
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
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/unified-signatures': [
        'error',
        {
          ignoreDifferentlyNamedParameters: true,
        },
      ],
    },
  },
  {
    files: [
      '**/webpack.*.ts',
      '**/vite.*.ts',
      '**/tailwind.config.*',
      '**/postcss.*.{js,cjs}',
      '**/esbuild.{js,mjs}',
      '**/vitest.config.*',
      '**/vitest.workspace.*',
      '**/eslint.config.*',
      '**/prettier.config.*',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.test.*', '**/*.spec.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.d.ts', '**/*.d.*.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.{js,cjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/tailwind.config.*'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        ...extendNamingConvention({ allowedPatterns: ['^[A-Z]+$'] }),
      ],
    },
  },
)
