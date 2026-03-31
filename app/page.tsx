// ================================================================
// FILE LOCATION: C:\dev\healvana\app\page.tsx
// ================================================================

import Link from 'next/link'
import BuyButton from './components/BuyButton'

const FRUITS = [
  {
    icon: '🍇',
    name: 'Schisandra Berry',
    origin: 'Northern China',
    tease: 'Used by Chinese royalty for over 2,000 years. Contains all five flavours — a sign of complete nutritional complexity. Known to simultaneously support the liver, adrenal system, and cognitive clarity in ways no single pharmaceutical compound can replicate.',
    locked: 'Specific extraction method, dosage protocol, and synergistic pairing that multiplies its effect 3x',
  },
  {
    icon: '🌿',
    name: 'Soursop (Graviola)',
    origin: 'Amazon Rainforest',
    tease: "The Amazonian rainforest has been called nature's pharmacy — and soursop is one of its most studied secrets. Its leaf and fruit contain acetogenins, compounds that have attracted significant research interest worldwide.",
    locked: 'The specific preparation method used by indigenous healers that preserves the active compounds most modern extraction destroys',
  },
  {
    icon: '🔴',
    name: 'Amla (Indian Gooseberry)',
    origin: 'India',
    tease: "Contains more vitamin C than almost any fruit on earth — but that's only the beginning. Ayurvedic medicine has used amla as a complete tonic for 5,000 years. It is the central ingredient in Chyawanprash, consumed by over 1 billion people annually.",
    locked: 'The Rasayana protocol — the ancient preparation method that activates compounds destroyed by modern processing',
  },
  {
    icon: '🟠',
    name: 'Sea Buckthorn',
    origin: 'Himalayas & Siberia',
    tease: "One of the only plant sources of omega-7 fatty acids. Used by Tibetan monks, Russian cosmonauts, and Chinese traditional medicine. Its berry contains over 190 bioactive compounds — more than almost any other fruit studied.",
    locked: 'Cold-press vs steam extraction — why 97% of commercial sea buckthorn products are nutritionally worthless',
  },
  {
    icon: '🟡',
    name: 'Camu Camu',
    origin: 'Amazon Basin',
    tease: 'Gram for gram, contains 60x more vitamin C than an orange. But unlike synthetic ascorbic acid, camu camu delivers it in a bioflavonoid complex that makes it almost entirely bioavailable. Native Amazonians have used it to maintain immunity in one of the harshest environments on earth.',
    locked: 'Why freeze-dried powder outperforms every other form — and the specific daily protocol for immune restoration',
  },
  {
    icon: '⚫',
    name: 'Black Elderberry',
    origin: 'Europe & North America',
    tease: "Hippocrates called the elder tree his 'medicine chest'. Modern research has confirmed what he knew 2,400 years ago — elderberry contains anthocyanins that directly interact with viral replication mechanisms in ways that pharmaceutical antivirals attempt to mimic.",
    locked: 'The traditional syrup preparation method that is 4x more potent than commercial elderberry supplements',
  },
]

const PRODUCTS = [
  {
    id: 'dopamine-reset',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4060 100%)',
    label: 'System 01', name: '7-Day Dopamine Reset', price: '£29.99',
    badge: 'Most Popular',
    desc: 'Eliminate digital overload, restore your natural dopamine baseline, and rebuild real focus in 7 structured days.',
    href: '/dopamine-detox',
  },
  {
    id: 'natural-oils',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a4a2e 0%, var(--sage) 100%)',
    label: 'System 02', name: 'Natural Oils Bible', price: '£27.99',
    badge: '50+ Oils',
    desc: 'Every major healing oil — properties, application methods, dosage guides, and the conditions each one treats.',
    href: '/natural-oils',
  },
  {
    id: 'natural-salts',
    icon: '💎',
    gradient: 'linear-gradient(135deg, var(--ocean) 0%, #2d5a8a 60%, #1a3a6a 100%)',
    label: 'System 03', name: 'Natural Salts & Minerals', price: '£27.99',
    badge: '20+ Minerals',
    desc: "Ancient earth minerals that restore your body's cellular balance, sleep, and energy from the inside out.",
    href: '/natural-salts',
  },
  {
    id: 'natural-fruits',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #3a1a5a 0%, #6a3a8a 60%, #4a2a7a 100%)',
    label: 'System 04', name: 'Sacred Fruits Bible', price: '£27.99',
    badge: 'New Release',
    desc: "The most powerful healing fruits on earth — schisandra, soursop, amla, sea buckthorn and more. Nature's hidden pharmacy.",
    href: '/shop',
  },
]

