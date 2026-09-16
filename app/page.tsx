import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButtons from '@/components/CTAButtons'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SERVICE_AREAS, SITE_URL } from '@/lib/business'
import { SERVICES } from '@/lib/services'
import { homePageGraph } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Car Locksmith Dubai | Car Key Service & Repair | +971 52 642 6161',
  description:
    'Professional car locksmith services in Dubai. Car key service, repair, replacement and programming. Mobile service across all Dubai areas. Call +971 52 642 6161.',
  alternates: { canonical: SITE_URL + '/' },
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const HOME_FAQS = [
  {
    question: 'Where can I get a car key repaired in Dubai?',
    answer:
      'Car Locksmith Dubai provides mobile car key repair across all areas of Dubai including Downtown, Marina, Jumeirah, Business Bay and 30+ more neighbourhoods. Our technicians come to your location. Call +971 52 642 6161 or WhatsApp for immediate assistance.',
  },
  {
    question: 'What should I do if I lose my car keys in Dubai?',
    answer:
      'Stay with your vehicle if it is safe to do so. Contact Car Locksmith Dubai immediately. Have your Emirates ID and vehicle registration card (Mulkiya) ready. Our mobile technician will verify ownership then cut and programme a new key on-site — no towing required.',
  },
  {
    question: 'Can a damaged car key be repaired?',
    answer:
      'Yes, in many cases. Broken key shells, cracked casings, faulty remote buttons, and flat key fob batteries can often be repaired without a full replacement. Our technician will assess whether repair is possible for your specific key type.',
  },
  {
    question: 'Can a locksmith replace a car key in Dubai?',
    answer:
      'Yes. A professional automotive locksmith with the right programming equipment can cut and programme a new key on-site for most vehicles — even without an original key. Emirates ID and Mulkiya are required to verify ownership before the work begins.',
  },
  {
    question: 'What information is needed for a car key replacement in Dubai?',
    answer:
      'You will need your Emirates ID or valid passport, your vehicle registration card (Mulkiya), and you must be present with the vehicle. The technician uses these documents to verify ownership and to identify the correct key specification for your car.',
  },
  {
    question: 'How quickly can a car locksmith reach me in Dubai?',
    answer:
      'Response times vary by location and traffic. Our mobile service covers all Dubai areas. Call +971 52 642 6161 and we will give you an estimated arrival time for your specific location.',
  },
  {
    question: 'Do you cover all areas of Dubai?',
    answer:
      'Yes. Car Locksmith Dubai covers 30+ areas including Downtown Dubai, Dubai Marina, JBR, Business Bay, Palm Jumeirah, Jumeirah, Deira, Bur Dubai, Al Barsha, Mirdif, JVC, JLT, DIFC, Dubai Silicon Oasis, and many more. Call to confirm your area.',
  },
  {
    question: 'What types of car keys can you cut and programme?',
    answer:
      'We service standard metal keys, transponder chip keys, remote key fobs, flip keys, and smart proximity keys for most vehicle brands sold in the UAE including Toyota, Nissan, Honda, Hyundai, Kia, BMW, Mercedes-Benz, Audi and others.',
  },
]

const HOW_TO_STEPS = [
  {
    name: 'Call or WhatsApp',
    text: 'Contact Car Locksmith Dubai by phone or WhatsApp on +971 52 642 6161. Tell us your vehicle make, model and current location in Dubai.',
    url: SITE_URL + '/contact/',
  },
  {
    name: 'We Come to You',
    text: 'A mobile technician is dispatched to your location anywhere in Dubai, fully equipped for key cutting, programming or repair on-site.',
    url: SITE_URL + '/areas/',
  },
  {
    name: 'Service Completed On-Site',
    text: 'Your car key is cut, repaired or programmed on-site and tested on your vehicle. No towing, no dealership delays.',
    url: SITE_URL,
  },
]

const TRUST_ITEMS = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: '24/7 Mobile Service',
    description: 'Mobile units covering all Dubai areas around the clock',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'Ownership Verified',
    description: 'Emirates ID and Mulkiya checked before every job',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Professional Tools',
    description: 'Specialist equipment for all key types and vehicles',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: '30+ Areas Covered',
    description: 'Full service coverage across Dubai neighbourhoods',
  },
]

const FEATURED_AREAS = SERVICE_AREAS.slice(0, 16)

