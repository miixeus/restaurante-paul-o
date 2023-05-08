import EmblaCarousel from 'embla-carousel'
import { setupTweenParallax } from './tween-parallax'
import '../assets/sass/sandbox.scss'
import '../assets/sass/embla.scss'


const OPTIONS = { inViewThreshold: 0, dragFree: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
const { applyTweenParallax, removeTweenParallax } = setupTweenParallax(emblaApi)

emblaApi
  .on('init', applyTweenParallax)
  .on('scroll', applyTweenParallax)
  .on('reInit', applyTweenParallax)
  .on('destroy', removeTweenParallax)
