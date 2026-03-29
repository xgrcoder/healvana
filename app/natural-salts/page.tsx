import Link from 'next/link'

const SALTS = [
  { icon: '🏔️', name: 'Himalayan Pink Salt', origin: 'Pakistan', use: 'Mineral Balance', desc: '84 trace minerals. The purest salt on earth — formed 250 million years ago, untouched by modern pollution. Regulates hydration, supports adrenal health, and balances electrolytes at the cellular level.' },
  { icon: '🌊', name: 'Dead Sea Salt', origin: 'Middle East', use: 'Skin & Detox', desc: 'The highest mineral concentration of any water body on earth. 10x more minerals than sea salt. Treats psoriasis, eczema, arthritis. Bathers have healed in it for millennia.' },
  { icon: '✨', name: 'Epsom Salt', origin: 'Natural deposits', use: 'Magnesium & Muscle', desc: 'Not actually salt — it\'s magnesium sulphate. Absorbed transdermally through the skin. 80% of people are magnesium deficient. Bath soaks relax muscles, reduce inflammation, and improve sleep.' },
  { icon: '🌬️', name: 'Celtic Sea Salt', origin: 'Atlantic France', use: 'Electrolytes', desc: 'Hand-harvested using ancient methods. Still moist and grey — retaining all natural trace minerals. The gold standard of food salts for those who want nutrition, not just flavour.' },
  { icon: '🌋', name: 'Black Lava Salt', origin: 'Hawaii & Cyprus', use: 'Detox', desc: 'Infused with activated charcoal from volcanic lava. The charcoal draws out toxins, supports gut health, and provides a rich mineral profile. Used for gut detox protocols.' },
  { icon: '🔴', name: 'Alaea Red Salt', origin: 'Hawaii', use: 'Iron & Purification', desc: 'Hawaiian volcanic clay gives this salt its deep red colour — and its iron oxide content. Used in Hawaiian cleansing rituals and as a rich source of bioavailable iron.' },
]

