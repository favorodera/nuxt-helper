type FormatNumberOptions = Intl.NumberFormatOptions & {
  compactThreshold?: number
}

type CompactFormatNumberOptions = Intl.NumberFormatOptions & {
  notation: 'compact'
  compactThreshold?: number
}

type FinalFormatNumberOptions = FormatNumberOptions | CompactFormatNumberOptions

/**
 * Formats a number using Intl.NumberFormat.
 * Supports conditional compact notation based on threshold.
 * Note: compactThreshold only works when notation is explicitly set to 'compact'.
 */
export default function (
  value: number,
  locales?: Intl.LocalesArgument,
  options: FinalFormatNumberOptions = {},
) {
  const { compactThreshold, ...formatOptions } = options
  
  // Apply compact notation if threshold is met and notation is explicitly 'compact'
  if (compactThreshold && value >= compactThreshold && options.notation === 'compact') {
    formatOptions.notation = 'compact'
  }
  
  const formatter = new Intl.NumberFormat(locales, formatOptions)
  return formatter.format(value)
}
