/**
 * Returns the GSAP instance from Nuxt app context.
 * @returns {GSAP} The GSAP instance.
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/composables/useGSAP.md#usegsap useGSAP}
 */
export default function (): GSAP {
  const { $gsap: gsap } = useNuxtApp()

  if (import.meta.client && !gsap) {
    console.warn('[nuxt-helper-layer] GSAP is not installed. To enable it, run: npm install gsap')
  }
  
  return gsap
}
