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
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <html lang="en">
      <head>
        <title>Healvana — Natural Wellness, Rooted in Nature</title>
        <meta name="description" content="Premium digital guides for natural wellness. Dopamine reset, natural oils, and mineral protocols rooted in nature." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="site-wrapper bg-grain">

          {/* ── NAV ── */}
          <header className="nav" style={{
            boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
            transition: 'box-shadow 0.3s'
          }}>
            <div className="nav-inner">

              <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                <img src="/logo.png" alt="Healvana" />
                Healvana
              </Link>

              {/* Desktop links */}
              <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/natural-oils">Natural Oils</Link>
                <Link href="/natural-salts">Natural Salts</Link>
                <Link href="/dopamine-detox">Mind Reset</Link>
                <Link href="/faq">FAQ</Link>
              </nav>

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
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', transition: 'transform 0.3s' }} />
                <span style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'transform 0.3s' }} />
              </button>
            </div>

            {/* Mobile menu overlay */}
            <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
              {[
                { href: '/',                label: 'Home' },
                { href: '/shop',            label: '🛍️ Shop All Products' },
                { href: '/natural-oils',    label: '🌿 Natural Oils' },
                { href: '/natural-salts',   label: '💎 Natural Salts' },
                { href: '/dopamine-detox',  label: '🧠 Mind Reset' },
                { href: '/faq',             label: 'FAQ' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
              <Link
                href="/shop"
                className="btn btn-primary"
                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                onClick={() => setMenuOpen(false)}
              >
                View Products →
              </Link>
            </div>
          </header>

          <main>{children}</main>

          {/* ── FOOTER ── */}
          <footer className="footer">
            <div className="orb orb-green" style={{ width: 400, height: 400, top: -150, right: -100, opacity: 0.4 }} />
            <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -100, left: -80,  opacity: 0.3 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2.5rem',
                marginBottom: '1rem',
              }}>

                {/* Brand col */}
                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                    <img src="/logo.png" alt="" style={{ width: 34, height: 34, objectFit: 'contain' }} />
                    <div className="footer-logo-text">Healvana</div>
                  </div>
                  <p style={{ fontSize: '0.87rem', maxWidth: '250px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>
                    Heal through nature. No shortcuts. No chemicals. Just the earth.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                    {['Mind', 'Body', 'Spirit'].map(t => (
                      <span key={t} className="tag tag-dark" style={{ fontSize: '0.62rem' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {['🔒 Secure Checkout', '⚡ Instant Delivery', '↩️ 30-Day Guarantee'].map(b => (
                      <span key={b} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{b}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5>Products</h5>
                  <Link href="/shop">All Products</Link>
                  <Link href="/dopamine-detox">7-Day Reset — £9.99</Link>
                  <Link href="/natural-oils">Natural Oils — £7.99</Link>
                  <Link href="/natural-salts">Natural Salts — £7.99</Link>
                </div>

                <div>
                  <h5>Explore</h5>
                  <Link href="/#about">Our Philosophy</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/shop">Shop</Link>
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
                <span>Powered by Stripe 🔒</span>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}