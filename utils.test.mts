import { describe, expect, test } from 'vitest'
import { extendNamingConvention } from './utils'

describe('extendNamingConvention', () => {
  test('default patterns', () => {
    const actual = extendNamingConvention()
    const expected = [
      {
        selector: ['import', 'property'],
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
  test('extra allowed single pattern', () => {
    const actual = extendNamingConvention({
      allowedPatterns: ['test'],
    })
    const expected = [
      {
        selector: ['import', 'property'],
        format: ['strictCamelCase', 'StrictPascalCase'],
        filter: {
          regex: '[-/]|test',
          match: false,
        },
      },
      {
        selector: ['variable', 'function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
          regex: 'test',
          match: false,
        },
      },
      {
        selector: ['enumMember', 'typeLike'],
        format: ['StrictPascalCase'],
        filter: {
          regex: 'test',
          match: false,
        },
      },
      {
        selector: 'default',
        format: ['strictCamelCase'],
        filter: {
          regex: '[-/]|test',
          match: false,
        },
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ]
    expect(actual).toEqual(expected)
  })
  test('extra allowed multiple patterns', () => {
    const actual = extendNamingConvention({
      allowedPatterns: ['test1', 'test2'],
    })
    const expected = [
      {
        selector: ['import', 'property'],
        format: ['strictCamelCase', 'StrictPascalCase'],
        filter: {
          regex: '[-/]|test1|test2',
          match: false,
        },
      },
      {
        selector: ['variable', 'function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
          regex: 'test1|test2',
          match: false,
        },
      },
      {
        selector: ['enumMember', 'typeLike'],
        format: ['StrictPascalCase'],
        filter: {
          regex: 'test1|test2',
          match: false,
        },
      },
      {
        selector: 'default',
        format: ['strictCamelCase'],
        filter: {
          regex: '[-/]|test1|test2',
          match: false,
        },
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ]
    expect(actual).toEqual(expected)
  })
})
