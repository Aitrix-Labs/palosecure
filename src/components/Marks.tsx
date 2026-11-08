import type { MenuItem } from '../data'
import { asset } from '../asset'
import { productLogos } from '../data'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <img src={asset('images/icons/logo-mark.svg')} alt="" className="logo-mark" />
      <span className="logo-word">
        palosecure
        <small>NETWORKS</small>
      </span>
    </span>
  )
}

export function Mark({ kind }: { kind: MenuItem['mark'] }) {
  const src = productLogos[kind]
  if (src) {
    return <img className="mark mark-img" src={src} alt="" />
  }
  return (
    <svg className="mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.8 5.7 20.8 8 13.6 2 9.2h7.6L12 2z" fill="#f15a24" />
    </svg>
  )
}

export function SearchIcon() {
  return <img className="tool-icon" src={asset('images/icons/search.svg')} alt="" width={24} height={24} />
}

export function GlobeIcon() {
  return <img className="tool-icon" src={asset('images/icons/globe.svg')} alt="" width={24} height={24} />
}

export function Arrow({ orange = false }: { orange?: boolean }) {
  return <img src={orange ? asset('images/icons/arrow-orange.svg') : asset('images/icons/arrow-black.svg')} alt="" width={16} height={16} />
}
