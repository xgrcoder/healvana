// ================================================================
// FILE LOCATION: C:\dev\healvana\app\layout.tsx
// ================================================================

'use client'

import './globals.css'
import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Scroll lock that preserves scroll position
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px`
    } else {
      const top = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (top) window.scrollTo(0, parseInt(top) * -1)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [menuOpen])

  const navLinks = [
    { href: '/',         label: 'Home'     },
    { href: '/shop',     label: 'Shop'     },
    { href: '/problems', label: 'Problems' },
    { href: '/about',    label: 'About'    },
    { href: '/blog',     label: 'Journal'  },
    { href: '/faq',      label: 'FAQ'      },
  ]

  const mobileLinks = [
    { href: '/',               label: 'Home',               icon: '🏠' },
    { href: '/shop',           label: 'Shop All Products',  icon: '🛍️' },
    { href: '/problems',       label: 'Find Your Solution', icon: '🌿' },
    { href: '/dopamine-detox', label: '7-Day Mind Reset',   icon: '🧠' },
    { href: '/natural-oils',   label: 'Natural Oils Bible', icon: '💚' },
    { href: '/natural-salts',  label: 'Salts & Minerals',   icon: '💎' },
    { href: '/about',          label: 'About Healvana',     icon: '🌍' },
    { href: '/blog',           label: 'Journal',            icon: '📖' },
    { href: '/faq',            label: 'FAQ',                icon: '❓' },
  ]

  const close = () => setMenuOpen(false)

  return (
    <html lang="en">
      <head>
        <title>Healvana — Natural Wellness, Rooted in Nature</title>
        <meta name="description" content="Premium digital guides for natural wellness. Dopamine reset, natural oils, minerals, and sacred fruits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title"       content="Healvana — Natural Wellness" />
        <meta property="og:description" content="Premium digital guides for natural wellness rooted in nature." />
        <meta property="og:image"       content="/logo.png" />
      </head>
      <body>
        <div className="site-wrapper bg-grain">

          {/* ══ NAV ══ */}
          <header className="nav" style={{ boxShadow: scrolled ? 'var(--shadow-md)' : 'none', transition: 'box-shadow 0.3s' }}>
            <div className="nav-inner">

              {/* Logo */}
              <Link href="/" className="nav-logo" onClick={close}>
                <img src="/logo.png" alt="Healvana" />
                Healvana
              </Link>

              {/* Desktop links */}
              <nav className="nav-links">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="nav-right">
                <Link href="/shop" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '10px 22px' }}>
                  View Products
                </Link>
              </div>

              {/* Hamburger */}
              <button
                className="nav-mobile-toggle"
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 7px)' : 'none', transition: 'transform 0.3s' }} />
                <span style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -7px)' : 'none', transition: 'transform 0.3s' }} />
              </button>

            </div>
          </header>

          {/* ══ MOBILE DRAWER OVERLAY ══ */}
          {/* Backdrop */}
          <div
            onClick={close}
            style={{
              position: 'fixed', inset: 0, zIndex: 195,
              background: 'rgba(26,74,46,0.45)',
              backdropFilter: 'blur(4px)',
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'opacity 0.35s ease',
            }}
          />

          {/* Drawer panel — slides in from right */}
          <div style={{
            position: 'fixed',
            top: 0, right: 0, bottom: 0,
            width: 'min(340px, 88vw)',
            zIndex: 300,
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--cream)',
            boxShadow: '-8px 0 48px rgba(26,74,46,0.18)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
          }}>

            {/* Drawer header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)',
              flexShrink: 0,
            }}>
              <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Healvana" style={{ width: 30, height: 30, objectFit: 'contain' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'white', fontWeight: 500 }}>Healvana</span>
              </Link>
              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer',
                  width: 36, height: 36, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '1.2rem', lineHeight: 1,
                  transition: 'background 0.2s',
                }}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <div style={{ flex: 1, padding: '1rem 1rem' }}>
              {mobileLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    color: 'var(--forest)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    transition: 'background 0.2s',
                    marginBottom: '0.15rem',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--sage-soft)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{
                    width: 36, height: 36, borderRadius: 'var(--radius-sm)',
                    background: 'var(--sage-soft)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>{icon}</span>
                  {label}
                </Link>
              ))}
            </div>

            {/* Drawer footer CTA */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid var(--border)',
              flexShrink: 0,
              background: 'var(--ivory)',
            }}>
              <Link
                href="/shop"
                onClick={close}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '13px', fontSize: '0.92rem' }}
              >
                View All Products →
              </Link>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
                {['🔒 Secure', '⚡ Instant Download', '🌿 Natural'].map(b => (
                  <span key={b} style={{
                    fontSize: '0.68rem', fontWeight: 600, color: 'var(--muted)',
                    background: 'white', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-pill)', padding: '4px 10px',
                  }}>{b}</span>
                ))}
              </div>
            </div>

          </div>

          {/* ══ PAGE CONTENT ══ */}
          <main>{children}</main>

          {/* ══ FOOTER ══ */}
          <footer className="footer">
            <div className="orb orb-green" style={{ width: 400, height: 400, top: -150, right: -100, opacity: 0.35 }} />
            <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -100, left: -80, opacity: 0.3 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2.5rem', marginBottom: '1rem',
              }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <div className="footer-logo-text" style={{ marginBottom: '1rem' }}>Healvana</div>
                  <p style={{ fontSize: '0.87rem', maxWidth: '250px', lineHeight: 1.85, color: 'rgba(255,255,255,0.5)' }}>
                    Heal yourself, the way nature intended.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                    {['Mind', 'Body', 'Spirit'].map(t => (
                      <span key={t} className="tag tag-dark" style={{ fontSize: '0.62rem' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {['🔒 Secure Checkout', '⚡ Instant Delivery', '🌍 Worldwide Access'].map(b => (
                      <span key={b} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{b}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5>Products</h5>
                  <Link href="/shop">All Products</Link>
                  <Link href="/dopamine-detox">7-Day Reset — £29.99</Link>
                  <Link href="/natural-oils">Natural Oils — £27.99</Link>
                  <Link href="/natural-salts">Natural Salts — £27.99</Link>
                  <Link href="/shop">Sacred Fruits — £27.99</Link>
                </div>

                <div>
                  <h5>Explore</h5>
                  <Link href="/problems">Find Your Solution</Link>
                  <Link href="/about">About Healvana</Link>
                  <Link href="/blog">Journal</Link>
                  <Link href="/faq">FAQ</Link>
                </div>

                <div>
                  <h5>Legal</h5>
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Terms of Use</Link>
                  <Link href="#">Refund Policy</Link>
                  <Link href="#">Contact Us</Link>
                </div>
              </div>

              <hr className="divider-gradient" style={{ margin: '2rem 0 1.5rem' }} />

              <div className="footer-bar">
                <span>© {new Date().getFullYear()} Healvana. All rights reserved.</span>
                <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem' }}>
                  Heal yourself, the way nature intended.
                </span>
              </div>
            </div>
          </footer>

        </div>
        <script src="https://zempotis.com/widget.js?v=2" data-client="healvana" async></script>
      </body>
    </html>
  )
}