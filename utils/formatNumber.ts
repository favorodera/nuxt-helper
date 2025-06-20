/**
 * Format numbers using Intl.NumberFormat
 * @param value
 * @param locale
 * @param options
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales Intl.LocalesArgument}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options Intl.NumberFormatOptions}
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/formatNumber.md#formatnumber formatNumber}
 */
export default function (value: number, locale?: Intl.LocalesArgument, options: Intl.NumberFormatOptions = {}) {

  const internationalNumberFormatter = new Intl.NumberFormat(locale, options)

  return internationalNumberFormatter.format(value)
}
