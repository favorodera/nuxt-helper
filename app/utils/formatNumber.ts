type BaseFormatNumberOptions = Intl.NumberFormatOptions & {
  compactThreshold?: number
}

type CompactFormatNumberOptions = Intl.NumberFormatOptions & {
  notation: 'compact'
  compactThreshold?: number
}

type FormatNumberOptions = BaseFormatNumberOptions | CompactFormatNumberOptions

/**
 * Formats a number using Intl.NumberFormat.
 * Supports conditional compact notation based on threshold.
 * Note: compactThreshold only works when notation is explicitly set to 'compact'.
 */
export default function (
  value: number,
  locales?: Intl.LocalesArgument,
  options: FormatNumberOptions = {},
): string {
  const { compactThreshold, notation, ...rest } = options

  const formatOptions: Intl.NumberFormatOptions = { ...rest }

  if (notation === 'compact') {
    if (!compactThreshold || value >= compactThreshold) {
      formatOptions.notation = 'compact'
    }
  }

  const formatter = new Intl.NumberFormat(locales, formatOptions)
  return formatter.format(value)
}
