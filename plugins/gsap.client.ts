export default defineNuxtPlugin(async () => {
  async function importGSAP() {
    try {
      const [{ default: gsap }, { default: ScrollTrigger }, { default: ScrollToPlugin }, { default: Draggable }, { default: TextPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrollToPlugin'),
        import('gsap/Draggable'),
        import('gsap/TextPlugin'),
      ])

      return {
        gsap,
        ScrollTrigger,
        ScrollToPlugin,
        Draggable,
        TextPlugin,
      }
    }
    catch {
      console.error('GSAP not installed! To enable animations, run: npm install gsap')
      return null
    }
  }

  const gsapModules = await importGSAP()

  return {
    provide: {
      gsap: gsapModules?.gsap,
      ScrollTrigger: gsapModules?.ScrollTrigger,
      ScrollToPlugin: gsapModules?.ScrollToPlugin,
      Draggable: gsapModules?.Draggable,
      TextPlugin: gsapModules?.TextPlugin,
    },
  }
})
