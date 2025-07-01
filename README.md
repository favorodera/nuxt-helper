# NuxtHelper

A Nuxt layer that provides a collection of powerful and reusable composables and utility functions to supercharge your Nuxt.js projects.

## Installation and setup

```bash
npm install @favorodera/nuxt-helper
```

Add the following to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
    extends: ['@favorodera/nuxt-helper'],
})

```

## Documentation

For detailed information on how to use each helper, please refer to the documentation pages below.

### Composables

-   [useDollarFetch - A `$fetch` wrapper composable for data fetching](./docs/composables/useDollarFetch.md)
-   [useGSAP - A composable for GSAP animations.](./docs/composables/useGSAP.md)

### Utils

-   [formatNumber - A utility function for formatting numbers using Intl.NumberFormat.](./docs/utils/formatNumber.md)
-   [formatUnderScore - A utility function for formatting strings with underscores.](./docs/utils/formatUnderScore.md)