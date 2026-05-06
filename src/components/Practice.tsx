import { Icon } from './Icons'

type Area = {
  n: string
  icon: string
  title: string
  desc: string
  tags: string[]
}

export default function Practice() {
  const areas: Area[] = [
    {
      n: '01', icon: 'Scale',
      title: 'Commercial\nLitigation',
      desc: 'Contract disputes, debt recovery, partnership and shareholder disagreements. We prepare for trial — and the other side knows it.',
      tags: ['Lagos HC · FHC', 'Injunctive relief', 'Appeals'],
    },
    {
      n: '02', icon: 'Shield',
      title: 'Criminal Defense\n& EFCC/ICPC',
      desc: 'Federal investigations, money laundering, cybercrime, and ICPC charges. Discreet, parallel-track, and thoroughly prepared.',
      tags: ['EFCC · ICPC · DSS', 'Pre-charge defense', 'Bail applications'],
    },
    {
      n: '03', icon: 'Gavel',
      title: 'Corporate &\nGovernance',
      desc: 'Counsel to founders, boards, and audit committees on governance disputes, M&A transactions, and contested directorship.',
      tags: ['CAC filings', 'Board disputes', 'SEC compliance'],
    },
    {
      n: '04', icon: 'House',
      title: 'Real Estate &\nConveyancing',
      desc: 'Land title perfection, Governor\'s consent, family land disputes, and the quiet resolutions that protect generational wealth.',
      tags: ["Governor's Consent", 'C of O', 'Land disputes'],
    },
    {
      n: '05', icon: 'Family',
      title: 'Family &\nMatrimonial',
      desc: 'High-value divorce, custody, maintenance, and estate matters handled with the same rigour as our commercial practice.',
      tags: ['Matrimonial Causes', 'Custody', 'Probate'],
    },
    {
      n: '06', icon: 'Globe',
      title: 'Immigration &\nCitizenship',
      desc: 'STR, CERPAC, business visas, and expatriate quota processing for executives, investors, and the teams they bring.',
      tags: ['STR · CERPAC', 'Expatriate quota', 'Dual citizenship'],
    },
  ]

  return (
    <section id="services" className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-paper2/60">
      <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-14">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">— 02 / Practice Areas</div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-display font-light text-[clamp(30px,5vw,72px)] leading-[0.98] tracking-[-0.015em] mt-3 md:mt-0" data-reveal>
            Six matters. <em style={{ fontStyle: 'italic' }}>One standard.</em>
            <span className="block text-ink2/80">The work we take on, and the work we decline.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
        {areas.map((a) => {
          const IconC = Icon[a.icon]
          return (
            <a
              href="#contact"
              key={a.n}
              className="card-svc relative p-7 sm:p-8 lg:p-10 border-b border-rule sm:[&:nth-child(2n)]:border-r-0 sm:[&:not(:nth-child(2n))]:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r group"
              data-reveal
            >
              <div className="flex items-start justify-between">
                <span className="label text-mute">№ {a.n}</span>
                <span className="arrow-tiny text-ink/60 group-hover:text-ink"><Icon.ArrowUR /></span>
              </div>

              <div className="mt-8 sm:mt-10 mb-6 sm:mb-7 text-ink"><IconC size={28} /></div>

              <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.05] tracking-tight whitespace-pre-line">
                {a.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-[14px] sm:text-[14.5px] text-ink2 leading-relaxed max-w-[36ch]">
                {a.desc}
              </p>

              <div className="mt-6 sm:mt-7 flex flex-wrap gap-2">
                {a.tags.map(t => (
                  <span key={t} className="label text-mute border border-rule rounded-full px-3 py-1.5">{t}</span>
                ))}
              </div>
            </a>
          )
        })}
      </div>

      <div className="mt-8 sm:mt-10 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-mute max-w-prose">
          We accept a limited number of new briefs each quarter. Conflicts checks are completed within 24 hours.
        </p>
        <a href="#contact" className="btn-ghost">
          Open a conflicts inquiry
          <Icon.Arrow />
        </a>
      </div>
    </section>
  )
}
