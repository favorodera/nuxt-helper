## `useGSAP()`

A composable for GSAP animations in Nuxt projects. Returns the GSAP instance, allowing you to use all GSAP methods and plugins easily within your components.

---

**Note**: This composable uses [GSAP](https://www.npmjs.com/package/gsap) under the hood. If you don't have it installed, you can install it with `npm install gsap`.

**Auto-registered plugins:**
- `ScrollTrigger`
- `ScrollToPlugin`
- `Draggable`
- `TextPlugin`

**Helper:**
- `useTemplateRef` is a utility for easily creating template refs in `<script setup>` syntax. It is provided by this layer.

### Parameters

This composable does not take any parameters.

### Returns
- `gsap`: The GSAP instance, with all auto-registered plugins available.

---

**Usage Example:**

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