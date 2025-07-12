# NuxtHelper

A Nuxt layer that provides a collection of reusable composables and utility functions to supercharge your Nuxt.js projects.

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

If you encounter typecheck issues related to missing dependencies, you can resolve them by adding the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": [
      "@favorodera/nuxt-helper"
    ]
  }
}
```

This step is usually not required, but it can help TypeScript recognize the types provided by the layer if you run into any typecheck errors.

## Documentation

For detailed information on how to use each helper, please refer to the documentation pages below.

### Composables

-   [useDollarFetch - A `$fetch` wrapper composable for data fetching](./docs/composables/useDollarFetch.md)
-   [useGSAP - A composable for GSAP animations.](./docs/composables/useGSAP.md)

### Utils

-   [formatNumber - A utility function for formatting numbers using Intl.NumberFormat.](./docs/utils/formatNumber.md)
-   [formatUnderScore - A utility function for formatting strings with underscores.](./docs/utils/formatUnderScore.md)