import { useState } from 'react'
import { Icon } from './Icons'

type FormState = {
  name: string
  email: string
  phone: string
  matter: string
  message: string
  urgency: string
}

type FormErrors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '',
    matter: 'Commercial Litigation',
    message: '',
    urgency: 'Within 1 week',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required'
    if (form.message.trim().length < 12) e.message = 'A few sentences, please'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1100)
  }

  const matters: string[] = ['Commercial Litigation', 'Criminal Defense / EFCC', 'Corporate & Governance', 'Real Estate & Conveyancing', 'Family & Matrimonial', 'Immigration', 'Other']
  const urgencies: string[] = ['Today', 'Within 48 hours', 'Within 1 week', 'Exploratory']

  return (
    <section id="contact" className="relative px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 bg-ink text-paper">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 lg:col-span-5">
          <div className="label text-paper/60">— 07 / Contact</div>
          <h2 className="mt-5 sm:mt-6 font-display font-light text-[clamp(34px,5.4vw,80px)] leading-[0.95] tracking-[-0.015em]" data-reveal>
            Open a
            <em style={{ fontStyle: 'italic' }}> brief.</em>
          </h2>
          <p className="mt-5 sm:mt-6 text-paper/70 leading-relaxed max-w-md">
            All enquiries are reviewed personally by the principal. Submissions are held in strict
            confidence and used solely to evaluate engagement — never for marketing.
          </p>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 sm:gap-y-8">
            <div className="border-t border-paper/20 pt-4 sm:pt-5">
              <div className="label text-paper/60">Lagos (Principal Office)</div>
              <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-paper">
                14 Adeola Hopewell Street<br />
                Victoria Island, Lagos
              </p>
              <p className="mt-3 text-sm text-paper/70">By appointment</p>
            </div>
            <div className="border-t border-paper/20 pt-4 sm:pt-5">
              <div className="label text-paper/60">Abuja (Federal Courts)</div>
              <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-paper">
                Plot 5, Cadastral Zone A0<br />
                Central Business District, Abuja
              </p>
              <p className="mt-3 text-sm text-paper/70">By appointment</p>
            </div>
            <div className="border-t border-paper/20 pt-4 sm:pt-5">
              <div className="label text-paper/60">Direct</div>
              <a className="block mt-3 text-[14.5px] sm:text-[15px] ulink-hover text-paper" href="tel:08033939607">08033939607</a>
              <a className="block mt-1 text-[14.5px] sm:text-[15px] ulink-hover break-all text-paper" href="mailto:chambers@azsylvesterco.com">chambers@azsylvesterco.com</a>
            </div>
            <div className="border-t border-paper/20 pt-4 sm:pt-5">
              <div className="label text-paper/60">After hours</div>
              <p className="mt-3 text-[14.5px] sm:text-[15px] leading-relaxed text-paper">
                For urgent matters requiring immediate counsel,<br />
                call 08033939607 at any time.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 relative h-36 sm:h-44 border border-paper/20 overflow-hidden">
            <svg viewBox="0 0 600 200" className="absolute inset-0 w-full h-full text-paper/30" fill="none" stroke="currentColor" strokeWidth="0.5" preserveAspectRatio="xMidYMid slice">
              {Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M${i * 50} 0 L${i * 50} 200`} />)}
              {Array.from({ length: 6 }).map((_, i) => <path key={i} d={`M0 ${i * 40} L600 ${i * 40}`} />)}
              <path d="M40 130 Q 120 80 200 110 T 360 90 T 560 120" stroke="oklch(0.72 0.092 75)" strokeWidth="1" />
              <circle cx="200" cy="110" r="4" fill="oklch(0.72 0.092 75)" stroke="none" />
              <circle cx="200" cy="110" r="10" stroke="oklch(0.72 0.092 75)" />
              <text x="220" y="106" fill="oklch(0.85 0.04 80)" fontSize="9" fontFamily="JetBrains Mono">CHAMBERS · LAGOS · ABUJA</text>
            </svg>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:pl-10 xl:pl-12 lg:border-l lg:border-paper/15 mt-12 lg:mt-0">
          {status === 'sent' ? (
            <div className="border border-paper/15 p-8 sm:p-10 lg:p-14">
              <div className="label text-brass">— Submission received</div>
              <h3 className="mt-3 sm:mt-4 font-display text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.05] tracking-tight text-paper">
                Thank you, {form.name.split(' ')[0] || 'learned friend'}.
              </h3>
              <p className="mt-3 sm:mt-4 text-paper/75 max-w-md text-[14.5px] sm:text-base">
                The principal will review your enquiry and respond within one business day. If your matter is
                urgent, please call <a className="ulink text-paper" href="tel:08033939607">08033939607</a>.
              </p>
              <button
                onClick={() => {
                  setStatus('idle')
                  setForm({ name: '', email: '', phone: '', matter: 'Commercial Litigation', message: '', urgency: 'Within 1 week' })
                }}
                className="mt-6 sm:mt-8 btn-ghost text-paper border-paper/30 hover:bg-paper/10"
              >
                Submit another brief <Icon.Arrow />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="label text-paper/60">— Privileged intake</div>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6">
                <div>
                  <label className="label text-paper/60">Full name</label>
                  <input
                    className="field text-paper border-paper/20 focus:border-paper"
                    placeholder="Azubuike Sylvester"
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <div className="text-xs text-brass mt-1">{errors.name}</div>}
                </div>
                <div>
                  <label className="label text-paper/60">Email</label>
                  <input
                    className="field text-paper border-paper/20 focus:border-paper"
                    placeholder="you@company.com" type="email"
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <div className="text-xs text-brass mt-1">{errors.email}</div>}
                </div>
                <div>
                  <label className="label text-paper/60">Phone (optional)</label>
                  <input
                    className="field text-paper border-paper/20 focus:border-paper"
                    placeholder="08033939607"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="label text-paper/60">Urgency</label>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {urgencies.map(u => (
                      <button type="button" key={u}
                        onClick={() => setForm({ ...form, urgency: u })}
                        className={`label px-3 py-2 rounded-full border transition ${form.urgency === u ? 'bg-paper text-ink border-paper' : 'border-paper/25 text-paper/80 hover:border-paper/60'}`}>
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 sm:mt-8">
                <label className="label text-paper/60">Matter type</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {matters.map(m => (
                    <button type="button" key={m}
                      onClick={() => setForm({ ...form, matter: m })}
                      className={`label px-3 py-2 rounded-full border transition ${form.matter === m ? 'bg-brass text-ink border-brass' : 'border-paper/25 text-paper/80 hover:border-paper/60'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 sm:mt-8">
                <label className="label text-paper/60">Briefly describe the matter</label>
                <textarea
                  rows={4}
                  className="field text-paper border-paper/20 focus:border-paper resize-none mt-2"
                  placeholder="Names, dates, court or agency involved — only what you are comfortable sharing in a first message."
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <div className="text-xs text-brass mt-1">{errors.message}</div>}
              </div>

              <div className="mt-8 sm:mt-10 flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-paper/55 max-w-md">
                  Submission of this form does not create a solicitor–client relationship. A retainer
                  is established only upon execution of a formal engagement letter.
                </p>
                <button type="submit" disabled={status === 'sending'}
                  className="btn-primary bg-paper text-ink hover:bg-paper2 disabled:opacity-60 w-full sm:w-auto justify-center sm:justify-start">
                  {status === 'sending' ? 'Submitting…' : 'Submit privileged enquiry'}
                  <Icon.Arrow className="arrow" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
