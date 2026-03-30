// ================================================================
// FILE LOCATION: C:\dev\healvana\app\problems\page.tsx
// ================================================================

import Link from 'next/link'
import BuyButton from '../components/BuyButton'

const PROBLEMS = [
  {
    id: 'hair-loss',
    icon: '💇',
    title: 'Hair Loss & Thinning',
    category: 'Physical',
    description: 'Millions experience progressive hair thinning and loss — often caused by DHT sensitivity, poor scalp circulation, and nutritional deficiencies that conventional products completely ignore.',
    teaser: 'There are 3 specific natural oils used for centuries to stimulate hair follicles, block DHT naturally, and restore scalp health from the root. The results are well documented — the methods are not widely known.',
    productId: 'natural-oils',
    productName: 'Natural Oils Bible',
    productPrice: '£27.99',
    productHref: '/natural-oils',
    stat: '45M+',
    statLabel: 'people affected in the UK',
    tags: ['Oils Guide'],
  },
  {
    id: 'physical-fatigue',
    icon: '😴',
    title: 'Chronic Fatigue & Low Energy',
    category: 'Energy',
    description: "Persistent exhaustion that doesn't go away with sleep. Most people reach for caffeine — which depletes the very minerals your cells need to produce energy, making the root problem worse.",
    teaser: "The solution isn't more stimulants. It's replenishing the exact minerals your mitochondria need to generate ATP. Ancient cultures knew this — and the minerals still exist today.",
    productId: 'natural-salts',
    productName: 'Natural Salts & Minerals Bible',
    productPrice: '£27.99',
    productHref: '/natural-salts',
    stat: '1 in 5',
    statLabel: 'adults experience chronic fatigue',
    tags: ['Salts Guide'],
  },
  {
    id: 'brain-fog',
    icon: '🧠',
    title: 'Brain Fog & Poor Focus',
    category: 'Mental',
    description: "The inability to think clearly, concentrate, or feel mentally sharp. In the age of smartphones and infinite scroll, your brain's dopamine system has been hijacked — making deep focus feel almost impossible.",
    teaser: 'This is not a willpower problem. Your dopamine receptors have been overstimulated to the point of desensitisation. The fix is a structured neurological reset — not another productivity app.',
    productId: 'dopamine-reset',
    productName: '7-Day Dopamine Reset',
    productPrice: '£29.99',
    productHref: '/dopamine-detox',
    stat: '77%',
    statLabel: 'of adults report regular brain fog',
    tags: ['Mind Reset'],
  },
  {
    id: 'poor-sleep',
    icon: '🌙',
    title: 'Poor Sleep & Insomnia',
    category: 'Recovery',
    description: "Lying awake, racing thoughts, waking at 3am — modern sleep issues are almost always rooted in magnesium deficiency, cortisol dysregulation, and overstimulated nervous systems.",
    teaser: 'There is a specific pre-sleep mineral protocol used for thousands of years to calm the nervous system and induce deep, restorative sleep — without medication or dependency.',
    productId: 'natural-salts',
    productName: 'Natural Salts & Minerals Bible',
    productPrice: '£27.99',
    productHref: '/natural-salts',
    stat: '16M',
    statLabel: 'UK adults have sleep problems',
    tags: ['Salts Guide'],
  },
  {
    id: 'skin-issues',
    icon: '🌸',
    title: 'Skin Problems & Ageing',
    category: 'Skin',
    description: 'Acne, eczema, premature ageing, dull skin — most people spend hundreds on synthetic creams that treat symptoms. The cause is almost always inflammation, gut imbalance, and the absence of specific fatty acids.',
    teaser: "Nature produced the exact compounds your skin needs to heal and regenerate. The same oils used by ancient Egyptians and South American healers remain the most effective solutions known to dermatology.",
    productId: 'natural-oils',
    productName: 'Natural Oils Bible',
    productPrice: '£27.99',
    productHref: '/natural-oils',
    stat: '60%',
    statLabel: 'of people have a chronic skin condition',
    tags: ['Oils Guide'],
  },
  {
    id: 'stress-anxiety',
    icon: '⚡',
    title: 'Stress & Anxiety',
    category: 'Mental',
    description: "Constant low-grade stress, racing thoughts, physical tension — modern anxiety is largely a nervous system that has never been taught to switch off. Medication suppresses symptoms. Nature addresses the root.",
    teaser: 'Three specific botanical oils directly interact with GABA receptors — the same receptors that anti-anxiety medications target — without dependency, withdrawal, or side effects.',
    productId: 'natural-oils',
    productName: 'Natural Oils Bible',
    productPrice: '£27.99',
    productHref: '/natural-oils',
    stat: '8M',
    statLabel: 'people in the UK have anxiety disorders',
    tags: ['Oils Guide'],
  },
  {
    id: 'digestive-issues',
    icon: '🌿',
    title: 'Digestive Problems & Bloating',
    category: 'Gut Health',
    description: "IBS, bloating, constipation, acid reflux — the gut microbiome has been decimated by processed food, antibiotics, and stress. Most people have never experienced what a truly healthy gut feels like.",
    teaser: 'Specific natural oils have clinically demonstrated anti-spasmodic and antimicrobial properties that can fundamentally reset your digestive system — within weeks, not months.',
    productId: 'natural-oils',
    productName: 'Natural Oils Bible',
    productPrice: '£27.99',
    productHref: '/natural-oils',
    stat: '1 in 3',
    statLabel: 'adults suffer from digestive issues',
    tags: ['Oils Guide'],
  },
  {
    id: 'joint-pain',
    icon: '🦴',
    title: 'Joint Pain & Inflammation',
    category: 'Physical',
    description: 'Chronic joint pain, stiffness, and inflammation are increasingly common — even in young people. The root is almost always systemic inflammation driven by mineral deficiency and poor cellular hydration.',
    teaser: 'Ancient healers used specific mineral-rich salt soaks to draw inflammation out of joints transdermally. Modern research has confirmed exactly why this works — and which minerals matter most.',
    productId: 'natural-salts',
    productName: 'Natural Salts & Minerals Bible',
    productPrice: '£27.99',
    productHref: '/natural-salts',
    stat: '10M',
    statLabel: 'UK adults live with arthritis',
    tags: ['Salts Guide'],
  },
  {
    id: 'phone-addiction',
    icon: '📱',
    title: 'Phone Addiction & Digital Overload',
    category: 'Mental',
    description: "The average person checks their phone 96 times a day. This isn't a habit — it's a neurological dependency. Your brain's reward system has been systematically rewired by apps designed to create compulsion.",
    teaser: "This can be reversed. The brain is neuroplastic — but the reset requires a structured, science-backed protocol. Willpower alone doesn't work against dopamine dysregulation.",
    productId: 'dopamine-reset',
    productName: '7-Day Dopamine Reset',
    productPrice: '£29.99',
    productHref: '/dopamine-detox',
    stat: '96x',
    statLabel: 'average phone checks per day',
    tags: ['Mind Reset'],
  },
]

