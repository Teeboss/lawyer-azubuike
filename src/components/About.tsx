export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">

        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="label text-mute mb-5 sm:mb-6">— 01 / Counsel</div>

          <div className="relative aspect-[4/5] bg-paper2 stripe-bg overflow-hidden max-w-md mx-auto md:max-w-none">
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
              <div className="bg-paper border border-rule px-3 py-2 max-w-[240px]">
                <div className="label text-mute">drop · portrait</div>
                <div className="text-xs text-ink2 mt-1">B. Azubuike Sylvester — chambers, Lagos</div>
              </div>
            </div>
            <span className="absolute top-3 left-3 h-3 w-3 border-t border-l border-ink"></span>
            <span className="absolute top-3 right-3 h-3 w-3 border-t border-r border-ink"></span>
            <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-ink"></span>
            <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink"></span>
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-mute max-w-md mx-auto md:max-w-none">
            <span className="label">Barrister A. Sylvester</span>
            <span className="font-mono">Plate 01 / 04</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
          <h2 className="font-display font-light text-[clamp(34px,5.4vw,84px)] leading-[0.96] tracking-[-0.015em] mt-8 md:mt-0" data-reveal>
            A practice built on
            <em className="not-italic" style={{ fontStyle: 'italic' }}> Nigerian jurisprudence</em> —
            and the will to go all the way to trial.
          </h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-7">
              <p className="dropcap font-display text-[18px] sm:text-[20px] leading-[1.55] text-ink" data-reveal>
                Barrister Azubuike Sylvester founded the chambers in 2012 after years as senior associate
                at leading commercial litigation firms in Lagos. He advises corporations, directors, government
                agencies, and individuals through high-stakes disputes, EFCC/ICPC investigations, property
                transactions, and board-level governance matters — cases where the right legal strategy
                can be the difference between justice and compromise.
              </p>
              <p className="mt-6 text-ink2 leading-[1.7]" data-reveal>
                The chambers is intentionally lean. Every brief is handled by a principal. Every court
                appearance is prepared days in advance, not hours. We try cases — and that readiness, more
                than any pitch, is what reshapes the settlement table before we ever enter a courtroom.
              </p>
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="hr-thin pt-5">
                <div className="label text-mute">Court Admissions</div>
                <ul className="mt-3 space-y-2 text-[14px] sm:text-[15px]">
                  <li>Supreme Court of Nigeria · 2012</li>
                  <li>Court of Appeal (All Divisions) · 2012</li>
                  <li>Federal High Court · 2012</li>
                  <li>High Court of Lagos State · 2012</li>
                  <li>National Industrial Court · 2013</li>
                  <li>Investment &amp; Securities Tribunal · 2015</li>
                </ul>
              </div>

              <div className="hr-thin mt-8 pt-5">
                <div className="label text-mute">Education</div>
                <ul className="mt-3 space-y-2 text-[14px] sm:text-[15px]">
                  <li>LLB (First Class), University of Nigeria, Nsukka</li>
                  <li>BL, Nigerian Law School, Abuja Campus</li>
                  <li>LLM, University of Lagos</li>
                  <li>PhD (International Commercial Law) — In View</li>
                </ul>
              </div>

              <div className="hr-thin mt-8 pt-5">
                <div className="label text-mute">Early Career</div>
                <p className="mt-3 text-[14px] sm:text-[15px]">Senior Associate, Afe Babalola &amp; Co. (ABUAD Group); commercial litigation lead, 2010–2012</p>
              </div>
            </aside>
          </div>

          <div className="hr-thin mt-10 sm:mt-12 pt-6 flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-full">
              <div className="label text-mute">Mission</div>
              <p className="font-display text-[19px] sm:text-[22px] lg:text-[26px] mt-2 max-w-[640px] leading-[1.35]">
                <em style={{ fontStyle: 'italic' }}>"To represent every client as if the matter is our own —
                and to write the brief we would want read in the Supreme Court."</em>
              </p>
            </div>
            <svg viewBox="0 0 240 70" className="h-12 sm:h-14 text-ink shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M5 50 C 30 10, 50 65, 70 35 S 110 5, 130 45 S 175 65, 195 25 C 210 0, 225 35, 235 30" />
              <path d="M70 60 L150 60" strokeWidth="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
