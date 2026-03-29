import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main className="bg-mesh" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-green" style={{ width: 500, height: 500, top: -150, left: -100 }} />
      <div className="orb orb-blue"  style={{ width: 400, height: 400, bottom: -100, right: -80 }} />

      <div className="container-xs" style={{ textAlign: 'center', padding: 'clamp(3rem, 8vw, 6rem) 2rem', position: 'relative', zIndex: 1 }}>

        {/* Animated tick */}
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--sage) 0%, var(--ocean) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2.2rem', color: 'white',
          boxShadow: '0 12px 48px rgba(61,158,98,0.35)'
        }}>✓</div>

        <span className="tag tag-sage" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Order Confirmed</span>

        <h1 style={{ marginBottom: '1rem' }}>You're In.</h1>

        <p className="lead" style={{ maxWidth: '420px', margin: '0 auto 2.5rem' }}>
          Check your inbox — your guide is on its way. Your reset begins now. Not tomorrow. Not next week. <em>Now.</em>
        </p>

        <div className="card" style={{ maxWidth: '440px', margin: '0 auto 2.5rem', textAlign: 'left', background: 'white' }}>
          <div className="gold-rule" style={{ marginBottom: '1rem' }}>
            <p className="eyebrow">What Happens Next</p>
          </div>
          <ul className="check-list">
            {[
              'Check your inbox for your access link',
              'Read the Day 1 brief tonight',
              'Remove one digital distraction today',
              'Start your full reset tomorrow morning',
            ].map(item => (
              <li key={item}><span className="check-icon">✓</span>{item}</li>
            ))}
          </ul>
        </div>

        <Link href="/" className="btn btn-outline">
          ← Back to Healvana
        </Link>

      </div>
    </main>
  )
}