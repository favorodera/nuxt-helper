export default defineNuxtPlugin(async () => {

  try {
    const { gsap } = await import('gsap')

    const [{ ScrollTrigger }, { ScrollToPlugin }, { Draggable }, { TextPlugin }] = await Promise.all([
      import('gsap/ScrollTrigger'),
      import('gsap/ScrollToPlugin'),
      import('gsap/Draggable'),
      import('gsap/TextPlugin'),
    ])

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, TextPlugin)

    return {
      provide: {
        gsap,
      },
    }
  } catch {
    return {}
  }
})
