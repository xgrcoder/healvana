// ================================================================
// FILE LOCATION: C:\dev\healvana\app\page.tsx
// ================================================================

import Link from 'next/link'
import BuyButton from './components/BuyButton'

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="bg-mesh bg-dots" style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
        minHeight: '90vh', display: 'flex', alignItems: 'center',
      }}>
        <div className="orb orb-green" style={{ width: 600, height: 600, top: -200, left: -120 }} />
        <div className="orb orb-blue"  style={{ width: 450, height: 450, bottom: -100, right: -100 }} />
        <div className="orb orb-gold"  style={{ width: 280, height: 280, top: '35%', right: '10%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="anim-up" style={{ marginBottom: '1.75rem' }}>
            <span className="tag tag-sage" style={{ padding: '7px 18px' }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--sage)', display: 'inline-block',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              &nbsp;3 Premium Digital Guides — Instant Download
            </span>
          </div>

          <h1 className="anim-up d1" style={{ marginBottom: '1.6rem', letterSpacing: '-0.02em' }}>
            Heal Yourself.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>The Way Nature Intended.</span>
          </h1>

          <p className="lead anim-up d2" style={{ maxWidth: '560px', margin: '0 auto 2.8rem' }}>
            Healvana is a knowledge-first wellness platform. Premium digital guides teaching you to use nature — oils, salts, herbs, and mindset — to restore your body and mind without shortcuts.
          </p>

          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
              View All Products →
            </Link>
            <Link href="/#about" className="btn btn-outline" style={{ padding: '15px 32px', fontSize: '0.95rem' }}>
              Our Philosophy
            </Link>
          </div>

          <div className="anim-in d4" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['🔒 Secure Checkout', '⚡ Instant Download', '↩️ 30-Day Guarantee', '🌿 100% Natural'].map(badge => (
              <div key={badge} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(168,224,188,0.5)',
                borderRadius: 'var(--radius-pill)', padding: '8px 16px',
                backdropFilter: 'blur(12px)',
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest)',
              }}>
                {badge}
              </div>
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
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stat-row" style={{
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 3vw, 3rem) 0',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
          }}>
            {[
              { value: '3',      label: 'Premium Guides' },
              { value: '£7.99',  label: 'Starting From' },
              { value: '100%',   label: 'Natural Methods' },
              { value: '30-Day', label: 'Money Back' },
            ].map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value" style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.6rem)' }}>{value}</span>
                <span className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, right: -80, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Digital Products</p>
            </div>
            <h2>Three Guides.<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Total Transformation.</em></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '1rem auto 0', fontSize: '0.95rem' }}>
              Instant download. Read on any device. Start tonight.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {[
              {
                id: 'dopamine-reset',
                icon: '🧠',
                gradient: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4060 100%)',
                label: 'System 01', name: '7-Day Dopamine Reset', price: '£9.99',
                desc: 'Eliminate digital overload, restore your natural baseline, and rebuild real focus in 7 days.',
                href: '/dopamine-detox',
              },
              {
                id: 'natural-oils',
                icon: '🌿',
                gradient: 'linear-gradient(135deg, #1a4a2e 0%, var(--sage) 100%)',
                label: 'System 02', name: 'Natural Oils Bible', price: '£7.99',
                desc: '50+ oils. Full healing properties, application protocols, and dosage guides.',
                href: '/natural-oils',
              },
              {
                id: 'natural-salts',
                icon: '💎',
                gradient: 'linear-gradient(135deg, var(--ocean) 0%, #2d5a8a 60%, #1a3a6a 100%)',
                label: 'System 03', name: 'Natural Salts & Minerals', price: '£7.99',
                desc: "Ancient minerals and salts that restore your body's cellular balance from the inside out.",
                href: '/natural-salts',
              },
            ].map(({ id, icon, gradient, label, name, price, desc, href }) => (
              <div key={id} className="product-card">
                <div className="product-card-img" style={{ background: gradient, position: 'relative', overflow: 'hidden' }}>
                  <div className="orb orb-gold" style={{ width: 180, height: 180, top: -40, right: -40 }} />
                  <span style={{ fontSize: 'clamp(3rem, 7vw, 4rem)', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))', zIndex: 1, position: 'relative' }}>
                    {icon}
                  </span>
                </div>
                <div className="product-card-body">
                  <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</span>
                  <h3 style={{ marginBottom: '0.6rem' }}>{name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', fontWeight: 500 }}>{price}</span>
                    <BuyButton productId={id} label="Buy Now →" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }} />
                  </div>
                  <Link href={href} style={{ fontSize: '0.78rem', color: 'var(--sage)', fontWeight: 600 }}>
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle banner */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest), var(--ocean))',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold" style={{ width: 300, height: 300, top: -80, right: -60 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="tag" style={{ background: 'var(--gold)', color: 'white', fontSize: '0.62rem' }}>🔥 Best Value</span>
                <span className="tag tag-dark" style={{ fontSize: '0.62rem' }}>Save £6</span>
              </div>
              <h3 style={{ color: 'white', marginBottom: '0.4rem' }}>Get All 3 Guides — Complete Bundle</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>Everything Healvana offers in one purchase. 🧠 + 🌿 + 💎</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textDecoration: 'line-through' }}>£25.97</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'white' }}>£19.99</span>
              </div>
              <BuyButton productId="bundle-all" label="Get Bundle →" className="btn btn-gold" style={{ padding: '13px 28px', whiteSpace: 'nowrap' }} />
            </div>
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
              { name: 'James T.', loc: 'London', stars: 5, text: 'By day 3 of the dopamine reset I could sit and read for an hour without touching my phone. This guide is the real deal.', product: '7-Day Reset' },
              { name: 'Sarah M.', loc: 'Manchester', stars: 5, text: 'The Natural Oils guide changed my skincare completely. Rosehip oil alone transformed my skin in under a month.', product: 'Natural Oils' },
              { name: 'Daniel R.', loc: 'Edinburgh', stars: 5, text: 'Bought the bundle. The mineral guide alone changed my sleep — Epsom salt baths before bed are now non-negotiable.', product: 'Full Bundle' },
            ].map(({ name, loc, stars, text, product }) => (
              <div key={name} className="card" style={{ background: 'white' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--gold)' }}>★</span>
                  ))}
                </div>
                <p style={{ color: 'var(--ink)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.2rem' }}>
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
      <section id="about" className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue" style={{ width: 450, height: 450, top: -100, right: -120, opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center',
          }}>
            <div>
              <div className="gold-rule"><p className="eyebrow">Our Philosophy</p></div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Nature Has the<br />
                <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Answer to Everything.</em>
              </h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                Before pharmaceutical labs and synthetic supplements, humans thrived using what the earth provided. Healvana brings that knowledge back.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                We cover the full spectrum: dopamine regulation, natural oils, ancient salts, herbal protocols, movement practices, and mental discipline — all grounded in science, all found in nature.
              </p>
              <Link href="/shop" className="btn btn-primary">Shop All Guides →</Link>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4a6a 100%)',
              borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 4vw, 3rem)',
              color: 'white', position: 'relative', overflow: 'hidden',
            }}>
              <div className="orb orb-gold" style={{ width: 280, height: 280, top: -80, right: -80 }} />
              {[
                { icon: '🌿', title: 'Botanical Knowledge', desc: 'Oils, herbs, salts — how nature heals at the cellular level.' },
                { icon: '🧠', title: 'Mental Rewiring',      desc: 'Dopamine detox, focus building, and discipline protocols.' },
                { icon: '💧', title: 'Ocean Minerals',       desc: 'Ancient salts and trace minerals your body was designed to use.' },
                { icon: '✦',  title: 'Spiritual Grounding',  desc: 'Ancient wisdom for modern overwhelm and disconnection.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.4rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                    {icon}
                  </div>
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
      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold"  style={{ width: 300, height: 300, top: -80,  right: -80 }} />
            <div className="orb orb-green" style={{ width: 220, height: 220, bottom: -60, left: -60 }} />
            <span className="tag tag-dark" style={{ marginBottom: '1.2rem', display: 'inline-flex', position: 'relative', zIndex: 1 }}>Start Today</span>
            <h2 style={{ color: 'white', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
              Your Reset Starts<br /><em style={{ color: 'var(--gold-light)' }}>Tonight.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.8, position: 'relative', zIndex: 1, fontSize: '0.9rem' }}>
              Three premium guides. Instant access. Start applying what you learn within minutes of purchase.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <Link href="/shop" className="btn btn-gold" style={{ padding: '14px 36px' }}>View All Products →</Link>
              <Link href="/faq"  className="btn btn-outline" style={{ padding: '14px 24px', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Read FAQ</Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.76rem', marginTop: '1.2rem', position: 'relative', zIndex: 1 }}>
              🔒 Secure checkout · Instant download · 30-day money back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="section-sm" style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container-sm">
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
            lineHeight: 1.6, color: 'var(--forest)', fontStyle: 'italic', fontWeight: 400,
            maxWidth: '680px', margin: '0 auto',
          }}>
            &ldquo;The body knows how to heal itself. It has always known. We just stopped listening to nature — and started listening to noise.&rdquo;
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>Healvana</span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
        </div>
      </section>
    </>
  )
}