export const extendNamingConvention = (
  config: {
    allowedPatterns?: string[]
  } = {},
) => {
  const { allowedPatterns } = config
  const patterns = allowedPatterns?.join('|')
  const mergeFilter = (filter: { regex: string; match: boolean } | undefined, pattern?: string) => {
    if (!filter || !pattern) {
      return undefined
    }
    if (!filter) {
      return {
        regex: pattern,
        match: false,
      }
    }
    return {
      regex: `${filter.match}|${pattern}`,
      match: false,
    }
  }

  return [
    {
      selector: 'property',
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: mergeFilter(
        {
          regex: '[-/]',
          match: false,
        },
        patterns,
      ),
    },
    {
      selector: ['variable', 'function'],
      format: ['strictCamelCase', 'StrictPascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
      filter: mergeFilter(undefined, patterns),
    },
    {
      selector: ['enumMember', 'typeLike'],
      format: ['StrictPascalCase'],
      filter: mergeFilter(undefined, patterns),
    },
    {
      selector: 'default',
      format: ['strictCamelCase'],
      filter: mergeFilter(
        {
          regex: '[-/]',
          match: false,
        },
        patterns,
      ),
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
  ]
}
