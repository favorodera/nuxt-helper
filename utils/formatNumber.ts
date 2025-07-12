/**
 * Formats a number using Intl.NumberFormat.
 * @param {number} value - The number to format.
 * @param {Intl.LocalesArgument} [locale] - The locale string.
 * @param {Intl.NumberFormatOptions} [options] - Intl.NumberFormat options.
 * @returns {string} The formatted number.
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/formatNumber.md#formatnumber formatNumber}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales Intl.LocalesArgument}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options Intl.NumberFormatOptions}

 */
export default function (value: number, locale?: Intl.LocalesArgument, options: Intl.NumberFormatOptions = {}): string {

  const internationalNumberFormatter = new Intl.NumberFormat(locale, options)

  return internationalNumberFormatter.format(value)
}
