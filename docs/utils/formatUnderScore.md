# formatUnderScore

A utility function for formatting strings with underscores. Allows you to capitalize specific words and insert spaces at specified positions for flexible string formatting.

---

### Parameters
- `input` (string): The underscore-separated string to format.
- `options` (object):
  - `capitalizePositions` (number[] | 'all', optional): Indices of words to capitalize, or 'all' to capitalize every word.
  - `spacePositions` (number[] | 'all', optional): Indices after which to insert a space, or 'all' to insert spaces after every word.

### Returns
- (string): The formatted string.

---

**Usage Example:**

```ts
formatUnderScore('test_test_test', { capitalizePositions: [1] }) // 'test Test test'

formatUnderScore('test_test_test', { spacePositions: [1] }) // 'TestTest Test'

formatUnderScore('test_test_test', { capitalizePositions: [0, 2], spacePositions: 'all' }) // 'Test test Test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: 'all' }) // 'Test Test Test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: [1] }) // 'TestTest Test'
```