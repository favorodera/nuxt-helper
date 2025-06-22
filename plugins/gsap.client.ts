export default defineNuxtPlugin(async (nuxtApp) => {
  const provideNulls = () => {
    nuxtApp.provide('gsap', null)
    nuxtApp.provide('ScrollTrigger', null)
    nuxtApp.provide('ScrollToPlugin', null)
    nuxtApp.provide('Draggable', null)
    nuxtApp.provide('TextPlugin', null)
  }

  try {
    const [
      { gsap },
      { ScrollTrigger },
      { ScrollToPlugin },
      { Draggable },
      { TextPlugin },
    ] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/ScrollToPlugin'),
      import('gsap/Draggable'),
      import('gsap/TextPlugin'),
    ])

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
    console.warn('GSAP not installed! To enable animations, run: ' + '`npm install gsap`')
    provideNulls()
  }
})
