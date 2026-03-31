// ================================================================
// FILE LOCATION: C:\dev\healvana\app\shop\page.tsx
// FIX: Bundle inner div had minWidth:260 causing overflow on
//      small screens (~320px). Changed to minWidth:0 with
//      flex:1 so it shrinks properly on mobile.
// ================================================================

import Link from 'next/link'
import BuyButton from '../components/BuyButton'

const PRODUCTS = [
  {
    id: 'dopamine-reset',
    icon: '🧠',
    tag: 'System 01 — Most Popular',
    tagStyle: { background: 'var(--sage-light)', color: 'var(--forest)' },
    name: '7-Day Dopamine Reset Protocol',
    desc: 'A structured, day-by-day system to eliminate digital overload, restore your natural dopamine baseline, and rebuild the ability to focus without stimulation.',
    price: '£29.99',
    gradient: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4060 100%)',
    href: '/dopamine-detox',
    includes: ['7-day daily protocol', 'Focus rebuilding system', 'Habit tracking framework', 'Digital detox blueprint', 'Natural support protocols'],
  },
  {
    id: 'natural-oils',
    icon: '🌿',
    tag: 'System 02 — Knowledge Guide',
    tagStyle: { background: 'var(--sage-light)', color: 'var(--forest)' },
    name: 'Natural Oils Bible',
    desc: '50+ natural oils fully documented — their healing properties, application methods, dosage guides, and the conditions they treat. Pure botanical knowledge.',
    price: '£27.99',
    gradient: 'linear-gradient(135deg, #1a4a2e 0%, var(--sage) 100%)',
    href: '/natural-oils',
    includes: ['50+ oils documented', 'Application methods per oil', 'Health condition index', 'Blending & safety protocols', 'Instant digital download'],
  },
  {
    id: 'natural-salts',
    icon: '💎',
    tag: 'System 03 — Knowledge Guide',
    tagStyle: { background: 'var(--ocean-light)', color: 'var(--ocean)' },
    name: 'Natural Salts & Minerals Bible',
    desc: 'Himalayan, Dead Sea, Epsom and beyond. Every salt your body needs with usage protocols, sourcing guides, bath rituals, and dietary integration.',
    price: '£27.99',
    gradient: 'linear-gradient(135deg, var(--ocean) 0%, #2d5a8a 60%, #1a3a6a 100%)',
    href: '/natural-salts',
    includes: ['20+ salts & minerals covered', 'Bath ritual protocols', 'Dietary switch guide', 'Mineral deficiency diagnosis', 'Sourcing & quality guide'],
  },
  {
    id: 'natural-fruits',
    icon: '🍇',
    tag: 'System 04 — New Release',
    tagStyle: { background: 'var(--gold-soft)', color: 'var(--earth)' },
    name: 'Sacred Fruits & Botanicals Bible',
    desc: "The most powerful healing fruits on earth — schisandra, soursop, amla, sea buckthorn, camu camu and more. Nature's hidden pharmacy, fully documented.",
    price: '£27.99',
    gradient: 'linear-gradient(135deg, #3a1a5a 0%, #6a3a8a 60%, #4a2a7a 100%)',
    href: '/shop',
    includes: ['20+ sacred fruits & botanicals', 'Ancient preparation methods', 'Bioavailability guide', 'Sourcing & quality protocols', 'Instant digital download'],
  },
]

