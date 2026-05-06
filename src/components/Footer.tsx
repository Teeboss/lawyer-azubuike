export default function Footer() {
  return (
    <footer className="relative bg-paper2/70 px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 border-t border-rule">

      <div className="overflow-hidden">
        <div className="font-display font-light leading-[0.85] tracking-[-0.03em] text-[clamp(42px,12vw,200px)] text-ink/85 select-none">
          Azubuike Sylvester <em style={{ fontStyle: 'italic' }}>&amp;</em> Co.
        </div>
      </div>

      <div className="mt-10 sm:mt-12 grid grid-cols-12 gap-6 lg:gap-8 border-t border-rule pt-8 sm:pt-10">
        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">— Barristers &amp; Solicitors</div>
          <p className="mt-4 text-ink2 leading-relaxed max-w-sm text-[14.5px] sm:text-base">
            A boutique litigation and solicitors' chambers advising corporations, executives, and individuals
            from offices in Lagos and Abuja since 2012.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="label text-mute">Practice</div>
          <ul className="mt-4 space-y-2 text-[14px] sm:text-[14.5px]">
            <li><a className="ulink-hover" href="#services">Commercial Litigation</a></li>
            <li><a className="ulink-hover" href="#services">Criminal Defense</a></li>
            <li><a className="ulink-hover" href="#services">Corporate Law</a></li>
            <li><a className="ulink-hover" href="#services">Family &amp; Matrimonial</a></li>
            <li><a className="ulink-hover" href="#services">Immigration</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="label text-mute">Chambers</div>
          <ul className="mt-4 space-y-2 text-[14px] sm:text-[14.5px]">
            <li><a className="ulink-hover" href="#about">About</a></li>
            <li><a className="ulink-hover" href="#cases">Case results</a></li>
            <li><a className="ulink-hover" href="#testimonials">Voices</a></li>
            <li><a className="ulink-hover" href="#contact">Contact</a></li>
            <li><a className="ulink-hover" href="#">Careers</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="label text-mute">Subscribe — quarterly legal update</div>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} className="mt-4 flex items-center gap-3 border-b border-rule">
            <input className="bg-transparent w-full py-3 outline-none text-[14.5px]" placeholder="you@company.com" />
            <button className="label py-2 px-3 text-ink hover:text-brassd">Submit →</button>
          </form>
          <p className="mt-3 text-xs text-mute">Four briefings a year on Nigerian litigation, governance, and regulatory risk. No marketing.</p>

          <div className="mt-6 sm:mt-8 flex items-center gap-5 label text-mute">
            <a className="ulink-hover" href="#">LinkedIn</a>
            <a className="ulink-hover" href="#">Lawyard</a>
            <a className="ulink-hover" href="#">NBA Portal</a>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 hr-thin pt-5 sm:pt-6 grid grid-cols-12 gap-3 sm:gap-4 text-xs text-mute">
        <div className="col-span-12 md:col-span-6">
          © 2012–2026 Azubuike Sylvester &amp; Co. (Barristers &amp; Solicitors). Prior results do not guarantee a similar outcome.
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right flex md:justify-end gap-x-5 sm:gap-x-6 flex-wrap">
          <a className="ulink-hover" href="#">Privacy</a>
          <a className="ulink-hover" href="#">Terms</a>
          <a className="ulink-hover" href="#">Disclaimer</a>
          <a className="ulink-hover" href="#">Accessibility</a>
        </div>
      </div>

      <p className="mt-5 sm:mt-6 text-[11px] text-mute/80 max-w-3xl leading-relaxed">
        <strong className="text-ink2">Disclaimer.</strong> The information on this website is for general
        informational purposes only and does not constitute legal advice. Accessing this site does not
        create a solicitor–client relationship. A retainer is established only upon execution of a formal
        engagement letter signed by both parties.
      </p>
    </footer>
  )
}
