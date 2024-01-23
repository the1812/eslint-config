export const extendNamingConvention = (
  config: {
    allowedPatterns?: string[]
  } = {},
) => {
  const { allowedPatterns } = config
  const patterns = allowedPatterns?.join('|')
  const mergeFilter = (filter: { regex: string; match: boolean } | undefined, pattern?: string) => {
    if (!filter) {
      if (!pattern) {
        return undefined
      }
      return {
        regex: pattern,
        match: false,
      }
    }

    if (!pattern) {
      return {
        regex: `${filter.regex}`,
        match: false,
      }
    }
    return {
      regex: `${filter.regex}|${pattern}`,
      match: false,
    }
  }

  const result = [
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
  result.forEach((item: Record<string, any>) => {
    Object.keys(item).forEach(key => {
      if (item[key] === undefined) {
        delete item[key]
      }
    })
  })
  return result
}
