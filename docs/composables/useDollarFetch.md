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

