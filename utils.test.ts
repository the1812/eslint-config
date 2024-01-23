import { describe, expect, test } from 'vitest'
import { extendNamingConvention } from './utils'

describe('extendNamingConvention', () => {
  test('default patterns', () => {
    const actual = extendNamingConvention()
    const expected = [
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
    ]
    expect(actual).toEqual(expected)
  })
})