export default function HomePage() {
  const schemaGraph = homePageGraph({
    faqs: HOME_FAQS,
    services: SERVICES.map((s) => ({ name: s.title, url: s.href, description: s.description })),
    howToSteps: HOW_TO_STEPS,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 1px,transparent 60px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Mobile Car Locksmith · Dubai, UAE
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 font-display leading-[1.05] tracking-tight"
            >
              Car Key
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg,#D4AF37 0%,#C9A84C 50%,#A07828 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Service &amp; Repair
              </span>
              <br />
              <span className="text-zinc-300">in Dubai</span>
            </h1>

            {/* speakable class for SpeakableSpecification CSS selector */}
            <p
              id="hero-description"
              className="speakable text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed"
            >
              Car Locksmith Dubai provides professional mobile car key services across all Dubai
              areas. Key cutting, repair, replacement and programming — our technicians come to
              your location. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">
                {BUSINESS.phoneDisplay}
              </a>{' '}
              for immediate assistance.
            </p>

            <CTAButtons size="lg" />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
              {['24/7 Mobile Service', 'All Dubai Areas', 'On-Site Key Programming'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-zinc-500 text-sm">
                  <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-[#111111] border-y border-zinc-800" aria-label="Trust signals">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm font-display">{item.title}</p>
                  <p className="text-zinc-500 text-xs mt-0.5 leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 md:py-24" aria-labelledby="services-heading" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-black text-white font-display mb-4"
            >
              Car Key Services in Dubai
            </h2>
            <p id="service-intro" className="speakable text-zinc-400 max-w-xl mx-auto">
              From a simple spare key to a full replacement with programming —{' '}
              <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">
                car key service
              </Link>
              ,{' '}
              <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                repair
              </Link>
              ,{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                replacement
              </Link>{' '}
              and{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                programming
              </Link>{' '}
              handled on-site across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} featured={index === 0} />
            ))}
            {/* Car lockout — inline */}
            <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
              <div className="w-11 h-11 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-white mb-2 font-display">Car Lockout Service</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Locked out of your vehicle? Our technicians provide safe, non-destructive car
                unlocking across{' '}
                <Link href="/areas/" className="text-brand-gold hover:underline">
                  all Dubai areas
                </Link>{' '}
                using specialist tools that protect your vehicle.
              </p>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-brand-gold transition-colors">
                Call for assistance
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        className="py-16 md:py-24 bg-[#0D0D0D] border-y border-zinc-900"
        aria-labelledby="process-heading"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">Simple Process</p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-black text-white font-display">
              How to Get Car Key Help in Dubai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_TO_STEPS.map((step, i) => (
              <div key={step.name} className="relative flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-5">
                  <span className="text-brand-gold font-black text-xl font-display">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-display">{step.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>

      {/* ─── CAR KEY SERVICE OVERVIEW ─── */}
      <section className="py-16 md:py-24" aria-labelledby="key-service-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">
                Car Key Service
              </p>
              <h2 id="key-service-heading" className="text-3xl md:text-4xl font-black text-white font-display mb-5">
                Car Key Cutting &amp; Duplication in Dubai
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-5">
                Whether you need a spare key or a full replacement, our{' '}
                <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline font-medium">
                  mobile car key service
                </Link>{' '}
                carries the equipment to cut and programme keys for most vehicle makes and
                models — Japanese, Korean, European and American cars sold in the UAE.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  { text: 'Standard metal key cutting', link: null },
                  { text: 'Transponder chip keys', link: '/car-key-programming-dubai/' },
                  { text: 'Remote key fob duplication', link: '/car-key-service-dubai/' },
                  { text: 'Smart & proximity keys', link: '/car-key-programming-dubai/' },
                  { text: 'On-site — no towing required', link: '/areas/' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    {item.link ? (
                      <Link href={item.link} className="hover:text-brand-gold transition-colors">
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/car-key-service-dubai/"
                className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold-light transition-colors"
              >
                Full car key service details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Need a car key?</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    Call or WhatsApp us with your vehicle and location. We cover all{' '}
                    <Link href="/areas/" className="text-brand-gold hover:underline">
                      Dubai areas
                    </Link>
                    .
                  </p>
                  <CTAButtons size="md" layout="column" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAR KEY REPAIR OVERVIEW ─── */}
      <section className="py-16 md:py-24 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="repair-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-7 space-y-4">
                {[
                  { label: 'Broken key shell', desc: 'Cracked casing replaced, original chip preserved' },
                  { label: 'Faulty remote buttons', desc: 'Unresponsive lock/unlock buttons repaired' },
                  { label: 'Key fob battery', desc: 'Quick on-site battery replacement' },
                  { label: 'Worn key blade', desc: 'Re-cut to original specification where possible' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 pb-4 border-b border-zinc-800/60 last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{item.label}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">Car Key Repair</p>
              <h2 id="repair-heading" className="text-3xl md:text-4xl font-black text-white font-display mb-5">
                Repair Before You Replace
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                A damaged key does not always need replacing. Our{' '}
                <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline font-medium">
                  car key repair service
                </Link>{' '}
                assesses broken shells, unresponsive remotes, worn blades and transponder faults —
                often resolving the issue on-site at lower cost than a full{' '}
                <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                  replacement
                </Link>
                .
              </p>
              <Link
                href="/car-key-repair-dubai/"
                className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold-light transition-colors"
              >
                Full car key repair details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / ENTITY SECTION (for AI/LLM indexing) ─── */}
      <section className="py-16 md:py-20" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="about-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                About Car Locksmith Dubai
              </h2>
              <p className="speakable text-zinc-400 leading-relaxed mb-5">
                Car Locksmith Dubai is a professional automotive locksmith service operating across
                Dubai, United Arab Emirates. We specialise in car key cutting, repair, replacement
                and programming for all major vehicle brands. Our mobile technicians carry
                specialist equipment and come to your location — whether at home, work or
                roadside anywhere in Dubai.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-5">
                Our shop is based in{' '}
                <Link href="/areas/" className="text-brand-gold hover:underline">
                  Al Bada&apos;a, Dubai
                </Link>
                , with mobile coverage extending to{' '}
                <Link href="/areas/" className="text-brand-gold hover:underline">
                  30+ Dubai neighbourhoods
                </Link>
                . We handle everything from basic key duplication to advanced{' '}
                <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                  transponder and smart key programming
                </Link>
                .
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                In Dubai, a car key replacement requires verified documentation. The Dubai{' '}
                <a
                  href="https://www.rta.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  Roads and Transport Authority (RTA)
                </a>{' '}
                issues the vehicle registration card (Mulkiya) which our technicians must verify,
                along with your Emirates ID, before any key is programmed to your vehicle.
              </p>
              {/* Internal content links for SEO */}
              <nav aria-label="Service quick links" className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="text-xs px-3 py-1.5 bg-zinc-800/80 hover:bg-brand-gold/10 border border-zinc-700 hover:border-brand-gold/30 text-zinc-400 hover:text-brand-gold rounded-full transition-all"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/areas/"
                  className="text-xs px-3 py-1.5 bg-zinc-800/80 hover:bg-brand-gold/10 border border-zinc-700 hover:border-brand-gold/30 text-zinc-400 hover:text-brand-gold rounded-full transition-all"
                >
                  Service Areas
                </Link>
              </nav>
            </div>

            {/* External authority links — builds trust with AI systems */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg font-display">Useful Resources</h3>
              <p className="text-zinc-500 text-sm mb-4">
                Authoritative UAE sources relevant to car key services and vehicle documentation.
              </p>
              {[
                {
                  name: 'Roads and Transport Authority (RTA) Dubai',
                  desc: 'Mulkiya vehicle registration and transport services in Dubai',
                  href: 'https://www.rta.ae',
                  label: 'Official UAE government transport authority',
                },
                {
                  name: 'Dubai Police',
                  desc: 'For reporting stolen vehicle keys or vehicles in Dubai',
                  href: 'https://www.dubaipolice.gov.ae',
                  label: 'Official Dubai Police website',
                },
                {
                  name: 'UAE Government Portal',
                  desc: 'Vehicle-related services, residency, and Emirates ID information',
                  href: 'https://u.ae',
                  label: 'Official UAE Government services portal',
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-zinc-700 transition-colors">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-brand-gold transition-colors">{link.name}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{link.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-16 md:py-24 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">Coverage</p>
            <h2 id="areas-heading" className="text-3xl md:text-4xl font-black text-white font-display mb-3">
              Car Locksmith Service Areas in Dubai
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto text-sm">
              Mobile car locksmith covering 30+ Dubai areas. All service types available at your location.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {FEATURED_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-3 py-2.5 bg-[#111111] border border-zinc-800 rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/areas/"
              className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-brand-gold-light transition-colors"
            >
              View all 34 service areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ (AEO / AI Overview target) ─── */}
      <section className="py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-brand-gold text-sm font-medium uppercase tracking-widest mb-3">Common Questions</p>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-white font-display mb-4">
                Car Key FAQ
              </h2>
              <p className="speakable text-zinc-400 leading-relaxed mb-6">
                Answers to the most common questions about{' '}
                <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">
                  car key service
                </Link>
                ,{' '}
                <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                  repair
                </Link>{' '}
                and{' '}
                <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                  lost keys in Dubai
                </Link>
                .
              </p>
              <CTAButtons size="md" layout="column" />
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion items={HOME_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERNAL LINK HUB ─── */}
      <section className="py-12 bg-[#0D0D0D] border-t border-zinc-900" aria-label="All car key services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedServices limit={5} title="All Car Key Services in Dubai" />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="final-cta-heading">
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/8 via-transparent to-brand-gold/5" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
            <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-black text-white font-display mb-4">
              Need a Car Locksmith in Dubai?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Call or WhatsApp{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-bold hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
              . Mobile service across all Dubai areas.
            </p>
            <CTAButtons size="lg" className="justify-center" />
            <p className="text-zinc-600 text-sm mt-5">
              <Link href="/areas/" className="hover:text-zinc-500 transition-colors">{BUSINESS.addressDisplay}</Link>
              {' · '}Shop: {BUSINESS.hours.shop}
              {' · '}Mobile: {BUSINESS.hours.mobile}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
