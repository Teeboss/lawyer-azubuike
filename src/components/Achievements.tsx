import { Icon } from './Icons'

type Recognition = { y: string; t: string; s: string; k: string }

export default function Achievements() {
  const items: Recognition[] = [
    { y: '2025', t: 'Chambers Africa', s: 'Commercial Litigation · Nigeria — Up and Coming', k: 'Ranked' },
    { y: '2024', t: 'Legal 500 Africa', s: 'Commercial Litigation — Recommended Lawyer', k: 'Listed' },
    { y: '2024', t: 'NBA Lagos Branch', s: 'Outstanding Commercial Lawyer Award', k: 'Award' },
    { y: '2023', t: 'IFLR1000 Nigeria', s: 'Notable Practitioner — M&A and Corporate', k: 'Notable' },
    { y: '2023', t: 'African Bar Association', s: 'Rising Star in Commercial Law', k: 'Star' },
    { y: '2022', t: 'Benchmark Africa', s: 'Litigation Star — Lagos', k: 'Star' },
  ]

  const memberships: string[] = [
    'Nigerian Bar Association (NBA)',
    'International Bar Association (IBA)',
    'African Bar Association (AfBA)',
    'Chartered Institute of Arbitrators — Nigerian Branch',
    'Nigerian Institute of Advanced Legal Studies (NIALS)',
    'Lagos Chamber of Commerce & Industry — Legal Committee',
    "Nigerian-British Chamber of Commerce",
  ]

  return (
    <section className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">— 03 / Recognition</div>
          <h2 className="mt-5 sm:mt-6 font-display font-light text-[clamp(34px,5.4vw,84px)] leading-[0.95] tracking-[-0.015em]" data-reveal>
            On the
            <em style={{ fontStyle: 'italic' }}> record.</em>
          </h2>
          <p className="mt-5 sm:mt-6 text-ink2 leading-relaxed max-w-sm">
            The chambers' work is regularly recognised by publications and peer bodies that evaluate
            litigation counsel across Africa. Recognition follows the brief — never the other way around.
          </p>

          <div className="mt-8 sm:mt-10 inline-flex items-center justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44">
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-brassd">
                <defs>
                  <path id="circ" d="M100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                </defs>
                <text fill="currentColor" fontSize="11" letterSpacing="3" fontFamily="JetBrains Mono">
                  <textPath href="#circ" startOffset="0">
                    NIGERIAN BAR ASSOCIATION · MEMBER · NBA LAGOS ·
                  </textPath>
                </text>
                <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon.Award size={40} className="text-brassd" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <ul className="border-t border-rule mt-2 md:mt-0">
            {items.map((it, i) => (
              <li key={i} className="hr-thin border-t-0 border-b border-rule grid grid-cols-12 gap-3 sm:gap-4 py-5 sm:py-6 group" data-reveal>
                <div className="col-span-2 sm:col-span-2 label text-mute self-center figure">{it.y}</div>
                <div className="col-span-7 sm:col-span-7">
                  <div className="font-display text-[18px] sm:text-[22px] lg:text-[26px] leading-tight">{it.t}</div>
                  <div className="text-xs sm:text-sm text-ink2 mt-1">{it.s}</div>
                </div>
                <div className="col-span-3 sm:col-span-3 text-right self-center">
                  <span className="label text-ink/70 border border-rule rounded-full px-2 sm:px-3 py-1 sm:py-1.5 group-hover:bg-ink group-hover:text-paper transition whitespace-nowrap inline-block">
                    {it.k}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 sm:mt-12 grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 sm:col-span-3 label text-mute pt-2">Memberships</div>
            <ul className="col-span-12 sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[14px] sm:text-[15px]">
              {memberships.map(m => (
                <li key={m} className="flex items-start gap-3">
                  <Icon.Check className="text-brassd mt-1 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
