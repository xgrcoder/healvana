// ================================================================
// FILE LOCATION: C:\dev\healvana\app\api\checkout\route.ts
// ================================================================

import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PRODUCTS: Record<string, { name: string; description: string; amount: number }> = {
  'dopamine-reset': {
    name: '7-Day Dopamine Reset Protocol',
    description: 'A structured 7-day system to restore your natural dopamine baseline and reclaim deep focus.',
    amount: 2999, // £29.99
  },
  'natural-oils': {
    name: 'Natural Oils Bible',
    description: '50+ natural oils — healing properties, application methods, and full usage protocols.',
    amount: 2799, // £27.99
  },
  'natural-salts': {
    name: 'Natural Salts & Minerals Bible',
    description: '20+ salts and minerals — bath rituals, dietary guides, and mineral deficiency protocols.',
    amount: 2799, // £27.99
  },
  'natural-fruits': {
    name: 'Sacred Fruits & Botanicals Bible',
    description: "Nature's most powerful fruits and botanicals — compounds science is only beginning to understand.",
    amount: 2799, // £27.99
  },
  'bundle-all': {
    name: 'Healvana Complete Bundle — All 4 Guides',
    description: 'Every Healvana digital guide in one purchase. Save over £50.',
    amount: 5999, // £59.99
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
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/thanks?product=${productId}`,
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