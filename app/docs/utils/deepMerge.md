# `deepMerge()`

A utility function for deeply merging two objects. Arrays from the patch overwrite those in the base.

---

### Parameters
- `base` `(object)`: The base object.
- `patch` `(object)`: The patch object whose properties will overwrite or merge into the base.

### Returns
- `(object)`: The deeply merged object.

---

**Usage Example:**

```ts
deepMerge({ foo: { bar: 1 }, arr: [1, 2] }, { foo: { baz: 2 }, arr: [3, 4] })
// { foo: { bar: 1, baz: 2 }, arr: [3, 4] }
``` 