const tagColors: Record<string, { bg: string; color: string }> = {
  'Oils Guide':  { bg: 'var(--sage-light)',  color: 'var(--forest)' },
  'Salts Guide': { bg: 'var(--ocean-light)', color: 'var(--ocean)'  },
  'Mind Reset':  { bg: '#e8e0f8',            color: '#5a4a8a'       },
}

export default function ProblemsPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="orb orb-blue"  style={{ width: 550, height: 550, top: -180, left: -120 }} />
        <div className="orb orb-green" style={{ width: 400, height: 400, bottom: -100, right: -100 }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(26,74,46,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim-up" style={{ marginBottom: '1.5rem' }}>
            <span className="tag tag-sage">Nature Has the Answer</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.4rem' }}>
            Your Problems.<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Nature&apos;s Solutions.</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '560px', margin: '0 auto 2rem' }}>
            Every common health problem has a natural root cause — and a natural solution. The answer existed long before pharmaceutical companies did. We have documented them all.
          </p>
          <div className="anim-up d3" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168,224,188,0.5)',
            borderRadius: 'var(--radius-pill)', padding: '10px 22px',
            fontSize: '0.84rem', color: 'var(--forest)', fontWeight: 600,
          }}>
            🔒 Full protocols unlocked when you purchase the relevant guide
          </div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section style={{
        background: 'linear-gradient(90deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
        padding: 'clamp(1.2rem, 3vw, 2rem) 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '20px 20px', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 4rem)', flexWrap: 'wrap' }}>
            {[
              { v: '9',    l: 'Problems addressed'  },
              { v: '100%', l: 'Natural solutions'    },
              { v: '4',    l: 'Guides covering all'  },
              { v: '£0',   l: 'In toxic chemicals'   },
            ].map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'white', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS LIST ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, right: -80, opacity: 0.35 }} />
        <div className="orb orb-blue"  style={{ width: 350, height: 350, bottom: -80, left: -80, opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PROBLEMS.map(({ id, icon, title, category, description, teaser, productId, productName, productPrice, productHref, stat, statLabel, tags }) => (
              <div key={id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                }}>

                  {/* LEFT — Problem */}
                  <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRight: '1px solid rgba(168,224,188,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 'var(--radius-md)', flexShrink: 0,
                        background: 'var(--sage-soft)', border: '1px solid rgba(168,224,188,0.5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
                      }}>{icon}</div>
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                          {tags.map(tag => (
                            <span key={tag} style={{
                              display: 'inline-flex', padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                              fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                              background: tagColors[tag]?.bg || 'var(--sage-soft)',
                              color: tagColors[tag]?.color || 'var(--forest)',
                            }}>{tag}</span>
                          ))}
                          <span style={{ fontSize: '0.62rem', color: 'var(--subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center' }}>{category}</span>
                        </div>
                        <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: 0 }}>{title}</h3>
                      </div>
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{description}</p>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                      background: 'var(--ivory)', border: '1px solid var(--border-warm)',
                      borderRadius: 'var(--radius-md)', padding: '0.75rem 1.25rem',
                    }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--forest)', lineHeight: 1 }}>{stat}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.4 }}>{statLabel}</span>
                    </div>
                  </div>

                  {/* RIGHT — Teased Solution */}
                  <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'var(--sage-soft)', position: 'relative', overflow: 'hidden' }}>
                    <div className="orb orb-green" style={{ width: 200, height: 200, top: -60, right: -60, opacity: 0.5 }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div className="gold-rule" style={{ marginBottom: '1rem' }}>
                        <p className="eyebrow">Nature&apos;s Answer</p>
                      </div>
                      <p style={{ color: 'var(--forest)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 500 }}>
                        {teaser}
                      </p>
                      {/* Locked box */}
                      <div style={{
                        background: 'white', border: '1px solid rgba(168,224,188,0.5)',
                        borderRadius: 'var(--radius-md)', padding: '1.2rem',
                        marginBottom: '1.5rem', position: 'relative', overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute', inset: 0,
                          backdropFilter: 'blur(6px)',
                          background: 'rgba(255,255,255,0.65)',
                          borderRadius: 'var(--radius-md)',
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          gap: '0.4rem', zIndex: 2,
                        }}>
                          <span style={{ fontSize: '1.4rem' }}>🔒</span>
                          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--forest)', textAlign: 'center' }}>
                            Full protocol inside the guide
                          </span>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', filter: 'blur(4px)', userSelect: 'none', lineHeight: 1.5 }}>
                          The specific protocol involves three key ingredients applied in a precise sequence with specific quantities and timing per body weight and condition severity...
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <BuyButton
                          productId={productId}
                          label={`Unlock — ${productPrice} →`}
                          className="btn btn-primary"
                          style={{ padding: '11px 22px', fontSize: '0.85rem' }}
                        />
                        <Link href={productHref} style={{ fontSize: '0.78rem', color: 'var(--sage)', fontWeight: 600 }}>
                          About {productName} →
                        </Link>
                      </div>
                      <p style={{ color: 'var(--subtle)', fontSize: '0.72rem', marginTop: '0.6rem' }}>
                        🔒 Instant download · Worldwide access
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLE CTA — updated copy ── */}
      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--border-warm)' }}>
        <div className="container-xs">
          <div style={{
            background: 'linear-gradient(145deg, var(--forest) 0%, var(--forest-mid) 50%, var(--ocean) 100%)',
            borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold"  style={{ width: 300, height: 300, top: -80,  right: -80 }} />
            <div className="orb orb-green" style={{ width: 220, height: 220, bottom: -60, left: -60 }} />

            <span className="tag tag-dark" style={{ marginBottom: '1.2rem', display: 'inline-flex', position: 'relative', zIndex: 1 }}>
              Complete Access
            </span>

            <h2 style={{ color: 'white', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
              Unlock Every Protocol.<br />
              <em style={{ color: 'var(--gold-light)' }}>One Simple Price.</em>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '460px', margin: '0 auto 1.5rem', lineHeight: 1.85, position: 'relative', zIndex: 1, fontSize: '0.92rem' }}>
              Get the complete Healvana library — all four guides, every protocol, every solution across every problem on this page. Instant access. Everything in one place.
            </p>

            {/* What's included */}
            <div style={{
              display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap',
              marginBottom: '2rem', position: 'relative', zIndex: 1,
            }}>
              {['🧠 Mind Reset', '🌿 Natural Oils', '💎 Salts & Minerals', '🍇 Sacred Fruits'].map(item => (
                <span key={item} className="tag tag-dark" style={{ fontSize: '0.65rem' }}>{item}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <div>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', textDecoration: 'line-through' }}>£113.96</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'white', lineHeight: 1 }}>£59.99</span>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginTop: 2 }}>Save over £50</span>
              </div>
              <BuyButton
                productId="bundle-all"
                label="Get Complete Access →"
                className="btn btn-gold"
                style={{ padding: '15px 32px', fontSize: '0.95rem' }}
              />
            </div>

            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.74rem', marginTop: '1rem', position: 'relative', zIndex: 1 }}>
              🔒 Secure checkout · Instant download · Worldwide access
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}