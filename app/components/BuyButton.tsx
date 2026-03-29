// ================================================================
// FILE LOCATION: C:\dev\healvana\app\components\BuyButton.tsx
// ================================================================

'use client'

import { useState } from 'react'

interface BuyButtonProps {
  productId: string
  label?: string
  loadingLabel?: string
  className?: string
  style?: React.CSSProperties
}

export default function BuyButton({
  productId,
  label = 'Buy Now →',
  loadingLabel = 'Opening checkout...',
  className = 'btn btn-gold',
  style = {},
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuy = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'No checkout URL returned')
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', width: style.width === '100%' ? '100%' : 'auto' }}>
      <button
        onClick={handleBuy}
        disabled={loading}
        className={className}
        style={{
          ...style,
          opacity: loading ? 0.8 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: 14, height: 14,
              border: '2px solid rgba(255,255,255,0.35)',
              borderTopColor: 'white',
              borderRadius: '50%',
              animation: 'healvana-spin 0.7s linear infinite',
            }} />
            {loadingLabel}
          </span>
        ) : label}
      </button>

      {error && (
        <p style={{ color: '#e05252', fontSize: '0.78rem', margin: 0, textAlign: 'center' }}>
          {error}
        </p>
      )}

      <style>{`
        @keyframes healvana-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}