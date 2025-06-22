export default defineNuxtPlugin(async () => {

  async function importGSAP() {
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
        gsap,
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        TextPlugin,
      }
    } catch {
      return null
    }
  }

  const gsapImports = await importGSAP()

  if (!gsapImports) return {}

  const { gsap, ScrollTrigger, ScrollToPlugin, Draggable, TextPlugin } = gsapImports

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin,
      Draggable,
      TextPlugin,
    },
  }
})