export default function Home() {
  return (
    <>

      {/* ══ HERO ══ */}
      <section className="bg-mesh bg-dots" style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 9rem) 0 clamp(4rem, 8vw, 7rem)',
        minHeight: '95vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="orb orb-green" style={{ width: 700, height: 700, top: -250, left: -150 }} />
        <div className="orb orb-blue"  style={{ width: 500, height: 500, bottom: -120, right: -120 }} />
        <div className="orb orb-gold"  style={{ width: 300, height: 300, top: '30%', right: '8%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

          <h1 className="anim-up d1" style={{ marginBottom: '1.8rem', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 1.8rem' }}>
            Heal Yourself.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>The Way Nature Intended.</span>
          </h1>

          <p className="lead anim-up d2" style={{ maxWidth: '580px', margin: '0 auto 3rem' }}>
            Healvana is a knowledge-first wellness platform. Premium digital guides teaching you to use nature — oils, salts, herbs, and mindset — to restore your body and mind without shortcuts.
          </p>

          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              View All Products →
            </Link>
            <Link href="/problems" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              Find Your Solution
            </Link>
          </div>

          <div className="anim-in d4" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['🔒 Secure Checkout', '⚡ Instant Download', '🌿 100% Natural', '🌍 Worldwide Access'].map(badge => (
              <div key={badge} style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(168,224,188,0.5)',
                borderRadius: 'var(--radius-pill)', padding: '8px 16px',
                backdropFilter: 'blur(12px)',
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest)',
              }}>{badge}</div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ STAT BAR ══ */}
      <section style={{
        background: 'linear-gradient(90deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '22px 22px', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', justifyContent: 'center',
            padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
            gap: 'clamp(1.5rem, 5vw, 4rem)', flexWrap: 'wrap',
          }}>
            {[
              { value: '4',     label: 'Premium Guides'  },
              { value: '9+',    label: 'Problems Solved'  },
              { value: '£27+',  label: 'Starting From'   },
              { value: '100%',  label: 'Natural'          },
            ].map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value" style={{ color: 'white', fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)' }}>{value}</span>
                <span className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROBLEMS TEASER ══ */}
      <section className="section-sm" style={{ background: 'var(--ivory)', borderBottom: '1px solid var(--border-warm)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Do You Experience</p>
            </div>
            <h2>Nature Has Already<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Solved These</em></h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {[
              { icon: '💇', label: 'Hair Loss'        },
              { icon: '😴', label: 'Chronic Fatigue'  },
              { icon: '🧠', label: 'Brain Fog'        },
              { icon: '🌙', label: 'Poor Sleep'       },
              { icon: '🌸', label: 'Skin Problems'    },
              { icon: '⚡', label: 'Stress & Anxiety' },
              { icon: '🌿', label: 'Digestive Issues' },
              { icon: '🦴', label: 'Joint Pain'       },
              { icon: '📱', label: 'Phone Addiction'  },
            ].map(({ icon, label }) => (
              <Link key={label} href="/problems" style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'white', border: '1px solid rgba(168,224,188,0.5)',
                  borderRadius: 'var(--radius-pill)', padding: '10px 18px',
                  fontSize: '0.85rem', fontWeight: 600, color: 'var(--forest)',
                  boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
                }}>
                  <span>{icon}</span>{label}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/problems" className="btn btn-outline" style={{ padding: '12px 28px' }}>
              See All Natural Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS — all 4 cards ══ */}
      <section id="products" className="section bg-sage-mesh" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -80, right: -80, opacity: 0.35 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Digital Guides</p>
            </div>
            <h2>Four Guides.<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Total Transformation.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '460px', margin: '1rem auto 0', fontSize: '0.92rem' }}>
              Instant download. Read on any device. Start applying tonight.
            </p>
          </div>

          {/* ── 4-column grid, collapses to 2 then 1 on mobile ── */}
          <div className="products-grid" style={{ marginBottom: '2.5rem' }}>
            {PRODUCTS.map(({ id, icon, gradient, label, name, price, badge, desc, href }) => (
              <div key={id} className="product-card" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem', zIndex: 2,
                  background: 'var(--gold)', color: 'white',
                  borderRadius: 'var(--radius-pill)', padding: '4px 12px',
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>{badge}</div>
                <div className="product-card-img" style={{ background: gradient, position: 'relative', overflow: 'hidden' }}>
                  <div className="orb orb-gold" style={{ width: 180, height: 180, top: -40, right: -40 }} />
                  <span style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))', zIndex: 1, position: 'relative' }}>{icon}</span>
                </div>
                <div className="product-card-body">
                  <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</span>
                  <h3 style={{ marginBottom: '0.6rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}>{name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--forest)', fontWeight: 500 }}>{price}</span>
                    <BuyButton productId={id} label="Buy Now →" className="btn btn-primary" style={{ padding: '9px 16px', fontSize: '0.78rem' }} />
                  </div>
                  <Link href={href} style={{ fontSize: '0.78rem', color: 'var(--sage)', fontWeight: 600 }}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest), var(--ocean))',
            borderRadius: 'var(--radius-xl)', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold" style={{ width: 300, height: 300, top: -80, right: -60 }} />
            <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="tag" style={{ background: 'var(--gold)', color: 'white', fontSize: '0.62rem' }}>🔥 Best Value — Save Over £50</span>
              </div>
              <h3 style={{ color: 'white', marginBottom: '0.4rem' }}>Complete Healvana Bundle — All 4 Guides</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Every Healvana system in one purchase. 🧠 + 🌿 + 💎 + 🍇
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
              <div>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'line-through' }}>£113.96</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'white' }}>£59.99</span>
              </div>
              <BuyButton productId="bundle-all" label="Get Bundle →" className="btn btn-gold" style={{ padding: '13px 28px', whiteSpace: 'nowrap' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SACRED FRUITS — LOCKED CONTENT ══ */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold"  style={{ width: 500, height: 500, top: -150, right: -150, opacity: 0.3 }} />
        <div className="orb orb-green" style={{ width: 350, height: 350, bottom: -80, left: -80, opacity: 0.35 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">The Hidden Pharmacy</p>
            </div>
            <h2 style={{ marginBottom: '1rem' }}>
              Sacred Fruits &amp;<br />
              <span className="gradient-text" style={{ fontStyle: 'italic' }}>Ancient Botanicals</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 1rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
              The most powerful healing fruits on earth have been used by ancient civilisations for millennia. Modern science is only beginning to understand what they already knew. The full protocols are available in our guides.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(168,224,188,0.5)',
              borderRadius: 'var(--radius-pill)', padding: '9px 20px',
              fontSize: '0.82rem', color: 'var(--forest)', fontWeight: 600,
              marginBottom: '3rem',
            }}>
              🔒 Full protocols unlocked inside our guides
            </div>
          </div>

          <div className="grid-3">
            {FRUITS.map(({ icon, name, origin, tease, locked }) => (
              <div key={name} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--sage-soft), var(--gold-soft))',
                    border: '1px solid rgba(168,224,188,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem', flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--forest)', marginBottom: 2 }}>{name}</div>
                    <span className="tag tag-gold" style={{ fontSize: '0.58rem' }}>{origin}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '1.2rem' }}>{tease}</p>
                <div style={{
                  background: 'var(--sage-soft)', border: '1px solid rgba(168,224,188,0.4)',
                  borderRadius: 'var(--radius-md)', padding: '1rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backdropFilter: 'blur(5px)',
                    background: 'rgba(234,248,240,0.7)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.5rem', zIndex: 2, flexDirection: 'column',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>🔒</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--forest)', textAlign: 'center', padding: '0 0.5rem' }}>
                      Unlock inside the guide
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', filter: 'blur(4px)', userSelect: 'none', lineHeight: 1.5 }}>
                    {locked}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: '14px 36px' }}>
              Unlock the Full Library →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-sm bg-sage-mesh" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Customer Reviews</p>
            <h2>Trusted by Those<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Choosing Nature</em></h2>
          </div>
          <div className="grid-3">
            {[
              { name: 'James T.',  loc: 'London',    stars: 5, text: 'By day 3 of the dopamine reset I could sit and read for an hour without touching my phone. This guide is the real deal.',       product: '7-Day Reset'   },
              { name: 'Sarah M.',  loc: 'Manchester', stars: 5, text: 'The Natural Oils guide changed my skincare completely. Rosehip oil alone transformed my skin in under a month.',             product: 'Natural Oils'  },
              { name: 'Daniel R.', loc: 'Edinburgh',  stars: 5, text: 'Bought the full bundle. The mineral guide changed my sleep overnight — Epsom salt baths before bed are now non-negotiable.', product: 'Full Bundle'   },
            ].map(({ name, loc, stars, text, product }) => (
              <div key={name} className="card" style={{ background: 'white' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                  {Array.from({ length: stars }).map((_, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>)}
                </div>
                <p style={{ color: 'var(--ink)', fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.2rem' }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--forest)' }}>{name} · {loc}</div>
                  <span className="tag tag-sage" style={{ fontSize: '0.6rem' }}>{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ══ */}
      <section id="about" className="section" style={{ background: 'var(--ivory)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 450, height: 450, top: -100, left: -120, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center',
          }}>
            <div>
              <div className="gold-rule"><p className="eyebrow">Our Philosophy</p></div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                The Answer Has<br />
                <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Always Been in Nature.</em>
              </h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                Before pharmaceutical labs, before synthetic supplements, before the wellness industry — humans thrived using what the earth provided.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Healvana exists to bring that knowledge back. Every guide is built on ancient wisdom validated by modern research — practical, natural, and designed to be applied immediately.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-primary">Our Story →</Link>
                <Link href="/shop" className="btn btn-outline">View Guides</Link>
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4a6a 100%)',
              borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 4vw, 3rem)',
              color: 'white', position: 'relative', overflow: 'hidden',
            }}>
              <div className="orb orb-gold" style={{ width: 280, height: 280, top: -80, right: -80 }} />
              {[
                { icon: '🌿', title: 'Botanical Knowledge',  desc: 'Oils, herbs, salts, and sacred fruits — how nature heals at the cellular level.' },
                { icon: '🧠', title: 'Mental Rewiring',       desc: 'Dopamine detox, focus building, and discipline protocols that actually work.' },
                { icon: '💧', title: 'Mineral Restoration',   desc: 'Ancient salts and trace minerals your body was designed to use.' },
                { icon: '🍇', title: 'Sacred Botanicals',     desc: 'Fruits and plants used by ancient civilisations that science is rediscovering.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.4rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: '0.81rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="section-sm" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold"  style={{ width: 320, height: 320, top: -80,  right: -80 }} />
            <div className="orb orb-green" style={{ width: 240, height: 240, bottom: -70, left: -70 }} />
            <span className="tag tag-dark" style={{ marginBottom: '1.2rem', display: 'inline-flex', position: 'relative', zIndex: 1 }}>Start Tonight</span>
            <h2 style={{ color: 'white', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
              Your Healing Starts<br /><em style={{ color: 'var(--gold-light)' }}>The Moment You Download.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8, position: 'relative', zIndex: 1, fontSize: '0.92rem' }}>
              Four premium guides. Instant access. Start applying natural solutions within minutes of purchase.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <Link href="/shop" className="btn btn-gold" style={{ padding: '15px 40px', fontSize: '0.95rem' }}>View All Products →</Link>
              <Link href="/problems" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '15px 28px' }}>Find My Solution</Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.76rem', marginTop: '1.2rem', position: 'relative', zIndex: 1 }}>
              🔒 Secure Stripe checkout · Instant PDF download · Worldwide access
            </p>
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="section-sm" style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container-sm">
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
            lineHeight: 1.65, color: 'var(--forest)', fontStyle: 'italic', fontWeight: 400,
            maxWidth: '700px', margin: '0 auto',
          }}>
            &ldquo;The body knows how to heal itself. It has always known. We just stopped listening to nature — and started listening to noise.&rdquo;
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>Healvana</span>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
        </div>
      </section>

    </>
  )
}