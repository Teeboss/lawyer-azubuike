import { useState } from 'react'
import { Icon } from './Icons'

type CaseStat = { k: string; s: string; l: string; sub: string }
type Dossier = { tag: string; title: string; detail: string; result: string }

export default function Cases() {
  const stats: CaseStat[] = [
    { k: '92', s: '%', l: 'Favorable disposition rate', sub: 'verdict, dismissal, or settlement' },
    { k: '₦2.8', s: 'B', l: 'Recovered or protected', sub: 'aggregate client outcome since 2012' },
    { k: '20', s: '', l: 'Trials to verdict', sub: 'Federal, State, and arbitral fora' },
    { k: '0', s: '', l: 'Sanctions, ever', sub: 'against the chambers or its counsel' },
  ]

  const dossier: Dossier[] = [
    {
      tag: 'Federal High Court · EFCC',
      title: 'Defended a senior bank executive against money-laundering and conspiracy charges in parallel EFCC and AMCON proceedings.',
      detail: 'Secured a no-bill determination at the EFCC; Federal High Court dismissed all charges at no-case submission. Client returned to executive duties without restriction.',
      result: 'All charges dismissed',
    },
    {
      tag: 'Lagos State High Court',
      title: 'Acted as lead counsel for a tech founder in a contested directorship and shareholder removal dispute.',
      detail: 'Obtained an interlocutory injunction within 72 hours of filing; final judgment restored client as Managing Director with full shareholding intact.',
      result: 'Judgment for plaintiff',
    },
    {
      tag: 'Court of Appeal · Abuja',
      title: 'Represented a government contractor in a ₦1.4 billion breach-of-contract appeal.',
      detail: 'Overturned adverse Federal High Court decision on appeal after a three-day oral hearing; judgment entered in full for client.',
      result: '₦1.4B judgment',
    },
    {
      tag: 'ICC Arbitration · Lagos',
      title: 'Recovered outstanding earn-out payments for a telecommunications infrastructure investor in a multi-jurisdictional ICC arbitration.',
      detail: 'Arbitration resolved within 18 months; final award affirmed on all principal claims at confirmation stage.',
      result: '$12M+ award',
    },
  ]

  const [open, setOpen] = useState(0)

  return (
    <section id="cases" className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-ink text-paper">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-paper/60">— 04 / Case Results</div>
          <h2 className="mt-5 sm:mt-6 font-display font-light text-[clamp(34px,5.4vw,84px)] leading-[0.95] tracking-[-0.015em]" data-reveal>
            The work,
            <em style={{ fontStyle: 'italic' }}> measured.</em>
          </h2>
          <p className="mt-5 sm:mt-6 text-paper/70 leading-relaxed max-w-sm">
            Past results do not guarantee future outcomes. They do, however, establish a method —
            and the discipline to repeat it across every brief we accept.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 self-end mt-6 md:mt-0">
          {stats.map((m, i) => (
            <div key={i} className="border-t border-paper/20 pt-4 sm:pt-5" data-reveal>
              <div className="font-display figure text-[44px] sm:text-[60px] lg:text-[80px] leading-none tracking-tight">
                {m.k}<span className="text-brass">{m.s}</span>
              </div>
              <div className="mt-2 sm:mt-3 label text-paper/70">{m.l}</div>
              <div className="mt-2 text-xs text-paper/50 max-w-[180px]">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 sm:mt-20 border-t border-paper/15">
        {dossier.map((d, i) => {
          const isOpen = open === i
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left border-b border-paper/15 py-6 sm:py-7 lg:py-9 group"
              data-reveal
            >
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-baseline">
                <div className="col-span-3 sm:col-span-2 label text-paper/60 figure">№ 0{i + 1}</div>
                <div className="col-span-9 sm:col-span-3 lg:col-span-2 label text-brass">{d.tag}</div>
                <div className="col-span-11 sm:col-span-6 lg:col-span-7 font-display text-[18px] sm:text-[22px] lg:text-[30px] leading-[1.15] tracking-tight">
                  {d.title}
                </div>
                <div className="col-span-1 justify-self-end transition-transform shrink-0" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <Icon.Plus size={20} />
                </div>
              </div>

              <div
                className="grid grid-cols-12 gap-3 sm:gap-4 overflow-hidden transition-all duration-500 ease-out"
                style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0, marginTop: isOpen ? 18 : 0 }}
              >
                <div className="sm:col-start-3 lg:col-start-5 col-span-12 sm:col-span-10 lg:col-span-7">
                  <p className="text-paper/85 leading-relaxed text-[14.5px] sm:text-[15.5px] max-w-[58ch]">{d.detail}</p>
                  <div className="mt-4 inline-flex items-center gap-2 label text-brass">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass"></span>
                    Result · {d.result}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <p className="mt-8 sm:mt-10 text-xs text-paper/45 max-w-2xl">
        Matter descriptions are anonymised and have been approved for public mention by the relevant clients.
        Identifying details are omitted in accordance with our confidentiality obligations under the RPC.
      </p>
    </section>
  )
}
