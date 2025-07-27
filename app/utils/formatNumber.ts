/**
 * Formats a number using Intl.NumberFormat.
 */
export default function (
  value: number,
  locales?: Intl.LocalesArgument,
  options: Intl.NumberFormatOptions = {},
) {
  const formatter = new Intl.NumberFormat(locales, options)
  return formatter.format(value)
}
