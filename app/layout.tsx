// ================================================================
// FILE LOCATION: C:\dev\healvana\app\layout.tsx
// FIX: Body scroll lock no longer jumps the page to the top
//      when the mobile menu opens mid-scroll.
// ================================================================

'use client'

import './globals.css'
import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // ── FIXED: Scroll lock that preserves scroll position ──
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
      if (top) {
        window.scrollTo(0, parseInt(top) * -1)
      }
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
    { href: '/',               label: '🏠 Home'                },
    { href: '/shop',           label: '🛍️ Shop All Products'  },
    { href: '/problems',       label: '⚠️ Find Your Solution' },
    { href: '/natural-oils',   label: '🌿 Natural Oils'       },
    { href: '/natural-salts',  label: '💎 Natural Salts'      },
    { href: '/dopamine-detox', label: '🧠 Mind Reset'         },
    { href: '/about',          label: '🌍 About'              },
    { href: '/blog',           label: '📖 Journal'            },
    { href: '/faq',            label: '❓ FAQ'                },
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
          <header
            className="nav"
            style={{ boxShadow: scrolled ? 'var(--shadow-md)' : 'none', transition: 'box-shadow 0.3s' }}
          >
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

              {/* Hamburger — mobile only */}
              <button
                className="nav-mobile-toggle"
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span style={{
                  transform: menuOpen ? 'rotate(45deg) translate(4px, 7px)' : 'none',
                  transition: 'transform 0.3s',
                }} />
                <span style={{
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 0.2s',
                }} />
                <span style={{
                  transform: menuOpen ? 'rotate(-45deg) translate(4px, -7px)' : 'none',
                  transition: 'transform 0.3s',
                }} />
              </button>

            </div>

            {/* ══ MOBILE MENU OVERLAY ══ */}
            <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>

              {mobileLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={close}>{label}</Link>
              ))}

              <div style={{ width: '100%', maxWidth: 360, marginTop: '1rem' }}>
                <Link
                  href="/shop"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
                  onClick={close}
                >
                  View All Products →
                </Link>
              </div>

              {/* Trust badges in mobile menu */}
              <div style={{
                display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
                justifyContent: 'center', marginTop: '1.5rem',
                maxWidth: 360,
              }}>
                {['🔒 Secure', '⚡ Instant Download', '🌿 100% Natural'].map(b => (
                  <span key={b} style={{
                    fontSize: '0.72rem', fontWeight: 600, color: 'var(--muted)',
                    background: 'var(--sage-soft)', borderRadius: 'var(--radius-pill)',
                    padding: '5px 12px',
                  }}>{b}</span>
                ))}
              </div>

            </div>
          </header>

          {/* ══ PAGE CONTENT ══ */}
          <main>{children}</main>

          {/* ══ FOOTER ══ */}
          <footer className="footer">
            <div className="orb orb-green" style={{ width: 400, height: 400, top: -150, right: -100, opacity: 0.35 }} />
            <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -100, left: -80,  opacity: 0.3  }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2.5rem',
                marginBottom: '1rem',
              }}>

                {/* Brand */}
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
      </body>
    </html>
  )
}