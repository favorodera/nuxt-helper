# NuxtHelper

A Nuxt layer that provides a collection of reusable composables and utility functions to supercharge your Nuxt.js projects.

## Installation and Setup

```bash
npm install @favorodera/nuxt-helper
```

Add the following to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
    extends: ['@favorodera/nuxt-helper'],
})
```
---

## Composables

### `useRequest()`

A reactive `$fetch` wrapper composable for data fetching in Nuxt projects. It provides a reactive interface for making HTTP requests and handling their state, with support for lifecycle hooks.

#### Parameters
- `request` `(NitroFetchRequest)`: The endpoint or URL to fetch from.
- `initOptions` `(RequestOptions, optional)`:
  - `$fetch` `(NitroFetchOptions, optional)`: Options to pass directly to `$fetch` (method, headers, body, etc.).
  - `hooks` `(RequestHooks, optional)`: Lifecycle hooks for request state:
    - `onPending` `(function, optional)`: Called when the request starts. Can be async or sync.
    - `onSuccess` `(function, optional)`: Called with response data on success. Can be async or sync.
    - `onError` `(function, optional)`: Called with error (`FetchError<ErrorT>`) on failure. Can be async or sync.
- `immediate` `(boolean, optional, default: true)`: If `true`, the request is executed immediately. If `false`, you must call `execute()` manually.

#### Returns
An object with the following properties:
- `data`: The response data `(Ref)`.
- `status`: The HTTP status or request state `(Ref)` - 'idle' | 'pending' | 'success' | 'error'.
- `error`: Any error encountered `(Ref)`.
- `execute`: A function to manually trigger the request (useful if `immediate` is `false`).

#### Usage Examples

```ts
// Immediate execution with lifecycle hooks
const { data, status, error, execute } = useRequest('/api/user', {
  $fetch: { method: 'GET' },
  hooks: {
    onPending: () => { console.log('Request started') },
    onSuccess: async (data) => { await doSomethingAsync(data) },
    onError: (err) => { alert('Error: ' + err.message) },
  },
}, true)

// Manual execution
const { data, status, error, execute } = useRequest('/api/user', {
  $fetch: { method: 'GET' },
  hooks: {
    onSuccess: (data) => { /* ... */ },
  },
}, false)

async function fetchUser() {
  await execute()
}

// Per-execution with options patching
const { data, status, error, execute } = useRequest('/api/user', {
  $fetch: { method: 'GET' },
})

async function updateUser() {
  await execute({
    $fetch: { method: 'PUT', body: { name: 'John Doe', age: 20 } },
    hooks: {
      onSuccess: (data) => { /* ... */ },
    },
  })
}
```

---

## Utilities

### `formatError()`

A utility function that throws a standardized H3Error using h3's createError utility. Useful for consistent error handling in Nuxt server routes.

#### Parameters
- `error` `(unknown)`: The error to handle. Can be an H3Error, Error, or any value.

#### Throws
- `(H3Error)`: Throws a formatted H3Error with appropriate status and message.

#### Usage Example

```ts
try {
  // some code that may throw
} catch (err) {
  return formatError(err)
}
```

### `deepMerge()`

A utility function for deeply merging two objects. Arrays from the patch overwrite those in the base.

#### Parameters
- `base` `(object)`: The base object.
- `patch` `(object)`: The patch object whose properties will overwrite or merge into the base.

#### Returns
- `(object)`: The deeply merged object.

#### Usage Example

```ts
deepMerge({ foo: { bar: 1 }, arr: [1, 2] }, { foo: { baz: 2 }, arr: [3, 4] })
// { foo: { bar: 1, baz: 2 }, arr: [3, 4] }
```

### `formatNumber()`

A utility function for formatting numbers using JavaScript's `Intl.NumberFormat`. Useful for currency, units, and compact number formatting in a locale-aware way.

#### Parameters
- `value` `(number)`: The number to format.
- `locales` `(Intl.LocalesArgument, optional)`: The locale string or array (e.g., 'en-US').
- `options` `(Intl.NumberFormatOptions, optional)`: Options for `Intl.NumberFormat` (e.g., style, currency, unit, notation, etc.).

#### Returns
- `(string)`: The formatted number as a string.

#### Usage Examples

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

### `formatUnderScore()`

A utility function for formatting strings with underscores. Allows you to capitalize specific words and insert spaces at specified positions for flexible string formatting.

#### Parameters
- `text` `(string)`: The underscore-separated string to format.
- `options` `(FormatUnderScoreOptions, optional)`:
  - `capitalizePositions` `(number[] | 'all', optional, default: 'all')`: Zero-based indices of words to capitalize, or 'all' to capitalize every word.
  - `spacePositions` `(number[] | 'all', optional, default: 'all')`: Zero-based indices after which to insert a space, or 'all' to insert spaces after every word.

#### Returns
- `(string)`: The formatted string.

#### Usage Examples

```ts
formatUnderScore('test_test_test', { capitalizePositions: [1] }) 
// 'test Test test'

formatUnderScore('test_test_test', { spacePositions: [1] }) 
// 'TestTest Test'

formatUnderScore('test_test_test', { capitalizePositions: [0, 2], spacePositions: 'all' }) 
// 'Test test Test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: 'all' }) 
// 'Test Test Test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: [1] }) 
// 'TestTest Test'
```

---

See [CHANGELOG.md](./CHANGELOG.md) for recent updates.