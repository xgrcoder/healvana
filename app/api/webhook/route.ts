// ================================================================
// FILE LOCATION: C:\dev\healvana\app\api\webhook\route.ts
//
// SETUP STEPS:
// 1. npm install resend
// 2. Sign up at resend.com (free — 3,000 emails/month)
// 3. Add to .env.local:
//    RESEND_API_KEY=re_xxxxxxxxxxxx
//    STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
// 4. In Stripe Dashboard → Webhooks → Add endpoint:
//    URL: https://www.healvana.co.uk/api/webhook
//    Event: checkout.session.completed
// 5. Upload your PDFs to: public/downloads/ folder
// ================================================================

import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

// Map product IDs to their download files and names
const PRODUCT_MAP: Record<string, {
  name: string
  filename: string
  description: string
  emoji: string
}> = {
  'dopamine-reset': {
    name: '7-Day Dopamine Reset Protocol',
    filename: 'healvana-dopamine-reset.pdf',
    description: 'Your complete 7-day protocol for restoring focus and reclaiming your mind.',
    emoji: '🧠',
  },
  'natural-oils': {
    name: 'Natural Oils Bible',
    filename: 'healvana-natural-oils-bible.pdf',
    description: '50+ natural oils — healing properties, application protocols, and dosage guides.',
    emoji: '🌿',
  },
  'natural-salts': {
    name: 'Natural Salts & Minerals Bible',
    filename: 'healvana-natural-salts.pdf',
    description: 'Every salt and mineral your body needs — bath rituals, dietary protocols, and more.',
    emoji: '💎',
  },
  'natural-fruits': {
    name: 'Sacred Fruits & Botanicals Bible',
    filename: 'healvana-sacred-fruits.pdf',
    description: "Nature's most powerful healing fruits — preparation methods, protocols, and ancient wisdom.",
    emoji: '🍇',
  },
  'bundle-all': {
    name: 'Healvana Complete Bundle',
    filename: '', // handled specially below
    description: 'All four Healvana guides — complete access to the full knowledge library.',
    emoji: '🌍',
  },
}

const BUNDLE_FILES = [
  'healvana-dopamine-reset.pdf',
  'healvana-natural-oils-bible.pdf',
  'healvana-natural-salts.pdf',
  'healvana-sacred-fruits.pdf',
]

function getDownloadUrl(filename: string): string {
  const base = process.env.NEXT_PUBLIC_URL || 'https://www.healvana.co.uk'
  return `${base}/downloads/${filename}`
}

function buildEmailHtml(
  customerName: string,
  productName: string,
  emoji: string,
  description: string,
  downloadLinks: Array<{ name: string; url: string }>
): string {
  const linkRows = downloadLinks.map(({ name, url }) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #c8e4d4;">
        <a href="${url}" style="
          display: inline-block;
          background: linear-gradient(135deg, #1a4a2e, #2d6b45);
          color: white;
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 100px;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: bold;
        ">⬇ Download ${name}</a>
      </td>
    </tr>
  `).join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f2eb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f2eb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a4a2e,#2d6b45,#1e6fa8);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
            <div style="font-size:48px;margin-bottom:12px;">${emoji}</div>
            <h1 style="color:white;margin:0 0 8px;font-size:28px;font-weight:600;font-family:Georgia,serif;">
              Your Guide is Ready
            </h1>
            <p style="color:rgba(255,255,255,0.7);margin:0;font-size:15px;">
              Thank you for your purchase, ${customerName || 'there'}.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:white;padding:36px 40px;">
            <h2 style="color:#1a4a2e;margin:0 0 8px;font-size:20px;font-family:Georgia,serif;">
              ${productName}
            </h2>
            <p style="color:#526659;margin:0 0 28px;font-size:14px;line-height:1.7;">
              ${description}
            </p>

            <div style="background:#eaf8f0;border:1px solid #a8e0bc;border-radius:12px;padding:24px;margin-bottom:28px;">
              <p style="color:#1a4a2e;font-weight:bold;margin:0 0 16px;font-size:14px;">
                📥 Your Download${downloadLinks.length > 1 ? 's' : ''}
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${linkRows}
              </table>
            </div>

            <div style="background:#fdf6e0;border-left:3px solid #c49a3c;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:24px;">
              <p style="color:#6b4a1a;margin:0;font-size:13px;line-height:1.6;">
                <strong>📌 Save your guide</strong> — download it to your phone, tablet, or computer so you always have it. 
                The link will remain active, but we recommend saving a copy.
              </p>
            </div>

            <h3 style="color:#1a4a2e;margin:0 0 12px;font-size:15px;">What Happens Next</h3>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${['Download your guide using the button above', 'Read the introduction first — it sets the context', 'Choose your starting protocol and begin tonight', 'Apply consistently — results come with repetition'].map((step, i) => `
                <tr>
                  <td style="padding:6px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px;vertical-align:top;padding-top:2px;">
                          <div style="width:20px;height:20px;border-radius:50%;background:#a8e0bc;color:#1a4a2e;font-size:10px;font-weight:bold;text-align:center;line-height:20px;">${i + 1}</div>
                        </td>
                        <td style="color:#526659;font-size:14px;line-height:1.5;">${step}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              `).join('')}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#1a4a2e;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="color:white;margin:0 0 4px;font-size:18px;font-family:Georgia,serif;">Healvana</p>
            <p style="color:rgba(255,255,255,0.5);margin:0 0 12px;font-size:12px;font-style:italic;">
              Heal yourself, the way nature intended.
            </p>
            <p style="color:rgba(255,255,255,0.35);margin:0;font-size:11px;">
              Questions? Email <a href="mailto:support@healvana.com" style="color:#a8e0bc;">support@healvana.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}

export async function POST(req: Request) {
  const body = await req.text()
  const sig  = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

// AFTER
const session = event.data.object as Stripe.Checkout.Session
  const productId   = session.metadata?.productId as string
  const customerEmail = session.customer_details?.email
  const customerName  = session.customer_details?.name?.split(' ')[0] || ''

  if (!customerEmail || !productId) {
    console.error('Missing email or productId', { customerEmail, productId })
    return NextResponse.json({ error: 'Missing data' }, { status: 400 })
  }

  const product = PRODUCT_MAP[productId]
  if (!product) {
    console.error('Unknown productId:', productId)
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
  }

  // Build download links
  const downloadLinks = productId === 'bundle-all'
    ? BUNDLE_FILES.map((f, i) => ({
        name: ['Dopamine Reset', 'Natural Oils Bible', 'Salts & Minerals', 'Sacred Fruits'][i],
        url: getDownloadUrl(f),
      }))
    : [{ name: product.name, url: getDownloadUrl(product.filename) }]

  // Send email via Resend
  try {
    await resend.emails.send({
      from: 'Healvana <noreply@healvana.co.uk>',
      to: customerEmail,
      subject: `Your Healvana guide is ready — ${product.name}`,
      html: buildEmailHtml(
        customerName,
        product.name,
        product.emoji,
        product.description,
        downloadLinks
      ),
    })
    console.log(`✅ Email sent to ${customerEmail} for ${productId}`)
  } catch (err) {
    console.error('Failed to send email:', err)
    // Don't return error — payment succeeded, log and handle manually
  }

  return NextResponse.json({ success: true })
}