## `useDollarFetch()`

A `$fetch` wrapper composable for data fetching in Nuxt projects. It provides a reactive interface for making HTTP requests and handling their state, with support for lifecycle hooks.

---

### Parameters
- `request` (string): The endpoint or URL to fetch from.
- `initOptions` (object, optional):
  - `$fetch` (object): Options to pass directly to `$fetch` (method, headers, body, etc.).
  - `hooks` (object, optional): Lifecycle hooks for request state:
    - `onPending` (function, optional): Called when the request starts. Can be async or sync.
    - `onSuccess` (function, optional): Called with response data on success. Can be async or sync.
    - `onError` (function, optional): Called with error (`FetchError<ErrorT>`) on failure. Can be async or sync.
- `immediate` (boolean, optional, default: `true`): If `true`, the request is executed immediately. If `false`, you must call `execute()` manually.

### Returns
An object with the following properties:
- `data`: The response data (ref).
- `status`: The HTTP status or request state (ref).
- `error`: Any error encountered (ref).
- `execute`: A function to manually trigger the request (useful if `immediate` is `false`).

---

**Usage Example:**

```ts
// Immediate execution with lifecycle hooks
const { data, status, error, execute } = useDollarFetch('/api/user', {
  $fetch: { method: 'GET' },
  hooks: {
    onPending: () => { console.log('Request started') },
    onSuccess: async (data) => { await doSomethingAsync(data) },
    onError: (err) => { alert('Error: ' + err.message) },
  },
}, true)

// Manual execution
const { data, status, error, execute } = useDollarFetch('/api/user', {
  $fetch: { method: 'GET' },
  hooks: {
    onSuccess: (data) => { /* ... */ },
  },
}, false)

async function fetchUser() {
  await execute()
}

// Per-execution execution with options patching
const { data, status, error, execute } = useDollarFetch('/api/user', {
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

