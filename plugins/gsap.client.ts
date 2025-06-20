export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    const { ScrollToPlugin } = await import('gsap/ScrollToPlugin')
    const { Draggable } = await import('gsap/Draggable')
    const { TextPlugin } = await import('gsap/TextPlugin')

    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      Draggable,
      TextPlugin,
    )

    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
    nuxtApp.provide('ScrollToPlugin', ScrollToPlugin)
    nuxtApp.provide('Draggable', Draggable)
    nuxtApp.provide('TextPlugin', TextPlugin)

  }
  catch {
    console.warn('GSAP not installed! Please install it by running `npm install gsap` to use the useGSAP composable')

    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('ScrollToPlugin', null)
    nuxtApp.provide('Draggable', null)
    nuxtApp.provide('TextPlugin', null)
  }
})
