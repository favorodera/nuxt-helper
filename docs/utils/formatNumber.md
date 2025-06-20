## `formatNumber()`

A utility function for formatting numbers using Intl.NumberFormat
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