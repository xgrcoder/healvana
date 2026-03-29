// ================================================================
// FILE LOCATION: C:\dev\healvana\app\thanks\page.tsx
// ================================================================

import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="bg-mesh" style={{
      minHeight: '85vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="orb orb-green" style={{ width: 500, height: 500, top: -150, left: -100 }} />
      <div className="orb orb-blue"  style={{ width: 400, height: 400, bottom: -100, right: -80 }} />

      <div className="container-xs" style={{
        textAlign: 'center',
        padding: 'clamp(3rem, 8vw, 6rem) 2rem',
        position: 'relative', zIndex: 1, width: '100%',
      }}>

        {/* Success tick */}
        <div style={{
          width: 90, height: 90, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--sage) 0%, var(--ocean) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem', fontSize: '2.4rem', color: 'white',
          boxShadow: '0 12px 48px rgba(61,158,98,0.35)',
        }}>✓</div>

        <span className="tag tag-sage" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Payment Confirmed</span>

        <h1 style={{ marginBottom: '1rem' }}>You&apos;re In.</h1>

        <p className="lead" style={{ maxWidth: '440px', margin: '0 auto 2.5rem' }}>
          Check your inbox — your guide is on its way. Your reset begins now. Not tomorrow. Not next week. <em>Now.</em>
        </p>

        {/* Next steps */}
        <div className="card" style={{ maxWidth: '460px', margin: '0 auto 2rem', textAlign: 'left', background: 'white' }}>
          <div className="gold-rule" style={{ marginBottom: '1rem' }}>
            <p className="eyebrow">What Happens Next</p>
          </div>
          <ul className="check-list">
            {[
              'Check your inbox for your download link',
              'Download your PDF guide (works on any device)',
              'Read the introduction tonight',
              'Apply what you learn starting tomorrow',
            ].map(item => (
              <li key={item}><span className="check-icon">✓</span>{item}</li>
            ))}
          </ul>
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
          No email? Check your spam or contact{' '}
          <a href="mailto:support@healvana.com" style={{ color: 'var(--sage)', fontWeight: 600 }}>
            support@healvana.com
          </a>
        </p>

        {/* Upsell */}
        <div style={{
          background: 'linear-gradient(135deg, var(--forest), var(--ocean))',
          borderRadius: 'var(--radius-xl)', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'white', marginBottom: '2rem', position: 'relative', overflow: 'hidden',
        }}>
          <div className="orb orb-gold" style={{ width: 200, height: 200, top: -60, right: -60 }} />
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
            Complete your collection
          </p>
          <h3 style={{ color: 'white', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>Explore More Guides</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem', marginBottom: '1.2rem', position: 'relative', zIndex: 1 }}>
            Pair your guide with the Natural Oils or Salts &amp; Minerals Bible for total body restoration.
          </p>
          <Link href="/shop" className="btn btn-gold" style={{ position: 'relative', zIndex: 1 }}>
            Browse All Products →
          </Link>
        </div>

        <Link href="/" className="btn btn-outline">← Back to Healvana</Link>

      </div>
    </main>
  )
}