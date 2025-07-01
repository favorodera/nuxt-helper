## `useDollarFetch()`

A `$fetch` wrapper composable for data fetching.
---

**Usage Example**:

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
```

