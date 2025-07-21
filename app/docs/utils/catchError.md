# `catchError()`

A utility function that throws a standardized H3Error using h3's createError utility. Useful for consistent error handling in Nuxt server routes.

---

### Parameters
- `error` `(unknown)`: The error to handle. Can be an H3Error, Error, or any value.

### Throws
- `(H3Error)`: Throws a formatted H3Error with appropriate status and message.

---

**Usage Example:**

```ts
try {
  // some code that may throw
} catch (err) {
  return catchError(err)
}
``` 