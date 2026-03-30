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

  const navLinks = [
    { href: '/',         label: 'Home'     },
    { href: '/shop',     label: 'Shop'     },
    { href: '/problems', label: 'Problems' },
    { href: '/about',    label: 'About'    },
    { href: '/blog',     label: 'Journal'  },
    { href: '/faq',      label: 'FAQ'      },
  ]

  const mobileLinks = [
    { href: '/',               label: 'Home'                  },
    { href: '/shop',           label: '🛍️ Shop All Products'  },
    { href: '/problems',       label: '⚠️ Find Your Solution' },
    { href: '/natural-oils',   label: '🌿 Natural Oils'       },
    { href: '/natural-salts',  label: '💎 Natural Salts'      },
    { href: '/dopamine-detox', label: '🧠 Mind Reset'         },
    { href: '/about',          label: '🌍 About Healvana'     },
    { href: '/blog',           label: '📖 Journal'            },
    { href: '/faq',            label: 'FAQ'                   },
  ]

  return (
    <html lang="en">
      <head>
        <title>Healvana — Natural Wellness, Rooted in Nature</title>
        <meta name="description" content="Premium digital guides for natural wellness. Dopamine reset, natural oils, minerals, and sacred fruits rooted in nature." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title"       content="Healvana — Natural Wellness" />
        <meta property="og:description" content="Premium digital guides for natural wellness rooted in nature." />
        <meta property="og:image"       content="/logo.png" />
      </head>
      <body>
        <div className="site-wrapper bg-grain">

          {/* ── NAV ── */}
          <header className="nav" style={{
            boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
            transition: 'box-shadow 0.3s',
          }}>
            <div className="nav-inner">

              <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                <img src="/logo.png" alt="Healvana" />
                Healvana
              </Link>

              <nav className="nav-links">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </nav>

              <div className="nav-right">
                <Link href="/shop" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '10px 22px' }}>
                  View Products
                </Link>
              </div>

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

            <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
              {mobileLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
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
            <div className="orb orb-green" style={{ width: 400, height: 400, top: -150, right: -100, opacity: 0.35 }} />
            <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -100, left: -80, opacity: 0.3 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

              {/* Footer columns */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2.5rem', marginBottom: '1rem',
              }}>

                {/* Brand col — no logo image, just text */}
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

              {/* Footer bar — no logo, no Stripe mention */}
              <div className="footer-bar">
                <span>© {new Date().getFullYear()} Healvana. All rights reserved.</span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', fontStyle: 'italic' }}>
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