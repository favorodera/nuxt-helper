## `formatNumber()`

A utility function for formatting numbers using JavaScript's `Intl.NumberFormat`. Useful for currency, units, and compact number formatting in a locale-aware way.

---

### Parameters
- `value` `(number)`: The number to format.
- `locale` `(string)`: The locale string (e.g., 'en-US').
- `options` `(object)`: Options for `Intl.NumberFormat` (e.g., style, currency, unit, notation, etc.).

### Returns
- `(string)`: The formatted number as a string.

---

**Usage Example:**

```ts
formatNumber(1000000, 'en-US', {
  style: 'currency',
  currency: 'USD'
}) // $1,000,000.00

formatNumber(1000, 'en-US', {
  style: 'unit',
  unit: 'kilometer'
}) // 1,000 km

formatNumber(1000000, 'en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact'
}) // $1M

formatNumber(1000, 'en-US', {
  style: 'unit',
  unit: 'kilometer',
  notation: 'compact'
}) // 1k km
```