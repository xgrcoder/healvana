import Link from 'next/link'

export default function ThanksPage() {
  return (
    <main style={{ background: 'var(--sage-soft)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container-xs" style={{ textAlign: 'center', padding: '6rem 2rem' }}>

        {/* Tick */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'var(--forest)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 2rem',
          fontSize: '2rem', color: 'white',
          boxShadow: '0 12px 40px rgba(27,58,39,0.3)'
        }}>✓</div>

        <span className="tag tag-sage" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Order Confirmed</span>

        <h1 style={{ marginBottom: '1rem' }}>
          You're In.
        </h1>

        <p className="lead" style={{ maxWidth: '420px', margin: '0 auto 2.5rem' }}>
          Check your inbox — your guide is on its way. Your reset begins now. Not tomorrow. Not next week. <em>Now.</em>
        </p>

        <div className="card" style={{ maxWidth: '440px', margin: '0 auto 2.5rem', textAlign: 'left' }}>
          <div className="gold-rule" style={{ marginBottom: '1rem' }}>
            <p className="eyebrow">What Happens Next</p>
          </div>
          <ul className="check-list">
            {['Check your inbox for your access link', 'Read the Day 1 brief tonight', 'Remove one digital distraction today', 'Start your full reset tomorrow morning'].map(item => (
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