export default function ShopPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="orb orb-green" style={{ width: 500, height: 500, top: -180, left: -100 }} />
        <div className="orb orb-blue"  style={{ width: 400, height: 400, bottom: -100, right: -80 }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim-up" style={{ marginBottom: '1.2rem' }}>
            <span className="tag tag-gold">Digital Products — Instant Access</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.2rem' }}>
            The Healvana<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Knowledge Library</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            Four premium digital guides. Instant download. Everything you need to heal, focus, and restore your body through nature.
          </p>
          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['🔒 Secure Checkout', '⚡ Instant Download', '🌿 100% Natural', '🌍 Worldwide Access'].map(b => (
              <span key={b} style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLE DEAL ── */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(2rem, 4vw, 3rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 350, height: 350, top: -100, right: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 4vw, 3rem)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {/* FIXED: was minWidth:260 which caused overflow on ~320px screens */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="tag" style={{ background: 'var(--gold)', color: 'white', fontSize: '0.65rem' }}>🔥 Best Value</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textDecoration: 'line-through' }}>£113.96</span>
                <span className="tag tag-dark" style={{ fontSize: '0.65rem' }}>Save £54</span>
              </div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginBottom: '0.5rem' }}>Complete Healvana Bundle</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                All 4 guides. Every system. One price. Instant access to everything Healvana offers.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                {['🧠 Mind Reset', '🌿 Oils Guide', '💎 Salts Guide', '🍇 Sacred Fruits'].map(i => (
                  <span key={i} className="tag tag-dark" style={{ fontSize: '0.62rem' }}>{i}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1 }}>£59.99</span>
              <BuyButton
                productId="bundle-all"
                label="Get All 4 Guides →"
                className="btn btn-gold"
                style={{ padding: '15px 32px', fontSize: '1rem', whiteSpace: 'nowrap' }}
              />
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }}>🔒 Secure · Instant access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL PRODUCTS ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, left: -80, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Individual Guides</p>
            </div>
            <h2>Choose Your<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Starting Point</em></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PRODUCTS.map(({ id, icon, tag, tagStyle, name, desc, price, gradient, href, includes }) => (
              <div key={id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                }}>
                  {/* Visual */}
                  <div style={{
                    background: gradient, position: 'relative', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minHeight: 220, padding: '3rem 2rem',
                  }}>
                    <div className="orb orb-gold" style={{ width: 200, height: 200, top: -50, right: -50 }} />
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', marginBottom: '1rem', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))' }}>{icon}</div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'white', fontWeight: 400, display: 'block' }}>{price}</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>one-time payment</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                    <span className="tag" style={{ ...tagStyle, fontSize: '0.62rem', marginBottom: '1rem', display: 'inline-flex', padding: '5px 14px', borderRadius: 'var(--radius-pill)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tag}</span>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>{name}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{desc}</p>
                    <ul className="check-list" style={{ marginBottom: '2rem' }}>
                      {includes.map(item => (
                        <li key={item}><span className="check-icon">✓</span>{item}</li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <BuyButton productId={id} label={`Buy Now — ${price} →`} className="btn btn-primary" style={{ padding: '13px 28px' }} />
                      <Link href={href} className="btn btn-outline" style={{ padding: '13px 22px', fontSize: '0.84rem' }}>Learn More</Link>
                    </div>
                    <p style={{ color: 'var(--subtle)', fontSize: '0.74rem', marginTop: '0.75rem' }}>
                      🔒 Secure checkout · Instant download · Worldwide access
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-sm bg-sage-mesh" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>What People Say</p>
            <h2>Real Results from<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Real People</em></h2>
          </div>
          <div className="grid-3">
            {[
              { name: 'James T.',  loc: 'London',    product: '7-Day Dopamine Reset', stars: 5, quote: 'Completely changed how I use my phone. By day 3 I could sit and read for an hour without reaching for it.' },
              { name: 'Sarah M.',  loc: 'Manchester', product: 'Natural Oils Bible',   stars: 5, quote: 'I had no idea how powerful rosehip and castor oil were. My skin has completely transformed in 3 weeks.' },
              { name: 'Daniel R.', loc: 'Edinburgh',  product: 'Complete Bundle',      stars: 5, quote: 'Bought all four. The mineral guide alone changed my sleep. Epsom salt baths before bed are non-negotiable now.' },
            ].map(({ name, loc, product, stars, quote }) => (
              <div key={name} className="card" style={{ background: 'white' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                  {Array.from({ length: stars }).map((_, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: '1rem' }}>★</span>)}
                </div>
                <p style={{ color: 'var(--ink)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.2rem', fontStyle: 'italic' }}>&ldquo;{quote}&rdquo;</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--forest)' }}>{name} · {loc}</div>
                  <span className="tag tag-sage" style={{ fontSize: '0.6rem' }}>{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ── */}
      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)', textAlign: 'center' }}>
        <div className="container-xs">
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Have questions before buying? We have answers.
          </p>
          <Link href="/faq" className="btn btn-outline">View FAQ →</Link>
        </div>
      </section>

    </main>
  )
}