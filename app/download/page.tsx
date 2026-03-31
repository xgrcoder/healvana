// ================================================================
// FILE LOCATION: C:\dev\healvana\app\download\page.tsx
// ================================================================

import Link from 'next/link'

const PRODUCTS: Record<string, {
  name: string
  emoji: string
  description: string
  filename: string
  includes: string[]
}> = {
  'dopamine-reset': {
    name: '7-Day Dopamine Reset Protocol',
    emoji: '🧠',
    description: 'Your complete protocol for restoring dopamine balance and rebuilding deep focus.',
    filename: 'healvana-dopamine-reset.pdf',
    includes: ['7-day daily schedule', 'Focus rebuilding system', 'Digital detox blueprint', 'Natural support protocols', 'Habit tracking framework'],
  },
  'natural-oils': {
    name: 'Natural Oils Bible',
    emoji: '🌿',
    description: '50+ natural oils with full healing properties, application protocols, and dosage guides.',
    filename: 'healvana-natural-oils-bible.pdf',
    includes: ['50+ oils fully documented', 'Condition index', 'Dilution & safety guide', 'Blending protocols', 'Application methods per oil'],
  },
  'natural-salts': {
    name: 'Natural Salts & Minerals Bible',
    emoji: '💎',
    description: 'Every salt and mineral your body needs — bath rituals, dietary integration, and deficiency protocols.',
    filename: 'healvana-natural-salts.pdf',
    includes: ['20+ salts & minerals', 'Bath ritual protocols', 'Dietary switch guide', 'Mineral deficiency diagnosis', 'Sourcing & quality guide'],
  },
  'natural-fruits': {
    name: 'Sacred Fruits & Botanicals Bible',
    emoji: '🍇',
    description: "Nature's most powerful healing fruits — ancient preparation methods and modern protocols.",
    filename: 'healvana-sacred-fruits.pdf',
    includes: ['20+ sacred botanicals', 'Ancient preparation methods', 'Bioavailability guide', 'Sourcing protocols', 'Synergistic pairing guide'],
  },
}

const BUNDLE_PRODUCTS = ['dopamine-reset', 'natural-oils', 'natural-salts', 'natural-fruits']

export default function DownloadPage({
  searchParams,
}: {
  searchParams: { product?: string }
}) {
  const productId = searchParams?.product || ''
  const isBundle  = productId === 'bundle-all'
  const product   = !isBundle ? PRODUCTS[productId] : null
  const products  = isBundle ? BUNDLE_PRODUCTS.map(id => PRODUCTS[id]).filter(Boolean) : null

  // Invalid product
  if (!product && !isBundle) {
    return (
      <main className="bg-mesh" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container-xs" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚠️</div>
          <h1 style={{ marginBottom: '1rem' }}>Invalid Download Link</h1>
          <p className="lead" style={{ marginBottom: '2rem', maxWidth: 400, margin: '0 auto 2rem' }}>
            This download link is not valid. Check your email for the correct link, or contact us.
          </p>
          <a href="mailto:support@healvana.com" className="btn btn-primary">
            Contact Support →
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-mesh" style={{
      minHeight: '85vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="orb orb-green" style={{ width: 500, height: 500, top: -150, left: -100 }} />
      <div className="orb orb-blue"  style={{ width: 400, height: 400, bottom: -100, right: -80 }} />

      <div className="container-xs" style={{
        textAlign: 'center',
        padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
        position: 'relative', zIndex: 1, width: '100%',
      }}>

        {/* Success tick */}
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--sage) 0%, var(--ocean) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 2rem', fontSize: '2.2rem', color: 'white',
          boxShadow: '0 12px 48px rgba(61,158,98,0.35)',
        }}>✓</div>

        <span className="tag tag-sage" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          Download Ready
        </span>

        <h1 style={{ marginBottom: '0.75rem' }}>
          {isBundle ? 'Your Complete Bundle' : product!.name}
        </h1>

        <p className="lead" style={{ maxWidth: 480, margin: '0 auto 2.5rem' }}>
          {isBundle
            ? 'All four Healvana guides are ready. Download each one below and save them to your device.'
            : product!.description}
        </p>

        {/* Single product download */}
        {product && !isBundle && (
          <div className="card" style={{ maxWidth: 480, margin: '0 auto 2rem', background: 'white', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-md)',
                background: 'var(--sage-soft)', border: '1px solid rgba(168,224,188,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem', flexShrink: 0,
              }}>{product.emoji}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--forest)', fontWeight: 500 }}>
                  {product.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--subtle)', marginTop: 2 }}>PDF Guide · Instant Download</div>
              </div>
            </div>

            <ul className="check-list" style={{ marginBottom: '1.75rem' }}>
              {product.includes.map(item => (
                <li key={item}><span className="check-icon">✓</span>{item}</li>
              ))}
            </ul>

            <a
              href={`/downloads/${product.filename}`}
              download
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', display: 'flex', padding: '15px', fontSize: '1rem' }}
            >
              ⬇ Download Your Guide
            </a>

            <p style={{ color: 'var(--subtle)', fontSize: '0.74rem', textAlign: 'center', marginTop: '0.75rem' }}>
              PDF file · Works on all devices · Save for offline use
            </p>
          </div>
        )}

        {/* Bundle downloads */}
        {isBundle && products && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 520, margin: '0 auto 2rem', textAlign: 'left' }}>
            {products.map((p) => p && (
              <div key={p.filename} className="card" style={{ background: 'white', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                      background: 'var(--sage-soft)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.4rem', flexShrink: 0,
                    }}>{p.emoji}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest)' }}>{p.name}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--subtle)' }}>PDF Guide</div>
                    </div>
                  </div>
                  <a
                    href={`/downloads/${p.filename}`}
                    download
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.84rem', flexShrink: 0 }}
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reminder */}
        <div style={{
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(168,224,188,0.5)',
          borderRadius: 'var(--radius-md)', padding: '1.2rem 1.5rem',
          maxWidth: 480, margin: '0 auto 2rem', textAlign: 'left',
        }}>
          <p style={{ fontSize: '0.84rem', color: 'var(--forest)', fontWeight: 700, marginBottom: '0.5rem' }}>
            📧 Check your email too
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
            We also sent your download link to your email. Save it — you can always re-download from there.
            Can&apos;t find it? Check spam or email{' '}
            <a href="mailto:support@healvana.com" style={{ color: 'var(--sage)', fontWeight: 600 }}>
              support@healvana.com
            </a>
          </p>
        </div>

        <Link href="/" className="btn btn-outline">← Back to Healvana</Link>

      </div>
    </main>
  )
}