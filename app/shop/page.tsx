// ================================================================
// FILE LOCATION: C:\dev\healvana\app\shop\page.tsx
// ================================================================

import Link from 'next/link'
import BuyButton from '../components/BuyButton'

const PRODUCTS = [
  {
    id: 'dopamine-reset', icon: '🧠',
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
    id: 'natural-oils', icon: '🌿',
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
    id: 'natural-salts', icon: '💎',
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
    id: 'natural-fruits', icon: '🍇',
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

const SOLUTIONS = [
  { icon: '💇', problem: 'Hair Loss & Thinning',      guide: 'Natural Oils Bible',          guideId: 'natural-oils',   color: { bg: 'var(--sage-soft)', border: 'var(--border)' } },
  { icon: '😴', problem: 'Chronic Fatigue',            guide: 'Salts & Minerals Bible',      guideId: 'natural-salts',  color: { bg: 'var(--ocean-soft)', border: 'var(--border-ocean)' } },
  { icon: '🧠', problem: 'Brain Fog & Poor Focus',     guide: '7-Day Dopamine Reset',        guideId: 'dopamine-reset', color: { bg: 'var(--sage-soft)', border: 'var(--border)' } },
  { icon: '🌙', problem: 'Poor Sleep & Insomnia',      guide: 'Salts & Minerals Bible',      guideId: 'natural-salts',  color: { bg: 'var(--ocean-soft)', border: 'var(--border-ocean)' } },
  { icon: '🌸', problem: 'Skin Problems & Ageing',     guide: 'Natural Oils Bible',          guideId: 'natural-oils',   color: { bg: 'var(--sage-soft)', border: 'var(--border)' } },
  { icon: '⚡', problem: 'Stress & Anxiety',           guide: 'Natural Oils Bible',          guideId: 'natural-oils',   color: { bg: 'var(--sage-soft)', border: 'var(--border)' } },
  { icon: '🌿', problem: 'Digestive Issues & Bloating', guide: 'Natural Oils Bible',         guideId: 'natural-oils',   color: { bg: 'var(--sage-soft)', border: 'var(--border)' } },
  { icon: '🦴', problem: 'Joint Pain & Inflammation',  guide: 'Salts & Minerals Bible',      guideId: 'natural-salts',  color: { bg: 'var(--ocean-soft)', border: 'var(--border-ocean)' } },
  { icon: '📱', problem: 'Phone Addiction',             guide: '7-Day Dopamine Reset',        guideId: 'dopamine-reset', color: { bg: '#f0ebfc', border: '#d4c8f0' } },
  { icon: '🍇', problem: 'Immune Support',              guide: 'Sacred Fruits Bible',         guideId: 'natural-fruits', color: { bg: '#f5f0fc', border: '#d8c8f0' } },
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

      {/* ── BUNDLE ── */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(2rem, 4vw, 3rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: 350, height: 350, top: -100, right: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="bundle-card" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div className="bundle-card-left">
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="tag" style={{ background: 'var(--gold)', color: 'white', fontSize: '0.65rem' }}>🔥 Best Value</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'line-through', marginLeft: '0.75rem' }}>£113.96</span>
                <span className="tag tag-dark" style={{ fontSize: '0.65rem', marginLeft: '0.5rem' }}>Save £54</span>
              </div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginBottom: '0.5rem' }}>Complete Healvana Bundle</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                All 4 guides. Every system. One price. Instant access to everything Healvana offers.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['🧠 Mind Reset', '🌿 Oils Guide', '💎 Salts Guide', '🍇 Sacred Fruits'].map(i => (
                  <span key={i} className="tag tag-dark" style={{ fontSize: '0.62rem' }}>{i}</span>
                ))}
              </div>
            </div>
            <div className="bundle-card-right">
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: 'white', lineHeight: 1, display: 'block' }}>£59.99</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem' }}>one-time payment</span>
              </div>
              <BuyButton productId="bundle-all" label="Get All 4 Guides →" className="btn btn-gold" style={{ padding: '14px 28px', fontSize: '0.95rem', whiteSpace: 'nowrap' }} />
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

      {/* ── SOLUTIONS — which guide solves which problem ── */}
      <section className="section" style={{ background: 'var(--ivory)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-warm)' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, right: -80, opacity: 0.3 }} />
        <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -80, left: -80, opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Find Your Solution</p>
            </div>
            <h2>Your Problem.<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Nature's Answer.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '1rem auto 0', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Every common health problem has a natural root cause — and a natural solution. Find yours below.
            </p>
          </div>

          <div className="solutions-grid">
            {SOLUTIONS.map(({ icon, problem, guide, guideId, color }) => (
              <div key={problem} style={{
                background: color.bg,
                border: `1px solid ${color.border}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '1rem', flexWrap: 'wrap',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1, minWidth: 0 }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                    background: 'white', border: `1px solid ${color.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)',
                  }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--forest)', marginBottom: 2 }}>{problem}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600 }}>→ {guide}</div>
                  </div>
                </div>
                <BuyButton
                  productId={guideId}
                  label="Get Guide →"
                  className="btn btn-primary"
                  style={{ padding: '9px 18px', fontSize: '0.78rem', flexShrink: 0 }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/problems" className="btn btn-outline" style={{ padding: '13px 32px' }}>
              See Full Problem Breakdowns →
            </Link>
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