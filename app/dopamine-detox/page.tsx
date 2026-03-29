import Link from 'next/link'

export default function DetoxPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div className="orb orb-blue"  style={{ width: 500, height: 500, top: -180, right: -120 }} />
        <div className="orb orb-green" style={{ width: 350, height: 350, bottom: -80, left: -80 }} />

        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none'
        }} />

        <div className="container-sm" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="anim-up" style={{ marginBottom: '1.5rem' }}>
            <span className="tag tag-sage">System 01 — Mind Reset</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.4rem' }}>
            7-Day Dopamine<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Reset Protocol</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            A structured, step-by-step system to eliminate digital overload, restore your natural dopamine baseline, and reclaim the ability to focus deeply without stimulation.
          </p>
          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="#purchase" className="btn btn-primary" style={{ padding: '15px 34px' }}>
              Start the Reset — £9.99 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT & BUY ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, left: -100, opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start'
          }}>

            {/* LEFT — What's included */}
            <div>
              <div className="gold-rule"><p className="eyebrow">What's Included</p></div>
              <h2 style={{ marginBottom: '2rem' }}>Everything to<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Begin Your Reset</em></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '📋', title: 'Daily Structured Protocol', desc: 'A clear, precise day-by-day schedule. No guesswork. Just execution. Each day builds on the last.' },
                  { icon: '🎯', title: 'Focus Rebuilding System', desc: 'Progressive attention training exercises that recalibrate your nervous system back to its natural state.' },
                  { icon: '📊', title: 'Habit Tracking Framework', desc: 'A simple system to track your progress, monitor your wins, and lock in the new behaviours permanently.' },
                  { icon: '📵', title: 'Digital Detox Blueprint', desc: 'Specific, actionable rules for eliminating the exact stimuli that have been hijacking your dopamine.' },
                  { icon: '🌿', title: 'Natural Support Protocols', desc: 'Which herbs, oils, and foods support dopamine recovery — aligned with Healvana\'s natural philosophy.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{
                    display: 'flex', gap: '1.2rem', padding: '1.3rem 1.5rem',
                    background: 'white', border: '1px solid rgba(168,224,188,0.5)',
                    borderRadius: 'var(--radius-md)', transition: 'all 0.25s',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                      background: 'var(--sage-soft)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.93rem', marginBottom: 4, color: 'var(--forest)' }}>{title}</div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.84rem', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Purchase */}
            <div id="purchase" style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                background: 'linear-gradient(155deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4a6a 100%)',
                borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
                color: 'white', position: 'relative', overflow: 'hidden'
              }}>
                <div className="orb orb-gold" style={{ width: 300, height: 300, top: -100, right: -80 }} />
                <div className="orb orb-blue" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />

                <span className="tag tag-dark" style={{ marginBottom: '1.2rem', display: 'inline-flex' }}>Digital Product</span>
                <h3 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '0.5rem', fontWeight: 500, position: 'relative', zIndex: 1 }}>
                  7-Day Dopamine Reset
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '1.8rem', position: 'relative', zIndex: 1 }}>
                  Instant access. Begin your protocol tonight.
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 3.6rem)', fontWeight: 400, lineHeight: 1, color: 'white' }}>£9.99</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>once</span>
                </div>

                <Link href="/thanks" className="btn btn-gold" style={{
                  width: '100%', justifyContent: 'center', display: 'flex',
                  fontSize: '1rem', padding: '16px', marginBottom: '1rem',
                  position: 'relative', zIndex: 1
                }}>
                  Begin My Reset →
                </Link>

                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  🔒 Secure · Instant download · 30-day guarantee
                </p>
              </div>

              <p style={{ textAlign: 'center', color: 'var(--subtle)', fontSize: '0.78rem', marginTop: '1rem' }}>
                Trusted by people who chose discipline over distraction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-sage-mesh" style={{ borderTop: '1px solid var(--border)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.8rem' }}>Who This Is For</p>
          <h2 style={{ marginBottom: '2.5rem' }}>Built for Those<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Ready to Change</em></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {[
              '✓ Hours lost on your phone daily',
              '✓ Inability to focus without stimulation',
              '✓ Constant brain fog or mental fatigue',
              '✓ Craving the next scroll, video, or hit',
              '✓ Starting but never finishing anything',
              '✓ Ready to take your mind back',
            ].map(label => (
              <div key={label} style={{
                background: 'white', border: '1px solid rgba(168,224,188,0.5)',
                borderRadius: 'var(--radius-pill)', padding: '9px 18px',
                fontSize: '0.85rem', fontWeight: 600, color: 'var(--forest)',
                boxShadow: 'var(--shadow-sm)'
              }}>{label}</div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}