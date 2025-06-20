import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    Draggable,
    TextPlugin,
  )

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

