import { Icon } from './Icons'

type Reason = { icon: string; n: string; t: string; d: string }

export default function WhyUs() {
  const reasons: Reason[] = [
    { icon: 'People', n: '01', t: 'Principal-led, always',
      d: 'Every brief is run by the principal. No delegation to pupils, no learning on your time and money.' },
    { icon: 'Clock', n: '02', t: 'We go to trial',
      d: 'A chambers that genuinely tries cases changes every settlement conversation before the first hearing date.' },
    { icon: 'Lock', n: '03', t: 'Absolute discretion',
      d: 'Privileged communications, encrypted intake, and a culture that treats your confidence as a binding obligation.' },
    { icon: 'Shield', n: '04', t: 'Aligned fees',
      d: 'Capped phase fees, success arrangements on appropriate briefs, and itemised invoices reviewed by a person.' },
    { icon: 'Award', n: '05', t: 'Recognised nationally',
      d: 'Chambers Africa, Legal 500, NBA Award — recognition earned in courtrooms across Nigeria.' },
    { icon: 'Doc', n: '06', t: 'Thorough on paper',
      d: "Every brief, motion, and written address we file is one we would be proud to read aloud in the Supreme Court." },
  ]

  return (
    <section className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-paper2/60">
      <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-16">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">— 06 / Why Azubuike Sylvester &amp; Co.</div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-display font-light text-[clamp(34px,5.4vw,84px)] leading-[0.95] tracking-[-0.015em] mt-3 md:mt-0" data-reveal>
            Six reasons clients
            <em style={{ fontStyle: 'italic' }}> return.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
        {reasons.map(r => {
          const IconC = Icon[r.icon]
          return (
            <div key={r.n} className="border-b border-rule sm:[&:nth-child(2n)]:border-r-0 sm:[&:not(:nth-child(2n))]:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r p-7 sm:p-8 lg:p-10" data-reveal>
              <div className="flex items-start justify-between">
                <span className="label text-mute">{r.n}</span>
                <IconC size={22} className="text-ink" />
              </div>
              <h3 className="mt-8 sm:mt-10 font-display text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-tight">{r.t}</h3>
              <p className="mt-3 text-[14px] sm:text-[14.5px] text-ink2 leading-relaxed max-w-[40ch]">{r.d}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
