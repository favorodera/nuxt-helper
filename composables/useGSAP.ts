/**
 * A composable that provides access to the GSAP animation library
 *
 * @see {@link https://gsap.com/ GSAP}
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/composables/useGSAP.md#usegsap useGSAP}
 *
 * */
export default function () {
  const { $gsap, $ScrollTrigger, $ScrollToPlugin, $Draggable, $TextPlugin } = useNuxtApp()

  if (import.meta.client && !$gsap) {

    console.warn('GSAP not installed! To enable animations, run: npm install gsap')

  }

  return {
    gsap: $gsap,
    ScrollTrigger: $ScrollTrigger,
    ScrollToPlugin: $ScrollToPlugin,
    Draggable: $Draggable,
    TextPlugin: $TextPlugin,
  }
}
