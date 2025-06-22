export default defineNuxtPlugin(async () => {
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

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, TextPlugin)

    return {
      provide: {
        gsap,
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        TextPlugin,
      },
    }
  } catch {
    return {}
  }
})
