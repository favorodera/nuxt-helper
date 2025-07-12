## `useDollarFetch()`

A `$fetch` wrapper composable for data fetching in Nuxt projects. It provides a reactive interface for making HTTP requests and handling their state.

---

### Parameters
- `request` (string): The endpoint or URL to fetch from.
- `options` (object, optional): Options to pass to `$fetch` (method, headers, body, etc.).
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
// Immediate execution
const { data, status, error, execute } = useDollarFetch('/api/user')

// Per-execution execution
const { data, status, error, execute } = useDollarFetch('/api/user', {
  method: 'GET',
}, false)

async function fetchUser() {
  await execute()
}

// Per-execution execution with options patching
const { data, status, error, execute } = useDollarFetch('/api/user', {
  method: 'GET',
})

async function fetchUser() {
  await execute({
    method: 'PUT',
    body: {
      name: 'John Doe',
      age: 20,
    },
  })
}
```

