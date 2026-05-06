import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Achievements from './components/Achievements'
import Cases from './components/Cases'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e: IntersectionObserverEntry) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Practice />
        <Achievements />
        <Cases />
        <Testimonials />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
