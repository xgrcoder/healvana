'use client'

import './globals.css'
import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <html lang="en">
      <head>
        <title>Healvana — Natural Wellness, Rooted in Nature</title>
        <meta name="description" content="A knowledge base for holistic health. Natural alternatives for mind, body, and spirit. Digital products rooted in nature." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="site-wrapper bg-grain">

          {/* ── NAV ── */}
          <header className="nav">
            <div className="nav-inner">

              {/* LOGO */}
              <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                <img src="/logo.png" alt="Healvana" />
                Healvana
              </Link>

              {/* CENTRE LINKS — desktop */}
              <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/natural-oils">Natural Oils</Link>
                <Link href="/natural-salts">Natural Salts</Link>
                <Link href="/dopamine-detox">Mind Reset</Link>
                <Link href="/#products">All Products</Link>
                <Link href="/#about">About</Link>
              </nav>

              {/* RIGHT — desktop CTA */}
              <div className="nav-right">
                <Link href="/dopamine-detox" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '10px 22px' }}>
                  Begin Reset
                </Link>
              </div>

              {/* HAMBURGER — mobile */}
              <button
                className="nav-mobile-toggle"
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }} />
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
              </button>

            </div>

            {/* MOBILE MENU */}
            <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
              {[
                { href: '/', label: 'Home' },
                { href: '/natural-oils', label: 'Natural Oils' },
                { href: '/natural-salts', label: 'Natural Salts' },
                { href: '/dopamine-detox', label: 'Mind Reset' },
                { href: '/#products', label: 'All Products' },
                { href: '/#about', label: 'About' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
              <Link
                href="/dopamine-detox"
                className="btn btn-primary"
                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                onClick={() => setMenuOpen(false)}
              >
                Begin Reset →
              </Link>
            </div>
          </header>

          {/* ── CONTENT ── */}
          <main>{children}</main>

          {/* ── FOOTER ── */}
          <footer className="footer">
            {/* Background orbs */}
            <div className="orb orb-green" style={{ width: 400, height: 400, top: -150, right: -100, opacity: 0.5 }} />
            <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -100, left: -80, opacity: 0.4 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="footer-grid" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                gap: '3rem', marginBottom: '1rem'
              }}>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                    <img src="/logo.png" alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                    <div className="footer-logo-text">Healvana</div>
                  </div>
                  <p style={{ fontSize: '0.88rem', maxWidth: '260px', lineHeight: '1.75', color: 'rgba(255,255,255,0.55)' }}>
                    A knowledge base for those who choose to heal, build, and live through nature. No shortcuts. No chemicals.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
                    {['Mind', 'Body', 'Spirit'].map(t => (
                      <span key={t} className="tag tag-dark" style={{ fontSize: '0.62rem' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5>Products</h5>
                  <Link href="/dopamine-detox">7-Day Reset</Link>
                  <Link href="/natural-oils">Natural Oils Guide</Link>
                  <Link href="/natural-salts">Natural Salts Guide</Link>
                  <Link href="/#products">All Products</Link>
                </div>

                <div>
                  <h5>Systems</h5>
                  <Link href="/dopamine-detox">Dopamine Reset</Link>
                  <Link href="#">Physical Alignment</Link>
                  <Link href="#">Sleep Protocol</Link>
                  <Link href="#">Nutrition Reset</Link>
                </div>

                <div>
                  <h5>Nature</h5>
                  <Link href="/natural-oils">Oils & Extracts</Link>
                  <Link href="/natural-salts">Salts & Minerals</Link>
                  <Link href="#">Herbs & Botanicals</Link>
                  <Link href="#">Water & Fasting</Link>
                </div>

                <div>
                  <h5>Company</h5>
                  <Link href="/#about">About</Link>
                  <Link href="#">Method</Link>
                  <Link href="#">Privacy</Link>
                  <Link href="#">Terms</Link>
                </div>

              </div>

              <hr className="divider-gradient" />

              <div className="footer-bar">
                <span>© {new Date().getFullYear()} Healvana. All rights reserved.</span>
                <span>Built on nature. Grounded in truth.</span>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}