import { useState, useEffect } from 'react'
import { Icon } from './Icons'

type Testimonial = { q: string; n: string; r: string }

export default function Testimonials() {
  const items: Testimonial[] = [
    {
      q: 'Barrister Azubuike took a case the EFCC was certain would end in conviction. It ended in a nolle prosequi. My business, my reputation — everything remains intact.',
      n: 'Emeka O.',
      r: 'Managing Director, Tier-2 Commercial Bank',
    },
    {
      q: 'The most prepared lawyer I have seen in a Nigerian courtroom. Calm under pressure, devastating on cross-examination, and always three steps ahead of the other side.',
      n: 'Ngozi A.',
      r: 'Board Chairperson, Listed Real Estate Company',
    },
    {
      q: 'He told me exactly what the law said, not what I wanted to hear. That honesty — and the ₦1.4 billion judgment that followed — is why I will never brief anyone else.',
      n: 'Chukwudi I.',
      r: 'Group General Counsel, Infrastructure Conglomerate',
    },
    {
      q: 'I was under ICPC investigation for nearly two years. Barrister Sylvester guided every step with precision and discretion. The case was discontinued. I am still in office.',
      n: 'Anonymous',
      r: 'Senior Government Official, Abuja',
    },
  ]

  const [idx, setIdx] = useState(0)
  const next = () => setIdx((idx + 1) % items.length)
  const prev = () => setIdx((idx - 1 + items.length) % items.length)

  useEffect(() => {
    const id = window.setInterval(next, 7000)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const t = items[idx]

  return (
    <section id="testimonials" className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">— 05 / Voices</div>
          <h2 className="mt-5 sm:mt-6 font-display font-light text-[clamp(34px,5.4vw,84px)] leading-[0.95] tracking-[-0.015em]" data-reveal>
            What clients
            <em style={{ fontStyle: 'italic' }}> say</em>, after.
          </h2>
          <div className="mt-6 sm:mt-8 flex items-center gap-3">
            <button onClick={prev} aria-label="Previous" className="btn-ghost px-5">
              <span className="rotate-180 inline-flex"><Icon.Arrow /></span>
            </button>
            <button onClick={next} aria-label="Next" className="btn-ghost px-5">
              <Icon.Arrow />
            </button>
            <div className="ml-3 label text-mute figure">
              {String(idx + 1).padStart(2, '0')} <span className="text-rule">/</span> {String(items.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 mt-8 md:mt-0">
          <div className="relative">
            <Icon.Quote size={48} className="text-brass/70" />
            <blockquote
              key={idx}
              className="mt-4 sm:mt-6 font-display text-[clamp(22px,3.4vw,46px)] leading-[1.18] tracking-[-0.01em] text-ink"
              style={{ animation: 'fadeUp .7s ease' }}
            >
              <em style={{ fontStyle: 'italic' }}>"{t.q}"</em>
            </blockquote>
            <div className="hr-thin mt-8 sm:mt-10 pt-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="font-medium">{t.n}</div>
                <div className="text-sm text-mute" dangerouslySetInnerHTML={{ __html: t.r }} />
              </div>
              <div className="flex items-center gap-1 text-brassd">
                {Array.from({ length: 5 }).map((_, k) => <Icon.Star key={k} />)}
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 flex gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setIdx(k)}
                className={`h-[2px] flex-1 transition ${k === idx ? 'bg-ink' : 'bg-rule'}`}
                aria-label={`Go to ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