export default function NaturalSaltsPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Ocean-tinted orbs to reflect the salts/water theme */}
        <div className="orb orb-blue"  style={{ width: 550, height: 550, top: -180, left: -120 }} />
        <div className="orb orb-green" style={{ width: 350, height: 350, bottom: -80, right: -80 }} />

        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none'
        }} />

        <div className="container-sm" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="anim-up" style={{ marginBottom: '1.5rem' }}>
            <span className="tag tag-ocean" style={{ background: 'var(--ocean-light)', color: 'var(--ocean)' }}>System 03 — Natural Salts & Minerals</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.4rem' }}>
            The Earth's Minerals.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Your Body's Foundation.</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Long before mineral supplements were sold in plastic tubs, humans sourced their minerals directly from the earth. Natural salts carry the blueprint your cells already know.
          </p>
          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="#salts" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Explore the Salts →
            </Link>
            <Link href="#guide" className="btn btn-outline" style={{ padding: '14px 28px' }}>
              Buy the Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY MINERALS ── */}
      <section className="section-sm" style={{ background: 'white', borderBottom: '1px solid rgba(147,197,232,0.35)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)'
          }}>
            <div>
              <div className="gold-rule"><p className="eyebrow">Why Minerals?</p></div>
              <h2 style={{ marginBottom: '1.2rem' }}>
                Every Biochemical<br />
                <em style={{ color: 'var(--ocean-mid)', fontStyle: 'italic' }}>Process Needs Minerals</em>
              </h2>
              <p className="lead">
                Minerals are the spark plugs of the human body. Every nerve signal, every heartbeat, every thought — is dependent on mineral balance. And most people are dangerously deficient.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '⚡', stat: '80%', label: 'of people are magnesium deficient' },
                { icon: '💧', stat: '73%', label: 'don\'t get enough electrolytes daily' },
                { icon: '🔬', stat: '84', label: 'trace minerals in Himalayan salt' },
              ].map(({ icon, stat, label }) => (
                <div key={label} style={{
                  display: 'flex', gap: '1.2rem', alignItems: 'center',
                  background: 'var(--ocean-soft)',
                  border: '1px solid var(--border-ocean)',
                  borderRadius: 'var(--radius-md)', padding: '1.2rem 1.5rem'
                }}>
                  <span style={{ fontSize: '1.6rem' }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--ocean)', lineHeight: 1 }}>{stat}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 4 }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SALTS GRID ── */}
      <section id="salts" className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue"  style={{ width: 400, height: 400, top: -100, right: -100, opacity: 0.4 }} />
        <div className="orb orb-green" style={{ width: 300, height: 300, bottom: -80, left: -80, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}><p className="eyebrow">The Salts</p></div>
            <h2>Nature's Mineral<br /><em style={{ color: 'var(--ocean-mid)', fontStyle: 'italic' }}>Medicine Cabinet</em></h2>
          </div>
          <div className="grid-2">
            {SALTS.map(({ icon, name, origin, use, desc }) => (
              <div key={name} className="card" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 'var(--radius-md)', flexShrink: 0,
                  background: 'var(--ocean-soft)', border: '1px solid var(--border-ocean)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem'
                }}>{icon}</div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--forest)' }}>{name}</span>
                    <span className="tag tag-gold" style={{ fontSize: '0.6rem' }}>{origin}</span>
                  </div>
                  <span className="tag tag-sage" style={{ fontSize: '0.6rem', marginBottom: '10px', display: 'inline-flex' }}>{use}</span>
                  <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO USE ── */}
      <section className="section-sm bg-ocean-mesh" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>How to Use Them</p>
            <h2>Three Ways<br /><em style={{ color: 'var(--ocean-mid)', fontStyle: 'italic' }}>to Apply Minerals</em></h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '🛁', title: 'Therapeutic Baths', desc: 'Transdermal mineral absorption is one of the most bioavailable delivery methods. A 20-minute Epsom or Dead Sea salt bath replenishes cellular minerals directly through skin.' },
              { icon: '🧂', title: 'Dietary Replacement', desc: 'Swap refined table salt for Himalayan or Celtic sea salt. Every meal becomes a mineral supplement. Your body recognises and uses real salt differently than stripped sodium chloride.' },
              { icon: '🧴', title: 'Topical & Scrubs', desc: 'Salt scrubs, poultices, and topical applications draw out toxins, heal skin conditions, reduce inflammation, and restore the skin\'s natural microbiome balance.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ textAlign: 'center', background: 'white' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY GUIDE ── */}
      <section id="guide" className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--ocean) 0%, var(--forest-mid) 60%, var(--forest) 100%)',
            borderRadius: 'var(--radius-xl)', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
          }}>
            <div className="orb orb-gold"  style={{ width: 300, height: 300, top: -80, right: -80 }} />
            <div className="orb orb-green" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />

            <span className="tag tag-dark" style={{ marginBottom: '1.5rem', display: 'inline-flex', position: 'relative', zIndex: 1 }}>Digital Guide</span>
            <h2 style={{ color: 'white', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Natural Salts & Minerals Bible</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
              Every salt and mineral your body needs. Usage protocols, sourcing guide, bath rituals, and dietary integration — all in one digital resource.
            </p>
            <ul className="check-list check-list-light" style={{ maxWidth: '360px', margin: '0 auto 2.5rem', textAlign: 'left', position: 'relative', zIndex: 1 }}>
              {['20+ salts & minerals covered', 'Bath ritual protocols', 'Dietary switch guide', 'Mineral deficiency diagnosis', 'Sourcing & quality guide'].map(item => (
                <li key={item}><span className="check-icon" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>✓</span>{item}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', fontWeight: 400 }}>£7.99</span>
              <Link href="/thanks" className="btn btn-gold" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
                Get the Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}