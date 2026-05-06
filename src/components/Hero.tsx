import { Icon } from './Icons'

type Stat = { k: string; s: string; l: string; sub: string }

export default function Hero() {
  const stats: Stat[] = [
    { k: '12', s: 'yrs', l: 'Years of practice', sub: 'across federal & state courts' },
    { k: '92', s: '%', l: 'Favorable rate', sub: 'verdicts & settlements' },
    { k: '₦2.8', s: 'B+', l: 'Client outcomes', sub: 'recovered & protected' },
    { k: '20', s: '', l: 'Trials to verdict', sub: 'Federal, State & arbitral fora' },
  ]

  const credentials: string[] = [
    'Supreme Court · Admitted',
    'Court of Appeal · All Divisions',
    'Federal High Court',
    'Lagos State High Court',
    'NBA Member',
    'BL · Nigerian Law School',
    'LLB · First Class',
    'LLM · University of Lagos',
    'PhD · In View',
    'ACIArb · Arbitrator',
    'NIALS · Associate',
  ]

  return (
    <section id="top" className="relative px-5 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">

      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 grid-bg opacity-60 hidden md:block" />

      <div className="pointer-events-none absolute right-[-1vw] bottom-[26%] hidden xl:block z-0">
        <div className="font-display italic text-[160px] leading-none text-brass/[0.08] tracking-tight select-none">A&amp;Co</div>
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-6 lg:gap-8 items-end">

        <div className="hidden lg:block col-span-3">
          <div className="label text-mute mb-4">Brief № 0001 / 2026</div>
          <div className="font-mono text-xs text-mute leading-relaxed">
            <div>Cause:</div>
            <div className="text-ink">Trial &amp; Advisory Counsel</div>
            <div className="mt-3">Forum:</div>
            <div className="text-ink">Federal High Court · Lagos HC</div>
            <div className="mt-3">Status:</div>
            <div className="text-ink flex items-center gap-2">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-brass pulse-ring"></span>
              </span>
              Accepting briefs
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <div className="label text-mute mb-4 sm:mb-6">— Trial &amp; Commercial Counsel since 2012</div>

          <h1 className="font-display font-light text-[clamp(44px,11vw,156px)] leading-[0.92] tracking-[-0.02em]" data-reveal>
            <span className="block">When justice</span>
            <span className="block">
              <em className="not-italic font-normal" style={{ fontStyle: 'italic' }}>demands</em> a voice,
            </span>
            <span className="block flex items-baseline gap-3 sm:gap-4">
              we speak it.
              <span className="hidden sm:inline-block h-[0.7em] w-[0.7em] rounded-full bg-brass align-baseline translate-y-[-0.05em]"></span>
            </span>
          </h1>

          <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-6 lg:gap-8">
            <p className="col-span-12 md:col-span-7 lg:col-span-6 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-ink2 max-w-prose" data-reveal>
              A boutique litigation and solicitors' chambers advising corporations, executives, and individuals
              through complex disputes, EFCC/ICPC matters, and transactions that define careers and companies.
              Discreet by default. Decisive when it counts.
            </p>

            <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-wrap items-center gap-3 md:justify-end" data-reveal>
              <a href="#contact" className="btn-primary w-full sm:w-auto justify-center sm:justify-start">
                <span className="hidden sm:inline">Book a privileged consultation</span>
                <span className="sm:hidden">Book consultation</span>
                <Icon.Arrow className="arrow" />
              </a>
              <a href="#cases" className="btn-ghost w-full sm:w-auto justify-center sm:justify-start">
                Read the case file
                <Icon.ArrowUR />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-20 hr-thin pt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10" data-reveal>
        {stats.map((m, i) => (
          <div key={i} className="flex flex-col">
            <div className="font-display figure text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tight">
              {m.k}<span className="text-brassd text-[0.55em] align-baseline ml-1">{m.s}</span>
            </div>
            <div className="mt-3 label text-ink/80">{m.l}</div>
            <div className="mt-1 text-xs text-mute leading-snug max-w-[180px]">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="relative mt-12 sm:mt-16 -mx-5 sm:-mx-6 lg:-mx-8 border-y border-rule overflow-hidden">
        <div className="flex gap-8 sm:gap-12 py-4 drift whitespace-nowrap label text-ink/70">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-8 sm:gap-12 shrink-0">
              {credentials.map((t, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass"></span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
