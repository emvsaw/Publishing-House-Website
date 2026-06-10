# 🔒 Redwood Bay Press — Go-Live Security Checklist

A plain-English checklist to keep your website, your readers, and your accounts safe.
No tech background needed. Work through it once when you publish, then revisit the
yearly reminders at the bottom.

*Last updated: 10 June 2026*

---

## First, the reassuring part

Your website is a **static site** — just pages with text and pictures. Think printed
magazine, not bank counter. It has:

- **No database** of customer records to steal
- **No login system** on the public site for anyone to break into
- **No way to pass a virus** to your visitors (it serves pages, not programs)

That removes most of the risk before you start. The serious parts — credit card
payments and encryption — are handled by specialist companies, **not by you**.

---

## ✅ The checklist (do these when you go live)

### 1. Turn on two-factor authentication (2FA) — the most important step
2FA means logging in needs your password **plus** a one-time code from your phone, so a
stolen password alone is useless. Turn it on for all three:

- [ ] **Domain registrar** (wherever you bought redwoodbaypress.com)
- [ ] **Hosting account** (Cloudflare, if we use Path A)
- [ ] **GitHub** (if we use Path A)
- [ ] **MailerLite** (your newsletter — it holds your subscribers' emails)
- [ ] **Your checkout service** (Payhip / Gumroad — once set up)

> Tip: use an authenticator app (e.g. the one built into your phone, or Google
> Authenticator) rather than text-message codes where offered — it's a bit safer.

### 2. Strong, unique passwords
- [ ] A **different** password for each account above (never reuse one)
- [ ] Long is strong: a phrase of 4–5 random words beats a short complex one
- [ ] Consider a password manager (Apple's built-in Passwords app is free and fine)

### 3. The padlock (HTTPS / encryption)
- [ ] Confirm your live site shows the 🔒 padlock in the browser address bar
- With **Cloudflare (Path A)** this is **free, automatic, and self-renewing** — nothing to do but check it's on.

### 4. Payments — let the pros hold the risk
- [ ] Sell direct **only** through a real checkout service (Payhip, Gumroad, Lemon Squeezy)
- [ ] Never build your own payment form or store card numbers — you never should, and with these services you never have to. Customers' card details never touch your site or your Mac.
- [ ] These services also handle **EU VAT on digital goods** for you — important from Germany.

### 5. Privacy & cookie notice (GDPR — matters in the EU)
- [ ] Fill in the site's **Privacy Policy** page (it already exists in the template)
- [ ] Fill in the **Terms** page (also already there)
- [ ] Make sure the privacy policy names your newsletter provider (MailerLite) and checkout provider
- [ ] Add a simple cookie/consent notice if you add any analytics later
- *Ask Claude to tailor these pages for you — it only takes a few minutes.*

### 6. Keep your backups (you get these for free)
- [ ] Your whole site lives in this folder on your Mac **and** in your GitHub account (Path A) = two copies automatically
- [ ] Time Machine or any Mac backup covers the local copy
- [ ] Nothing here is irreplaceable — if anything breaks, we just re-publish

---

## 🔁 A few times a year

- [ ] Check the domain hasn't lapsed (turn on **auto-renew** so it can't expire)
- [ ] Glance at your hosting/domain accounts for any login alerts you didn't make
- [ ] Make sure 2FA is still on everywhere (it doesn't turn itself off, but worth a peek)

---

## 🆘 If something ever looks wrong

Don't panic, and don't start deleting things. Just tell Claude what you're seeing in
plain words ("a login alert I didn't make", "the padlock is gone", "a page looks
changed"). Because you have backups and the payment data was never yours to lose, almost
anything can be fixed by re-publishing or resetting a password.

---

### Who holds what (so you always know where your data lives)

| Thing | Who keeps it safe | Your job |
|---|---|---|
| Credit card payments | Payhip / Gumroad (checkout service) | Nothing — never touch card data |
| Subscriber emails | MailerLite | Strong password + 2FA |
| The website pages | Cloudflare + GitHub + your Mac | Strong password + 2FA |
| Your domain name | Your registrar | Auto-renew + 2FA |

**Bottom line:** the scariest data isn't yours to guard. Protect your handful of
accounts with 2FA and strong passwords, keep the domain on auto-renew, and you've
covered the real risks.
