import Link from 'next/link'

export default function Home() {
  return (
    <>

      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '6rem 0 5rem',
        minHeight: '92vh', display: 'flex', alignItems: 'center'
      }} className="bg-mesh bg-dots">

        {/* Layered orbs */}
        <div className="orb orb-green" style={{ width: 600, height: 600, top: -200, left: -120 }} />
        <div className="orb orb-blue"  style={{ width: 450, height: 450, bottom: -100, right: -100 }} />
        <div className="orb orb-gold"  style={{ width: 280, height: 280, top: '30%', right: '15%' }} />

        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'linear-gradient(rgba(26,74,46,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

          {/* Badge */}
          <div className="anim-up" style={{ marginBottom: '1.75rem' }}>
            <span className="tag tag-sage" style={{ padding: '7px 18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              Natural · Holistic · Rooted in Nature
            </span>
          </div>

          <h1 className="anim-up d1" style={{ marginBottom: '1.6rem', letterSpacing: '-0.02em' }}>
            Heal Yourself.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>The Way Nature Intended.</span>
          </h1>

          <p className="lead anim-up d2" style={{ maxWidth: '560px', margin: '0 auto 2.8rem' }}>
            Healvana is a knowledge-first wellness platform. We teach you to use nature — oils, salts, herbs, movement, and mindset — to restore your body and mind without shortcuts or synthetic fixes.
          </p>

          <div className="anim-up d3" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/#products" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
              Explore the Systems →
            </Link>
            <Link href="/#about" className="btn btn-outline" style={{ padding: '15px 32px', fontSize: '0.95rem' }}>
              Our Philosophy
            </Link>
          </div>

          {/* Three pillars */}
          <div className="anim-in d4" style={{
            display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'
          }}>
            {[
              { icon: '🧠', label: 'Mental Clarity' },
              { icon: '🌿', label: 'Natural Methods' },
              { icon: '💧', label: 'Ocean Minerals' },
              { icon: '✦',  label: 'Spiritual Grounding' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '9px',
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(168,224,188,0.5)',
                borderRadius: 'var(--radius-pill)', padding: '9px 18px',
                backdropFilter: 'blur(12px)',
                fontSize: '0.84rem', fontWeight: 600, color: 'var(--forest)',
                boxShadow: '0 2px 12px rgba(26,74,46,0.07)'
              }}>
                <span style={{ fontSize: '1rem' }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ STAT BAR ══ */}
      <section style={{
        background: 'linear-gradient(90deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
        borderTop: 'none', borderBottom: 'none', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stat-row" style={{ justifyContent: 'center', padding: '3rem 0' }}>
            {[
              { value: '100%', label: 'Natural Methods Only' },
              { value: '3+', label: 'Core Wellness Systems' },
              { value: '0', label: 'Synthetic Products' },
              { value: '∞', label: 'Knowledge Available' },
            ].map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value" style={{ color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>{value}</span>
                <span className="stat-label" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ══ */}
      <section id="about" className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 500, height: 500, top: -150, right: -150, opacity: 0.6 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '5rem', alignItems: 'center'
          }}>

            <div>
              <div className="gold-rule"><p className="eyebrow">Our Philosophy</p></div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Nature Has the<br />
                <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Answer to Everything.</em>
              </h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                Before pharmaceutical labs, before synthetic supplements, before the wellness industry — humans thrived using what the earth provided. Healvana exists to bring that knowledge back.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                We cover the full spectrum: dopamine regulation, natural oils for skin and body, ancient salts for mineral balance, herbal protocols, movement practices, and mental discipline. Everything grounded in science. Everything found in nature.
              </p>
              <Link href="/#products" className="btn btn-outline">
                Explore the Library →
              </Link>
            </div>

            {/* Visual panel */}
            <div style={{
              background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4a6a 100%)',
              borderRadius: 'var(--radius-xl)', padding: '3rem',
              color: 'white', position: 'relative', overflow: 'hidden'
            }}>
              <div className="orb orb-gold" style={{ width: 280, height: 280, top: -100, right: -80 }} />
              <div className="orb orb-blue" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />
              {[
                { icon: '🌿', title: 'Botanical Knowledge', desc: 'Oils, herbs, salts — how nature heals at the cellular level.' },
                { icon: '🧠', title: 'Mental Rewiring', desc: 'Dopamine detox, focus building, and spiritual discipline protocols.' },
                { icon: '🔥', title: 'Physical Alignment', desc: 'Movement, posture, and energy restoration through natural methods.' },
                { icon: '💧', title: 'Ocean Minerals', desc: 'Ancient salts and trace minerals your body was designed to use.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                  <div className="icon-circle icon-circle-dark" style={{ width: 44, height: 44, fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '3px', color: 'white' }}>{title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="section bg-sage-mesh" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}><p className="eyebrow">Natural Systems</p></div>
            <h2>Knowledge Rooted<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>in the Earth</em></h2>
          </div>

          <div className="grid-3" style={{ marginBottom: '2rem' }}>

            {/* Dopamine Reset */}
            <div className="product-card">
              <div className="product-card-img" style={{
                background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4060 100%)'
              }}>
                <div className="orb orb-blue" style={{ width: 200, height: 200, top: -40, right: -40 }} />
                <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))', zIndex: 1, position: 'relative' }}>🧠</span>
              </div>
              <div className="product-card-body">
                <span className="eyebrow" style={{ display: 'block', marginBottom: '0.6rem' }}>System 01 — Digital Guide</span>
                <h3 style={{ marginBottom: '0.7rem' }}>7-Day Dopamine Reset</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  A structured 7-day protocol to eliminate digital overload, restore your natural baseline, and rebuild real focus.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', fontWeight: 500 }}>£9.99</span>
                  <Link href="/dopamine-detox" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
                    Get Access →
                  </Link>
                </div>
              </div>
            </div>

            {/* Natural Oils */}
            <div className="product-card">
              <div className="product-card-img" style={{
                background: 'linear-gradient(135deg, #1a4a2e 0%, var(--sage) 100%)'
              }}>
                <div className="orb orb-gold" style={{ width: 180, height: 180, top: -30, right: -30 }} />
                <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))', zIndex: 1, position: 'relative' }}>🌿</span>
              </div>
              <div className="product-card-body">
                <span className="eyebrow" style={{ display: 'block', marginBottom: '0.6rem' }}>System 02 — Knowledge Guide</span>
                <h3 style={{ marginBottom: '0.7rem' }}>Natural Oils Bible</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  50+ natural oils — their healing properties, application methods, and the conditions they treat. Pure botanical knowledge.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', fontWeight: 500 }}>£7.99</span>
                  <Link href="/natural-oils" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
                    Get Access →
                  </Link>
                </div>
              </div>
            </div>

            {/* Natural Salts */}
            <div className="product-card">
              <div className="product-card-img" style={{
                background: 'linear-gradient(135deg, var(--ocean) 0%, #2d5a8a 60%, #1a3a6a 100%)'
              }}>
                <div className="orb orb-green" style={{ width: 200, height: 200, bottom: -40, left: -40 }} />
                <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))', zIndex: 1, position: 'relative' }}>💎</span>
              </div>
              <div className="product-card-body">
                <span className="eyebrow" style={{ display: 'block', marginBottom: '0.6rem' }}>System 03 — Knowledge Guide</span>
                <h3 style={{ marginBottom: '0.7rem' }}>Natural Salts & Minerals</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  Himalayan, Dead Sea, Epsom and beyond. How ancient minerals restore your body's balance from the inside out.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', fontWeight: 500 }}>£7.99</span>
                  <Link href="/natural-salts" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
                    Get Access →
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Coming soon row */}
          <div className="grid-4">
            {[
              { icon: '🌸', title: 'Herbal Protocols', desc: 'Ancient herbs for modern healing' },
              { icon: '💧', title: 'Water & Fasting', desc: 'The original detox, perfected' },
              { icon: '☀️', title: 'Light & Sleep', desc: 'Circadian rhythm restoration' },
              { icon: '🔥', title: 'Physical Fire', desc: 'Movement as medicine' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card card-ivory" style={{ textAlign: 'center', opacity: 0.72 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>{desc}</p>
                <span className="tag tag-gold" style={{ fontSize: '0.6rem' }}>Coming Soon</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue" style={{ width: 400, height: 400, bottom: -100, right: -100, opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}><p className="eyebrow">The Healvana Method</p></div>
            <h2>Three Steps to<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>True Wellness</em></h2>
          </div>
          <div className="grid-3">
            {[
              { num: '01', icon: '🧹', title: 'Eliminate the Noise', body: 'Remove what damages you — synthetic inputs, digital overload, processed stimulants. Create space for nature to work.' },
              { num: '02', icon: '🌱', title: 'Restore with Nature', body: 'Reintroduce the oils, salts, herbs, and practices that your body already understands at a cellular level.' },
              { num: '03', icon: '🏔️', title: 'Build the Foundation', body: 'Lock in the daily disciplines that compound silently — building health, clarity, and discipline that lasts a lifetime.' },
            ].map(({ num, icon, title, body }) => (
              <div key={num} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '5rem', color: 'var(--sage-light)',
                  lineHeight: 1, fontWeight: 400, position: 'absolute', top: '1rem', right: '1.5rem', userSelect: 'none', opacity: 0.6
                }}>{num}</div>
                <div style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>{icon}</div>
                <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED CTA ══ */}
      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
            borderRadius: 'var(--radius-xl)', padding: '4rem 3rem', textAlign: 'center',
            color: 'white', position: 'relative', overflow: 'hidden'
          }}>
            <div className="orb orb-gold" style={{ width: 350, height: 350, top: -100, right: -100 }} />
            <div className="orb orb-blue" style={{ width: 250, height: 250, bottom: -80, left: -80 }} />

            <span className="tag tag-dark" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Start Here</span>
            <h2 style={{ color: 'white', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
              Begin with the<br />
              <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Dopamine Reset</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
              Seven days. A structured plan to reclaim your focus, restore your natural dopamine baseline, and begin living without the noise.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', fontWeight: 400 }}>£9.99</span>
              <Link href="/dopamine-detox" className="btn btn-gold" style={{ padding: '15px 36px', fontSize: '0.95rem' }}>
                Get the Reset →
              </Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '1.2rem', position: 'relative', zIndex: 1 }}>
              🔒 Secure · Instant access · 30-day guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO QUOTE ══ */}
      <section className="section-sm" style={{ background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container-sm">
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.8vw, 2.1rem)',
            lineHeight: 1.6, color: 'var(--forest)', fontStyle: 'italic', fontWeight: 400,
            maxWidth: '700px', margin: '0 auto'
          }}>
            "The body knows how to heal itself. It has always known. We just stopped listening to nature — and started listening to noise."
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>Healvana</span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>
        </div>
      </section>

    </>
  )
}