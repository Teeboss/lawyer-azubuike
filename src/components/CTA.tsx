import { Icon } from './Icons'

export default function CTA() {
  return (
    <section className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 hidden md:block" />
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="label text-mute">— Brief Counsel</div>
        <h2 className="mt-5 sm:mt-6 font-display font-light text-[clamp(40px,9vw,150px)] leading-[0.92] tracking-[-0.02em]" data-reveal>
          When the stakes
          <span className="block"><em style={{ fontStyle: 'italic' }}>are not</em> ordinary —</span>
          <span className="block">brief counsel.</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-ink2 max-w-xl mx-auto leading-relaxed text-[14.5px] sm:text-base">
          Privileged consultations are scheduled within 24 hours. Conflicts checks are confidential and
          never leave the chambers. We accept a limited number of new briefs each quarter.
        </p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center flex-wrap gap-3">
          <a href="#contact" className="btn-primary text-base">
            Schedule a Consultation
            <Icon.Arrow className="arrow" />
          </a>
          <a href="tel:08033939607" className="btn-ghost">
            <Icon.Phone /> 08033939607
          </a>
        </div>

        <div className="mt-10 sm:mt-14 hr-thin pt-5 sm:pt-6 flex items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 flex-wrap label text-mute">
          <span>Privileged · RPC Rule 19</span>
          <span className="opacity-50 hidden sm:inline">·</span>
          <span>Conflicts cleared in 24h</span>
          <span className="opacity-50 hidden sm:inline">·</span>
          <span>No-charge initial scoping</span>
        </div>
      </div>
    </section>
  )
}
