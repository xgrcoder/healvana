// ================================================================
// FILE LOCATION: C:\dev\healvana\app\faq\page.tsx
// ================================================================

'use client'

import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    category: 'Purchasing & Delivery',
    questions: [
      { q: 'How do I receive my digital guide after purchase?',  a: "Immediately after your payment is confirmed you'll receive an email with your download link. The whole process takes less than 2 minutes. Check your spam folder if you don't see it within 5 minutes." },
      { q: 'What format are the guides in?',                     a: 'All guides are delivered as PDF files, which can be read on any device — phone, tablet, laptop, or desktop. No special app required. You can also print them if you prefer a physical copy.' },
      { q: 'Can I access my guides on multiple devices?',        a: "Yes. Once you download your PDF it's yours. You can save it to your phone, tablet, laptop — as many devices as you like. There's no DRM or restrictions." },
      { q: 'Is my payment secure?',                              a: "Absolutely. All payments are processed by Stripe, the world's leading payment platform. We never see or store your card details. The checkout is fully encrypted (SSL/TLS)." },
    ],
  },
  {
    category: 'Products & Content',
    questions: [
      { q: "What's in the 7-Day Dopamine Reset?",               a: "A full day-by-day protocol covering what to do, when to do it, and exactly how to reset your dopamine system. Includes a digital detox blueprint, focus rebuilding exercises, habit tracking framework, and natural supplement protocols. It's structured — no guesswork." },
      { q: 'How many oils are covered in the Natural Oils Bible?', a: 'Over 50 oils are fully documented. Each entry covers healing properties, how to use it (topical, internal, aromatherapy), what conditions it helps, dosage guidance, and safety notes. Plus blending protocols and a condition-based index.' },
      { q: 'Is the Natural Salts guide just about cooking?',     a: "Not at all. It covers therapeutic baths, topical applications, dietary replacement, lymph drainage protocols, and mineral deficiency diagnosis — as well as specific sourcing and quality guides for each salt type." },
      { q: 'Are the guides backed by science?',                  a: "Yes. Each guide combines traditional knowledge with modern research. We explain the mechanisms behind why each protocol works. That said, these guides are for educational purposes and are not a substitute for medical advice." },
    ],
  },
  {
    category: 'Refunds & Support',
    questions: [
      { q: 'What is your refund policy?',  a: 'We offer a 30-day money-back guarantee, no questions asked. If you are not satisfied for any reason within 30 days of purchase, contact us and we will refund you in full.' },
      { q: 'How do I contact support?',    a: 'Email us at support@healvana.com and we will get back to you within 24 hours. We are a small team and take every message seriously.' },
      { q: 'Can I buy a guide as a gift?', a: 'Yes — simply purchase normally and forward the download email to whoever you are gifting it to. All our guides make great gifts for anyone interested in natural health.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: '1px solid rgba(168,224,188,0.4)',
      borderRadius: 'var(--radius-md)',
      background: 'white',
      overflow: 'hidden',
      boxShadow: open ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'box-shadow 0.2s',
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', textAlign: 'left',
          padding: '1.3rem 1.5rem',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
          fontFamily: 'var(--font-body)', fontSize: '0.95rem',
          fontWeight: 700, color: 'var(--forest)', lineHeight: 1.4,
        }}
      >
        <span>{q}</span>
        <span style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
          background: open ? 'var(--sage)' : 'var(--sage-soft)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.1rem', color: open ? 'white' : 'var(--sage)',
          transition: 'all 0.2s', transform: open ? 'rotate(45deg)' : 'none',
          lineHeight: 1,
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 1.5rem 1.3rem', color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-mesh" style={{
        padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(2.5rem, 5vw, 4rem)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="orb orb-green" style={{ width: 450, height: 450, top: -150, right: -100 }} />
        <div className="orb orb-gold"  style={{ width: 300, height: 300, bottom: -80, left: -80 }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          <div className="anim-up" style={{ marginBottom: '1.2rem' }}>
            <span className="tag tag-sage">Support</span>
          </div>
          <h1 className="anim-up d1" style={{ marginBottom: '1.2rem' }}>
            Frequently Asked<br />
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>Questions</span>
          </h1>
          <p className="lead anim-up d2" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Everything you need to know before you buy. Can&apos;t find your answer? Email us at support@healvana.com.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue" style={{ width: 350, height: 350, bottom: -80, right: -80, opacity: 0.4 }} />
        <div className="container-sm" style={{ position: 'relative', zIndex: 1 }}>
          {FAQS.map(({ category, questions }) => (
            <div key={category} style={{ marginBottom: '3.5rem' }}>
              <div className="gold-rule" style={{ marginBottom: '1.5rem' }}>
                <p className="eyebrow">{category}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {questions.map(({ q, a }) => (
                  <FAQItem key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div style={{
            background: 'linear-gradient(135deg, var(--forest), var(--ocean))',
            borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 5vw, 3rem)',
            textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb orb-gold" style={{ width: 250, height: 250, top: -60, right: -60 }} />
            <h3 style={{ color: 'white', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>Still have a question?</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
              We respond to every email within 24 hours.
            </p>
            <a href="mailto:support@healvana.com" className="btn btn-gold" style={{ position: 'relative', zIndex: 1 }}>
              Email Us →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm bg-sage-mesh" style={{ borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container-xs">
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Ready to start?</p>
          <h2 style={{ marginBottom: '1.5rem' }}>Browse the<br /><em style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Full Collection</em></h2>
          <Link href="/shop" className="btn btn-primary" style={{ padding: '14px 36px' }}>View All Products →</Link>
        </div>
      </section>

    </main>
  )
}