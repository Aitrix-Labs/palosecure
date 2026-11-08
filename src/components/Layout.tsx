import { useEffect, useRef, useState, type FormEvent } from 'react'
import { asset } from '../asset'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  accounts,
  announcements,
  industryMenu,
  languages,
  partnerMenu,
  productMenu,
  resourceMenu,
  serviceMenu,
  solutionMenu,
  footerColumns,
} from '../data'
import { Arrow, GlobeIcon, Logo, Mark, SearchIcon } from './Marks'

type MenuKey = 'products' | 'solutions' | 'services' | 'industries' | 'partners' | 'resources' | null

const navItems: { key: MenuKey; label: string }[] = [
  { key: 'products', label: 'Products' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'services', label: 'Services' },
  { key: 'industries', label: 'Industries' },
  { key: 'partners', label: 'Partners' },
  { key: 'resources', label: 'Resources' },
]

export default function Layout() {
  const [promo, setPromo] = useState(0)
  const [menu, setMenu] = useState<MenuKey>(null)
  const [productGroup, setProductGroup] = useState(productMenu[0].id)
  const [accountsOpen, setAccountsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const popTimer = useRef<number | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = window.setInterval(() => setPromo((value) => (value + 1) % announcements.length), 6000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    setMenu(null)
    setAccountsOpen(false)
    setLangOpen(false)
    setSearchOpen(false)
    setMobile(false)
    setScrolled(false)
    window.scrollTo(0, 0)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    if (popTimer.current) window.clearTimeout(popTimer.current)
  }, [])

  const [compactNav, setCompactNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 860px)')
    const sync = () => {
      setCompactNav(media.matches)
      if (!media.matches) setMobile(false)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const panelOpen = Boolean(menu) || accountsOpen || langOpen
  const lightChrome = scrolled || panelOpen || mobile
  const slide = announcements[promo]
  const activeProducts = productMenu.find((group) => group.id === productGroup) ?? productMenu[0]

  function openMenu(key: MenuKey) {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setAccountsOpen(false)
    setLangOpen(false)
    setMenu(key)
  }

  function enterMenu(key: MenuKey) {
    if (window.matchMedia('(max-width: 860px)').matches) return
    openMenu(key)
  }

  function scheduleCloseMenu() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setMenu(null)
      closeTimer.current = null
    }, 220)
  }

  function keepMenuOpen() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function openPop(kind: 'lang' | 'accounts') {
    if (popTimer.current) {
      window.clearTimeout(popTimer.current)
      popTimer.current = null
    }
    setMenu(null)
    setLangOpen(kind === 'lang')
    setAccountsOpen(kind === 'accounts')
  }

  function scheduleClosePop() {
    if (popTimer.current) window.clearTimeout(popTimer.current)
    popTimer.current = window.setTimeout(() => {
      setLangOpen(false)
      setAccountsOpen(false)
      popTimer.current = null
    }, 140)
  }

  function keepPopOpen() {
    if (popTimer.current) {
      window.clearTimeout(popTimer.current)
      popTimer.current = null
    }
  }

  function submitSearch(event: FormEvent) {
    event.preventDefault()
    const next = query.trim()
    if (!next) return
    setSearchOpen(false)
    navigate(`/search?q=${encodeURIComponent(next)}`)
  }

  return (
    <>
      <div className="promo">
        <button type="button" aria-label="Previous announcement" onClick={() => setPromo((value) => (value + announcements.length - 1) % announcements.length)}>‹</button>
        <Link to={slide.href}>
          {slide.text} <span>{slide.cta}</span>
        </Link>
        <button type="button" aria-label="Next announcement" onClick={() => setPromo((value) => (value + 1) % announcements.length)}>›</button>
      </div>

      <header
        className={`site-header ${lightChrome ? 'is-light' : 'is-dark'}${panelOpen ? ' is-menu' : ''}`}
        onMouseLeave={() => {
          scheduleCloseMenu()
          scheduleClosePop()
        }}
      >
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="PaloSecure" onClick={() => setMenu(null)}>
            <Logo light={!lightChrome} />
          </Link>
          <nav className={mobile ? 'open' : ''} aria-label="Primary">
            {navItems.map((item) => (
              <NavItem
                key={item.key}
                label={item.label}
                open={menu === item.key}
                light={lightChrome}
                onEnter={() => enterMenu(item.key)}
                onToggle={() => setMenu(menu === item.key ? null : item.key)}
              />
            ))}
            <div className="mobile-nav-tools">
              <Link to="/accounts" onClick={() => setMobile(false)}>Accounts & Support</Link>
              <Link to="/contact" onClick={() => setMobile(false)}>Contact sales</Link>
              <Link className="orange-pill" to="/demos" onClick={() => setMobile(false)}>Demos and Trials</Link>
            </div>
          </nav>
          <div className="header-tools">
            <button type="button" className="icon-btn" aria-label="Search" onClick={() => { setSearchOpen(true); setMenu(null); setMobile(false) }}>
              <SearchIcon />
            </button>
            <div className="pop" onMouseEnter={() => { if (!compactNav) { keepPopOpen(); openPop('lang') } }} onMouseLeave={scheduleClosePop}>
              <button
                type="button"
                className="icon-btn"
                aria-label="Language"
                onClick={() => {
                  if (langOpen) setLangOpen(false)
                  else openPop('lang')
                }}
              >
                <GlobeIcon />
              </button>
              {langOpen && (
                <div className="pop-panel lang-panel">
                  {languages.map((item) => (
                    <button key={item} type="button" className={item === lang ? 'active' : ''} onClick={() => { setLang(item); setLangOpen(false) }}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="pop desktop-only-pop" onMouseEnter={() => { keepPopOpen(); openPop('accounts') }} onMouseLeave={scheduleClosePop}>
              <button type="button" className="ghost-pill" onClick={() => openPop('accounts')}>
                Accounts & Support <i />
              </button>
              {accountsOpen && (
                <div className="pop-panel account-panel">
                  <strong>Accounts</strong>
                  {accounts.accounts.map((item) => <Link key={item.label} to={item.href}>{item.label}</Link>)}
                  <strong>Support</strong>
                  {accounts.support.map((item) => <Link key={item.label} to={item.href}>{item.label}</Link>)}
                </div>
              )}
            </div>
            <Link className="orange-pill demos-cta" to="/demos"><span className="demos-full">Demos and Trials</span><span className="demos-short">Demos</span></Link>
          </div>
          <button
            className={`menu-toggle${mobile ? ' open' : ''}`}
            type="button"
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            onClick={() => {
              setMobile((value) => !value)
              setMenu(null)
              setAccountsOpen(false)
              setLangOpen(false)
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menu === 'products' && (
          <div className="mega mega-products" onMouseEnter={keepMenuOpen} onMouseLeave={scheduleCloseMenu}>
            <aside>
              {productMenu.map((group) => (
                <button key={group.id} type="button" className={group.id === productGroup ? 'active' : ''} onMouseEnter={() => setProductGroup(group.id)} onClick={() => setProductGroup(group.id)}>
                  {group.label} {group.badge && <em>{group.badge}</em>}
                </button>
              ))}
              <Link to="/products">See All Products <Arrow /></Link>
            </aside>
            <div className="mega-grid">
              {activeProducts.items.map((item) => (
                <Link key={item.name} to={item.href} className="mega-card">
                  <Mark kind={item.mark} />
                  <small>{item.name.includes('AIRS') ? 'AI Security' : item.name.includes('STRATA') ? 'Network Security' : item.name.includes('SASE') ? 'SASE' : item.name.includes('IDIRA') ? 'Identity Security' : item.name.includes('CLOUD') ? 'Cloud Security' : item.name.includes('XCOR') ? 'Observability & Remediation' : 'Security Operations'} {item.badge && <em>{item.badge}</em>}</small>
                  <p>{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {menu === 'solutions' && (
          <div className="mega mega-split" onMouseEnter={keepMenuOpen} onMouseLeave={scheduleCloseMenu}>
            <p className="mega-kicker">By Use Case</p>
            <div className="use-grid">
              {solutionMenu.map((item) => (
                <Link key={item.title} to={item.href} className="use-link">
                  <img className="use-icon" src={item.icon} alt="" width={32} height={32} />
                  <span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {menu === 'services' && <SimpleMega kicker="Services" items={serviceMenu} onEnter={keepMenuOpen} onLeave={scheduleCloseMenu} />}
        {menu === 'industries' && <SimpleMega kicker="Industries" items={industryMenu} onEnter={keepMenuOpen} onLeave={scheduleCloseMenu} />}
        {menu === 'partners' && <SimpleMega kicker="Partners" items={partnerMenu} onEnter={keepMenuOpen} onLeave={scheduleCloseMenu} />}
        {menu === 'resources' && <SimpleMega kicker="Resources" items={resourceMenu} onEnter={keepMenuOpen} onLeave={scheduleCloseMenu} />}
      </header>

      {searchOpen && (
        <div className="search-layer" onClick={() => setSearchOpen(false)}>
          <form onClick={(event) => event.stopPropagation()} onSubmit={submitSearch}>
            <SearchIcon />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, solutions, and insights" aria-label="Search" />
            <button type="submit">Search</button>
          </form>
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <section className="subscribe">
        <h2>Get the latest news, invites to events, and threat alerts</h2>
        <SubscribeForm />
      </section>

      <footer className="site-footer">
        <div className="footer-wrap">
          <h2>Products and Services</h2>
          <div className="footer-grid">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map(([label, href]) => (
                    <li key={label}><Link to={href}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-base">
            <p>Copyright © {new Date().getFullYear()} PaloSecure. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Do Not Sell or Share My Personal Information</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/privacy">Trust Center</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
            <div className="socials" aria-label="Social">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            </div>
            <button type="button" className="lang-chip" onClick={() => setLangOpen(true)}>{lang.split(' ')[0]}</button>
          </div>
        </div>
      </footer>
    </>
  )
}

function NavItem({
  label,
  open,
  light,
  onEnter,
  onToggle,
}: {
  label: string
  open: boolean
  light: boolean
  onEnter: () => void
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className={`nav-link ${open ? 'open' : ''} ${light ? 'light' : ''}`}
      aria-expanded={open}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onToggle}
    >
      {label}
    </button>
  )
}

function SimpleMega({
  kicker,
  items,
  onEnter,
  onLeave,
}: {
  kicker: string
  items: { title: string; text: string; href: string }[]
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div className="mega mega-simple" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <p className="mega-kicker">{kicker}</p>
      <div className="use-grid">
        {items.map((item) => (
          <Link key={item.title} to={item.href}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (done) return <p className="thanks">You’re subscribed. Watch your inbox for threat alerts and event invites.</p>
  return (
    <form onSubmit={(event) => { event.preventDefault(); if (valid) setDone(true) }}>
      <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your business email now to subscribe!" aria-label="Business email" />
      <button type="submit" disabled={!valid}>Sign up <Arrow /></button>
      <small>
        By submitting this form, I understand my personal data will be processed in accordance with the PaloSecure <Link to="/privacy">Privacy Statement</Link> and <Link to="/terms">Terms of Use</Link>.
      </small>
    </form>
  )
}

export function PageHero({
  kicker,
  title,
  text,
  action,
  image = asset('images/solutions/threat.jpg'),
}: {
  kicker: string
  title: string
  text: string
  action?: { href: string; label: string }
  image?: string
}) {
  return (
    <section className="page-hero">
      <img className="page-hero-photo" src={image} alt="" />
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        <p>{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{text}</p>
        {action && <Link className="orange-pill" to={action.href}>{action.label} <Arrow /></Link>}
      </div>
    </section>
  )
}

export function Crumbs() {
  const location = useLocation()
  const parts = location.pathname.split('/').filter(Boolean)
  return (
    <p className="crumbs">
      <NavLink to="/">Home</NavLink>
      {parts.map((part, index) => (
        <span key={part}>
          {' / '}
          <NavLink to={'/' + parts.slice(0, index + 1).join('/')}>{part.replace(/-/g, ' ')}</NavLink>
        </span>
      ))}
    </p>
  )
}
