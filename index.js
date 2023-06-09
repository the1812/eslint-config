module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'prettier'],
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

    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: false }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        format: ['strictCamelCase', 'StrictPascalCase'],
        filter: {
          regex: '[-/]',
          match: false,
        },
      },
      {
        selector: ['variable', 'function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['enumMember', 'typeLike'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'default',
        format: ['strictCamelCase'],
        filter: {
          regex: '[-/]',
          match: false,
        },
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],

    // 关闭和 @typescript-eslint 冲突的规则
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': 'off',

    'no-continue': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-eval': 'off',
    'no-alert': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 'off',

    'arrow-body-style': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    camelcase: 'off',
    'lines-between-class-members': 'off',
    radix: ['error', 'as-needed'],
    'max-classes-per-file': 'off',
    'prefer-destructuring': [
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
    curly: ['error', 'all'],
  },
  overrides: [
    {
      files: [
        'shims.d.ts',
        'webpack.*.ts',
        'vite.*.ts',
        'vite-env.d.ts',
        'tailwind.config.*',
        'postcss.*.{js,cjs}',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.{js,cjs}'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['tailwind.config.*'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'property',
            format: ['strictCamelCase', 'StrictPascalCase'],
            filter: {
              regex: '[-/]|^[A-Z]+$',
              match: false,
            },
          },
          {
            selector: 'default',
            format: ['strictCamelCase'],
            filter: {
              regex: '[-/]|^[A-Z]+$',
              match: false,
            },
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
        ],
      },
    },
  ],
}
