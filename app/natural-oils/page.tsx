import Link from 'next/link'

const OILS = [
  { icon: '🫒', name: 'Olive Oil', color: 'var(--sage)', use: 'Skin & Heart', desc: 'Ancient civilisations\' most prized oil. Deeply moisturising, anti-inflammatory, and rich in oleic acid. Protects skin, supports cardiovascular health.' },
  { icon: '🥥', name: 'Coconut Oil', color: 'var(--forest-mid)', use: 'Skin, Hair & Gut', desc: 'Medium-chain fatty acids make this nature\'s most versatile oil — from oil-pulling and gut health to deep hair conditioning.' },
  { icon: '🌹', name: 'Rosehip Oil', color: 'var(--gold)', use: 'Skin Repair', desc: 'Packed with vitamin A and C. Fades scars, reduces dark spots, restores elasticity. Used for centuries across South America.' },
  { icon: '🌿', name: 'Tea Tree Oil', color: 'var(--forest)', use: 'Antimicrobial', desc: 'Powerful natural antiseptic. Kills bacteria, viruses, and fungi without chemical compounds. The natural antibiotic.' },
  { icon: '💜', name: 'Lavender Oil', color: '#7a6a9a', use: 'Calm & Sleep', desc: 'Reduces cortisol, promotes deep sleep, and calms the nervous system. The original anxiety remedy — found in nature.' },
  { icon: '🍋', name: 'Lemon Oil', color: 'var(--gold)', use: 'Detox & Energy', desc: 'Cold-pressed from lemon peel. Liver detoxifier, mood elevator, and natural energiser. Alkalises the body when consumed.' },
  { icon: '🌻', name: 'Frankincense', color: 'var(--earth)', use: 'Cellular Health', desc: 'Called "liquid gold" by ancient healers. Anti-tumour compounds, immune support, and the deepest anti-inflammatory oil known.' },
  { icon: '🌱', name: 'Peppermint Oil', color: 'var(--sage-mid)', use: 'Focus & Digestion', desc: 'Menthol activates cold receptors, increases alertness and blood flow. Relieves IBS, bloating, and tension headaches naturally.' },
  { icon: '🌾', name: 'Castor Oil', color: 'var(--earth)', use: 'Hair & Lymph', desc: 'The most underestimated oil. Stimulates hair growth, drains lymph nodes, and reduces inflammation when applied topically.' },
]

export default function NaturalOilsPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div className="orb orb-green" style={{ width: 500, height: 500, top: -150, right: -120 }} />
        <div className="orb orb-gold"  style={{ width: 300, height: 300, bottom: -60, left: -60 }} />

        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none'
        }} />

        <div className="container-sm" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="anim-up" style={{ marginBottom: '1.5rem' }}>
            <span className="tag tag-sage">System 02 — Natural Oils</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.4rem' }}>
            Nature's Oils.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Ancient. Powerful. Proven.</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Before pharmaceutical creams and synthetic supplements, humans used plant-derived oils to heal, protect, and nourish. This is your guide to the most powerful natural oils on earth.
          </p>
          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="#oils" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Explore the Oils →
            </Link>
            <Link href="#guide" className="btn btn-outline" style={{ padding: '14px 28px' }}>
              Buy the Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-sm" style={{ background: 'white', borderBottom: '1px solid rgba(168,224,188,0.4)' }}>
        <div className="container">
          <div className="grid-3">
            {[
              { icon: '🌿', title: '50+ Oils Covered', desc: 'Every major natural oil with specific healing properties and application protocols.' },
              { icon: '📖', title: 'Traditional & Modern', desc: 'Ancient wisdom backed by modern research. Each oil explained scientifically and practically.' },
              { icon: '⚗️', title: 'Application Methods', desc: 'Topical, internal, aromatherapy — how to actually use each oil for maximum benefit.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-circle icon-circle-sage" style={{ width: 48, height: 48, fontSize: '1.2rem' }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px', color: 'var(--forest)' }}>{title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OILS GRID ── */}
      <section id="oils" className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, left: -100, opacity: 0.5 }} />
        <div className="orb orb-blue"  style={{ width: 300, height: 300, bottom: -80, right: -80, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}><p className="eyebrow">Essential Oils</p></div>
            <h2>The Most Powerful<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Natural Oils</em></h2>
          </div>
          <div className="grid-3">
            {OILS.map(({ icon, name, use, desc, color }) => (
              <div key={name} className="card" style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 'var(--radius-md)',
                    background: 'var(--sage-soft)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0,
                    border: '1px solid rgba(168,224,188,0.5)'
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--forest)' }}>{name}</div>
                    <span className="tag tag-sage" style={{ fontSize: '0.62rem', marginTop: 4 }}>{use}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
              + 40 more oils covered in the full digital guide
            </p>
          </div>
        </div>
      </section>

      {/* ── BUY THE GUIDE ── */}
      <section id="guide" className="section-sm bg-sage-mesh" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 60%, var(--ocean) 100%)',
            borderRadius: 'var(--radius-xl)', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden'
          }}>
            <div className="orb orb-gold" style={{ width: 300, height: 300, top: -80, right: -80 }} />
            <div className="orb orb-blue" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />

            <span className="tag tag-dark" style={{ marginBottom: '1.5rem', display: 'inline-flex', position: 'relative', zIndex: 1 }}>Digital Guide</span>
            <h2 style={{ color: 'white', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>The Natural Oils Bible</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
              50+ oils. Full healing properties, application protocols, dosage guides, and safety notes. Everything you need to use nature's medicine cabinet.
            </p>
            <ul className="check-list check-list-light" style={{ maxWidth: '360px', margin: '0 auto 2.5rem', textAlign: 'left', position: 'relative', zIndex: 1 }}>
              {['50+ oils fully documented', 'Application methods per oil', 'Health condition index', 'Blending & safety protocols', 'Instant digital download'].map(item => (
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