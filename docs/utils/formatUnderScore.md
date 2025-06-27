# formatUnderScore

A utility function for formatting strings with underscores.

**Usage Example:**

```ts
formatUnderScore('test_test_test', { capitalizePositions: [1] }) // 'test Test test'

formatUnderScore('test_test_test', { spacePositions: [1] }) // 'test test test'

formatUnderScore('test_test_test', { capitalizePositions: [0, 2], spacePositions: 'all' }) // 'test Test test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: 'all' }) // 'Test Test Test'

formatUnderScore('test_test_test', { capitalizePositions: 'all', spacePositions: [1] }) // 'Test test Test'
```