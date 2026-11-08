import { useMemo, useState, type FormEvent } from 'react'
import { asset } from '../asset'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import {
  articles,
  contactCountries,
  contactJobLevels,
  contactSupportPhones,
  contactTopics,
  findProduct,
  getStartedHelp,
  getStartedIntents,
  getStartedPortfolio,
  industryMenu,
  partnerMenu,
  productMenu,
  searchable,
  serviceMenu,
  solutionMenu,
} from '../data'
import { Arrow } from '../components/Marks'
import { Crumbs, PageHero } from '../components/Layout'

type ContactFormState = {
  firstName: string
  lastName: string
  email: string
  company: string
  jobLevel: string
  country: string
  phone: string
  topic: string
  message: string
}

const emptyContactForm: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobLevel: '',
  country: '',
  phone: '',
  topic: '',
  message: '',
}

export function ProductsPage() {
  return (
    <div className="inner">
      <PageHero kicker="Products" title="Platforms powered by Precision AI" text="Network, cloud, SOC, identity, and observability — one approach to securing the modern enterprise." action={{ href: '/demos', label: 'Request a demo' }} />
      <Crumbs />
      {productMenu.map((group) => (
        <section key={group.id} className="block">
          <h2>{group.label}</h2>
          <div className="link-grid">
            {group.items.map((item) => (
              <Link key={item.href + item.name} to={item.href}>
                <strong>{item.name}</strong>
                <p>{item.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export function ProductPage() {
  const { slug = '' } = useParams()
  const product = findProduct(slug)
  const title = product?.name ?? slug.replace(/-/g, ' ')
  const text = product?.blurb ?? 'AI-driven protection for the modern enterprise, built to prevent threats in real time.'
  return (
    <div className="inner">
      <PageHero kicker="Product" title={title} text={text} action={{ href: '/demos', label: 'Start a trial' }} />
      <Crumbs />
      <section className="split-info">
        <article>
          <h2>Built for Zero Trust. Powered by AI.</h2>
          <p>PaloSecure brings prevention, detection, and autonomous response into one platform so teams can defend at speed and scale without adding tools or noise.</p>
          <ul>
            <li>Inline prevention for known and unknown threats</li>
            <li>Precision AI across network, cloud, identity, and SOC</li>
            <li>One management experience from branch to cloud</li>
          </ul>
          <Link className="orange-pill" to="/contact">Talk to an expert <Arrow /></Link>
        </article>
        <aside>
          <h3>Outcomes teams report</h3>
          <p><b>90%</b> reduction in mean time to respond</p>
          <p><b>75 K</b> customers on the platform</p>
          <p><b>95%</b> of the Fortune 100</p>
        </aside>
      </section>
    </div>
  )
}

export function SolutionsPage() {
  return (
    <div className="inner">
      <PageHero kicker="Solutions" title="Secure whatever, whenever, wherever." text="Use cases for AI, cloud, identity, workplace, and critical infrastructure — with less complexity." />
      <Crumbs />
      <div className="link-grid">
        {solutionMenu.map((item) => (
          <Link key={item.href} to={item.href}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function SolutionPage() {
  const { slug = '' } = useParams()
  const item = solutionMenu.find((entry) => entry.href.endsWith(slug))
  return (
    <div className="inner">
      <PageHero kicker="Solution" title={item?.title ?? 'Solution'} text={item?.text ?? 'A platform approach to a specific security outcome.'} action={{ href: '/demos', label: 'See it in action' }} />
      <Crumbs />
      <section className="prose">
        <p>PaloSecure applies Precision AI where the work actually happens: in the network, in the cloud, in the SOC, and across every identity — human, machine, and agentic.</p>
        <p>Start with the outcome you need. The same platform data, prevention, and automation follow the user, the workload, and the agent.</p>
        <Link className="text-link" to="/products">See the platforms</Link>
      </section>
    </div>
  )
}

export function ServicesPage() {
  return (
    <div className="inner">
      <PageHero kicker="Unit 42" title="Threat Intel & Incident Response" text="World-renowned researchers, elite responders, and security consultants guide you before, during, and after an incident." action={{ href: '/contact', label: 'Talk to Unit 42' }} />
      <Crumbs />
      <div className="link-grid">
        {serviceMenu.map((item) => (
          <article key={item.title} id={item.href.split('#')[1]}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <section className="mini-stats light-stats">
        <div><strong>1 K+</strong><span>MATTERS PER YEAR</span></div>
        <div><strong>24 / 7 / 365</strong><span>INCIDENT RESPONSE</span></div>
      </section>
    </div>
  )
}

export function IndustriesPage() {
  return (
    <div className="inner">
      <PageHero kicker="Industries" title="Security that fits how you operate" text="Public sector, financial services, manufacturing, healthcare, and growing businesses run on the same platform." />
      <Crumbs />
      <div className="link-grid">
        {industryMenu.map((item) => (
          <Link key={item.href} to={item.href}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function IndustryPage() {
  const { slug = '' } = useParams()
  const item = industryMenu.find((entry) => entry.href.endsWith(slug))
  return (
    <div className="inner">
      <PageHero kicker="Industry" title={item?.title ?? 'Industry'} text={item?.text ?? 'Sector-specific outcomes on the PaloSecure platform.'} action={{ href: '/contact', label: 'Plan a briefing' }} />
      <Crumbs />
      <section className="prose">
        <p>Regulations, uptime, and attacker behavior differ by industry. The platform does not. Prevention, identity, cloud, and response share one data foundation so specialists and executives see the same risk.</p>
      </section>
    </div>
  )
}

export function PartnersPage() {
  return (
    <div className="inner">
      <PageHero kicker="Partners" title="Build with PaloSecure" text="Portal access, a managed services program, and a path to become a partner." action={{ href: '/accounts', label: 'Partner login' }} />
      <Crumbs />
      <div className="link-grid">
        {partnerMenu.map((item) => (
          <article key={item.title} id={item.href.split('#')[1]}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
            <Link to="/contact">Get started <Arrow /></Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export function ResourcesPage() {
  return (
    <div className="inner">
      <PageHero kicker="Resources" title="Perspectives you can trust" text="Articles, analyst recognition, events, and documentation for security leaders and practitioners." />
      <Crumbs />
      <div className="link-grid">
        {articles.map((article) => (
          <Link key={article.slug} to={`/resources/${article.slug}`}>
            <small>{article.kind}</small>
            <strong>{article.title}</strong>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function ArticlePage() {
  const { slug = '' } = useParams()
  const article = articles.find((item) => item.slug === slug)
  const titles: Record<string, string> = {
    cyberpedia: 'Cyberpedia',
    events: 'Event Center',
    'tech-docs': 'Tech Docs',
    'market-shaper': 'Recognized as a Market Shaper',
    'hybrid-mesh': 'A 2x Leader in Hybrid Mesh Firewall',
    sse: 'A 4X Leader in Security Service Edge',
    sase: 'A 4X Leader for SASE Platforms',
    'frontier-ai': 'The future of Frontier AI network security',
  }
  const title = article?.title ?? titles[slug] ?? 'Insight'
  return (
    <div className="inner">
      <PageHero kicker={article?.kind ?? 'INSIGHT'} title={title} text="Staying ahead demands perspectives you can trust — from the practitioners building Precision AI into everyday defense." />
      <Crumbs />
      <article className="prose">
        <p>AI is changing how organizations build software, serve customers, and run operations. It is also changing how attackers move. The advantage goes to teams who can prevent, see, and respond as one system.</p>
        <p>PaloSecure platformization replaces a stack of disconnected controls with shared intelligence. Network security, SASE, cloud, identity, SOC automation, and observability draw from the same signals — so a decision made in one place protects the rest.</p>
        <p>Leaders who treat security as infrastructure, not a project, are the ones shipping faster without widening the blast radius. That is the work of this briefing.</p>
        <Link className="orange-pill" to="/demos">Explore a demo <Arrow /></Link>
      </article>
    </div>
  )
}

const briefingProducts = [
  { value: 'sase', label: 'Secure Access Service Edge (SASE)' },
  { value: 'ngfw', label: 'ML-Powered Next-Generation Firewall' },
  { value: 'cloud', label: 'Cloud Security' },
  { value: 'soc', label: 'Security Operations' },
  { value: 'identity', label: 'Identity Security' },
  { value: 'xcor', label: 'Cortex XCOR' },
] as const

type BriefingForm = {
  name: string
  email: string
  company: string
  session: 'virtual' | 'briefing'
  product: string
}

const emptyBriefing: BriefingForm = {
  name: '',
  email: '',
  company: '',
  session: 'virtual',
  product: 'sase',
}

export function DemosPage() {
  const [intent, setIntent] = useState(getStartedIntents[0].id)
  const [briefing, setBriefing] = useState<BriefingForm>(emptyBriefing)
  const [briefingDone, setBriefingDone] = useState<BriefingForm | null>(null)
  const [briefingError, setBriefingError] = useState('')
  const activeIntent = getStartedIntents.find((item) => item.id === intent) ?? getStartedIntents[0]

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(briefing.email.trim())
  const briefingReady = Boolean(briefing.name.trim() && emailOk && briefing.company.trim() && briefing.product)

  function updateBriefing<K extends keyof BriefingForm>(key: K, value: BriefingForm[K]) {
    setBriefing((prev) => ({ ...prev, [key]: value }))
    setBriefingError('')
  }

  function submitBriefing(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!briefingReady) {
      setBriefingError('Enter your name, work email, company, and product interest.')
      return
    }
    const productLabel = briefingProducts.find((item) => item.value === briefing.product)?.label ?? briefing.product
    const payload = {
      ...briefing,
      productLabel,
      submittedAt: new Date().toISOString(),
    }
    try {
      const prior = JSON.parse(localStorage.getItem('palosecure-session-requests') ?? '[]') as unknown[]
      localStorage.setItem('palosecure-session-requests', JSON.stringify([payload, ...prior].slice(0, 20)))
    } catch {
      // Keep UI success even if storage is unavailable.
    }
    setBriefingDone(briefing)
    setBriefing(emptyBriefing)
  }

  return (
    <div className="inner get-started">
      <PageHero
        kicker="Demos and Trials"
        title="Future-proof your security with reliable solutions, today"
        text="Explore demos, test drives, and expert sessions across the PaloSecure cybersecurity portfolio."
        action={{ href: '#portfolio', label: 'Explore portfolio' }}
        image={asset('images/solutions/woman.jpg')}
      />
      <Crumbs />

      <section className="gs-section" id="portfolio">
        <h2>Explore our comprehensive cybersecurity portfolio</h2>
        <div className="gs-portfolio">
          {getStartedPortfolio.map((item) => (
            <article key={item.title}>
              <p className="gs-eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="gs-actions">
                {item.actions.map((action) => (
                  <Link key={action.label} to={action.href}>{action.label} <Arrow /></Link>
                ))}
              </div>
              <Link className="gs-more" to={item.href}>Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="gs-section gs-finder" id="trial">
        <h2>Find the products you need to optimize your security</h2>
        <p className="gs-lede">What do you want to do?</p>
        <div className="gs-intent-grid">
          {getStartedIntents.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === intent ? 'active' : ''}
              onClick={() => setIntent(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="gs-intent-result">
          <h3>{activeIntent.title}</h3>
          <p>{activeIntent.text}</p>
          <div className="gs-actions">
            <Link to={activeIntent.href}>See recommended products <Arrow /></Link>
            <Link to="/contact">Talk to sales <Arrow /></Link>
            <Link to="/demos#portfolio">Watch a demo <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="gs-section">
        <h2>Meet your cybersecurity needs with these resources</h2>
        <div className="gs-help-grid">
          {getStartedHelp.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to={item.href}>{item.cta} <Arrow /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="gs-section gs-briefing" id="session">
        <div>
          <p className="gs-eyebrow">Let’s find what’s right for you</p>
          <h2>Virtual session or executive briefing</h2>
          <p>Get to know PaloSecure and learn how our platforms, threat intelligence, and services help you achieve your goals.</p>
        </div>
        {briefingDone ? (
          <div className="gs-briefing-success" role="status">
            <h3>Session request received</h3>
            <p>
              Thanks, {briefingDone.name}. We’ll follow up at <strong>{briefingDone.email}</strong> to schedule your{' '}
              {briefingDone.session === 'briefing' ? 'executive briefing' : 'virtual session'} on{' '}
              {briefingProducts.find((item) => item.value === briefingDone.product)?.label ?? 'our platforms'}.
            </p>
            <button type="button" className="orange-pill" onClick={() => setBriefingDone(null)}>
              Request another session <Arrow />
            </button>
          </div>
        ) : (
          <form className="gs-briefing-form" onSubmit={submitBriefing} noValidate>
            <label>
              Full name *
              <input
                required
                value={briefing.name}
                onChange={(event) => updateBriefing('name', event.target.value)}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label>
              Work email *
              <input
                required
                type="email"
                value={briefing.email}
                onChange={(event) => updateBriefing('email', event.target.value)}
                placeholder="name@company.com"
                autoComplete="email"
              />
            </label>
            <label>
              Company *
              <input
                required
                value={briefing.company}
                onChange={(event) => updateBriefing('company', event.target.value)}
                placeholder="Company name"
                autoComplete="organization"
              />
            </label>
            <label>
              Session type *
              <select
                required
                value={briefing.session}
                onChange={(event) => updateBriefing('session', event.target.value as BriefingForm['session'])}
              >
                <option value="virtual">Virtual session</option>
                <option value="briefing">Executive briefing</option>
              </select>
            </label>
            <label>
              Product interest *
              <select
                required
                value={briefing.product}
                onChange={(event) => updateBriefing('product', event.target.value)}
              >
                {briefingProducts.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
            {briefingError && <p className="gs-briefing-error" role="alert">{briefingError}</p>}
            <button className="orange-pill" type="submit" disabled={!briefingReady}>
              Request a session <Arrow />
            </button>
          </form>
        )}
      </section>
    </div>
  )
}

export function AccountsPage() {
  return (
    <div className="inner">
      <PageHero kicker="Accounts & Support" title="Sign in to PaloSecure" text="Customers, partners, and employees use one place for downloads, cases, and enablement." />
      <Crumbs />
      <form className="stack-form" onSubmit={(event) => event.preventDefault()}>
        <label>Email<input type="email" required placeholder="name@company.com" /></label>
        <label>Password<input type="password" required placeholder="Password" /></label>
        <button className="orange-pill" type="submit">Continue</button>
        <p>Need access? <Link to="/contact">Contact support</Link> or <Link to="/partners">become a partner</Link>.</p>
      </form>
    </div>
  )
}

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(emptyContactForm)
  const [submitted, setSubmitted] = useState<ContactFormState | null>(null)
  const [error, setError] = useState('')

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  const phoneOk = form.phone.replace(/\D/g, '').length >= 7
  const ready = useMemo(() => (
    Boolean(
      form.firstName.trim()
      && form.lastName.trim()
      && emailOk
      && form.company.trim()
      && form.jobLevel
      && form.country
      && phoneOk
      && form.topic
      && form.message.trim().length >= 8,
    )
  ), [form, emailOk, phoneOk])

  function update<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setError('')
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!ready) {
      setError('Complete every required field with a valid work email and phone number.')
      return
    }
    const payload = { ...form, submittedAt: new Date().toISOString() }
    try {
      const prior = JSON.parse(localStorage.getItem('palosecure-contact-requests') ?? '[]') as unknown[]
      localStorage.setItem('palosecure-contact-requests', JSON.stringify([payload, ...prior].slice(0, 20)))
    } catch {
      // Ignore storage failures; still show success in UI.
    }
    setSubmitted(form)
    setForm(emptyContactForm)
  }

  return (
    <div className="inner contact-page">
      <PageHero
        kicker="Company"
        title="Contact Us"
        text="Reach sales, Unit 42 incident response, technical support, or partners — or send a request and we’ll follow up."
        image={asset('images/solutions/cloud.jpg')}
      />
      <Crumbs />

      <section className="contact-grid">
        <div className="contact-col">
          <h2>Sales</h2>
          <Link className="contact-link" to="/company/locations">Global Sales Office Locations <Arrow /></Link>
          <a className="contact-link" href="#sales-form">Email Sales <Arrow /></a>

          <h3>Security Consulting & Incident Response</h3>
          <a className="contact-link" href="#sales-form">Fill out the form to get in touch <Arrow /></a>
          <p>If a customer has been breached or has an urgent matter, email <a href="mailto:unit42@palosecure.com">unit42@palosecure.com</a> or call:</p>
          <ul className="contact-phones">
            <li><strong>N. America Toll Free:</strong> 1 866 486 4842</li>
            <li><strong>UK:</strong> +44 20 3743 3660</li>
            <li><strong>EMEA:</strong> +31 20 299 3130</li>
            <li><strong>APAC:</strong> +65 6983 8730</li>
            <li><strong>Japan:</strong> +81 50 1790 0200</li>
          </ul>
        </div>

        <div className="contact-col">
          <h2>Support</h2>
          <h3>Support Portal</h3>
          <Link className="contact-link" to="/resources">Find Answers from the Community <Arrow /></Link>
          <Link className="contact-link" to="/accounts">Already Have a Case? Login <Arrow /></Link>
          <Link className="contact-link" to="/accounts">Create a New Case <Arrow /></Link>

          <h3>Technical Support</h3>
          <ul className="contact-phones">
            <li><strong>N. America:</strong> +1 408 738 7799</li>
            <li><strong>EMEA:</strong> +31 20 808 4600</li>
            <li><strong>APAC:</strong> +65 6983 9010</li>
          </ul>
        </div>
      </section>

      <section className="contact-grid contact-partners">
        <div className="contact-col">
          <h2>Partners</h2>
          <h3>Premium Partner Support</h3>
          <p>Contact your Authorized Support Center.</p>
          <h3>Training & Certification Questions</h3>
          <a className="contact-link" href="mailto:learn@palosecure.com">learn@palosecure.com</a>
          <a className="contact-link" href="mailto:certification@palosecure.com">certification@palosecure.com</a>
          <h3>NextWave Partners</h3>
          <a className="contact-link" href="mailto:nextwave@palosecure.com">nextwave@palosecure.com</a>
        </div>
        <div className="contact-col contact-mainline">
          <p>Can’t find what you’re looking for? Call our main line: <strong>+1 408.753.4000</strong></p>
        </div>
      </section>

      <section className="contact-form-section" id="sales-form">
        <div className="contact-form-head">
          <h2>Fill out the form to get in touch with our Sales Team</h2>
          <span>*Required</span>
        </div>

        {submitted ? (
          <div className="contact-success" role="status">
            <h3>Request received</h3>
            <p>
              Thanks, {submitted.firstName}. A PaloSecure specialist will follow up at <strong>{submitted.email}</strong> about {submitted.topic.toLowerCase()}.
            </p>
            <button type="button" className="orange-pill" onClick={() => setSubmitted(null)}>Send another request</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit} noValidate>
            <label>
              First Name *
              <input required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="First Name" autoComplete="given-name" />
            </label>
            <label>
              Last Name *
              <input required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Last Name" autoComplete="family-name" />
            </label>
            <label>
              Business Email *
              <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Business Email" autoComplete="email" />
            </label>
            <label>
              Company *
              <input required value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Company Name" autoComplete="organization" />
            </label>
            <label>
              Job Level *
              <select required value={form.jobLevel} onChange={(e) => update('jobLevel', e.target.value)}>
                <option value="">Job level</option>
                {contactJobLevels.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label>
              Country *
              <select required value={form.country} onChange={(e) => update('country', e.target.value)}>
                <option value="">Country</option>
                {contactCountries.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label>
              Phone *
              <input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Phone" autoComplete="tel" />
            </label>
            <label>
              What product are you interested in? *
              <select required value={form.topic} onChange={(e) => update('topic', e.target.value)}>
                <option value="">Please Select One Topic</option>
                {contactTopics.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label className="contact-full">
              How can we help? *
              <textarea required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="How can we help?" />
            </label>
            <p className="contact-legal">
              By submitting this form, I understand my personal data will be processed in accordance with the PaloSecure <Link to="/privacy">Privacy Statement</Link> and <Link to="/terms">Terms of Use</Link>.
            </p>
            {error && <p className="contact-error" role="alert">{error}</p>}
            <button className="orange-pill" type="submit" disabled={!ready}>Submit Request</button>
          </form>
        )}
      </section>

      <section className="contact-phone-tables">
        <h2>Technical Support | Country Specific Phone Numbers</h2>
        <div className="contact-phone-grid">
          {contactSupportPhones.map((group) => (
            <article key={group.region}>
              <h3>{group.region}</h3>
              <table>
                <tbody>
                  {group.rows.map(([country, number, note]) => (
                    <tr key={country + number}>
                      <td>{country}</td>
                      <td><a href={`tel:${number.replace(/\s/g, '')}`}>{number}</a></td>
                      <td>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export function SearchPage() {
  const [params] = useSearchParams()
  const q = (params.get('q') ?? '').trim().toLowerCase()
  const hits = searchable.filter((item) => item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q))
  return (
    <div className="inner">
      <PageHero kicker="Search" title={q ? `Results for “${q}”` : 'Search'} text={q ? `${hits.length} matches across products, solutions, and insights.` : 'Try a product, industry, or topic.'} />
      <div className="link-grid">
        {hits.map((hit) => (
          <Link key={hit.href + hit.title} to={hit.href}>
            <strong>{hit.title}</strong>
            <p>{hit.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const privacy = kind === 'privacy'
  return (
    <div className="inner">
      <PageHero kicker="Legal" title={privacy ? 'Privacy Statement' : 'Terms of Use'} text={privacy ? 'How PaloSecure collects, uses, and shares personal information on this website.' : 'The terms that apply when you use palosecure websites, demos, and content.'} />
      <Crumbs />
      <article className="prose">
        {privacy ? (
          <>
            <p>We use strictly necessary cookies to run the site, and optional cookies for analytics and more relevant content.</p>
            <p>Business contact details submitted through forms are used to respond to your request, send the updates you asked for, and secure our services. We do not sell personal information.</p>
            <p>To access, correct, or delete information, or to opt out of sale or sharing, use the contact form and choose a privacy request.</p>
          </>
        ) : (
          <>
            <p>Content on this site is provided for general information about PaloSecure products and services. Demos and trials are evaluation tools and may be withdrawn or changed.</p>
            <p>You may not misuse the site, attempt to access non-public systems, or present PaloSecure materials as your own. Product names referenced here describe the PaloSecure portfolio.</p>
          </>
        )}
      </article>
    </div>
  )
}

export function CompanyPage() {
  const { slug = 'about' } = useParams()
  const pages: Record<string, [string, string]> = {
    about: ['About PaloSecure', 'We build cybersecurity platforms for the modern enterprise — prevention first, precision AI throughout, and services when speed matters.'],
    careers: ['Careers', 'Researchers, engineers, and responders who want their work in the path of real attacks.'],
    responsibility: ['Corporate Responsibility', 'Security is a public good. We invest in research, education, and responsible AI use.'],
    customers: ['Customers', 'From the Fortune 100 to growing regional enterprises, teams use PaloSecure to secure transformation.'],
    investors: ['Investor Relations', 'Platformization is the strategy: fewer products to buy, more prevention in production.'],
    locations: ['Locations', 'Teams across the Americas, Europe, and Asia-Pacific, with incident response follow-the-sun.'],
    newsroom: ['Newsroom', 'Product news, analyst recognition, and Unit 42 research.'],
  }
  const [title, text] = pages[slug] ?? pages.about
  return (
    <div className="inner">
      <PageHero kicker="Company" title={title} text={text} />
      <Crumbs />
      <section className="prose">
        <p>{text} The same platforms on the homepage — Strata, Prisma, Cortex, Idira, and Cortex XCOR — are how that promise shows up for customers.</p>
        <Link to="/contact">Contact the team <Arrow /></Link>
      </section>
    </div>
  )
}
