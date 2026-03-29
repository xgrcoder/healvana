// ================================================================
// FILE LOCATION: C:\dev\healvana\app\blog\page.tsx
// ================================================================

import Link from 'next/link'

const ARTICLES = [
  {
    slug: '#',
    category: 'Mind Reset',
    categoryColor: { bg: '#e8e0f8', color: '#5a4a8a' },
    emoji: '🧠',
    title: 'Why Your Brain is Addicted to Your Phone (And How to Fix It)',
    excerpt: 'The average person checks their phone 96 times a day. This is not a habit — it is a neurological dependency engineered by some of the world\'s most sophisticated behavioural scientists. Here\'s the science behind it, and the reset that actually works.',
    readTime: '8 min read',
    date: 'March 2025',
    featured: true,
  },
  {
    slug: '#',
    category: 'Natural Oils',
    categoryColor: { bg: 'var(--sage-light)', color: 'var(--forest)' },
    emoji: '🌿',
    title: 'The 5 Most Powerful Oils You\'ve Never Heard Of',
    excerpt: 'Everyone knows coconut oil. But frankincense, black seed, and sea buckthorn oil contain compounds that pharmaceutical companies have been quietly studying for decades. What they found is remarkable.',
    readTime: '6 min read',
    date: 'February 2025',
    featured: false,
  },
  {
    slug: '#',
    category: 'Minerals',
    categoryColor: { bg: 'var(--ocean-light)', color: 'var(--ocean)' },
    emoji: '💎',
    title: '80% of People Are Magnesium Deficient — Here\'s Why That Matters',
    excerpt: 'Magnesium is involved in over 300 biochemical reactions in the body. Sleep, energy, muscle function, heart rhythm — all depend on it. And most people are critically deficient. The solution is simpler than you think.',
    readTime: '7 min read',
    date: 'February 2025',
    featured: false,
  },
  {
    slug: '#',
    category: 'Mind Reset',
    categoryColor: { bg: '#e8e0f8', color: '#5a4a8a' },
    emoji: '⚡',
    title: 'Dopamine Fasting: The Science Behind the Reset',
    excerpt: 'Dopamine fasting is not about feeling nothing. It is about restoring the sensitivity of your reward system — so that real life feels rewarding again. We break down the neuroscience and the exact protocol that works.',
    readTime: '9 min read',
    date: 'January 2025',
    featured: false,
  },
  {
    slug: '#',
    category: 'Natural Oils',
    categoryColor: { bg: 'var(--sage-light)', color: 'var(--forest)' },
    emoji: '🌹',
    title: 'Rosehip Oil: The Anti-Ageing Secret Ancient Cultures Already Knew',
    excerpt: 'Used for centuries across South America and ancient Egypt, rosehip oil contains the highest naturally occurring concentration of trans-retinoic acid outside pharmaceutical retinol. Your skin was designed for this.',
    readTime: '5 min read',
    date: 'January 2025',
    featured: false,
  },
  {
    slug: '#',
    category: 'Minerals',
    categoryColor: { bg: 'var(--ocean-light)', color: 'var(--ocean)' },
    emoji: '🌊',
    title: 'Why Dead Sea Salt Has Healed People for 3,000 Years',
    excerpt: 'The Dead Sea has the highest mineral concentration of any body of water on earth. Kings, emperors, and healers have sent the sick here for millennia. Modern dermatology now knows exactly why it works.',
    readTime: '6 min read',
    date: 'December 2024',
    featured: false,
  },
]

const featured = ARTICLES.find(a => a.featured)
const rest = ARTICLES.filter(a => !a.featured)

export default function BlogPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="orb orb-green" style={{ width: 450, height: 450, top: -150, left: -100 }} />
        <div className="orb orb-blue"  style={{ width: 350, height: 350, bottom: -80, right: -80 }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim-up" style={{ marginBottom: '1.2rem' }}>
            <span className="tag tag-gold">The Healvana Journal</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.2rem' }}>
            Knowledge is<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>The Medicine</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Research-backed articles on natural wellness, ancient healing, and the science behind nature&apos;s most powerful remedies.
          </p>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      {featured && (
        <section style={{ background: 'var(--ivory)', borderBottom: '1px solid var(--border-warm)', padding: 'clamp(2rem, 4vw, 3rem) 0' }}>
          <div className="container">
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              }}>
                {/* Visual */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 50%, #1a4a6a 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minHeight: 260, position: 'relative', overflow: 'hidden',
                }}>
                  <div className="orb orb-blue" style={{ width: 300, height: 300, top: -60, right: -60 }} />
                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: 'clamp(4rem, 10vw, 6rem)', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))' }}>{featured.emoji}</div>
                    <span className="tag tag-dark" style={{ marginTop: '1rem', display: 'inline-flex' }}>Featured Article</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                  <span style={{
                    display: 'inline-flex', padding: '4px 12px', borderRadius: 'var(--radius-pill)',
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: featured.categoryColor.bg, color: featured.categoryColor.color,
                    marginBottom: '1rem',
                  }}>{featured.category}</span>
                  <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '1rem', lineHeight: 1.3 }}>{featured.title}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href={featured.slug} className="btn btn-primary" style={{ padding: '11px 24px', fontSize: '0.85rem' }}>
                      Read Article →
                    </Link>
                    <span style={{ fontSize: '0.78rem', color: 'var(--subtle)' }}>{featured.readTime} · {featured.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLES GRID ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 350, height: 350, top: -80, right: -80, opacity: 0.35 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="gold-rule"><p className="eyebrow">All Articles</p></div>
            <h2>The Journal</h2>
          </div>
          <div className="grid-3">
            {rest.map(({ slug, category, categoryColor, emoji, title, excerpt, readTime, date }) => (
              <Link key={title} href={slug} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                  {/* Emoji header */}
                  <div style={{
                    height: 120, borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--sage-soft), var(--ocean-soft))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem', marginBottom: '1.2rem',
                  }}>{emoji}</div>

                  <span style={{
                    display: 'inline-flex', padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: categoryColor.bg, color: categoryColor.color, marginBottom: '0.75rem',
                  }}>{category}</span>

                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                    {excerpt.length > 120 ? excerpt.slice(0, 120) + '...' : excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.76rem', color: 'var(--subtle)' }}>{readTime}</span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--subtle)' }}>{date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section className="section-sm bg-sage-mesh" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-xs" style={{ textAlign: 'center' }}>
          <div className="gold-rule" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <p className="eyebrow">Take Action</p>
          </div>
          <h2 style={{ marginBottom: '1rem' }}>
            Ready to Apply<br />
            <em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>What You&apos;ve Learned?</em>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.92rem' }}>
            Our guides give you the complete protocols — everything needed to act on the knowledge.
          </p>
          <Link href="/shop" className="btn btn-primary" style={{ padding: '14px 36px' }}>
            View All Guides →
          </Link>
        </div>
      </section>

    </main>
  )
}