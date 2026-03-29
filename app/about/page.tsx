// ================================================================
// FILE LOCATION: C:\dev\healvana\app\about\page.tsx
// ================================================================

import Link from 'next/link'

const VALUES = [
  { icon: '🌿', title: 'Nature First',        desc: 'Every solution we document comes from the earth. We refuse to recommend synthetic substitutes when nature already has the answer.' },
  { icon: '🔬', title: 'Science Backed',       desc: 'Traditional wisdom meets modern research. We explain the mechanism behind every protocol — not just the result.' },
  { icon: '💡', title: 'Education Over Sales', desc: 'We want you to understand why something works, not just follow instructions blindly. Knowledge is the product.' },
  { icon: '🎯', title: 'Simple & Actionable',  desc: 'No fluff. No filler. Every guide is structured so you can start applying it the same day you receive it.' },
  { icon: '🔒', title: 'No Toxic Ingredients', desc: 'We will never recommend anything that contains synthetic chemicals, harmful additives, or anything your body was not designed to process.' },
  { icon: '♾️', title: 'Timeless Knowledge',   desc: 'The protocols in our guides are not trends. They are ancient practices that have worked for thousands of years — and always will.' },
]

const TIMELINE = [
  { year: '2024', title: 'The Problem Was Clear', desc: 'After years of watching people spend thousands on synthetic supplements that barely worked, we knew there had to be a better way. Nature had been solving these problems for millennia.' },
  { year: '2024', title: 'Research Began',         desc: 'We spent months cross-referencing ancient healing traditions — Ayurveda, Egyptian medicine, Greek herbalism, Traditional Chinese Medicine — with modern peer-reviewed research.' },
  { year: '2025', title: 'Healvana Launched',      desc: 'Three flagship digital guides — Dopamine Reset, Natural Oils, and Natural Salts — built on the principle that the best solutions are already in nature.' },
  { year: '2025', title: 'Growing the Library',    desc: 'We continue to expand the knowledge base. Herbs, fasting protocols, light therapy, movement practices — the full spectrum of natural wellness.' },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="orb orb-green" style={{ width: 600, height: 600, top: -200, left: -150 }} />
        <div className="orb orb-blue"  style={{ width: 400, height: 400, bottom: -100, right: -100 }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center',
          }}>
            <div>
              <div className="anim-up" style={{ marginBottom: '1.5rem' }}>
                <span className="tag tag-sage">Our Story</span>
              </div>
              <h1 className="anim-up d1" style={{ marginBottom: '1.5rem' }}>
                We Chose Nature<br />
                <span className="gradient-text" style={{ fontStyle: 'italic' }}>Over Everything.</span>
              </h1>
              <p className="lead anim-up d2" style={{ marginBottom: '1.5rem' }}>
                Healvana was built on a simple belief — the human body already knows how to heal itself. It just needs the right inputs. Inputs that nature has always provided.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem', marginBottom: '2rem' }} className="anim-up d3">
                We created Healvana after watching people spend years and thousands of pounds on pharmaceutical solutions that treated symptoms while ignoring causes. The answers were always in nature — they just needed to be organised, explained, and made accessible.
              </p>
              <div className="anim-up d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/shop" className="btn btn-primary">View Our Guides →</Link>
                <Link href="/problems" className="btn btn-outline">See the Problems We Solve</Link>
              </div>
            </div>

            {/* Quote panel */}
            <div style={{
              background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 60%, #1a4a6a 100%)',
              borderRadius: 'var(--radius-xl)', padding: 'clamp(2.5rem, 5vw, 4rem)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div className="orb orb-gold" style={{ width: 300, height: 300, top: -80, right: -80 }} />
              <div className="orb orb-blue" style={{ width: 200, height: 200, bottom: -60, left: -60 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: '1rem' }}>&ldquo;</div>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  color: 'white', lineHeight: 1.65, fontStyle: 'italic', fontWeight: 400,
                  marginBottom: '2rem',
                }}>
                  The body knows how to heal itself. It has always known. We just stopped listening to nature — and started listening to noise.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🌿</div>
                  <div>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem' }}>Healvana</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.76rem' }}>Founded 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-sm" style={{ background: 'white', borderBottom: '1px solid rgba(168,224,188,0.3)' }}>
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <div className="gold-rule" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <p className="eyebrow">Our Mission</p>
          </div>
          <h2 style={{ marginBottom: '1.5rem' }}>
            Make Natural Healing<br />
            <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Accessible to Everyone</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.85, maxWidth: '620px', margin: '0 auto' }}>
            The knowledge of natural healing has always existed — in ancient texts, traditional medicine, and generational wisdom. Healvana exists to organise, verify, and deliver that knowledge in a format that is simple enough to act on today.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section bg-sage-mesh" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, right: -80, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">What We Stand For</p>
            </div>
            <h2>Our Values</h2>
          </div>
          <div className="grid-3">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ background: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue" style={{ width: 350, height: 350, bottom: -80, right: -80, opacity: 0.4 }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-rule" style={{ justifyContent: 'center' }}>
              <p className="eyebrow">Our Journey</p>
            </div>
            <h2>How Healvana<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Was Built</em></h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 'clamp(16px, 4vw, 24px)', top: 0, bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--sage-light), var(--ocean-light))',
              borderRadius: 2,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: 'clamp(3rem, 8vw, 5rem)' }}>
              {TIMELINE.map(({ year, title, desc }) => (
                <div key={title} style={{ position: 'relative' }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: 'clamp(-2.6rem, -6.5vw, -3.6rem)',
                    top: '0.2rem',
                    width: 14, height: 14, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--sage), var(--ocean))',
                    border: '3px solid white',
                    boxShadow: 'var(--shadow-sm)',
                  }} />
                  <span className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '0.4rem', display: 'block' }}>{year}</span>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)' }}>
        <div className="container-xs" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Ready to start?</p>
          <h2 style={{ marginBottom: '1rem' }}>
            Join Those Who<br />
            <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Choose Nature</em>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.92rem' }}>
            Three digital guides. Instant access. Start tonight.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: '14px 32px' }}>View All Products →</Link>
            <Link href="/problems" className="btn btn-outline" style={{ padding: '14px 24px' }}>See the Problems We Solve</Link>
          </div>
        </div>
      </section>

    </main>
  )
}