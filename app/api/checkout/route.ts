// ================================================================
// FILE LOCATION: C:\dev\healvana\app\api\checkout\route.ts
// (Replace your existing checkout route with this)
// ================================================================

import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PRODUCTS: Record<string, { name: string; description: string; amount: number }> = {
  'dopamine-reset': {
    name: '7-Day Dopamine Reset Protocol',
    description: 'A structured 7-day system to restore your natural dopamine baseline.',
    amount: 2999,
  },
  'natural-oils': {
    name: 'Natural Oils Bible',
    description: '50+ natural oils — healing properties, application methods, and protocols.',
    amount: 2799,
  },
  'natural-salts': {
    name: 'Natural Salts & Minerals Bible',
    description: '20+ salts and minerals — bath rituals, dietary guides, and deficiency protocols.',
    amount: 2799,
  },
  'natural-fruits': {
    name: 'Sacred Fruits & Botanicals Bible',
    description: "Nature's most powerful healing fruits — ancient preparation methods and modern protocols.",
    amount: 2799,
  },
  'bundle-all': {
    name: 'Healvana Complete Bundle — All 4 Guides',
    description: 'Every Healvana digital guide in one purchase.',
    amount: 5999,
  },
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const productId = body?.productId as string

    if (!productId || !PRODUCTS[productId]) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const product = PRODUCTS[productId]
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      // ← Goes to download page, not thanks page
      success_url: `${baseUrl}/download?product=${productId}`,
      cancel_url: `${baseUrl}/shop`,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      metadata: { productId },
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Could not create checkout session' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Checkout failed. Please try again.' }, { status: 500 })
  }
}