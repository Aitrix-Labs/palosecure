import { useEffect, useRef, useState } from 'react'
import { asset } from '../asset'
import { Link } from 'react-router-dom'
import { articles, engage, liveStats, logos, platforms, recommended, solutionTabs } from '../data'
import { Arrow } from '../components/Marks'

const anchors = [
  { id: 'why', label: 'Why PaloSecure?' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'success', label: 'Proven Success' },
  { id: 'engage', label: 'Engage with Us' },
]

export default function HomePage() {
  const [cardIndex, setCardIndex] = useState(0)
  const [platform, setPlatform] = useState(platforms[0].id)
  const [awardsOpen, setAwardsOpen] = useState(false)
  const [solution, setSolution] = useState(solutionTabs[0].id)
  const [audience, setAudience] = useState(engage[0].id)
  const [articleIndex, setArticleIndex] = useState(0)
  const [activeAnchor, setActiveAnchor] = useState('why')
  const [visibleCards, setVisibleCards] = useState(4)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const customerVideoRef = useRef<HTMLVideoElement>(null)
  const currentPlatform = platforms.find((item) => item.id === platform) ?? platforms[0]
  const visibleAwards = awardsOpen ? currentPlatform.awards : currentPlatform.awards.slice(0, 6)
  const currentSolution = solutionTabs.find((item) => item.id === solution) ?? solutionTabs[0]
  const currentAudience = engage.find((item) => item.id === audience) ?? engage[0]

  useEffect(() => {
    const video = customerVideoRef.current
    if (!video) return
    video.muted = true

    const tryPlay = () => {
      void video.play().then(() => setVideoPlaying(true)).catch(() => setVideoPlaying(false))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
        else {
          video.pause()
          setVideoPlaying(false)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(video)
    tryPlay()
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const syncVisible = () => {
      const width = window.innerWidth
      setVisibleCards(width <= 640 ? 1 : width <= 1100 ? 2 : 4)
    }
    syncVisible()
    window.addEventListener('resize', syncVisible)
    return () => window.removeEventListener('resize', syncVisible)
  }, [])

  useEffect(() => {
    setCardIndex((value) => Math.min(value, Math.max(0, recommended.length - visibleCards)))
  }, [visibleCards])

  useEffect(() => {
    const nodes = anchors.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveAnchor(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.15, 0.4] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>(
      '.reveal-block, .reveal-fade, .reveal-title, .reveal-down, .reveal-up, .reveal-down-stack, .reveal-up-stack',
    )]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="hero">
        <img className="hero-photo" src={asset('images/hero/hero-banner.jpg')} alt="" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">CORTEX XCOR</p>
          <h1>Ask. Remediate. Optimize.</h1>
          <h2>Meet the next-generation, AI-driven observability platform.</h2>
          <div className="hero-actions">
            <Link className="orange-pill" to="/products/cortex-xcor">Explore Cortex XCOR <Arrow /></Link>
            <Link className="text-link" to="/resources/new-era">Read the blog</Link>
          </div>
        </div>
      </section>

      <section className="recommended">
        <div className="section-head">
          <h2>RECOMMENDED</h2>
          <div className="pager">
            <button type="button" aria-label="Previous" disabled={cardIndex === 0} onClick={() => setCardIndex((value) => Math.max(0, value - 1))}>‹</button>
            <button type="button" aria-label="Next" disabled={cardIndex >= recommended.length - visibleCards} onClick={() => setCardIndex((value) => Math.min(recommended.length - visibleCards, value + 1))}>›</button>
          </div>
        </div>
        <div className="card-window">
          <div className="card-track" style={{ transform: `translateX(-${cardIndex * (100 / visibleCards)}%)` }}>
            {recommended.map((card) => (
              <Link key={card.title} to={card.href} className="rec-card">
                <img className="rec-thumb" src={card.image} alt="" width={84} height={84} />
                <span className="rec-copy">
                  <strong>{card.title}</strong>
                  <span className="rec-cta">{card.cta}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <nav className="anchor-nav" aria-label="On this page">
        {anchors.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={activeAnchor === item.id ? 'active' : ''}>{item.label}</a>
        ))}
        <Link to="/demos">Demos and trials</Link>
      </nav>

      <section className="ai-world" id="why">
        <video className="section-video" autoPlay muted loop playsInline src={asset('images/video/bg.mp4')} />
        <div className="section-veil" />
        <div className="ai-world-inner">
          <h2 className="reveal-down">A new <span>AI world</span> is here</h2>
          <div className="good-news reveal-block reveal-down">
            <div>
              <p className="eyebrow">THE GOOD NEWS</p>
              <h3>AI is rapidly transforming your organization</h3>
            </div>
            <Donut value={78} caption="~1.5X growth" note="IN USAGE IN LAST 12 MONTHS" />
            <Donut value={94} caption="development" note="ENTERPRISES USING GEN AI SOFTWARE" />
          </div>
          <div className="bad-news reveal-block">
            <div className="bars reveal-down-stack">
              <Bar label="INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)" value={56} />
              <Bar label="INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)" value={73} />
              <Bar label="INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)" value={56} />
            </div>
            <div className="reveal-down">
              <p className="eyebrow">THE BAD NEWS</p>
              <h3>Attackers are supercharging their speed and scale.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="why-block">
        <video className="section-video" autoPlay muted loop playsInline src={asset('images/video/stat-teaser.mp4')} />
        <div className="section-veil dark" />
        <div className="why-inner">
          <p className="eyebrow reveal-down">WHY PALOSECURE</p>
          <h2 className="reveal-title reveal-down">Platformization empowers you to harness AI-ready infrastructure. And leverage services powered by Precision AI® to keep everything secure.</h2>
          <Link className="text-link reveal-down" to="/products">See our platform approach</Link>
          <div className="why-stats reveal-up-stack">
            <article>
              <h3><b>90</b>%</h3>
              <p>reduction in MTTR</p>
              <span>Drive innovation and digital transformation with AI.</span>
            </article>
            <article>
              <h3>up to <b>30.9</b> B</h3>
              <p>inline attacks blocked per day</p>
              <span>Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.</span>
            </article>
            <article>
              <h3><b>480</b> B</h3>
              <p>endpoints scanned daily</p>
              <span>Enable better, faster security with an integrated suite of battle-tested, AI-driven products.</span>
            </article>
          </div>
        </div>
      </section>

      <section className="platforms" id="platforms">
        <div className="platforms-title-wrap reveal-down">
          <h2 className="platforms-title">Introducing the Platforms, powered by Precision AI</h2>
        </div>
        <div className="platform-tabs">
          <div className="platform-tabs-track">
            {[0, 1].map((copy) => (
              <div className="platform-tabs-group" key={copy} aria-hidden={copy === 1}>
                {platforms.map((item) => (
                  <button
                    key={`${item.id}-${copy}`}
                    type="button"
                    data-theme={item.theme}
                    className={item.id === platform ? 'active' : ''}
                    tabIndex={copy === 1 ? -1 : undefined}
                    onClick={() => {
                      setPlatform(item.id)
                      setAwardsOpen(false)
                    }}
                  >
                    <img src={item.icon} alt="" />
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={`platform-panel theme-${currentPlatform.theme}`} key={platform}>
          <div
            className="platform-bg"
            style={{ ['--platform-lines' as string]: `url(${currentPlatform.lines})` }}
            aria-hidden="true"
          />
          <h3 className="platform-kicker">{currentPlatform.kicker}</h3>
          <div className="platform-grid">
            <div className="platform-left">
              <p className="platform-body">{currentPlatform.body}</p>
              <div className="platform-stats">
                {currentPlatform.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <Link className="platform-cta" to={currentPlatform.href}>{currentPlatform.cta} <Arrow /></Link>
            </div>
            <div className="platform-right">
              {currentPlatform.market && (
                <div className="market-position" aria-hidden="true">
                  <strong>{currentPlatform.market.perf}</strong>
                  <span>{currentPlatform.market.label}</span>
                </div>
              )}
              <div className={`award-cards${currentPlatform.market ? ' has-market' : ''}${awardsOpen ? ' is-open' : ''}`}>
                {currentPlatform.awards.length > 6 && (
                  <div className="award-head">
                    <button type="button" className="see-all" onClick={() => setAwardsOpen((open) => !open)}>
                      See all
                      <img src={awardsOpen ? asset('images/platforms/minus-circle.svg') : asset('images/platforms/plus-circle.svg')} alt="" />
                    </button>
                  </div>
                )}
                {visibleAwards.map((award) => (
                  <Link key={award.title} to="/resources/market-shaper" className="award-card">
                    <img className="award-icon" src={asset('images/platforms/award-icon.svg')} alt="" />
                    <span className="award-details">
                      <img
                        src={award.brand === 'forrester' ? asset('images/platforms/forrester.svg') : asset('images/platforms/gartner.svg')}
                        alt={award.brand === 'forrester' ? 'Forrester' : 'Gartner'}
                      />
                      <span>{award.title}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="platform-trusted">
            <p>Trusted by the best</p>
            <div className="platform-logos">
              {logos.slice(0, 8).map((logo, index) => (
                <span key={`${logo.name}-${index}`}>
                  <img src={logo.image} alt={logo.name} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="live-stats">
        <div className="live-stats-heading reveal-down">
          <h2><span>So you can defend at</span> speed and scale.</h2>
          <p>
            <img src={asset('images/stats/clock-white.svg')} alt="" />
            Daily data as of 11.8.26 at 7AM PST
          </p>
        </div>
        <div className="live-stats-grid reveal-up-stack">
          {liveStats.map((stat) => (
            <article key={stat.label} className={stat.size === 'large' ? 'is-large' : 'is-small'}>
              <img src={stat.image} alt="" />
              <div className="live-stat-text">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="unit42">
        <div className="reveal-down">
          <p className="eyebrow">SERVICES</p>
          <h2>Threat Intel & Incident Response</h2>
          <p>Unit 42’s world-renowned threat researchers, elite incident responders and expert security consultants will guide you with a threat-informed approach before, during and after an incident.</p>
          <div className="mini-stats">
            <div><strong>1 K+</strong><span>MATTERS PER YEAR</span></div>
            <div><strong>24 / 7 / 365</strong><span>INCIDENT RESPONSE</span></div>
          </div>
          <Link className="gold-pill" to="/services">Explore Unit 42 <Arrow /></Link>
        </div>
      </section>

      <section className="solutions-band" id="solutions">
        <div className="solutions-copy reveal-down">
          <span className="accent-rule" />
          <h2>Secure whatever, whenever, wherever — with less complexity.</h2>
          <div className="solution-list">
            {solutionTabs.map((item) => (
              <button key={item.id} type="button" className={item.id === solution ? 'active' : ''} onClick={() => setSolution(item.id)}>
                <i /> {item.label}
              </button>
            ))}
          </div>
          <ul className="solution-links">
            {currentSolution.links.map((link) => (
              <li key={link}><Link to="/solutions">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div className="solutions-photo">
          <img src={currentSolution.image} alt="" />
        </div>
      </section>

      <section className="proof" id="success">
        <div className="proof-head reveal-down">
          <h2>Our customers are securing their <span>digital transformation</span></h2>
          <Link to="/company/customers">See testimonials <Arrow orange /></Link>
        </div>
        <div className={`customer-video${videoPlaying ? ' is-playing' : ''}`}>
          <video
            ref={customerVideoRef}
            poster={asset('images/video/customer.jpg')}
            autoPlay
            muted
            playsInline
            preload="auto"
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
            onEnded={() => setVideoPlaying(false)}
          >
            <source src={asset('images/video/customer.mp4')} type="video/mp4" />
          </video>
          {!videoPlaying && <p className="customer-quote">best of breed technology.</p>}
        </div>
        <h2 className="trusted-title reveal-down">Trusted by <span>the best</span></h2>
        <div className="logo-grid reveal-up-stack">
          {logos.map((logo) => (
            <div key={logo.name} className="logo-card">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="engage" id="engage">
        <h2 className="engage-title reveal-down">
          Here for you.
          <br />
          Here for <span>what’s next.</span>
        </h2>
        <div className="audience">
          {engage.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === audience ? 'active' : ''}
              onClick={() => setAudience(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="engage-grid" key={audience}>
          {currentAudience.cards.map((card) => (
            <article key={card.title} className="engage-card">
              <div className="engage-photo">
                <img src={card.image} alt="" />
              </div>
              <div className="engage-copy">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to={card.href}>{card.cta} <Arrow orange /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="insights">
        <div className="section-head reveal-down">
          <h2>Staying ahead demands perspectives you can trust.</h2>
          <div className="pager">
            <Link to="/resources">View all</Link>
            <button type="button" aria-label="Previous article" onClick={() => setArticleIndex((value) => Math.max(0, value - 1))}>‹</button>
            <button type="button" aria-label="Next article" onClick={() => setArticleIndex((value) => Math.min(articles.length - 3, value + 1))}>›</button>
          </div>
        </div>
        <div className="card-window">
          <div className="card-track articles" style={{ transform: `translateX(-${articleIndex * (100 / 3)}%)` }}>
            {articles.map((article) => (
              <Link key={article.slug} to={`/resources/${article.slug}`} className="article-card">
                <img src={article.image} alt="" />
                <small>{article.kind}</small>
                <h3>{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Donut({ value, caption, note }: { value: number; caption: string; note: string }) {
  const radius = 72
  const circumference = 2 * Math.PI * radius
  const dash = (value / 100) * circumference
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="donut" ref={ref}>
      <svg viewBox="0 0 180 180">
        <circle cx="90" cy="90" r={radius} />
        <circle
          className="donut-progress"
          cx="90"
          cy="90"
          r={radius}
          strokeDasharray={active ? `${dash} ${circumference - dash}` : `0 ${circumference}`}
        />
        <text x="90" y="98">{value}%</text>
      </svg>
      <figcaption>
        <strong>{caption}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  )
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="bar">
      <span>{label}</span>
      <div>
        <i style={{ ['--bar-w' as string]: `${value}%` }} />
        <b>{value}%</b>
      </div>
    </div>
  )
}
