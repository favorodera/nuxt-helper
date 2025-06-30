## `useDynamicFetch()`

A `$fetch` wrapper composable for dynamic data fetching on the client side.
---

**Usage Example**:

1. **Immediate Execution**:

   ```vue
   <script lang="ts" setup>

   const { data, status, error } = useDynamicFetch('/api/user', {
     method: 'POST',
     body: { name: 'John Doe' },
   })

   </script>
   ```

2. **Manual Execution (Merge and/or overwrite parameters)**:

   ```vue
   <script lang="ts" setup>

   const { data, status, error, execute } = useDynamicFetch('/api/user', {
     immediate: false,
     method: 'POST',
   })

   async function onSubmit() {
     await execute({
       body: { name: 'John Doe' },
     })
   }

   async function onSend() {
     await execute('/api/user-send', {
       method: 'GET',
     })
   }

   async function onAccept() {
     await execute('/api/user-accept', {
       method: 'PATCH',
       body: { name: 'John Mac' },
       headers: {
         'Authorization': 'Bearer token',
       },
     })
   }

   </script>
   ```