## `useGSAP()`

A composable for GSAP animations
---
**Note**: This composable uses [GSAP](https://www.npmjs.com/package/gsap) under the hood. If you don't have it installed, you can install it with `npm install gsap`.

**Auto-registered plugins**: `ScrollTrigger`, `ScrollToPlugin`, `Draggable`, `TextPlugin`

**Usage Example**:

```vue
<template>
  <main>
    <h1 ref="title"></h1>
    <p ref="content">This is GSAP</p>
  </main>
</template>

<script lang="ts" setup>

const gsap = useGSAP()

const titleRef = useTemplateRef('title')
const contentRef = useTemplateRef('content')

onMounted(() => {
  gsap.fromTo(contentRef.value, { opacity: 0 }, { opacity: 1 })

  gsap.to(titleRef.value, {
    text: {
      value: 'Hello World',
      speed: 1,
      delimiter: ''
    },
    duration: 2,
    ease: "power1.inOut"
  })
})

</script>
```