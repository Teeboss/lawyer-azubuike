import { useState, useEffect } from 'react'
import { Icon } from './Icons'

type NavLink = { id: string; label: string }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const opt: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos', hour12: false }
      setTime(new Intl.DateTimeFormat('en-NG', opt).format(d) + " WAT")
    }
    tick()
    const id = window.setInterval(tick, 30_000)
    return () => window.clearInterval(id)
  }, [])

  const links: NavLink[] = [
    { id: 'about', label: 'Practice' },
    { id: 'services', label: 'Areas' },
    { id: 'cases', label: 'Cases' },
    { id: 'testimonials', label: 'Voices' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-8 py-2.5 label text-mute border-b border-rule/70">
        <div className="flex items-center gap-6">
          <span>Est. 2012 · Lagos · Abuja</span>
          <span className="opacity-60">·</span>
          <span>{time} — chambers open</span>
        </div>
        <div className="flex items-center gap-6">
          <span>08033939607</span>
          <span className="opacity-60">·</span>
          <a href="#contact" className="ulink-hover">chambers@azsylvesterco.com</a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'nav-blur border-b border-rule/70' : ''}`}>
        <div className="flex items-center justify-between px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
          <a href="#top" className="flex items-center gap-3 group min-w-0">
            <span className="font-display text-[17px] sm:text-[19px] lg:text-[21px] tracking-tight leading-none whitespace-nowrap">
              Azubuike Sylvester <span className="text-brassd">&amp;</span> Co.
            </span>
            <span className="hidden xl:inline label text-mute pl-3 border-l border-rule">Barristers &amp; Solicitors</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px]">
            {links.map((l, i) => (
              <a key={l.id} href={`#${l.id}`} className="ulink-hover text-ink/85 hover:text-ink whitespace-nowrap">
                <span className="label text-mute mr-2">{String(i + 1).padStart(2, '0')}</span>{l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#contact" className="hidden sm:inline-flex btn-primary">
              <span className="hidden md:inline">Book Consultation</span>
              <span className="md:hidden">Book</span>
              <Icon.Arrow className="arrow" />
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden btn-ghost px-4 py-3">
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-rule px-5 sm:px-6 py-6 bg-paper">
            <ul className="space-y-4 text-2xl font-display">
              {links.map(l => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-1">{l.label}</a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full justify-center sm:hidden">
              Book Consultation <Icon.Arrow className="arrow" />
            </a>
            <div className="mt-6 pt-5 border-t border-rule label text-mute space-y-2">
              <div>08033939607</div>
              <div>chambers@azsylvesterco.com</div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
